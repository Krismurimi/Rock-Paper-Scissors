const options = document.querySelectorAll('.options');
let pscore = 0;
let cscore = 0;
const matchResult = document.querySelector('div');
const paragraph = document.createElement('p');

matchResult.appendChild(paragraph);

options.forEach((option)=>{
    option.addEventListener('click', function(){
        const pInput = this.textContent;

        const cOptions = ['Rock','Paper','Scissors'];
        const cInput = cOptions[Math.floor(Math.random()*3)];
        result = compare(pInput,cInput);
        paragraph.textContent = `${result}`;
        scoreUpdate();
        if(gameWinner()){
            pscore = cscore = 0;
            scoreUpdate();
            paragraph.textContent = "";
        }
    })
});

function compare(pInput,cInput){
    const match = `${pInput} VS ${cInput}`
    if (pInput == cInput){
        return `${match}. It's a tie!`;
    }
    else if (
        (pInput == "Rock" && cInput == "Scissors")||
        (pInput=="Paper" && cInput == "Rock")||
        (pInput == "Scissors" && cInput == "Paper")
    ){
        pscore++;
        return `${match}. You win!`;
    }
    else{
        cscore ++;
        return `${match}. You lose!`;
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
};