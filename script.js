//* 1. Setup 2. Gameplay 3. Completed
//* Setup: Create Variables to store player input and Computer input
//*     Player input = Prompt
//*     Computer input = random 
//* Round of RPS starts when user is prompted
//* A round = A function that takes 2 inputs, and tells me which of them is a win, or if there's a tie
//* 3 options of input (Rock, Paper, Scissors)
//*     
//*     Paper beats Rock, but loses to Scissors
//*     Rock beats Scissors, but loses to Paper
//*     Scissors beats Paper, but loses to Rock
//* If player input = computer input --> Tie, no score
//* 
// let player;
const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
}

let player
//prompt('Enter Rock, Paper, or Scissors').toLowerCase()

function playRound(playerSelection, computerSelection) {
    player = "rock"
    computerPlay(); //* it's a good idea to assign the value to a variable, whatever it is. Within the context of the round, you'll want that same string
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "Tie! No score";
        } else if (computerSelection === "scissors") {
            return `You Win! Humans Rock! Player's ${playerSelection} beats computer's ${computerSelection}`;
        } else {
            return `You LOST! Computer's ${computerSelection} beats players ${playerSelection}`;
        }
        //if computer equals scissors, you win
        //if not... you lose
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return "Tie! No score";
        } else if (computerSelection === "rock") {
            return `You Win! Humans Win! Player's ${playerSelection} beats computer's ${computerSelection}`;
        } else {
            return `You LOST! Computer's ${computerSelection} beats players ${playerSelection}`;
        }

    } else { //last if is unnecessary because there can only be 3 choices (last option is scissors)
        if (computerSelection === 'scissors') {
            return "Tie! No score";
        } else if (computerSelection === "paper") {
            return `You Win! Humans Win! Player's ${playerSelection} beats computer's ${computerSelection}`;
        } else {
            return `You LOST! Computer's ${computerSelection} beats players ${playerSelection}`;
        }
    }
}
// console.log(playRound(player, computerPlay()));
playRound(player, computerPlay());