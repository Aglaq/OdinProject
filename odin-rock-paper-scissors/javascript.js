let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;
let roundNumber = 1;
let isGameOn = true;
let resultText = "";

// Function that provides computer's choice 0 - Scissors, 1 - Rock, 2 - Paper
function getComputerChoice() {
    return computerChoice = Math.floor(Math.random() * 3);
}

// Function to refresh score
function refreshScore() {
    result.textContent = `${resultText}`;
    score.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore}`

    if (playerScore === 5) {
        end.textContent = "End of the Game! You've won!!!";
        document.querySelectorAll(".game-btn").forEach(btn => {
            btn.disabled = true;
        })
    }
    else if (computerScore === 5) {
        end.textContent = "End of the Game! You've lost!!!";
        document.querySelectorAll(".game-btn").forEach(btn => {
            btn.disabled = true;
        })
    }
}

// Function to play one round and compare choices
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        resultText = "Tie, no points!";
    }
    else if (computerSelection === 0 && playerSelection === 1) {
        resultText = "You Win! Rock beats Scissors!";
        playerScore++;
    }
    else if (computerSelection === 1 && playerSelection === 2) {
        resultText = "You Win! Paper beats Rock!";
        playerScore++;
    }
    else if (computerSelection === 2 && playerSelection === 0) {
        resultText = "You Win! Scissors beat Paper!";
        playerScore++;
    }
    else if (computerSelection === 0 && playerSelection === 2) {
        resultText = "You Lose! Scissors beat Paper!";
        computerScore++;
    }
    else if (computerSelection === 1 && playerSelection === 0) {
        resultText = "You Lose! Rock beats Scissors!";
        computerScore++;
    }
    else if (computerSelection === 2 && playerSelection === 1) {
        resultText = "You Lose! Paper beats Rock!";
        computerScore++;
    }
    refreshScore();
}

const rockButton = document.createElement("button");
rockButton.addEventListener("click", () => playRound(getComputerChoice(), 1));
rockButton.textContent = "ROCK";
rockButton.classList.add("game-btn");
body.appendChild(rockButton);
const paperButton = document.createElement("button");
paperButton.addEventListener("click", () => playRound(getComputerChoice(), 2));
paperButton.textContent = "PAPER";
paperButton.classList.add("game-btn");
body.appendChild(paperButton);
const scissorsButton = document.createElement("button");
scissorsButton.addEventListener("click", () => playRound(getComputerChoice(), 0));
scissorsButton.textContent = "SCISSORS";
scissorsButton.classList.add("game-btn");
body.appendChild(scissorsButton);

const result = document.createElement("div");
const score = document.createElement("div");
const end = document.createElement("div");
body.appendChild(result);
body.appendChild(score);
body.appendChild(end);
