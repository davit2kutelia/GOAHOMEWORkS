// ვენთლისენერის ფუნქციას თვით სახელი გვეუბნება ანუ უსმეს რაიმე მოვლენას ეს შეიძლება იყოს მაუსის დაჭერა ან გადატარებაე

myh1.addEventListener("click", function() {
    myh1.textContent = "lesson 80";
});

let myimg = document.getElementById("myimg")
myimg.addEventListener('mouseover' , function(){
myimg.src = "Screenshot 2024-12-04 223411.png"
})


myimg.addEventListener("mouseout", function(){
    myimg.src = "pexels-matheusnatan-3297593.jpg"
})

myimg.addEventListener("click" , function(){
    myimg.src = "download.png"
})


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    
    if (password === "" || confirmPassword === "") {
        alert("Input fields cannot be empty.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match eachother. Try again.");
    } else {
        alert("Your login was successful");
    }
});