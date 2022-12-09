function getComputerChoice() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];
    let num=Math.floor(Math.random()*3)
    return rps[num];
}
let playerCount=0;
let computerCount=0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection==="ROCK") && (computerSelection==="PAPER")) {
        computerCount+=1;
        return "YOU LOSE! PAPER beats ROCK";
    }
    
    else if ((playerSelection==="ROCK") && (computerSelection==="SCISSORS")) {
        playerCount+=1;
        return "YOU WIN! ROCK beats SCISSORS";
    }

    else if (playerSelection==="PAPER" && computerSelection==="SCISSORS") {
        computerCount+=1;
        return "YOU LOSE! SCISSORS beats PAPER"
    }
    else if (playerSelection==="SCISSORS" && computerSelection==="ROCK") {
        computerCount+=1;
        return "YOU LOSE! ROCK beats SCISSORS";
    }
    else if (playerSelection==="PAPER" && computerSelection==="ROCK") {
        playerCount+=1;
        return "YOU WIN! PAPER beats ROCK"
    }
    else if (playerSelection==="SCISSORS" && computerSelection==="PAPER") {
        playerCount+=1;
        return "YOU WIN! SCISSORS beats PAPER";
    }
    else {
        return "DRAW"
    }
}





function game() {
    for(let i=0; i<5; i++) {
        let playerSelection = prompt("ROCK ,PAPER OR SCISSORS???").toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playerSelection)
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        // playRound();
    }
    if (playerCount> computerCount) {
        return console.log("You Won");
    }
    else if (computerCount> playerCount) {
        return console.log("You Lost")
    }
    else {
        return console.log("Draw");
    }
}
game();
