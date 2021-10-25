// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO  
  let img = document.querySelectorAll('img');
  //are the if statements for the image declarations? shouldn't they be static
  let el = document.getElementById("horn-select");
  el.addEventListener("change", function(){
    if (el.value == "air-horn"){
      img[0].src = "assets/images/air-horn.svg";
    }else if (el.value == "car-horn"){
      img[0].src = "assets/images/car-horn.svg";
    }else if (el.value == "party-horn"){
      img[0].src = "assets/images/party-horn.svg";
    }else{
      img[0].src = "assets/images/no-image.png"
    }
  });
  let audio = document.querySelector("audio")
  let vol = document.getElementById("volume");
  vol.addEventListener("input", function(){
    if (vol.value == 0){
      img[1].src = "assets/icons/volume-level-0.svg";
    }else if (vol.value >= 1 && vol.value < 33){
      img[1].src = "assets/icons/volume-level-1.svg";
    }else if (vol.value >= 33 && vol.value < 67){
      img[1].src = "assets/icons/volume-level-2.svg";
    }else{ //vol.val >=67
      img[1].src = "assets/icons/volume-level-3.svg" //not needed
    }
    audio.volume = vol.value / 100;
  });
  let audioButt = document.querySelector("button");
  audioButt.addEventListener("click", function(){
    if (el.value == "air-horn"){
      audio.src = "assets/audio/air-horn.mp3";
      audio.play();
    }else if (el.value == "car-horn"){
      audio.src = "assets/audio/car-horn.mp3";
      audio.play();
    }else if (el.value == "party-horn"){
      audio.src = "assets/audio/party-horn.mp3";
      audio.play();
      let confetti = new JSConfetti();
      confetti.addConfetti({ confettiNumber:3001,
        emojis: ['🌈', '💥', '✨', '🔥', '🌸'],

      })
    }
  });
/*
At zero volume, the mute icon (level 0) should be displayed
From 1 to < 33 volume the first volume level should be displayed
From 33 to < 67 volume the second volume level should be displayed
From 67 and up the third volume level should be displayed
The correct volume icon should be set
The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
*/

}