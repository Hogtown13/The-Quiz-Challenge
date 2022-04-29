// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var startButton = document.getElementById('btn-start');
var highScore = document.getElementById('btn-high');
var quizCon = document.getElementById('question-container');
var timerEl = document.getElementById('timer');
var time = 100;
var timerId;
var questionIndex = 0;
var questionEl = document.getElementById('question-text');
var choicesCon = document.getElementById('choices');
var submitCon = document.getElementById('submit');
var submitBtn = document.getElementById('submit-btn')
var initialInput = document.getElementById('initials')
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
        endGame()
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
    highScore.setAttribute('class', 'hide');
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
    questionIndex++ 
    if(questionIndex  === questions.length) {
        endGame()
    } else {
        getQuestions()
    }
}
function endGame() {
    quizCon.setAttribute('class', 'hide');
    submitCon.removeAttribute('class');
    highScore.removeAttribute('class');// Cant get highscore to show with style???????
    clearInterval(timerId);
    
};
function submitScore(){
    // gets our input initials
    var scores = localStorage
    
        
    


    // initials and time go into an Object to be pushed into the array
    localStorage.setItem('initials', 'timer')
    // checks for localstorage to get previous initials 

    // if there is localstorage push into that 
    // if there isnt push into empty array then setItem to localstorage
    // should use JSON.stringify when using setItem
    
    

}

function getScores(){
    
    // hides submit scores and other containers
    submitBtn.removeAttribute('class', 'hide');
    initialInput.removeAttribute('class', 'hide');
    // check localstorage using getItem 
    let initials = localStorage.getItem(initials);
    let timer = localStorage.getItem(timer);
    // if there is localstorage use foreach to create scores
    // if there isnt any localstorage Just display 
};

startButton.addEventListener('click', function(e){
e.preventDefault()
startQuiz()
});
submitBtn.addEventListener('submit', function(e){
e.preventDefault()

});
submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    submitScore()
});
/*highScore.addEventListener('click', function(e){
    e.preventDefault()
    getScores()
} );*/


// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score