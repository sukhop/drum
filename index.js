var drum = document.querySelectorAll('.drum');

for(i=0;i<drum.length;i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function (){
        let drumInnerHtml = this.innerHTML;
        sound(drumInnerHtml);
        btnPressed(drumInnerHtml);
    });
    document.addEventListener("keydown", function (e){
        sound(e.key);
        btnPressed(e.key);
    });

    function sound(key) {
        switch(key) {
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
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
        }
    }
};

function btnPressed(currentbtn) {
    var activeBtn = document.querySelector("."+currentbtn);
    activeBtn.classList.add('pressed');
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio("./sounds/tom-1.mp3")
// audio.play();