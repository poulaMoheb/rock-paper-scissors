const choices=["Rock","Paper","Scissor"];
function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3);
    console.log(choices[computerChoice]);
    return choices[computerChoice];
}
getComputerChoice();