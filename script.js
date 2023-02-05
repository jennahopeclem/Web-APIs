var startButtonEl = startPageEl.querySelector("start-button");
var submitBtn = document.querySelector("#submit");

var startPageEl = document.querySelector("#start-page");
var quizPageEl = document.querySelector("#quiz-page");
var scorePageEl = document.querySelector("#high-score-page");

var qPrompt = document.querySelector("#qPrompt");
var aButtons = document.querySelectorAll("#answer-buttons");
var finalScore = document.querySelector("#finalscore");

var questionIndex = 0;

var questions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        answers: ['javascript', 'scripting', 'js', 'script'],
        correctAnswer: 'script'
    },
    {
        question: 'How do you create a function?',
        answers: ['myFunction():function', 'function=(myFunction);', 'function:myFunction()', 'function myFunction()'],
        correctAnswer: 'function:myFunction()'
    },
    {
        question: 'What symbols help define a string of text?',
        answers: ['curly brackets', 'quotation marks', 'exclamation points', 'colons'],
        correctAnswer: 'quotation marks'
    },
    {
        question: 'Var is short for what?',
        answers: ['variance', 'varietal', 'variform', 'variable'],
        correctAnswer: 'variable'
    },
    {
        question: 'Which of these is a true loop in Javascript?',
        answers: ['while loop', 'loopty loop', 'fruit loop', 'low loop'],
        correctAnswer: 'while loop'
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
    qPrompt.textContent = questions[0].question;
    console.log(event.target);
    displayQuestion(0);
});

