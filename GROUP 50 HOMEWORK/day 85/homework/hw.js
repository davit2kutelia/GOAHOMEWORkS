let audios = [
    'tom-1.mp3',
    'tom-2.mp3',
    'tom-4 (1).mp3',
    'tom-4.mp3',
    'snare.mp3',
    'kick-bass.mp3'
];


let all = document.getElementsByClassName('div-ch');

document.addEventListener('keydown', function (e) {
    let audio;

    
    if (e.key === "a") {
        audio = new Audio(audios[0]);
    }
    if (e.key === "w") {
        audio = new Audio(audios[1]);
    }
    if (e.key === "d") {
        audio = new Audio(audios[2]);
    }
    if (e.key === "e") {
        audio = new Audio(audios[3]);
    }
    if (e.key === "s") {
        audio = new Audio(audios[4]);
    }
    if (e.key === "f") {
        audio = new Audio(audios[5]);
    }

    
    if (audio) {
        audio.play();
    }
});