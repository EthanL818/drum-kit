var buttonArray = document.querySelectorAll(".drum");

function switchCheck(comparison) {

    switch (comparison) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
    }

}

function handleClick() {
    var inputLetter = this.innerHTML;
    switchCheck(inputLetter);
    buttonAnimation(inputLetter);
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", function(event) {
    switchCheck(event.key);
    buttonAnimation(event.key);
});

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", handleClick);
}



