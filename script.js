let gameComponents = ["rock","paper","scissors"];
let computerChoice = document.querySelector("#computerchoice");
let userChoice = document.querySelector("#userchoice");
let score = document.querySelector("#score");
let images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('click', () => {
        let computerMove = gameComponents[(Math.floor(Math.random()*gameComponents.length))];
        userMove=image.id;
        if((userMove == "rock" && computerMove == "scissors")||(userMove == "scissors" && computerMove == "paper")||(userMove == "paper" && computerMove == "rock")){
            computerChoice.textContent = computerMove;
            userChoice.textContent = userMove;
            score.textContent = "User Win!"
        }else if(userMove == computerMove){
            computerChoice.textContent = computerMove;
            userChoice.textContent = userMove;
            score.textContent = "Draw!"
        }else{
            computerChoice.textContent = computerMove;
            userChoice.textContent = userMove;
            score.textContent = "Computer Win!"
        }
    });
});

