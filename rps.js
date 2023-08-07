function getComputerChoice() {
    const choice = ["rock","paper","scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playRound (playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection)
    if (result == "Tie") {
        return "its a tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
console.log("Welcome")
for (let i = 0; i<5;i++){
    const playerSelection = prompt("rock paper or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
}
}

game();

