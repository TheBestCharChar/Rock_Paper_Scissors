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