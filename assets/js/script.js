// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startButton = document.getElementById('btn-start');
var quizCon = document.getElementById('question-container');
var timerEl = document.getElementById('timer')
var time = 100;
var timerId;
var questionIndex = 0;
var questionEl = document.getElementById('question-text')
var choicesCon = document.getElementById('choices')

// TODO: Create questions and answers array
var questions = [
    {
        question: 'Who invented the light bulb?',
        choices: ['Edison', 'Einstein', 'Tesla', 'Graham-Bell'],
        answer: 'Edison'
    },
    {
        question: 'Who won the first Super Bowl?',
        choices: ['Browns', 'Chiefs', 'Packers', 'Bears'],
        answer: 'Packers'
    },
    {
        question: 'What is the capital of Florida?',
        choices: ['Daytona', 'Tallahassee', 'Miami', 'Key west'],
        answer: 'Tallahassee'
    },
    {
        question: 'Who was the 16th President?',
        choices: ['Adams', 'Buchanan', 'Taylor', 'Lincoln'],
        answer: 'Lincoln'
    },
    
]

// TODO: Create a time function 
function timeTick(){
    time=time-1;
    timerEl.textContent = time
    if (time === 0)
    {
        
    };

// -- reduces the time by an increment using setInterval method
// -- if time === 0 then end quiz
}


// TODO: Create Start Quiz function
function startQuiz(){
    timerId = setInterval(timeTick, 1000)
    timerEl.textContent = time
    startButton.setAttribute('class', 'hide');
    quizCon.removeAttribute('class');
    getQuestions();

};
// -- get the first question 

function getQuestions(){
    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;
    var choices = currentQuestion.choices
    choicesCon.innerHTML = ''
    choices.forEach(choice => {
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = choice;
        choiceBtn.setAttribute('class', 'card');
        choiceBtn.onclick = choiceClick
        choicesCon.appendChild(choiceBtn);
    });
}
function choiceClick(){
    if(this.textContent != questions[questionIndex].answer){
        time-=15;
        timerEl.textContent = time
    }
    // End game function ***** START HERE*****
    /* if(questionIndex)*/
     questionIndex ++ 
    getQuestions()
}

startButton.addEventListener('click', function(e){
e.preventDefault()
startQuiz()
});
// -- start interval for time function 
// -- unhide quizCon using remove attribute method



// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score