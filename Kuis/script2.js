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
let score = 0; // Inisialisasi skor

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const choicesList = document.getElementById('choices');
    const feedback = document.getElementById('feedback');
    
    // Reset feedback
    feedback.textContent = '';
    
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    choicesList.innerHTML = '';
    
    question.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => {
            if (choice === question.correct) {
                score += 10; // Tambahkan 10 skor untuk jawaban benar
                feedback.textContent = "Benar! Skor Anda: " + score;
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Salah! Skor Anda tetap: " + score;
                feedback.style.color = "red";
            }

            // Pindah ke soal berikutnya setelah jawaban
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    // Tampilkan hasil akhir
                    document.querySelector('.quiz-container').innerHTML = `
                        <h1>Kuis Selesai! 🎉</h1>
                        <p>Skor Akhir Anda: ${score} dari 100</p>
                    `;
                }
            }, 1000); // Beri jeda 1 detik sebelum pindah soal
        };
        li.appendChild(button);
        choicesList.appendChild(li);
    });
}

// Load the first question
loadQuestion();
