function getComputerChoice() {
    const choice = ['Rock','Paper','Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber].toLowerCase();
}