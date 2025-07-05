console.log("Hello, world!")
getcomputerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
getplayerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let playerChoice;
    do {
        playerChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    } while (!choices.includes(playerChoice));
    return playerChoice;
}
playround = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
playgame = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getplayerchoice();
        const computerSelection = getcomputerchoice();
        const result = playround(playerSelection, computerSelection);
        console.log(result);
        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
}
playgame()