/* JS */
let computerSelection;
let playerSelection;
let wynik;
function computerPlay(){
    let min=1;
    let max=4;
    let random = Math.floor(Math.random()*(+max - +min))+ +min;
    switch (random){
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "rock";
            break;
        case 3:
            computerSelection = "scissors"
            break;
    }
    computerSelection = computerSelection.toUpperCase();
}
function playerPlay(){
    playerSelection = prompt("Papier, Kamien, Nozyce?");
    playerSelection= playerSelection.toUpperCase();    
}
function rockPaperScissors(){
    if(computerSelection===playerSelection){
        wynik="remis";
    }else if(computerSelection === "PAPER" && playerSelection === "SICSSORS"){
        wynik="gracz wygral";
    }else if(computerSelection === "PAPER" && playerSelection === "ROCK"){
        wynik="komputer wygral";
    }else if(computerSelection === "ROCK" && playerSelection === "PAPER"){
        wynik="gracz wygral";
    }else if(computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        wynik="komputer wygral";
    }else if(computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        wynik="komputer wygral";
    }else if(computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        wynik="gracz wygral";
    }
}
function game(){
    let wynikGracza = 0;
    let wynikKomputera =0;
    for(let i = 0; i < 5; i++){
        playerPlay();
        computerPlay();
        rockPaperScissors();
        if(wynik === "gracz wygral"){
            wynikGracza++;
        }else if(wynik === "komputer wygral"){
            wynikKomputera++;
        };
        alert("Gracz : " + wynikGracza + "  Komputer : " + wynikKomputera )
    }
    alert("Wynik koncowy \n Gracz : " + wynikGracza + "   Komputer : " + wynikKomputera)
}
game();
