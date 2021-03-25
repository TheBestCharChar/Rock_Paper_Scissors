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
    playerSelection = prompt('Please enter in your weapon of choice!').toLowerCase();
    computerPlay(); //* it's a good idea to assign the value to a variable, whatever it is. Within the context of the round, you'll want that same string
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log(`Player's ${playerSelection} = Computer's ${computerSelection}`)
            playerScore += 0;
            computerScore += 0;

        } else if (computerSelection === "scissors") {
            console.log(`Player's ${playerSelection}> Computer's ${computerSelection}`)
            playerScore += 1;
            computerScore += 0;
        } else {
            console.log(`Player's ${playerSelection}< Computer's ${computerSelection}`)
            computerScore += 1;
            playerScore += 0;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log(`Player's ${playerSelection}= Computer's ${computerSelection}`)
            playerScore += 0;
            computerScore += 0;
        } else if (computerSelection === "rock") {
            console.log(`Player's ${playerSelection}> Computer's ${computerSelection}`)
            playerScore += 1;
            computerScore += 0;
        } else {
            console.log(`Player's ${playerSelection}< Computer's ${computerSelection}`)
            computerScore += 1;
            playerScore += 0;
        }
    } else { //last if is unnecessary because there can only be 3 choices (last option is scissors)
        if (computerSelection === 'scissors') {
            console.log(`Player's ${playerSelection}= Computer's ${computerSelection}`)
            playerScore += 0;
            computerScore += 0;
        } else if (computerSelection === "paper") {
            console.log(`Player's ${playerSelection}> Computer's ${computerSelection}`)
            playerScore += 1;
            computerScore += 0;
        } else {
            console.log(`Player's ${playerSelection}< Computer's ${computerSelection}`)
            computerScore += 1;
            playerScore += 0;
        }
    }
    // console.log(roundWon());
}

function roundWon() { //* Who won the round?
    if (parseInt(playerScore) > parseInt(computerScore)) {
        return `Player is winning! Computer is losing!`
    } else if (parseInt(playerScore) < parseInt(computerScore)) {
        return `Computer Winning! Player Losing`
    } else {
        return `Currently tied!`
    }

}



function isGameOver() { //*check to see if either player or computer has reached 5
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            console.log(`Player wins with score of ${playerScore}!`)
            return;
        } else if (computerScore === 5) {
            console.log(`Computer wins with score of ${computerScore}!`)
            return;
        }
        return false;
    } else {
        return true;
    }
}

while (isGameOver()) {
    playRound(player, computerPlay());
    console.log(roundWon());
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
}

//* 
//* 
//* 