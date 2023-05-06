// create a variable for rock
let rock = "rock";
// create a variable for paper
let paper = "paper";
// create a variable for scissors
let scissors = "scissors";

/* CREATE A FUNCTION THAT RANDOMLY SELECTS A NUMBER. This will be used to randomly select rock(1), paper(2), or scissors (3) */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // rounds up when setting the minimum
  max = Math.floor(max); //roundes down when setting the maximum
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/* create a function that randomly returns the computer's choice of rock, paper, or scissors */
function getComputerChoice() {
  // create variable to store computer choice
  let computerChoice;
  // select a random number, which determines rock(1), paper(2), or scissors(3). store it in computerChoice
  computerChoice = getRandomIntInclusive(1, 3);
  // if the number is 1, computerChoice is rock
  if (computerChoice === 1) {
    computerChoice = rock;
    console.log("The computer selects ROCK");
    return computerChoice;
  }
  // if the number is 2, computerChoice is paper
  else if (computerChoice === 2) {
    computerChoice = paper;
    console.log("The computer selects PAPER");
    return computerChoice;
  }
  // if the number is 3, computerChoice is scissors
  else {
    computerChoice = scissors;
    console.log("The computer selects SCISSORS");
    return computerChoice;
  }
}
// get the computer's choice
getComputerChoice();

/* GET THE PLAYER'S CHOICE */
// ask the player for their choice and store in variable
function getPlayerChoice() {
  // create a variable for the player's choice
  let playerChoice;
  // ask the player for their choice, which determines rock(1), paper(2), or scissors(3). store it in playerChoice
  playerChoice = prompt("Rock, paper, or scissors?");
  // if the number is 1, computerChoice is rock
  if (playerChoice.toLowerCase() == "rock") {
    playerChoice = rock;
    console.log("You select ROCK");
    return playerChoice;
  }
  // if the number is 2, playerChoice is paper
  else if (playerChoice.toLowerCase() == "paper") {
    computerChoice = paper;
    console.log("You select PAPER");
    return playerChoice;
  }
  // if the number is 3, playerChoice is scissors
  else {
    playerChoice.toLowerCase() == "scissors";
    console.log("You select SCISSORS");
    return playerChoice;
  }
}
getPlayerChoice();

/* PLAY A SINGLE ROUND OF ROCK, PAPER, SCISSORS */

// CREATE FUNCTION THAT LETS THE CHOICES COMPETE TO DETERMINE THE OUTCOME
function playGame() {
  // victory message
  let victoryMessage = "you win!";
  // losing message
  let losingMessage = "you lose...";
  // tie message
  let tieMessage = "it's a tie...play again!";

  // set condition for rock vs rock
  if (computerChoice == rock && playerChoice == rock) {
    // tell the user to play the game again
    console.log(tieMessage);
    // call the function to play the game again
    playGame();
  }
  // set condition for rock vs paper
  else if (computerChoice == rock && playerChoice == paper) {
    // log to the console who won
    console.log(victoryMessage);
    // ask the player if they'd like to play again
    playAgain();
  }
  // set condition for rock vs scissors
  else if (computerChoice == rock && playerChoice == scissors) {
    console.log(losingMessage);

    // ask the player if they'd like to play again

    // if yes, call function to play again

    //if no, end
  }

  // set condition for paper vs scissors

  // set condition for paper vs paper

  // set condition for scissors vs scissors
}

// ask the player if they'd like to play again
function playAgain() {
  let playAgainAnswer = confirm("Would you like to play again?");

  if (playAgain == true) {
    playGame();
  } else {
    console.log("thanks for playing!");
  }
}
