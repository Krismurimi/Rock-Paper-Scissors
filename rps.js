function computerPlay(){
    const pick= ["rock","paper","scissors"];
    var randPick = pick[Math.floor(Math.random()* pick.length)];
    return randPick;
}
var compPlay="";

function Player(){
    let pick= prompt("Pick rock, paper, or scissors:");
    let playerPick = pick.toLowerCase();
    return playerPick;
 }
 
var playerPlay="";
;

function playRound(){
    //computerPlay();
    compPlay = computerPlay();
    //Player();
    playerPlay = Player();
    console.log(`Player: `+playerPlay);
    console.log(`Computer: `+compPlay);

    if (compPlay == playerPlay){
        return `It's a tie! You both picked ${playerPlay}.`;
    }
    else if (
        (playerPlay == "rock" && compPlay == "scissors")||
        (playerPlay=="paper" && compPlay == "rock")||
        (playerPlay == "scissors" && compPlay == "paper")
    ){
        return `You win! ${playerPlay} beats ${compPlay}.`
    }
    else{
        return `You lose! ${compPlay} beats ${playerPlay}.`
    }
}
let result = "";


player_score = 0;
comp_score = 0;
ties = 0;

function game(){
    for(let round=0; round<5; round++){
        result = playRound();
        console.log(result);

        if(result ==`It's a tie! You both picked ${playerPlay}.`){
            ties +=1;
        }
        else if(result ==`You win! ${playerPlay} beats ${compPlay}.`){
            player_score +=1;
        }
        else{
            comp_score +=1;
        }
    }
    if(player_score>comp_score){
        return `You win the game!!\nPlayer: ${player_score}\nComputer: ${comp_score}\nTies: ${ties}`
    }
    else if(player_score<comp_score){
        return `You lose the game!!\nPlayer: ${player_score}\nComputer: ${comp_score}\nTies: ${ties}`
    }
    else{
        return `It's a tie!!\nPlayer: ${player_score}\nComputer: ${comp_score}\nTies: ${ties}`
    }
    
}

let playGame= game();
console.log(playGame);




