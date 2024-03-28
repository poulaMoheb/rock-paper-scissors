// JS variables
let userScore=0;
let comScore=0;
let rounds=0;
let userChoice; 
let comChoice=getComputerChoice();

// DOM Elements
const userScoreText=document.querySelector(".user");
const computerScoreText=document.querySelector(".computer");
const roundText=document.querySelector(".round");
const computerContainer=document.querySelector(".computer-side");
const userContainer=document.querySelector(".user-side");
const rockButton=document.querySelector(".rock");
const paperButton=document.querySelector(".paper");
const scissorButton=document.querySelector(".scissor");
const mainText=document.querySelector(".main-text");
const restartButton=document.querySelector(".restart");


// Event listeners
rockButton.addEventListener("click",()=>{
    userChoice=0;
    singleRound(userChoice,comChoice);
    console.log(`this is the com choice ${comChoice}`);
});
paperButton.addEventListener("click",()=>{
    userChoice=1;
    singleRound(userChoice,comChoice);
    console.log(`this is the com choice ${comChoice}`);
});
scissorButton.addEventListener("click",()=>{
    userChoice=2;
    singleRound(userChoice,comChoice);
    console.log(`this is the com choice ${comChoice}`);
    
});

restartButton.addEventListener("click",()=>{
    restart();
})


// Function 

function singleRound(userChoice,computerChoice){
    if((userChoice===0 && getComputerChoice===2)||(userChoice===1 && computerChoice===0)||(userChoice===2 && computerChoice===1)){
        rounds+=1;
        userScore+=1;
        roundText.textContent=rounds;   
        userScoreText.textContent=userScore;
        mainText.textContent="You won this round. ";
    }else if((userChoice===2 && getComputerChoice===0)||(userChoice===0 && computerChoice===1)||(userChoice===1 && computerChoice===2)){
        rounds+=1;
        comScore+=1;
        roundText.textContent=rounds;
        computerScoreText.textContent=comScore;
        mainText.textContent="You lost the round.";
    }
    else 
        mainText.textContent="This round is draw,so we will repeat it. ";
    comChoice=getComputerChoice();
    if(rounds>=5)
        gameEnd();
}

function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3);
    return computerChoice;
}

function restart(){
    userScore=0;
    comScore=0;
    rounds=0;
    userScoreText.textContent=userScore;
    computerScoreText.textContent=comScore;
    roundText.textContent=rounds;
    mainText.textContent="Who will win!!";
    userContainer.style.cssText="";
    computerContainer.style.cssText="";
    rockButton.disabled=false;
    paperButton.disabled=false;
    scissorButton.disabled=false;
}



function gameEnd(){
    if(userScore>comScore){
        userContainer.style.cssText="background-color:green;";
        computerContainer.style.cssText="background-color:red;";
        mainText.textContent="Congratulation!! to play again click restart.";
    }
    else {
        computerContainer.style.cssText="background-color:green;";
        userContainer.style.cssText="background-color:red;";
        mainText.textContent="Hard Luck!! to play again click restart..";
    }
    rockButton.disabled=true;
    paperButton.disabled=true;
    scissorButton.disabled=true;
}