const number = Math.floor(Math.random() * 100);
let noOfGuesses = 0;
let noOfChancesLeft = 10;
function guessTheNumber() {
  const numberInput = document.getElementById("number-input").value;

  noOfGuesses = noOfGuesses + 1;
  noOfChancesLeft = noOfChancesLeft - 1;
  document.getElementById("no-of-chances-left").innerHTML = `Chances Left : <span class="${noOfChancesLeft <= 3 ? "chances-count-red": "chances-count"}">${noOfChancesLeft}</span>`;

  if (noOfChancesLeft === 0) {
    document.getElementById("result").innerHTML = "GAME OVER";
    document.getElementById("guess-btn").disabled = true;
    document.getElementById("container").innerHTML = `<button class="play-again-btn" onclick="playAgain()">Play Again </button>`;
    document.getElementById("no-of-chances-left").innerHTML = "";
  } else if (numberInput < number) {
    document.getElementById("result").innerHTML = "Increase your number";
  } else if (numberInput > number) {
    document.getElementById("result").innerHTML = "Decrease your number";
  } else {
    document.getElementById("result").innerHTML = `YOU WIN <br> You take no of guesses : ${noOfGuesses + 1}`;
    document.getElementById("container").innerHTML = `<button class="play-again-btn" onclick="playAgain()">Play Again </button>`;
    document.getElementById("no-of-chances-left").innerHTML = "";
  }
}

function playAgain() {
  noOfChancesLeft = 10;
  noOfGuesses = 0;
  document.getElementById("result").innerHTML = "Ready";
  document.getElementById("no-of-chances-left").innerHTML = `Chances Left : <span class="${noOfChancesLeft <= 3 ? "chances-count-red": "chances-count"}">${noOfChancesLeft}</span>`;
  document.getElementById("container").innerHTML = `<input id="number-input" type="number" />
  <button id="guess-btn" onclick="guessTheNumber()">Guess</button>`;
}