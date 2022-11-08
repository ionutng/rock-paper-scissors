let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function getPlayerChoice() {
    const choice = prompt("What do you choose?");
    if (choice.toLowerCase() === 'rock') {
        return 'rock';
    }
    else if (choice.toLowerCase() === 'paper') {
        return 'paper';
    }
    else if (choice.toLowerCase() === 'scissors') {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return('It\'s a tie!');
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        computerScore++;
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let decision = playRound(getPlayerChoice(),getComputerChoice());
        console.log(decision);
        console.log(`Your Score: ${playerScore} - Computer's score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log('You won the game!');
    } else if (playerScore < computerScore) {
        console.log('The computer won the game!');
    } else {
        console.log('The game ended in a tie!');
    }
}

game();