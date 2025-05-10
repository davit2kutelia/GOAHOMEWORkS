document.querySelector('.view-shop').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#nav').scrollIntoView({
        behavior: 'smooth'
    });
});


let spd1 = document.querySelector(".spd1")
let spd2 = document.querySelector(".spd2")
let spd3 = document.querySelector(".spd3")

let congrats = document.querySelector(".box")

let close = document.querySelector(".box-img")

 
spd1.addEventListener("click" , ()=>{
    congrats.style.display = "flex"
})

spd2.addEventListener("click" , ()=>{
    congrats.style.display = "flex"
})

spd3.addEventListener("click" , ()=>{
    congrats.style.display = "flex"
})

close.addEventListener("click" , ()=>{
    congrats.style.display = "none"
})