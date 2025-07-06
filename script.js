console.log("Hello, world!");
const choices = ["rock", "paper", "scissors"];
let playerscore = 0;
let computerscore = 0;

function playgame() {
    for (let i = 0; i < 5; ++i) {
        let playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!");
            playerscore++;
        } else {
            console.log("You lose!");
            computerscore++;
        }
    }
    console.log(`Final Score - Player: ${playerscore}, Computer: ${computerscore}`);
}

playgame();


    
    



// This is a simple rock-paper-scissors game
