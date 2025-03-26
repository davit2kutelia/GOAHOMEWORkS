let sub = document.getElementsByClassName("subject")[0];

sub.addEventListener("click", function() {
    sub.style.border = "2px solid orange";
});

sub.addEventListener('mouseout' , function(){
    sub.style.border = "1px solid grey"
})


let email = document.getElementsByClassName("email")[0];

email.addEventListener("click", function() {
    email.style.border = "2px solid orange";
});

email.addEventListener('mouseout' , function(){
    email.style.border = "1px solid grey"
})



let name = document.getElementsByClassName("name")[0];

name.addEventListener("click", function() {
    name.style.border = "2px solid orange";
});

name.addEventListener('mouseout' , function(){
    name.style.border = "1px solid grey"
})



let text2 = document.getElementsByClassName("text2")[0];

text2.addEventListener("click", function() {
    text2.style.border = "2px solid orange";
});

text2.addEventListener('mouseout' , function(){
    text2.style.border = "1px solid grey"
})





let last = document.getElementsByClassName("last")[0];

last.addEventListener('mouseover', function() {
    last.textContent = "Good Choice!"
})

last.addEventListener('mouseout', function() {
    last.textContent = "See Our Projects >>"
})