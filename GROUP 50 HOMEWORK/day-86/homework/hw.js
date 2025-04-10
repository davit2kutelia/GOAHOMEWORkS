let word = "მზე";
let language = prompt("შეიყვანე ენა (ქართული, ინგლისური, ფრანგული):");

switch (language) {
    case "ქართული":
        console.log(word);
        break;
    case "ინგლისური":
        console.log("sun");
        break;
    case "ფრანგული":
        console.log("soleil");
        break;
    default:
        console.log("ასეთი ენა არ არსებობს.");
        break;
}
