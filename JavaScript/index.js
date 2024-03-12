const choices=["Rock","Paper","Scissor"];
function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3);
    return computerChoice;
}
function singleRound(userChoice,computerChoice){
    if((userChoice===0 && getComputerChoice===2)||(userChoice===1 && computerChoice===0)||(userChoice===2 && computerChoice===1)){
        return 1;
        // console.log("Congratulation!! You are the winner");
    }else if((userChoice===2 && getComputerChoice===0)||(userChoice===0 && computerChoice===1)||(userChoice===1 && computerChoice===2)){
        return 2
        // console.log("Hard luck! You lost")
    }
    else 
        return 0;
    // return console.log("It is a draw");

}

function playGame(){
    let userScore=0,computerScore=0,draw=0;
    let userChoice;
    let computerChoice;
    let singleRoundWinner;
    for(let i=0;i<=4;i++){
        userChoice=Number(prompt(`for Rock ,Paper and scissor for 0,1 and 2 respectively \n Round: ${i+1}\n Your score:${userScore} \n Computer score:${computerScore}\n Draws:${draw}`));
        computerChoice=getComputerChoice();
        singleRoundWinner=singleRound(userChoice,computerChoice);
        // if(singleRoundWinner===0)
        //     draw++;
        // else if(singleRoundWinner===1)
        //     userScore++;
        // else
        //     computerScore++;
        switch (singleRoundWinner){
            case 0:
                draw++;
                break;
            case 1:
                userScore++;
                break;
            case 2:
                computerScore++;
                break;

        }
    }
    if(userChoice>computerChoice)
        alert("Congratulation!!! You are the winner ");
    else if(computerChoice>userChoice)
        alert("Hard luck!! You lost ")
    else
        alert("It is a draw");
}   
playGame();