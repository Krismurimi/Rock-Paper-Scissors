function computerPlay(){
    const pick= ["rock","paper","scissors"];
    var randPick = pick[Math.floor(Math.random()* pick.length)];
    return randPick;
}
computerSelection= computerPlay();
console.log(computerSelection);
playerPick = prompt("Pick rock, paper, or scissors:");
playerSelection = playerPick.toLowerCase();
console.log(playerSelection);

function playRound(){
    if (computerSelection == playerSelection){
        return `It's a tie! You both picked ${playerSelection}.`;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection=="paper" && computerSelection == "rock")||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}
let result = playRound();
console.log(result);
