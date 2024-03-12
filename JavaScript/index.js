const choices=["Rock","Paper","Scissor"];
function getComputerChoice(){
    let computerChoice =Math.floor(Math.random()*3);
    return choices[computerChoice];
}
