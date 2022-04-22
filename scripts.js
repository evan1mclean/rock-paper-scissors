let playerCount = 0;
let computerCount = 0;
 
 //Returns random value of rock, paper, or scissors
 function computerPlay() {
    let gameActions = ["Rock", "Paper", "Scissors"];
    return gameActions[Math.floor(Math.random() * gameActions.length)];
}

//Function that plays round of rock paper scissors and updates player scores
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === computerSelection) {
        console.log("Draw! You threw the same attack!");
        return;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")) {
            console.log(`Congratulations! ${playerSelection} beats ${computerSelection}!`);
            playerCount += 1;
            console.log("");
            console.log(`Player Score: ${playerCount}`); 
            console.log(`Computer Score: ${computerCount}`);
            console.log("");
        }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        computerCount += 1;
        console.log("");
        console.log(`Player Score: ${playerCount}`); 
        console.log(`Computer Score: ${computerCount}`);
        console.log("");
    }
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
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => window.location.reload());
}

//Create function to play game of rock paper scissors
function game() {
    const btn = document.querySelectorAll('.weapon');
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
        else if (button.classList.contains('scissors')) {
            playerSelection = "Scissors";
            playRound(playerSelection, computerSelection);
        }
        endGame();
        resetGame();
    }));
}
game();