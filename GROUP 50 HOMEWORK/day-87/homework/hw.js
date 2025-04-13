let button = document.querySelector("button")
let img = document.querySelectorAll("img")

let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")


let score1span = document.getElementsByClassName("score1")[0]
let score2span = document.getElementsByClassName("score2")[0]


score1 = 0
score2 = 0


button.addEventListener("click" , function(){
    let counter1 = Math.floor(Math.random()*6+1)
    let counter2 = Math.floor(Math.random()*6+1)
    player1.src = `dice_${counter1}.png`
    player2.src = `dice_${counter2}.png`

    if(counter1 > counter2){
        score1 += 1;
    }if(counter1 < counter2){
        score2 += 1;
    }

    score1span.textContent = score1;
    score2span.textContent = score2;


    if (score1 === 10){
        alert("player 1 won the game")
        score1 = 0
        score2 = 0
        score1span.textContent = score1
        score2span.textContent = score2
    }if(score2 === 10){
        alert("player 2 won the game")
        score1 = 0
        score2 = 0
        score1span.textContent = score1
        score2span.textContent = score2
    }

    
    
})


















// let dice1 = 
// let dice2 = 
// let dice3 = 
// let dice4 = 
// let dice5 =
// let dice6 =