// This is a JavaScript code for Rock,Paper and Scissor game !

function computerPlay(){ // This function generates random computer action for the game
    let arr = ['ROCK','PAPER','SCISSORS'];
    let returnedArr = arr[Math.floor(Math.random() * arr.length)];
    return returnedArr;
}
// This function is used to play single round of RPS Game.
function playRound(playerSelection,computerSelection){
    // Condition 1
    if(playerSelection === ("ROCK"||"rock"||"Rock") && computerSelection === ("SCISSORS"||"scissors"||"Scissors")){
        console.log("You win! Rock beats Scissors");
    }else if(playerSelection === ("SCISSORS"||"scissors"||"Scissors") && computerSelection === ("ROCK"||"rock"||"Rock")){
            console.log('You loose! Rock beats Scissors');  
    // Condition 2          
    }else if(playerSelection === ("PAPER"||"paper"||"Paper") && computerSelection === ("SCISSORS"||"scissors"||"Scissors")){
        console.log('You loose! Scissors beats Paper');
    }else if(playerSelection === ("SCISSORS"||"scissors"||"Scissors") && computerSelection === ("PAPER"||"paper"||"Paper")){
        console.log('You win! Scissors beats Paper');
    //Condition 3    
    }else if(playerSelection === ("PAPER"||"paper"||"Paper") && computerSelection === ("ROCK"||"rock"||"Rock")){
        console.log('You win! Paper beats Rock');
    }
    else if(playerSelection === ("ROCK"||"rock"||"Rock") && computerSelection === ("PAPER"||"paper"||"Paper")){
    console.log('You loose! Paper beats Rock');
    // else condition
    }else{
        console.log('Tie Breaker!');
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));