let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let isGameOn = true;

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

// Function to play one round and compare choices
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log("Tie, no points!");
    }
    else if (computerSelection === 0 && playerSelection === 1) {
        console.log("You Win! Rock beats Scissors!");
        playerScore++;
    }
    else if (computerSelection === 1 && playerSelection === 2) {
        console.log("You Win! Paper beats Rock!");
        playerScore++;
    }
    else if (computerSelection === 2 && playerSelection === 0) {
        console.log("You Win! Scissors beat Paper!");
        playerScore++;
    }
    else if (computerSelection === 0 && playerSelection === 2) {
        console.log("You Lose! Scissors beat Paper!");
        computerScore++;
    }
    else if (computerSelection === 1 && playerSelection === 0) {
        console.log("You Lose! Rock beats Scissors!");
        computerScore++;
    }
    else if (computerSelection === 2 && playerSelection === 1) {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    }
}

// While Loop for 5 rounds, with the winner declaration at the end
function playGame() {
    while (isGameOn) {
        playRound(getComputerChoice(), getPlayerChoice());
        roundNumber++;
        console.log("Your Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
        if (roundNumber >= 6) {
            isGameOn = false;
            if (playerScore > computerScore) {
                console.log("End of the Game! You've won!!!")
            }
            else if (playerScore < computerScore) {
                console.log("End of the Game! You've lost!!!")
            }
            else {
                console.log("End of the Game! Tie!!!")
            }
        }
    }
}

playGame();