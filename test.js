// This is a JavaScript code for Rock,Paper and Scissor game !
function computerPlay(){
    let arr = ['Rock','Paper','Scissors']
    let returnedArr = arr[Math.floor(Math.random() * arr.length)];
    return returnedArr;
}
console.log(computerPlay());