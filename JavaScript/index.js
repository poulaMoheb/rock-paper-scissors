const choices=["Rock","Paper","Scissor"];
function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3);
    return computerChoice;
}
function singleRound(userChoice,computerChoice){
    
    if((userChoice===0 && getComputerChoice===2)||(userChoice===1 && computerChoice===0)||(userChoice===2 && computerChoice===1)){
        console.log("Congratulation!! You are the winner");
    }else if((userChoice===2 && getComputerChoice===0)||(userChoice===0 && computerChoice===1)||(userChoice===1 && computerChoice===2)){
        console.log("Hard luck! You lost")
    }
    else 
    return console.log("It is a draw");

}