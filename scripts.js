let playerCount = 0;
let computerCount = 0;
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
 
 //Returns random value of rock, paper, or scissors
 function computerPlay() {
    let gameActions = ["Rock", "Paper", "Scissors"];
    return gameActions[Math.floor(Math.random() * gameActions.length)];
}

//Function that plays round of rock paper scissors, updates player scores, returns
//win, draw, or lose message
function playRound(playerSelection, computerSelection) {
    const content = document.querySelector(".content");
    const contentParagraph = document.querySelector(".content p");
    contentParagraph.remove();
    const roundMessage = document.createElement('p');
    content.appendChild(roundMessage);
    if (playerSelection === computerSelection) {
        roundMessage.textContent = "Draw! You threw the same attack!"
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
            roundMessage.textContent = `Congratulations! ${playerSelection} beats ${computerSelection}!`;
            playerCount += 1;
        }
    else {
        roundMessage.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerCount += 1;
    }
    playerScore.textContent = `Player Score: ${playerCount}`;
    computerScore.textContent = `Computer Score: ${computerCount}`;
}

function endGame() {
    if (playerCount === 5 || computerCount === 5) {
        console.log("");
        console.log(`The final score is ${playerCount} to ${computerCount}.`);
        if (playerCount > computerCount) {
            console.log("Congratulations! You have beaten the computer.");
        }
        else {
            console.log("The computer has defeated you this time.");
        }
    }
    else {
        return;
    }
}

//Reloads the page when the button is clicked
function resetGame() {
    const reset = document.querySelector('button');
    reset.addEventListener('click', () => window.location.reload());
}

//Create function to play game of rock paper scissors
function game() {
    const btn = document.querySelectorAll('.weapon');
    //adds event listeners to the buttons to play a round once clicked
    btn.forEach ((button) => button.addEventListener('click', function() {
        let playerSelection;
        let computerSelection = computerPlay();
        if (button.classList.contains('rock')) {
            playerSelection = "Rock";
            playRound(playerSelection, computerSelection);
        }
        else if (button.classList.contains('paper')) {
            playerSelection = "Paper";
            playRound(playerSelection, computerSelection);
        }
        else {
            playerSelection = "Scissors";
            playRound(playerSelection, computerSelection);
        }
        endGame();
        resetGame();
    }));
}
game();