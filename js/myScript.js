/* JS */
let computerSelection;
let playerSelection;
let wynik;
const hwybor = document.querySelector('#hwybor');
const hwynik = document.querySelector('#hwynik');


const p = document.createElement("P");
p.textContent = "WYNIK";
p.style.cssText = "color: black; text-align: center;"

hwynik.appendChild(p);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        playerSelection = button.id;
        alert(playerSelection);
        game();
    });
});



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
    console.log("random: " + random)
    computerSelection = computerSelection.toUpperCase();
}




function rockPaperScissors(){
    if(computerSelection===playerSelection){
        wynik="remis";
    }else if(computerSelection === "PAPER" && playerSelection === "SCISSORS"){
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
    for(let i = 0; i < 1; i++){
        computerPlay();
        rockPaperScissors();
        if(wynik === "gracz wygral"){
            wynikGracza++;
        }else if(wynik === "komputer wygral"){
            wynikKomputera++;
        };
        console.log("Gracz : " + wynikGracza + "  Komputer : " + wynikKomputera )
    }
    console.log("Wynik koncowy \n Gracz : " + wynikGracza + "   Komputer : " + wynikKomputera)
}




