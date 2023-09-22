let playerScore = 0;
let computerScore = 0;

//Turns the different options of choice into and array. By doing this it will choose a random number from the array using Math.random()
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    const indexValue = choices[index];
    return indexValue;
}

//console.log(getComputerChoice())

//Uses a switch case to determin the different outcomes of the players selection
function playRound(playerSelection, computerSelection) {
    const computerChoice = getComputerChoice();
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerChoice === 'rock') {
                playerScore += 1;
                computerScore += 1;
                return "It's a tie!";
            }
            else if (computerChoice === 'paper') {
                computerScore += 1;
                return "Paper beats rock, you loose!";
            }
            else if (computerChoice === 'scissors') {
                playerScore += 1;
                return "Rock beats scissors, you win!";
            }
            break;
        case 'paper':
            if (computerChoice === 'rock') {
                playerScore += 1;
                return "Paper beats rock, you win!";
            }
            else if (computerChoice === 'paper') {
                playerScore += 1;
                computerScore += 1;
                return "It's a tie!";
            }
            else if (computerChoice === 'scissors') {
                computerScore += 1;
                return "Scissors beats paper, you loose!";
            }
            break;
        case 'scissors':
            if (computerChoice === 'rock') {
                computerScore += 1;
                return "Rock beats scissors, you loose!";
            }
            else if (computerChoice === 'paper') {
                playerScore += 1;
                return "Scisccors beats paper, you win!";
            }
            else if (computerChoice === 'scissors') {
                playerScore += 1;
                computerScore += 1;
                return "It's a tie!"
            }
            break;
        default:
            return "Invalid choice, please choose Rock, Paper or Scissors";
            break;
    }
}

const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');
const resultText = document.querySelector('#resultText');
const scoreHuman = document.querySelector('#scoreHuman');
const scoreComputer = document.querySelector('#scoreComputer');

rockBtn.addEventListener('click', () => {
    resultText.textContent = playRound('rock', getComputerChoice());
    scoreHuman.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  });

paperBtn.addEventListener('click', () => {
    resultText.textContent = playRound('paper', getComputerChoice());
    scoreHuman.textContent = playerScore;
    scoreComputer.textContent = computerScore;
});

scissorsBtn.addEventListener('click', () => {
    resultText.textContent = playRound('scissors', getComputerChoice());
    scoreHuman.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  });

//Creates a game of a given length and promts the user to enter a choice until the game is over to determin a winner of the game.
/* function game() {
    let gameLength = 5;
    for (let gameCount = 0; gameCount < gameLength; gameCount++) {
        const playerChoice = prompt("Enter your choice: Rock, Paper or Scissors").toLowerCase();
        playRound(playerChoice, getComputerChoice());
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore > computerScore) {
        return "You win! " + "Your score = " + playerScore + " Computer score = " + computerScore;
    }
    else {
        return "You loose! Better luck next time " + "Computer score = " + computerScore + " Your score = " + playerScore;
    }
}

console.log(game());
*/
