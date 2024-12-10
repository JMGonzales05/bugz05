document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.option');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next');

    const questions = [
        {
            question: 'Which planet is known as the Red Planet?',
            answers: ['Earth', 'Mars', 'Jupiter'],
            correct: 'Mars'
        },
        {
            question: 'What is the largest planet in our solar system?',
            answers: ['Earth', 'Jupiter', 'Saturn'],
            correct: 'Jupiter'
        },
        {
            question: 'What is the closest planet to the Sun?',
            answers: ['Venus', 'Mercury', 'Mars'],
            correct: 'Mercury'
        }
    ];

    let currentQuestionIndex = 0;

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        options.forEach((option, index) => {
            option.textContent = currentQuestion.answers[index];
            option.onclick = () => checkAnswer(option.textContent);
        });
        feedbackElement.textContent = '';
        feedbackElement.className = '';
    }

    function checkAnswer(answer) {
        const currentQuestion = questions[currentQuestionIndex];
        if (answer === currentQuestion.correct) {
            feedbackElement.textContent = 'Correct!';
            feedbackElement.className = 'correct';
        } else {
            feedbackElement.textContent = 'Try Again!';
            feedbackElement.className = 'incorrect';
        }
    }

    nextButton.onclick = () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    };

    loadQuestion();
});


