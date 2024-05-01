window.addEventListener("DOMContentLoaded", (event) => {

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
const winnerDiv = document.querySelector("#winner");

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


function playRound (playerSelection) {
    let playerPoints = 0;
    let compPoints = 0;
    const computerChoice = getComputerChoice();
    const result = checkWinner(playerSelection, computerChoice);
    if (result == "Tie") {
        resultsDiv.textContent = "its a tie!"
    }
    else if (result == 'Player') {
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerChoice}`
        playerPoints += 1;
    }
    else if (result == 'Computer'){
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${playerSelection}`
        compPoints += 1;
    }

    if (playerPoints = 5) {
        winnerDiv.textContent = 'You Win!';
    }
    else if (compPoints = 5) {
        winnerDiv.textContent = 'Computer Wins!';
    }
    console.log(playerPoints);

}
});
