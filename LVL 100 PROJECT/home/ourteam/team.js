let andria = document.querySelector(".andria");
let gabriel = document.querySelector(".gabriel");
let erekle = document.querySelector(".erekle");
let nika = document.querySelector(".nika");
let luka = document.querySelector(".luka");
let davit = document.querySelector(".davit");
let giorgi = document.querySelector(".giorgi");
let data = document.querySelector(".data");

let box = document.querySelector(".box");
let img = document.querySelector(".main-img");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let close = document.querySelector(".close");
let about = document.querySelector(".about");
let info = document.querySelector(".info");

close.addEventListener("click", () => {
    box.style.display = "none";
});

andria.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Andria";
    info.textContent = "Andria is exceptionally skilled in programming and martial arts, consistently delivering high-quality solutions with remarkable precision. Their disciplined approach in both fields ensures efficient problem-solving in coding and mastery of complex techniques in martial arts, making them a true professional.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/433847212_941041988022872_4722778871505308558_n.jpg";
    name.textContent = "Name: Andria";
    age.textContent = "Age: 17";
    info.style.fontSize = "20px";
});

gabriel.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Gabriel";
    info.textContent = "Gabriel is a dynamic individual with a blend of strategic thinking and physical agility. Combining mental focus and technical expertise, Gabriel excels in both martial arts and programming. Known for innovation, Gabriel’s approach to problem-solving in coding and combat techniques sets them apart. And my teacher :)";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/434741241_1793314374489341_868622480388596603_n.jpg";
    name.textContent = "Name: Gabriel";
    age.textContent = "Age: 19";
    info.style.fontSize = "20px";
});

erekle.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Erekle";
    info.textContent = "Erekle is a young, ambitious mind with a passion for both coding and martial arts. Despite their youth, Erekle demonstrates a strong ability to solve complex problems in software development while mastering martial techniques with great dedication and precision.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/456386280_1256572569046912_442791952674726939_n (1).jpg";
    name.textContent = "Name: Erekle";
    age.textContent = "Age: 15";
    info.style.fontSize = "20px";
});

nika.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Nika";
    info.textContent = "Nika is a seasoned individual whose strength in both martial arts and programming is unrivaled. With years of experience in these fields, Nika brings a unique perspective, solving coding challenges with precision while demonstrating unmatched skill and control in martial arts.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/468299859_542306438777207_8421424349304221225_n.jpg";
    name.textContent = "Name: Nika";
    age.textContent = "Age: 30";
    info.style.fontSize = "20px";
});

luka.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Luka";
    info.textContent = "Luka has a unique combination of technical expertise and martial prowess. Luka’s problem-solving abilities in both programming and martial arts make them a versatile asset to any team. Their disciplined approach to learning and growth ensures continual improvement and success in both fields.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/484584376_621539754136671_2422464545290892397_n.jpg";
    name.textContent = "Name: Luka";
    age.textContent = "Age: 23";
    info.style.fontSize = "20px";
});

davit.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Davit";
    info.textContent = "Davit brings a strong mindset and physical discipline to both martial arts and coding. With a knack for precision and an analytical approach to solving problems, Davit excels in both martial arts techniques and programming challenges. Their adaptability and quick learning allow them to tackle complex issues effortlessly.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/489832301_572658932509734_2480049740756087554_n.jpg";
    name.textContent = "Name: Davit";
    age.textContent = "Age: 22";
    info.style.fontSize = "20px";
});

giorgi.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Giorgi";
    info.textContent = "Giorgi's ability to balance both the technical and physical aspects of martial arts and coding makes them a valuable asset. With exceptional problem-solving skills in coding and a powerful approach to martial arts, Giorgi’s training and dedication inspire those around them to push their limits.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/486259734_3482451062060728_4905271010307291322_n.jpg";
    name.textContent = "Name: Giorgi";
    age.textContent = "Age: 22";
    info.style.fontSize = "20px";
});

data.addEventListener("click", () => {
    box.style.display = "flex";
    about.textContent = "About Data";
    info.textContent = "Data is an emerging talent with a sharp mind for both coding and martial arts. With their dedication to learning and improving, Data has demonstrated great potential in both fields. As a quick learner, Data adapts swiftly to challenges and is constantly seeking new ways to grow and refine their skills.";
    about.style.padding = "20px";
    info.style.padding = "20px";
    img.src = "/imgs/476337013_1139005947705433_3090963029247096978_n.jpg";
    name.textContent = "Name: Data";
    age.textContent = "Age: 17";
    info.style.fontSize = "20px";
});

