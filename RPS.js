const buttons=document.querySelectorAll("button");
const scorePlayer=document.querySelector("[data-youScore]");
const scoreComputer=document.querySelector("[data-computerScore]")


buttons.forEach(button => button.addEventListener("click",()=>{
    const playerChoice=button.classList.value                //type STRIN
    let result=playRound(playerChoice,getComputerChoice())

    const div=document.querySelector(".scoreboard");
    div.textContent=result
}))



function getComputerChoice() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];
    let num=Math.floor(Math.random()*3)
    return rps[num];
}

let round=0;

function playRound(playerSelection, computerSelection) {    
    if(round===5) {
        if(parseInt(scorePlayer.innerText)>parseInt(scoreComputer.innerText)) {
            return "CONGRATULATIONS!! YOU WON"
           }
           else return "HARD LUCK! YOU LOST"
        }
    else if ((playerSelection==="ROCK") && (computerSelection==="PAPER")) {
        round+=1;
        scoreComputer.innerText= parseInt(scoreComputer.innerText)+ 1;
        return "YOU LOSE! PAPER beats ROCK";
    }
    
    else if ((playerSelection==="ROCK") && (computerSelection==="SCISSORS")) {
        round+=1;
        scorePlayer.innerText=parseInt(scorePlayer.innerText)+ 1;
        return "YOU WIN! ROCK beats SCISSORS";
    }

    else if (playerSelection==="PAPER" && computerSelection==="SCISSORS") {
        round+=1;
        scoreComputer.innerText= parseInt(scoreComputer.innerText)+ 1;
        return "YOU LOSE! SCISSORS beats PAPER"
    }
    else if (playerSelection==="SCISSORS" && computerSelection==="ROCK") {
        round+=1;
        scoreComputer.innerText= parseInt(scoreComputer.innerText)+ 1;
        return "YOU LOSE! ROCK beats SCISSORS";
    }
    else if (playerSelection==="PAPER" && computerSelection==="ROCK") {
        round+=1;
        scorePlayer.innerText=parseInt(scorePlayer.innerText)+ 1;
        return "YOU WIN! PAPER beats ROCK"
    }
    else if (playerSelection==="SCISSORS" && computerSelection==="PAPER") {
        round+=1;
        scorePlayer.innerText=parseInt(scorePlayer.innerText)+ 1;
        return "YOU WIN! SCISSORS beats PAPER";
    }
    else {
        round+=1;
        return "DRAW"
    }
}

let computerChoice=getComputerChoice()







// function game() {
//     let playerSelection=playerChoice()
//     console.log(typeof(playerSelection))
//     if (playerCount> computerCount) {
//         return console.log("You Won");
//     }
//     else if (computerCount> playerCount) {
//         return console.log("You Lost")
//     }
//     else {
//         return console.log("Draw");
//     }
// }
// game();
