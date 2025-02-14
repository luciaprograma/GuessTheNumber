"use strict";
//Selecting elements
const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

//Modify score
const modifyScore = function (number) {
  currentScore = currentScore + number;
  score.textContent = currentScore;
  return currentScore;
};

//HighScore control

const highScoreControl = function () {
  if (currentHighScore < currentScore) {
    currentHighScore = currentScore;
    highScore.textContent = currentHighScore;
  }
};

//Generting a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Initial score
let currentScore = 20;
let currentHighScore = 0;

//Check button event listener
checkBtn.addEventListener("click", function () {
  if (currentScore > 0) {
    //Get the input value
    let inputNumber = guess.value;
    const numberValue = Number(inputNumber.trim());

    //Check unvalid value
    if (!Number.isInteger(numberValue) || numberValue < 1 || numberValue > 20) {
      message.textContent = "Enter a valid number 🤔";

      //if WIN
    } else if (numberValue === secretNumber) {
      message.textContent = "🎉 Correct Number! Play again 🏆";
      number.textContent = secretNumber;
      document.body.style.backgroundColor = "#60b347";
      number.style.width = "30rem";
      modifyScore(1);
      highScoreControl();
      //guess to Low
    } else if (secretNumber > numberValue) {
      message.textContent = "📉 Too low!";
      modifyScore(-1);
      //Guess to High
    } else if (secretNumber < numberValue) {
      message.textContent = "📈 Too high!";
      modifyScore(-1);
    }
  } else {
    message.textContent = "You lost the game! 💥 Try again";
  }
});

//Again button event listener
againBtn.addEventListener("click", function () {
  //Reset the game
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  score.textContent = currentScore;
  message.textContent = "Start guessing...";
  number.textContent = "❓";
  guess.value = "";
  document.body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
