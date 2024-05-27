const quizData = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris",
            d: "Lisbon"
        },
        correct: "c",
        link: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "J.K. Rowling",
            c: "Ernest Hemingway",
            d: "Mark Twain"
        },
        correct: "a",
        link: "Harper Lee"
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Mercury",
            d: "Venus"
        },
        correct: "c",
        link: "Mercury"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            if (currentQuestion.answers[letter] === currentQuestion.link) {
                answers.push(
                    `<span class="js-correct">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${questionNumber}" value="${letter}">
                        <label class="form-check-label">
                            ${letter} : ${currentQuestion.answers[letter]}
                        </label>
                    </div>
                    </span>`
                );
            } else {
                answers.push(
                    `<div class="form-check">
                        <input class="form-check-input" type="radio" name="question${questionNumber}" value="${letter}">
                        <label class="form-check-label">
                            ${letter} : ${currentQuestion.answers[letter]}
                        </label>
                    </div>`
                );
            }
        };
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
        console.log(output);
    });
    quizContainer.innerHTML = output.join('');
}


function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;
    

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'red';
            document.querySelectorAll('.js-correct').forEach((correctAnswer) => correctAnswer.classList.add("correct"))
        } else {
            answerContainers[questionNumber].style.color = 'red';
            document.querySelectorAll('.js-correct').forEach((correctAnswer) => correctAnswer.classList.add("correct"))
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizData.length} questions correct.`;
}

document.getElementById('submit').addEventListener('click', showResults);

buildQuiz();
