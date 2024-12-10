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
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            options.forEach((option, index) => {
                option.textContent = currentQuestion.answers[index];
                option.onclick = () => checkAnswer(option.textContent);
            });
            feedbackElement.textContent = '';
            feedbackElement.className = '';
        } else {
            displayFinalMessage();
        }
    }

    function checkAnswer(answer) {
        const currentQuestion = questions[currentQuestionIndex];
        if (answer === currentQuestion.correct) {
            feedbackElement.textContent = 'Correct!';
            feedbackElement.className = 'correct';
            score++;
        } else {
            feedbackElement.textContent = 'Try Again!';
            feedbackElement.className = 'incorrect';
        }
    }

    function displayFinalMessage() {
        questionElement.textContent = `Quiz Complete! Your score: ${score}/${questions.length}`;
        options.forEach(option => option.style.display = 'none');
        nextButton.style.display = 'none';
        feedbackElement.textContent = '';
    }

    nextButton.onclick = () => {
        currentQuestionIndex++;
        loadQuestion();
    };

    loadQuestion();
});
