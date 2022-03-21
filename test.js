// This is a JavaScript code for Rock,Paper and Scissor game !

function computerPlay(){ // This function generates random computer action for the game
    let arr = ['ROCK','PAPER','SCISSORS'];
    let returnedArr = arr[Math.floor(Math.random() * arr.length)];
    return returnedArr;
}
// This function is used to play single round of RPS Game.
function playRound(playerSelection,computerSelection){
    // Condition 1
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log("You win! Rock beats Scissors");
    }else if(playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            console.log('You loose! Rock beats Scissors');  
    // Condition 2          
    }else if(playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        console.log('You loose! Scissors beats Paper');
    }else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        console.log('You win! Scissors beats Paper');
    //Condition 3    
    }else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log('You win! Paper beats Rock');
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER"){
    console.log('You loose! Paper beats Rock');
    }
    else if(playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        console.log('Wrong Input')
    }else{
        console.log('Tie Breaker!');
    }
}
const userPlay = prompt("choose : rock, paper or scissors")
const playerSelection =  userPlay.toUpperCase()
console.log(playerSelection)
const computerSelection = computerPlay();
console.log(computerSelection)

function game(){
    for(let i = 0;i < 5;i++){
       console.log(playRound(playerSelection,computerSelection));
    }
}
game();