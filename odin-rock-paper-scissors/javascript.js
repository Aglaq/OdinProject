let playerScore = 0;
let computerScore = 0;

// Function that provides computer's choice 0 - Scissors, 1 - Rock, 2 - Paper
function getComputerChoice() {
    return computerChoice = Math.floor(Math.random() * 3);
}

// Function that provides player's choice, 'P' for paper, 'R' for rock, 'S' for scissors
function getPlayerChoice() {
    let playerChoiceLetter = prompt("Please enter 'P' for paper, 'R' for rock or 'S' for scissors: ").toLowerCase();
    let playerChoice = 0;

    // changing letter to number, 0 - Scissors, 1 - Rock, 2 - Paper
    if (playerChoiceLetter === "s") {
        playerChoice = 0;
    }
    else if (playerChoiceLetter === "r") {
        playerChoice = 1;
    }
    else if (playerChoiceLetter === "p") {
        playerChoice = 2;
    }
    return playerChoice;
}

function playRound(computerGesture, playerGesture) {
    if (computerGesture === playerGesture) {
        console.log("Tie, no points!");
    }
    else if (computerGesture === 0 && playerGesture === 1) {
        console.log("You Win! Rock beats Scissors!");
        playerScore++;
    }
    else if (computerGesture === 1 && playerGesture === 2) {
        console.log("You Win! Paper beats Rock!");
        playerScore++;
    }
    else if (computerGesture === 2 && playerGesture === 0) {
        console.log("You Win! Scissors beat Paper!");
        playerScore++;
    }
    else if (computerGesture === 0 && playerGesture === 2) {
        console.log("You Lose! Scissors beat Paper!");
        computerScore++;
    }
    else if (computerGesture === 1 && playerGesture === 0) {
        console.log("You Lose! Rock beats Scissors!");
        computerScore++;
    }
    else if (computerGesture === 2 && playerGesture === 1) {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    }
}

playRound(getComputerChoice(), getPlayerChoice());
console.log(playerScore)
console.log(computerScore)