// create a variable for rock
let rock = "Rock";
// create a variable for paper
let paper = "Paper";
// create a variable for scissors
let scissors = "Scissors";

/* CREATE A FUNCTION THAT RANDOMLY SELECTS A NUMBER. This will be used to randomly select rock(1), paper(2), or scissors (3) */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // rounds up when setting the minimum
  max = Math.floor(max); //roundes down when setting the maximum
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/* GET THE COMPUTER CHOICE */
// create variable to store computer choice
let computerChoice;
/* create a function that randomly returns the computer's choice of rock, paper, or scissors */
function getComputerChoice() {
  // select a random number, which determines rock(1), paper(2), or scissors(3). store it in computerChoice
  computerChoice = getRandomIntInclusive(1, 3);
  // if the number is 1, computerChoice is rock
  if (computerChoice === 1) {
    computerChoice = rock;
    logCompResults();
    return computerChoice;
  }
  // if the number is 2, computerChoice is paper
  else if (computerChoice === 2) {
    computerChoice = paper;
    logCompResults();
    return computerChoice;
  }
  // if the number is 3, computerChoice is scissors
  else {
    computerChoice = scissors;
    logCompResults();
    return computerChoice;
  }
}

// GET THE PLAYER'S CHOICE
let playerChoice;
// ask the player for their choice and store in variable
function getPlayerChoice() {
  // ask the player for their choice, which determines rock(1), paper(2), or scissors(3). store it in playerChoice
  playerChoice = buttonSelections.textContent;
  // if the number is 1, computerChoice is rock
  if (playerChoice.toLowerCase() == "rock") {
    playerChoice = rock;
    return playerChoice;
  }
  // if the number is 2, playerChoice is paper
  else if (playerChoice.toLowerCase() == "paper") {
    playerChoice = paper;
    return playerChoice;
  }
  // if the number is 3, playerChoice is scissors
  else if (playerChoice.toLowerCase() == "scissors") {
    playerChoice = scissors;
    return playerChoice;
  }
}

/* PLAY A SINGLE ROUND OF ROCK, PAPER, SCISSORS */

// CREATE FUNCTION THAT LETS THE CHOICES COMPETE TO DETERMINE THE OUTCOME
function playGame(event) {
  let clickedButton = event.target;
  let playerChoice = clickedButton.textContent;
  // victory message
  let victoryMessage = "you win!";
  // losing message
  let losingMessage = "you lose...";
  // tie message
  let tieMessage = "it's a tie...play again!";

  // clear the results to save space
  results.innerHTML = "";

  getComputerChoice();
  logPlayerResults(playerChoice);

  // set condition for computer rock vs player rock
  if (computerChoice == rock && playerChoice == rock) {
    // tell the user to play the game again
    results.innerHTML += tieMessage;
    // call the function to play the game again
  }
  // set condition for computer rock vs player paper
  else if (computerChoice == rock && playerChoice == paper) {
    // log to the console who won
    results.innerHTML += victoryMessage;
    updatePlayerScore();
  }
  // set condition for computer rock vs player scissors
  else if (computerChoice == rock && playerChoice == scissors) {
    results.innerHTML += losingMessage;
    updateComputerScore();
  }
  // set condition for computer rock vs player scissors
  else if (computerChoice == paper && playerChoice == rock) {
    results.innerHTML += losingMessage;
    updateComputerScore();
  }
  // set condition for computer paper vs player paper
  else if (computerChoice == paper && playerChoice == paper) {
    results.innerHTML += tieMessage;
  }

  // set condition for computer paper vs player scissors
  else if (computerChoice == paper && playerChoice == scissors) {
    results.innerHTML += victoryMessage;
    updatePlayerScore();
  }

  // set condition for computer scissors vs player rock
  else if (computerChoice == scissors && playerChoice == rock) {
    results.innerHTML += victoryMessage;
    updatePlayerScore();
  }
  // set condition for computer scissors vs player paper
  else if (computerChoice == scissors && playerChoice == paper) {
    results.innerHTML += losingMessage;
    updateComputerScore();
  }

  // set condition for scissors vs scissors
  else if (computerChoice == scissors && playerChoice == scissors) {
    results.innerHTML += tieMessage;
  }
}

/*
// ask the player if they'd like to play again
function playAgain() {
  let playAgainAnswer = confirm("Would you like to play again?");

  if (playAgainAnswer == true) {
    playGame();
  } else {
    console.log("thanks for playing!");
  }
}
*/

// store buttons in variable list and call function on click
let buttonSelections = document.querySelectorAll(".buttonSelections");
buttonSelections.forEach((button) => {
  button.addEventListener("click", playGame);
});

// create paragraph and add element to log results
let results = document.querySelector(".results");
function logPlayerResults(playerChoice) {
  console.log("You choose " + playerChoice);
  let playerPara = document.createElement("p");
  playerPara.textContent = "You selected " + playerChoice;
  results.appendChild(playerPara);
}

function logCompResults() {
  let compPara = document.createElement("p");
  console.log("Computer chooses " + computerChoice);
  compPara.textContent = "The computer selected " + computerChoice;
  results.appendChild(compPara);
}

// UPDATE SCORE

function updatePlayerScore() {
  let playerScoreElement = document.getElementById("playerScore");
  let playerScore = Number(playerScoreElement.textContent);
  playerScore += 1;

  playerScoreElement.textContent = playerScore;
  checkFiveWins(playerScore, computerScore);
}

function updateComputerScore() {
  let computerScoreElement = document.getElementById("computerScore");
  let computerScore = Number(computerScoreElement.textContent);
  computerScore += 1;

  computerScoreElement.textContent = computerScore;
  checkFiveWins(playerScore, computerScore);
}

// CHECK FOR WINNER

function checkFiveWins(playerScore, computerScore) {
  if (playerScore == 5) {
    alert("You win!");
  } else if (computerScore == 5) {
    alert("You lose...");
  }
}
