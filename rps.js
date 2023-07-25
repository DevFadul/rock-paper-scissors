function getComputerChoice() {
    const choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

function playRound (playerSelection,computerSelection) {
    return "You Lose! Paper beats Rock";
}

console.log(playRound());