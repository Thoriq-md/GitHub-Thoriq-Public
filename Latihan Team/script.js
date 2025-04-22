// Validasi dan hitung total
function hitungTotal() {
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const total = jumlah * 75000;
    document.getElementById("totalHarga").textContent = `Rp ${total.toLocaleString()}`;
  }
  
  document.getElementById("jumlah").addEventListener("input", hitungTotal);
  
  document.getElementById("formDaftar").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const event = document.getElementById("event").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);
  
    if (!nama || !email || !event || !jumlah) {
      alert("Harap isi semua field!");
      return;
    }
  
    const total = jumlah * 75000;
    const data = { nama, email, event, jumlah, total };
  
    localStorage.setItem("pendaftaran", JSON.stringify(data));
    window.location.href = "summary.html";
  });
  