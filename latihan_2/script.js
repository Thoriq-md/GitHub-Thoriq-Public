const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        choices: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correct: "Jakarta"
    },
    {
        question: "Siapa penemu lampu pijar?",
        choices: ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "Alexander Graham Bell"],
        correct: "Thomas Edison"
    },
    {
        question: "Planet mana yang dikenal sebagai 'Planet Merah'?",
        choices: ["Mars", "Venus", "Jupiter", "Saturnus"],
        correct: "Mars"
    },
    {
        question: "Berapa jumlah provinsi di Indonesia pada 2025?",
        choices: ["34", "38", "40", "35"],
        correct: "38"
    },
    {
        question: "Siapa presiden pertama Republik Indonesia?",
        choices: ["Soeharto", "BJ Habibie", "Ir. Soekarno", "Megawati Soekarnoputri"],
        correct: "Ir. Soekarno"
    },
    {
        question: "Apa nama unsur kimia dengan simbol 'O'?",
        choices: ["Oksigen", "Osmium", "Oganesson", "Oksida"],
        correct: "Oksigen"
    },
    {
        question: "Hewan apa yang dikenal sebagai 'Raja Hutan'?",
        choices: ["Harimau", "Singa", "Gajah", "Serigala"],
        correct: "Singa"
    },
    {
        question: "Siapa yang menulis 'Harry Potter'?",
        choices: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "C.S. Lewis"],
        correct: "J.K. Rowling"
    },
    {
        question: "Apa mata uang Jepang?",
        choices: ["Yen", "Won", "Dollar", "Euro"],
        correct: "Yen"
    },
    {
        question: "Dimana Menara Eiffel berada?",
        choices: ["Paris", "London", "Roma", "Berlin"],
        correct: "Paris"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const choicesList = document.getElementById('choices');
    const scoreContainer = document.getElementById('score');
    const feedback = document.getElementById('feedback');

    feedback.textContent = ''; // Reset feedback
    scoreContainer.textContent = `Skor: ${score}`; // Tampilkan skor terkini

    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    choicesList.innerHTML = '';

    question.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => {
            if (choice === question.correct) {
                score += 10; // Tambahkan skor jika jawaban benar
                feedback.textContent = "Benar! Skor Anda bertambah.";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Salah. Jawaban Anda kurang tepat.";
                feedback.style.color = "red";
            }

            // Alihkan ke soal berikutnya
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    document.querySelector('.quiz-container').innerHTML = `
                        <h1>Selamat! Kuis Selesai 🎉</h1>
                        <p>Skor Akhir Anda: ${score} dari 100</p>
                    `;
                }
            }, 1000); // Beri jeda 1 detik sebelum beralih
        };
        li.appendChild(button);
        choicesList.appendChild(li);
    });
}

// Muat soal pertama
loadQuestion();
