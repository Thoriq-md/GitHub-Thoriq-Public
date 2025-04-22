// Fungsi untuk menyimpan data pendaftaran ke localStorage
function submitForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const event = document.getElementById("event").value; // Ambil event dari dropdown
    const ticketCount = parseInt(document.getElementById("ticketCount").value);

    // Validasi input
    if (!fullName || !email || !event || isNaN(ticketCount) || ticketCount <= 0) {
        alert("Mohon isi semua data dengan lengkap, dan tiket harus lebih dari 0!");
        return; // Batalkan proses jika input tidak valid
    }

    // Buat objek data pendaftaran
    const registrationData = {
        fullName,
        email,
        event,
        ticketCount,
        totalPrice: ticketCount * 75000, // Harga per tiket Rp 75.000
    };

    // Ambil data lama dari localStorage (atau inisialisasi array kosong jika belum ada)
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    // Tambahkan data baru ke array
    registrations.push(registrationData);

    // Simpan kembali ke localStorage
    localStorage.setItem("registrations", JSON.stringify(registrations));

    alert("Pendaftaran berhasil!");
    window.location.href = "summary.html"; // Arahkan ke halaman ringkasan
}

// Fungsi untuk memformat angka ke format Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    }).format(amount);
}

// Fungsi untuk menampilkan semua data pendaftaran dan menghitung total
function displaySummary() {
    const registrations = JSON.parse(localStorage.getItem("registrations")) || []; // Ambil data dari localStorage

    const tableBody = document.getElementById("summaryTableBody");
    tableBody.innerHTML = ""; // Kosongkan tabel untuk mencegah data duplikat

    // Variabel untuk menghitung total tiket dan pendapatan
    let ticketCounts = {
        NeoRhythm: 0,
        NeoArt: 0,
        NeoTech: 0,
        NeoTaste: 0,
        NeoPreneur: 0,
    };
    let totalRevenue = 0;

    // Proses data pendaftaran jika ada
    if (registrations.length > 0) {
        registrations.forEach((data) => {
            // Tambahkan baris ke tabel
            const row = `
                <tr>
                    <td>${data.fullName}</td>
                    <td>${data.email}</td>
                    <td>${data.event}</td>
                    <td>${data.ticketCount}</td>
                    <td>${formatRupiah(data.totalPrice)}</td>
                </tr>
            `;
            tableBody.innerHTML += row;

            // Tambahkan total pendapatan
            totalRevenue += data.totalPrice;

            // Hitung tiket terjual berdasarkan nama event
            if (ticketCounts.hasOwnProperty(data.event)) {
                ticketCounts[data.event] += data.ticketCount;
            } else {
                console.error(`Event tidak dikenali: ${data.event}`);
            }
        });
    } else {
        // Tampilkan pesan jika tidak ada data
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-danger text-center">Data tidak ditemukan</td>
            </tr>
        `;
    }

    // Tampilkan informasi tiket terjual per event dan total pendapatan
    document.getElementById("event1Tickets").innerText = `NeoRhythm: ${ticketCounts["NeoRhythm"]} tiket`;
    document.getElementById("event2Tickets").innerText = `NeoArt: ${ticketCounts["NeoArt"]} tiket`;
    document.getElementById("event3Tickets").innerText = `NeoTech: ${ticketCounts["NeoTech"]} tiket`;
    document.getElementById("event4Tickets").innerText = `NeoTaste: ${ticketCounts["NeoTaste"]} tiket`;
    document.getElementById("event5Tickets").innerText = `NeoPreneur: ${ticketCounts["NeoPreneur"]} tiket`;
    document.getElementById("totalRevenue").innerText = formatRupiah(totalRevenue);
}

// Fungsi untuk menghapus semua data pendaftaran dari localStorage
function clearData() {
    localStorage.removeItem("registrations"); // Hapus data dari localStorage
    alert("Semua data berhasil dihapus!");
    displaySummary(); // Perbarui tampilan setelah data dihapus
}