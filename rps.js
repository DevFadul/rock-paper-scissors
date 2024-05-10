window.addEventListener("DOMContentLoaded", (event) => {

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const winnerDiv = document.querySelector("#winner");
const scoreDiv = document.querySelector("#score");
const compScore = document.querySelector("#comp-score");

rockBtn.addEventListener('click', () => {
    playRound('rock');
})
paperBtn.addEventListener('click', () => {
    playRound('paper');
})
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
})


function getComputerChoice() {
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

function checkWinner (playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        return "Tie"
    }
    else if (
        (playerSelection == "rock" && computerChoice == "scissors") ||
        (playerSelection == "scissors" && computerChoice == "paper") ||
        (playerSelection == "paper" && computerChoice == "rock")
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

let playerPoints = 0;
let compPoints = 0;
const scoreLimit = 5;

function scoreIncrement () {
    if (playerPoints == scoreLimit) {
        winnerDiv.textContent = 'You win! Refresh to play again.';
    }
    else {
    playerPoints++;
    }
}
function CompIncrement () {
    if (compPoints == scoreLimit) {
        winnerDiv.textContent = 'Computer Wins! Refresh to play again.';
    }
    else {
    compPoints++;
    }
}

function updateScore () {
    scoreDiv.innerHTML = `Your score: ${playerPoints}`;
}
/*
function displayWinner () {
    winnerDiv.textContent = 'You win! Refresh to play again.';
}
*/

function updateCompScore () {
    compScore.textContent = `Computer score: ${compPoints}`;
}

function playRound (playerSelection) {
    const computerChoice = getComputerChoice();
    const result = checkWinner(playerSelection, computerChoice);
    if (result == "Tie") {
        resultsDiv.textContent = "its a tie!"
    }
    else if (result == 'Player') {
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerChoice}`
        scoreIncrement();
        updateScore();
    }
    else if (result == 'Computer'){
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${playerSelection}`
        CompIncrement();
        updateCompScore();
    }
}
});
