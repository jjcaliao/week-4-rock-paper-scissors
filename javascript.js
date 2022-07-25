//rock paper scissors console game

var choices = Array("rock", "paper", "scissors");
var cscore = 0;
var pscore = 0;

var computerScore = document.getElementById("cscore");
var playerScore = document.getElementById("pscore");
var result = document.getElementById("result");
var btns = document.querySelectorAll("button");

function computerPlay(){ //randomly generates choice
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function round(playerChoice, computerChoice){ //generates outcomes for each rounds and adds to the score
    if(playerChoice == computerChoice){
        result.style.color = "orange";
        return "Tie!";
    }
    else if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            cscore ++;
            result.style.color = "#ff0000";
            return "Paper beats rock. You lose!";
        }
        else{
            pscore ++;
            result.style.color = "#00ff00";
            return "Rock beats scissors. You win!";
        }
    }
    else if(playerChoice == "paper"){
        if(computerChoice == "scissors"){
            cscore ++;
            result.style.color = "#ff0000";
            return "Scissors beats paper. You lose!";
        }
        else{
            pscore ++;
            result.style.color = "#00ff00";
            return "Paper beats rock. You win!";
        }
    }
    else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            cscore ++;
            result.style.color = "#ff0000";
            return "Rock beats scissors. You lose!";
        }
        else{
            pscore ++;
            result.style.color = "#00ff00";
            return "Scissors beats paper. You win!";
        }
    }
    else{
        result.style.color = "#ffffff";
        return "Invalid input. Either select 'rock', 'paper' or 'scissors'.";
    }
}

btns.forEach(possibleChoice => possibleChoice.addEventListener('click', function(e){
    let pchoice = e.target.id;
    let cchoice = computerPlay();
    result.innerHTML = round(pchoice, cchoice);
    computerScore.innerHTML = cscore;
    playerScore.innerHTML = pscore;
    if(pscore == 5){
        for (const btn of btns) {
            btn.disabled = true
        }
        result.style.color = "#ffffff";
        result.innerHTML = "You win!";
    }
    else if(cscore == 5){
        for (const btn of btns) {
            btn.disabled = true
        }
        result.style.color = "#ffffff";
        result.innerHTML = "Computer wins!";
    }
}));

//var c = "rock";
//console.log(round(c, computerPlay()));

// function game(){ //generates 5 rounds
//     for(let i=0; i<5; i++){
//         let playerc = window.prompt("rock, paper or scissors?").toLowerCase();
//         let computerc = computerPlay();
//         round(playerc, computerc);
//         console.log(round(playerc, computerc));
//         console.log("Computer: " + cscore/2 + " You: " + pscore/2);
//     }
//     if (cscore > pscore){
//         console.log("You lose!");
//     }
//     else if(pscore > cscore){
//         console.log("You win!");
//     }
//     else if(pscore == cscore){
//         console.log("It's a tie!");
//     }
// }

// game();