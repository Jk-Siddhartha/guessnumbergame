const easy = document.querySelector(".easy");
const hard = document.querySelector(".hard");
const output = document.querySelector(".output");
const previousAttemptsCount = document.querySelector(
  ".previous-attempts-count"
);
const previousGuessesHistory = document.querySelector(
  ".previous-guesses-history"
);
const gameArea = document.querySelector(".game-area");
const msgArea = document.querySelector(".msg-area");
const gameAgainContainer = document.querySelector(".game-again-container");

var commonSound = new Audio("sound.wav");
var gameOver = new Audio("gameover.mp3");
var winSound = new Audio("winSound.mp3");

let originalNumber = Math.floor(Math.random() * 100);

let cnt = 0;
let limit;
function startAgain() {
  commonSound.play();
  setTimeout(() => {
    window.location.href = window.location.href;
  }, 500);
}

easy.addEventListener("click", () => {
  commonSound.play();
  gameArea.style.display = "flex";
  msgArea.style.display = "none";
  limit = 10;
});

hard.addEventListener("click", () => {
  commonSound.play();
  gameArea.style.display = "flex";
  msgArea.style.display = "none";
  limit = 5;
});

function playGame() {
  commonSound.play();
  if (cnt < limit) {
    const guess = document.getElementById("guess");
    let guessedNumber = guess.value;
    if (guessedNumber > originalNumber) {
      output.innerHTML = "Your guess is High😲";
      previousAttemptsCount.innerHTML = cnt + 1;
      previousGuessesHistory.insertAdjacentText(
        "beforeend",
        "," + guessedNumber
      );
    } else if (guessedNumber < originalNumber) {
      output.innerHTML = "Your guess is low🙁";
      previousAttemptsCount.innerHTML = cnt + 1;
      previousGuessesHistory.insertAdjacentText(
        "beforeend",
        "," + guessedNumber
      );
    } else {
      const data = `<button class="btn start-again" onclick="startAgain()">Start Again</button>`;
      gameArea.insertAdjacentHTML("afterbegin", data);
      output.innerHTML = "It's Correct😄";
      previousAttemptsCount.innerHTML = cnt + 1;
      previousGuessesHistory.insertAdjacentText(
        "beforeend",
        "," + guessedNumber
      );
      winSound.play();
    }
    cnt = cnt + 1;
  } else {
    const data = `<button class="btn start-again" onclick="startAgain()">Start Again</button>`;
    gameAgainContainer.innerHTML = data;
    guess.readOnly = true;
    output.innerHTML = "Game Over😬";
    gameOver.play();
  }
}
