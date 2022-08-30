function getComputerChoice() {
    const choice = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber].toLowerCase();
}

function getPlayerChoice() {
    const choice = prompt("What do you choose?");
    if (choice.toLowerCase() === 'rock') {
        return 'rock';
    }
    else if (choice.toLowerCase() === 'paper') {
        return 'paper';
    }
    else return 'scissors';
}

function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        return 'It\'s a tie!';
    }
    else {
        if(computerSelection === 'rock' && playerSelection === 'paper')
        return 'You Win! Paper beats Rock,';
        else if(computerSelection === 'rock' && playerSelection === 'scissors')
        return 'You Lose! Rock beats Scissors.';
        else if(computerSelection === 'paper' && playerSelection === 'rock')
        return 'You Lose! Paper beats Rock.';
        else if(computerSelection === 'paper' && playerSelection === 'scissors')
        return 'You Win! Scissors beats Paper.';
        else if(computerSelection === 'scissors' && playerSelection === 'rock')
        return 'You Win! Rock beats Scissors.';
        else if(computerSelection === 'scissors' && playerSelection === 'paper')
        return 'You Lose! Scissors beats Paper.';
    }
}

console.log(playRound(getComputerChoice(),getPlayerChoice()));