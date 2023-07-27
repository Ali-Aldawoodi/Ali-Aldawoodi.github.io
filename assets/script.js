// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// I need to make the start button start the page through event listerners. I then need this to sync to a timer starting as well.(event listener. timer interval)
        // maybe to get to the next page i have to create something to where i hide the previoius item and show the current. data attributes.

// WHEN I answer a question
// THEN I am presented with another question
// I need to tell the page to move forward when an answer is selected. (event bubbler)


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// I need to equat the incorrect answer with deductions to the overall timer. (timer interval and conditionals)


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// I need to end the game by setting anything after the last question to stop propagating and or make it to where if the timer reaches zero. (stop propagating. clear interval)

// WHEN the game is over
// THEN I can save my initials and my score
// I need to tally the scores throughout the quiz and give a total at the end. as well as an option to save the score and intials. (local storage)
// ```

// after i click start i want the question to populate
    // button elements and event listener. functoin that start time, 
    //i have to connect the start button to the first question. How do I connect the clicking of the start button to the first question?
// conditional statement that runs through eacch question and lets you know what question your on. 
// when user clicks an answer it moves on and if incorrect it deducts time. display next question. 
//when game ends, populate score, time ends, highscores, hide last question, and input to add initials .

//variables
let timer = document.querySelector(".timer");
let startButton = document.querySelector(".start");
let questionContainerEl = document.querySelector(".question-container");



//functions
// array of objects with questions. for loop for

let qAndA = [{
        question: "How many primitive datatypes are there?",
        choices: ['1', '2', '3', '4'],
        answer: '4',
    },
    {
        question: "How do we notate values of an array?",
        choices: ['{}', '[]', '()', '//'],
        answer: '4',
    },
    {
        question: "How do we notate JQuery?",
        choices: ['>', '<', '?', '$'],
        answer: '4',
    },
    {
        question: "How many boolean values are ther?",
        choices: ['1', '2', '3', '4'],
        answer: '4',
    },
    ];

    start.addEventListener("click", startQuiz)
    function startQuiz() {
    // start.classList.add('hide');
    let timeLeft = 59;
    let totalTimer = setInterval(function () {
        if (timeLeft > 0) {
            timer.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "";
            clearInterval(totalTimer);
        }

    }, 1000);   
}

let currentQuestion = {
    if (qAndA[0].question) {
        
    }
}






    for (let index = 0; index < qAndA.length; index++) {
        const element = qAndA[index];
        
        if (start) {
            qAndA[0].question.textContent;
        }
        
    }

    //special functions
    


//business logic