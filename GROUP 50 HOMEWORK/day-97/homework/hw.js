let cloack = document.getElementById("cloack")

let heartBtn = document.querySelector("#hr")

let heart = document.querySelector(".heart");

let time = document.querySelector(".Time")


let black = document.getElementById("black")

let red = document.getElementById("red")

let purple = document.getElementById("purple")

let pink = document.getElementById("pink")

let watch = document.querySelector(".watch")

setInterval(() =>{

    let date = new Date();

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()


    seconds = seconds < 10 ? `0${seconds}` : seconds


    cloack.textContent = `${hour}:${minute}:${seconds}`
},1000)



heartBtn.addEventListener("click", () => {
    heart.style.display = "flex";
    cloack.style.display = "none"
});

time.addEventListener("click", () =>{
    heart.style.display = "none"
    cloack.style.display = "flex"
})

black.addEventListener("click" , () =>{
    watch.src = "black.png"
})

purple.addEventListener("click" , () =>{
    watch.src = "purple.png"
})

red.addEventListener("click" , () =>{
    watch.src = "red.png"
})


pink.addEventListener("click" , () =>{
    watch.src = "pink.png"
})





