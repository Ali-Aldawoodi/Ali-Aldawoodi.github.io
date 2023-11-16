let startButton = document.querySelector(".start-button");
var words = document.querySelector(".words-fill");
var isWin = false;
var timerCount = document.querySelector(".timer-countdown")
var lose = document.querySelector(".lose-game")
var winCounter= 0;
var loseCounter= 0;

var timerReset;
var timerElement;



let qAndA = [{
        question: "How many primitive datatypes are there?",
        choices: [
            { text: '1',  correct: false},
            { text: '2',  correct: false},
            { text: '3',  correct: false}, 
            { text: '4',  correct: true},
    
    ]  
    },
    {
        question: "How do we notate values of an array?",
        choices: [
            { text: '{}',  correct: false},
            { text: '[]',  correct: true},
            { text: '()',  correct: false}, 
            { text: '//',  correct: false},
    
    ],  
    },
    {
        question: "How do we notate JQuery?",
        choices: [
            { text: '>',  correct: false},
            { text: '<',  correct: false},
            { text: '?',  correct: false}, 
            { text: '$',  correct: true},
    
    ],  
    },
    {
        question: "How many boolean values are there?",
        choices: [
            { text: '1',  correct: false},
            { text: '2',  correct: true},
            { text: '3',  correct: false}, 
            { text: '4',  correct: false},
    
    ],  
    },
    ];

  let writtenQuestions = document.getElementById('written-questions');
  let allChoicesButtons = document.getElementById('all-choices');
  let nextButton = document.getElementById('next-button');


  let currentQuestionIndex = 0;
  let score = 0;

  function startGame() {
    isWin = false;
    timerElement = 60;
    words.textContent = "";
    startTimer();
};
// I need to do the set wins and set losses next. When the timer runs out, game over still displays.

function winGame(){
    words.textContent= "You won";
    winCounter++;
}

function loseGame() {
    words.textContent = "Game over";
    loseCounter++;
    startQuiz();
}


function startTimer() {
  timerReset = setInterval(function() {
    if (timerElement >= 1) {
          timerElement--;
    timerCount.textContent = timerElement;
      if (isWin && timerElement > 0) {
        clearInterval(timerReset);
        winGame();
      }
    }
    if (timerElement === 0) {
      clearInterval(timerReset);
      loseGame();
      
    }
  }, 1000);
};



  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = 'Next';
    populateQuestion();
  }
   
  function populateQuestion(){
    resetState();
    let currentQuestion = qAndA[currentQuestionIndex];
    let questionIndexNumber = currentQuestionIndex + 1;
    writtenQuestions.textContent = questionIndexNumber + ")" + currentQuestion.question;

    currentQuestion.choices.forEach(choices=> {
        let button = document.createElement("button");
        button.innerHTML = choices.text;
        button.classList.add('btn');
        allChoicesButtons.appendChild(button);

        if(choices.correct){
            button.dataset.correct = choices.correct
        }
        button.addEventListener("click", selectChoice);
    });       
}

function resetState(){
    nextButton.style.display='none';
    while(allChoicesButtons.firstChild){
        allChoicesButtons.removeChild(allChoicesButtons.firstChild);
    }
}

function selectChoice(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score ++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    writtenQuestions.textContent = ` You got ${score} out of ${qAndA.length} correct!`;
    nextButton.textContent = 'Play Again'
    nextButton.style.display = 'block'

}

function displayNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < qAndA.length){
        populateQuestion();
    } else {
        showScore();
    }
}
 
console.log(populateQuestion)

startButton.addEventListener("click", startGame);


nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < qAndA.length){
        displayNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
  