 //Returns random value of rock, paper, or scissors
 function computerPlay() {
    let gameActions = ["Rock", "Paper", "Scissors"];
    return gameActions[Math.floor(Math.random() * gameActions.length)];
}

//Function that plays round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    //make sure player selection is converted to lower then capitalize first letter
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    //if player selection = computer selection return go again message
    if (playerSelection == computerSelection) {
        return "Draw"
    }

    //if playerSelection = rock and computer selection = scissors return winning message, else return losing message
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "Win";
        }
        else {
            return "Lose";';[,'
        }
    }
    //if playerSelection = scissors and computer selection = paper return winning message, else return losing message
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return "Win";
        }
        else {
            return "Lose";
        }
    }
    //if playerSelection = paper and computer selection = rock return winning message, else return losing message
    else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return playerWin = "Win";
        }
        else {
            return playerWin = "Lose";
            }
    }
    else {
        return "Please enter a valid value of Rock, Paper, or Scissors"
    }
}

//Create function to play game of rock paper scissors
function game() {
    //introduction to the game
    console.log("This is a game of Rock, Paper, Scissors between you and the computer");
    console.log("You will play 5 rounds and whoever has the most points at the end wins");
    console.log("Good Luck!");
    console.log("");
    //create a counter for player and for computer
    let playerCount = 0;
    let computerCount = 0;
    //Plays 5 rounds of the game. Whoever has more points wins, or if tied, it's a draw.
        //Ask user to input value of rock, paper, or scissors
        /* let playerSelection = window.prompt("Please enter a value of Rock, Paper, or Scissors"); */
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        //Gets the computers value
        let computerSelection = computerPlay();
        //play a round and update counters
        let round = playRound(playerSelection, computerSelection);
        console.log(`The computer plays ${computerSelection}`);
        if (round == "Draw") {
            //display result
            console.log("Draw! You threw the same attack!");
        }
        else if (round == "Win") {
            //display result
            playerCount++;
            console.log(`Congratulations! ${playerSelection} beats ${computerSelection}!`)
        }
        else if (round == "Lose") {
            //display result
            computerCount++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        }
        else {
            //display result
            console.log(round);
        }
        console.log("");
        console.log(`Player Score: ${playerCount}`);
        console.log(`Computer Score: ${computerCount}`);
        console.log("");
    //after 5 rounds are done, compare values and declare winner
    console.log("");
    console.log(`The final score is ${playerCount} to ${computerCount}.`);
    if (playerCount == computerCount) {
        console.log("You have both tied and ended this game in a draw.");
    }
    else if (playerCount > computerCount) {
        console.log("Congratulations! You have beaten the computer.");
    }
    else {
        console.log("The computer has defeated you this time.");
    }

}
game();