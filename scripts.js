let playerCount = 0;
let computerCount = 0;
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
 
 //Returns random value of rock, paper, or scissors
 function computerPlay() {
    let gameActions = ["Rock", "Paper", "Scissors"];
    return gameActions[Math.floor(Math.random() * gameActions.length)];
}

//function for returning an image for what weapon the computer chose
function computerImage(action) {
    if (action === "Rock") {
        return "./images/rock.png";
    }
    else if (action === "Paper") {
        return "./images/paper.png";
    }
    else {
        return "./images/scissors.png";
    }
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
    const arena = document.querySelector('.arena');
    const computerWeapon = document.createElement('img');
    const playerWeapon = document.createElement('img');
    const btn = document.querySelectorAll('.weapon');
    const vs = document.querySelector(".arena p");
    const computer = document.querySelector("#computer");
    //adds event listeners to the buttons to play a round once clicked
    btn.forEach ((button) => button.addEventListener('click', function() {
        let playerSelection;
        let computerSelection = computerPlay();
        let computerAttack = computerImage(computerSelection);
        vs.remove();
        arena.insertBefore(playerWeapon,computer);
        arena.insertBefore(computerWeapon, computer);
        computerWeapon.classList.add("weapon");
        playerWeapon.classList.add("weapon");
        computerWeapon.src = computerAttack;
        if (button.classList.contains('rock')) {
            playerWeapon.src = "./images/rock.png";
            playerSelection = "Rock";
            playRound(playerSelection, computerSelection);
        }
        else if (button.classList.contains('paper')) {
            playerWeapon.src = "./images/paper.png";
            playerSelection = "Paper";
            playRound(playerSelection, computerSelection);
        }
        else {
            playerWeapon.src = "./images/scissors.png";
            playerSelection = "Scissors";
            playRound(playerSelection, computerSelection);
        }
        endGame();
        resetGame();
    }));
}
game();