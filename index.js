// detecting button pressed
let numberOfDrumButtons = document.querySelectorAll('.drum').length;
for(let i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function () {
      let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
};
// detecting keyboard pressed
document.addEventListener("keypress", (event)=>{
    makeSound(event.key) //key property of the event
    buttonAnimation(event.key);
 })
function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("/crash.mp3");
            audio.play();
        break;
        case"a":
            var audio = new Audio("/kick-bass.mp3");
            audio.play();
        break;
        case"s":
        var audio = new Audio("/snare.mp3");
        audio.play();
        break;
        case"d":
            var audio = new Audio("/tom-1.mp3");
            audio.play();
        break;
        case"j":
            var audio = new Audio("/tom-2.mp3");
            audio.play();
        break;
        case"k":
        var audio = new Audio("/tom-3.mp3");
        audio.play();
        break;
        case"l":
        var audio = new Audio("/tom-4.mp3");
     audio.play();
        break;

        default:
      }
}

function  buttonAnimation(currentkey){
   let activeButton = document.querySelector("." + currentkey);
   activeButton.classList.add('pressed');
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}
// OR

// const crashEl = document.getElementById('crash');
// const kickEl = document.getElementById('kick');
// const snareEl = document.getElementById('snare');
// const tom1EL = document.getElementById('tom-1');
// const tom2EL = document.getElementById('tom-2');
// const tom3EL= document.getElementById('tom-3');
// const tom4EL= document.getElementById('tom-4');


// function playCrash(){
//     let audio = new Audio("sounds/crash.mp3");
//     audio.play();
// }
// function playKick(){
//     let audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
// }
// function playSnare(){
//     let audio = new Audio("sounds/snare.mp3");
//     audio.play();
// }
// function playTom1(){
//     let audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }
// function playTom2(){
//     let audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
// }
// function playTom3(){
//     let audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
// }
// function playTom4(){
//     let audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
// }

// crashEl.addEventListener('click', playCrash);
// kickEl.addEventListener('click', playKick);
// snareEl.addEventListener('click', playSnare);
// tom1EL.addEventListener('click', playTom1);
// tom2EL.addEventListener('click', playTom2);
// tom3EL.addEventListener('click', playTom3);
// tom4EL.addEventListener('click', playTom4);