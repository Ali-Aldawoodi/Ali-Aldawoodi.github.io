// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// I need to make the start button start the page through event listerners. I then need this to sync to a timer starting as well.(event listener. timer interval)

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



//variables
let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let q1 = document.querySelector(".question1");


//functions
start.addEventListener("click", function () {
    countdown();
});

function countdown() {
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
    //special functions
    


//business logic