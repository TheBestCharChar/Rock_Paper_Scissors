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
//* game 
//* 5 Round game 
//* create variables to record result after each round
//*  
//* 5 rounds,
//*     At start of each round, prompt user for input
//*     First one to get 5 wins the game. Play to 5
//*     After each round, report and record result
//*     Record score for both computer and player
//*     Winner is dictated by number of times won 
// let player;
const choices = ['rock', 'paper', 'scissors'];

const computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
}

let player
//prompt('Enter Rock, Paper, or Scissors').toLowerCase()
let computerScore = 0;
let playerScore = 0;
let gameEnd = 5;

function playRound(playerSelection, computerSelection) {
    playerSelection = 'rock'; //prompt('Please enter in your weapon of choice!').toLowerCase();
    computerPlay(); //* it's a good idea to assign the value to a variable, whatever it is. Within the context of the round, you'll want that same string
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            // console.log("Tie! No score");
            playerScore += 0;
            computerScore += 0;

        } else if (computerSelection === "scissors") {
            // console.log(`You Win! Humans Rock! Player's ${playerSelection} beats computer's ${computerSelection}`);
            playerScore += 1;
            computerScore += 0;
        } else {
            // console.log(`You LOST! Computer's ${computerSelection} beats players ${playerSelection}`);
            computerScore += 1;
            playerScore += 0;
        }
        //if computer equals scissors, you win
        //if not... you lose
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            // console.log("Tie! No score");
            playerScore += 0;
            computerScore += 0;
        } else if (computerSelection === "rock") {
            // console.log(`You Win! Humans Win! Player's ${playerSelection} beats computer's ${computerSelection}`);
            playerScore += 1;
            computerScore += 0;
        } else {
            // console.log(`You LOST! Computer's ${computerSelection} beats players ${playerSelection}`);
            computerScore += 1;
            playerScore += 0;
        }
    } else { //last if is unnecessary because there can only be 3 choices (last option is scissors)
        if (computerSelection === 'scissors') {
            // console.log("Tie! No score");
            playerScore += 0;
            computerScore += 0;
        } else if (computerSelection === "paper") {
            // console.log(`You Win! Humans Win! Player's ${playerSelection} beats computer's ${computerSelection}`);
            playerScore += 1;
            computerScore += 0;
        } else {
            // console.log(`You LOST! Computer's ${computerSelection} beats players ${playerSelection}`);
            computerScore += 1;
            playerScore += 0;
        }
    }
    console.log(roundWon());
}

function roundWon() { //* Who won the round?
    if (parseInt(playerScore) > parseInt(computerScore)) {
        return `Player wins! Computer Loses`
    } else {
        return `Computer wins! Player Loses`
    }

}



function isGameOver() { //*check to see if either player or computer has reached 5
    if (playerScore === 5 || computerScore === 5) {
        return false;
    } else {
        return true;
    }
}

// console.log(playRound(player, computerPlay()));
// playRound(player, computerPlay());
// console.log(playRound(player, computerPlay()))

// for (let i = 0; i <= 5; i++) {
//     playRound(player, computerPlay())
//     console.log(`player's score is ${playerScore}`);
//     console.log(`Computer's score is ${computerScore}`);
// }

while (isGameOver()) {
    playRound(player, computerPlay());
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

//* 
//* 
//* 