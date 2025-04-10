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

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const choicesList = document.getElementById('choices');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    
    // Reset feedback and button
    feedback.textContent = '';
    nextBtn.disabled = true;
    
    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;
    choicesList.innerHTML = '';
    
    question.choices.forEach(choice => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => {
            if (choice === question.correct) {
                feedback.textContent = "Benar! 😊";
                feedback.style.color = "green";
                nextBtn.disabled = false;
            } else {
                feedback.textContent = "Salah. Coba lagi! 😢";
                feedback.style.color = "red";
            }
        };
        li.appendChild(button);
        choicesList.appendChild(li);
    });
}

document.getElementById('next-btn').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.querySelector('.quiz-container').innerHTML = "<h1>Selamat! Anda telah menyelesaikan kuis! 🎉</h1>";
    }
};



// Load the first question
loadQuestion();
