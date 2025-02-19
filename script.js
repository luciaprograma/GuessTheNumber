"use strict";
// game.js

class Game {
  constructor() {
    this.secretNumber = this.generateSecretNumber();
    this.currentScore = 20;
    this.currentHighScore = 0;
    this.number = document.querySelector(".number");
    this.score = document.querySelector(".score");
    this.highScore = document.querySelector(".highscore");
    this.message = document.querySelector(".message");
    this.guess = document.querySelector(".guess");
    this.checkBtn = document.querySelector(".check");
    this.againBtn = document.querySelector(".again");

    // Bind events to buttons
    this.checkBtn.addEventListener("click", () => this.checkGuess());
    this.againBtn.addEventListener("click", () => this.resetGame());

    // Initialize the score
    this.updateScore();
  }

  // Generate a random number between 1 and 20
  generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  // Update the score
  updateScore() {
    this.score.textContent = this.currentScore;
    this.highScore.textContent = this.currentHighScore;
  }

  // Modify the score
  modifyScore(number) {
    this.currentScore += number;
    this.updateScore();
  }

  // Highscore control
  highScoreControl() {
    if (this.currentScore > this.currentHighScore) {
      this.currentHighScore = this.currentScore;
      this.updateScore();
    }
  }

  // Check the guessed number
  checkGuess() {
    if (this.currentScore > 0) {
      const numberValue = Number(this.guess.value.trim());

      // Check for invalid input
      if (!Number.isInteger(numberValue) || numberValue < 1 || numberValue > 20) {
        this.message.textContent = "Enter a valid number 🤔";
      } else if (numberValue === this.secretNumber) {
        this.message.textContent = "🎉 Correct Number! Play again 🏆";
        this.number.textContent = this.secretNumber;
        document.body.style.backgroundColor = "#60b347";
        this.number.style.width = "30rem";
        this.modifyScore(1);
        this.highScoreControl();
      } else if (this.secretNumber > numberValue) {
        this.message.textContent = "📉 Too low!";
        this.modifyScore(-1);
      } else if (this.secretNumber < numberValue) {
        this.message.textContent = "📈 Too high!";
        this.modifyScore(-1);
      }
    } else {
      this.message.textContent = "You lost the game! 💥 Try again";
    }
  }

  // Reset the game
  resetGame() {
    this.secretNumber = this.generateSecretNumber();
    this.currentScore = 20;
    this.message.textContent = "Start guessing...";
    this.number.textContent = "?";
    this.guess.value = "";
    document.body.style.backgroundColor = "#222";
    this.number.style.width = "15rem";
    this.updateScore();
  }
}

// Export the class
export default Game;