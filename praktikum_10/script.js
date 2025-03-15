let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    if (!guess) {
        message.innerHTML = "Masukkan angka terlebih dahulu!";
        return;
    }

    attempts++;

    if (guess == randomNumber) {
        message.innerHTML = `Selamat! Anda menebak angka yang benar dalam ${attempts} percobaan.`;
        message.style.color = "green";
    } else if (guess < randomNumber) {
        message.innerHTML = "Tebakan terlalu kecil! Coba lagi.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Tebakan terlalu besar! Coba lagi.";
        message.style.color = "red";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("message").innerHTML = "";
    document.getElementById("guessInput").value = "";
}