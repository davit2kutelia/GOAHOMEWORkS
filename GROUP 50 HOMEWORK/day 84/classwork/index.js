// document.addEventListener("click", function(event) {
//     console.log(event.target.innerText);

//     if (event.target.innerText === "click me") {
//         event.target.style.color = "red";
//     }

//     if (event.target.innerText === "hello") {
//         event.target.style.color = "blue";
//     }

//     if (event.target.innerText === "goa") {
//         event.target.style.color = "yellow";
//



document.addEventListener("click", function(event) {
    console.log(event.target.id);
    
    if (event.target.id == "red") {
        event.target.style.backgroundColor = "red";
    }
});