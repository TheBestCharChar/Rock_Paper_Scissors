//? game initiated:
//?     when clicking on rock paper or scissors
//?     need to select all of the buttons in relation to player choices
//?     add an event listener FOR EACH? of the buttons to initiate
//? play:   
//?     when player chooses rock or paper or scissors, computer will automatically generate random selection. 
//? result: 
//?     calculate the result between player selection vs computer selection
//?     if player wins, add to player round win column for that round
//?     if computer wins, add to computer round win column
//?     if player = computer, add to round Ties column 
//?     
//?     
//?     
//* nice to haves
//      tracking history      


const choices = ['Rock', 'Paper', 'Scissors'];

const computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
let rounds = document.querySelector('.numRounds');
// let numRounds = parseInt(rounds.innerText);
let roundOutcome = document.querySelector('.roundOutcome');
let player
let playerWinsScore = document.querySelector('.playerWinsScore');
let computerWinsScore = document.querySelector('.computerWinsScore');
let tiesCount = document.querySelector('.numberTies')
let gameOverDiv = document.createElement('h3');
gameOverDiv.innertext = '';
const overallScore = document.querySelector('#overallScore');
let computerChoice = document.querySelector('.computerChoice');

//button event listeners to play round
rockBtn.addEventListener('click', (e) => {
    // console.log(e);
    playRound(e.target.innerText, computerPlay())
    rounds.innerText = parseInt(rounds.innerText) + 1;
})
paperBtn.addEventListener('click', (e) => {
    playRound(e.target.innerText, computerPlay())
    rounds.innerText = parseInt(rounds.innerText) + 1;
})
scissorsBtn.addEventListener('click', (e) => {
    playRound(e.target.innerText, computerPlay())
    rounds.innerText = parseInt(rounds.innerText) + 1;
})


// let gameEnd = 5;
//? Game ends when:
//?     Either Player or Computer reaches 5 
//?     Player Buttons should be greyed out upon reaching 5 wins (either computer or player)

//logic
function playRound(playerSelection, computerSelection) {
    roundOutcome.innerText = '';
    computerPlay(); //* it's a good idea to assign the value to a variable, whatever it is. Within the context of the round, you'll want that same string
    computerChoice.innerText = computerSelection;
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            roundOutcome.innerText = `Player's ${playerSelection} = Computer's ${computerSelection}`;
            tiesCount.innerText = parseInt(tiesCount.innerText) + 1;
        } else if (computerSelection === "Scissors") {
            roundOutcome.innerText = `Player's ${playerSelection}> Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 1;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 0;
        } else {
            roundOutcome.innerText = `Player's ${playerSelection}< Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 0;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 1;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Paper') {
            roundOutcome.innerText = `Player's ${playerSelection}= Computer's ${computerSelection}`;
            tiesCount.innerText = parseInt(tiesCount.innerText) + 1;
        } else if (computerSelection === "Rock") {
            roundOutcome.innerText = `Player's ${playerSelection}> Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 1;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 0;
        } else {
            roundOutcome.innerText = `Player's ${playerSelection}< Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 0;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 1;
        }
    } else { //last if is unnecessary because there can only be 3 choices (last option is scissors)
        if (computerSelection === 'Scissors') {
            roundOutcome.innerText = `Player's ${playerSelection}= Computer's ${computerSelection}`;
            tiesCount.innerText = parseInt(tiesCount.innerText) + 1;
        } else if (computerSelection === "Paper") {
            roundOutcome.innerText = `Player's ${playerSelection}> Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 1;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 0;
        } else {
            roundOutcome.innerText = `Player's ${playerSelection}< Computer's ${computerSelection}`;
            playerWinsScore.innerText = parseInt(playerWinsScore.innerText) + 0;
            computerWinsScore.innerText = parseInt(computerWinsScore.innerText) + 1;
        }
    }
    isGameOver(playerWinsScore.innerText, computerWinsScore.innerText);
}

// function roundWon() { //* Who won the round?
//     if (parseInt(playerScore) > parseInt(computerScore)) {
//         return `Player is winning! Computer is losing!`
//     } else if (parseInt(playerScore) < parseInt(computerScore)) {
//         return `Computer Winning! Player Losing`
//     } else {
//         return `Currently tied!`
//     }

// }
const liOne = document.querySelector('.liOne');

function isGameOver(playerScore, computerScore) {
    if (playerWinsScore.innerText === '5') {
        gameOverDiv.innerText = `GAME OVER!!! Player wins with score of ${playerScore}`
        gameOverDiv.style.backgroundColor = 'red';
        overallScore.insertBefore(gameOverDiv, liOne)


    } else if (computerWinsScore.innerText === '5') {
        gameOverDiv.innerText = `GAME OVER!!! Computer wins with score of ${computerScore}`
        gameOverDiv.style.backgroundColor = 'red';
        overallScore.insertBefore(gameOverDiv, liOne)
    }
}

// while (isGameOver()) {
//     playRound(player, computerPlay());
//     console.log(roundWon());
//     console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
// }