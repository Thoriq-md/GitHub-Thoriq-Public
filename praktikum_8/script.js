document.addEventListener("DOMContentLoaded", function () {
    let carousel = new bootstrap.Carousel(document.getElementById("imageCarousel"), {
        interval: 3000, // Gambar akan berganti setiap 3 detik
        wrap: true
    });
});