function getComputerChoice() {
    const choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

console.log(getComputerChoice());