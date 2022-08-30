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