var drumButtonList = document.querySelectorAll(".drum");
var audios = [
    new Audio("tom-1.mp3"),
    new Audio("tom-2.mp3"),
    new Audio("tom-3.mp3"),
    new Audio("tom-4.mp3"),
    new Audio("snare.mp3"),
    new Audio("kick-bass.mp3"),
    new Audio("crash.mp3")
];

for(var i = 0; i < drumButtonList.length; i++) {
    drumButtonList[i].addEventListener("click", function () {
        key = this.innerHTML;
        makeSound(key);
        buttonFlash(key)
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonFlash(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            audios[0].currentTime = 0;
            audios[0].play();
        break;
        case "a":
            audios[1].currentTime = 0;
            audios[1].play();
           break;
        case "s":
            audios[2].currentTime = 0;
            audios[2].play();
            break;
        case "d":
            audios[3].currentTime = 0;
            audios[3].play();
            break;
        case "j":
            audios[4].currentTime = 0;
            audios[4].play();
            break;
        case "k":
            audios[5].currentTime = 0;
            audios[5].play();
            break;
        case "l":
            audios[6].currentTime = 0;
            audios[6].play();
            break;
        default:
            break;
    }
}


function buttonFlash(buttonKey) {
    var keyPressed = document.querySelector("." + buttonKey);
    keyPressed.classList.toggle("pressed");
    setTimeout(function() {
        keyPressed.classList.toggle("pressed");
    }, 150)
}