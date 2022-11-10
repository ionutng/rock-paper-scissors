let playerScore = 0,
    computerScore = 0,
    counter = 0;

const resultsDiv = document.createElement('div');
resultsDiv.setAttribute('style','white-space: pre;');
const results = document.querySelector('.results');

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function getPlayerChoice(choice) {
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

function playGame(playerSelection, computerSelection) {
    if (counter < 5) {
        if (playerSelection == computerSelection) {
            playerScore++;
            computerScore++;
            resultsDiv.textContent = 'It\'s a tie! ';
        }
        else if (
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            computerScore++;
            resultsDiv.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. `;
        }
        else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            playerScore++;
            resultsDiv.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. `;
        }
        resultsDiv.textContent += `\r\nYour Score: ${playerScore} - Computer Score: ${computerScore}`;
    } 
    counter++;
    if (counter == 5) {
        if (playerScore > computerScore) {
            resultsDiv.textContent += '\r\nYou won the game!!!';
        } else if (playerScore < computerScore) {
            resultsDiv.textContent += '\r\nThe computer won the game!!!';
        } else {
            resultsDiv.textContent += '\r\nThe game ended in a tie!!!';
        }
    }
    if (counter > 5) {
        window.location.reload();
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playGame(getPlayerChoice(button.className),getComputerChoice())));
results.appendChild(resultsDiv);
