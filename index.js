var drumBtnLen = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumBtnLen; i++) {
  var drumEle = document.querySelectorAll(".drum")[i];
  drumEle.addEventListener("click", function(){
    mixSound(this.innerHTML);
  });
}

document.addEventListener("keypress", function(event){
    // console.log(event);
    console.log(event.key);
    mixSound(event.key);
  });




function randomColor() {
  var red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Construct the CSS color string
  var color = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = color;
}

function mixSound(key) {
  var audio;
  randomColor();
  switch (key) {
    
    case "w":
        audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
        audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
        audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
        audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
        audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
        audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
        audio = new Audio("sounds/snare.mp3");
      break;
    default:
        audio = new Audio();
        
  }
  audio.play();
}

function playAudio(clickVar) {
  var audio = new Audio(clickVar);
  audio.play();
}
