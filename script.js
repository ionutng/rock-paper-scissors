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

function game() {
    let winsPlayer=0,
        winsComputer=0;
    for (let i = 0; i < 5; i++) {
        let decision = playRound(getComputerChoice(),getPlayerChoice());
        console.log(decision);
        if(decision.slice(0,8) === 'You Lose') {
            ++winsComputer;
        }
        else if(decision.slice(0,7) === 'You Win') {
            ++winsPlayer;
        }
        else {
            ++winsComputer;
            ++winsPlayer;
        }
        console.log(`Your score: ${winsPlayer}\nComputer's score: ${winsComputer}`);
    }
    if(winsComputer > winsPlayer) {
        console.log('The computer won!');
    }
    else if(winsComputer < winsPlayer){
        console.log('You won!');
    }
    else {
        console.log('The game ended in a tie!');
    }
}
game();