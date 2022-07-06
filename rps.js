/*function playRound(playerPlay,compPlay){

    if (compPlay == playerPlay){
        return `It's a tie! You both picked ${playerPlay}.`;
    }
    else if (
        (playerPlay == "rock" && compPlay == "Scissors")||
        (playerPlay=="Paper" && compPlay == "rock")||
        (playerPlay == "Scissors" && compPlay == "paper")
    ){
        return `You win! ${playerPlay} beats ${compPlay}.`
    }
    else{
        return `You lose! ${compPlay} beats ${playerPlay}.`
    }
};

function game(){
    for(let round=0; round<5; round++){
        result = playRound(playerPlay,compPlay);
       //console.log(result);

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
};
*/

const options = document.querySelectorAll('.options');
let pscore = 0;
let cscore = 0;

options.forEach((option)=>{
    option.addEventListener('click', function(){
        const pInput = this.textContent;

        const cOptions = ['Rock','Paper','Scissors'];
        const cInput = cOptions[Math.floor(Math.random()*3)];
        compare(pInput,cInput);
        scoreUpdate();
        if(gameWinner()){
            pscore = cscore = 0;
            scoreUpdate();
        }
    })
});

function compare(pInput,cInput){
    const match = `${pInput} VS ${cInput}`
    if (pInput == cInput){
        alert (`${match}. It's a tie!`);
    }
    else if (
        (pInput == "Rock" && cInput == "Scissors")||
        (pInput=="Paper" && cInput == "Rock")||
        (pInput == "Scissors" && cInput == "Paper")
    ){
        pscore++;
        alert (`${match}. You win!`);
    }
    else{
        cscore ++;
        alert (`${match}. You lose!`);
    }
};

function scoreUpdate(){
    document.getElementById("p-score").textContent = pscore;
    document.getElementById("c-score").textContent = cscore;
};

function gameWinner(){
    if(pscore === 3 || cscore === 3){
        const winner =
        pscore === 3

        ? `Glorious Victory!!`
        : `You have tasted defeat!!`
        alert (winner);
        return true;
    }
    return false;
}
