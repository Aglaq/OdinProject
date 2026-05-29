// Function that provides computer's choice 0 - Scissors, 1 - Rock, 2 - Paper
function getComputerChoice() {
    return computerChoice = Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());

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

console.log(getPlayerChoice());

let playerScore = 0;
let computerScore = 0;