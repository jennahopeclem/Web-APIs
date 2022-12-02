var startPageEl = document.querySelector("#start-page");
var quizPageEl = document.querySelector("#quiz-page");
var scorePageEl = document.querySelector("#high-score-page");

var startButtonEl = startPageEl.querySelector("button");

var questionEl = document.querySelector("#question");
var answerButtons = document.querySelectorAll("#answers-button");

var questionIndex = 0;

var questions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        answers: ['javascript', 'scripting', 'js', 'script'],
        correctAnswer: 'script'
    },
    {
        question: 'How do you create a function?',
        answers: ['function:myFunction()', 'function=(myFunction);', 'myFunction():function', 'function myFunction()'],
        correctAnswer: 'script'
    },
    {
        question: 'Q3',
        answers: ['javascript', 'scripting', 'js', 'script'],
        correctAnswer: 'script'
    },
    {
        question: 'Q3',
        answers: ['javascript', 'scripting', 'js', 'script'],
        correctAnswer: 'script'
    },
    {
        question: 'Q4',
        answers: ['javascript', 'scripting', 'js', 'script'],
        correctAnswer: 'script'
    },
]

// questionEl.textContent = questions[0].question;
// for (var i = 0; i < questions[0].answers.length; i += 1) {
//     var answer = questions[0].answers[i];
//     var button = answerButtons[i];
//     button.textContent = answer;
// }

displayQuestion = function () {
    questionEl.textContent = questions[questionIndex].question;
    console.log(questionIndex);
    var answers = questions[questionIndex].answers;
    for (var answerIndex = 0; answerIndex < answers.length; answerIndex += 1) {
        var answer = answers[answerIndex];
        var button = answerButtons[answerIndex];
        // button.textContent = answer;
    }
};


startButtonEl.addEventListener("click", function () {
    startPageEl.hidden = true;
    quizPageEl.hidden = false;
    questionEl.textContent = questions[0].question;
    console.log(event.target);
    displayQuestion(0);
});

