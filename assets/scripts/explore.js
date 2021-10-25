// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;

var inputForm = document.querySelector('button');
var inputTxt = document.querySelector('textarea');
var voiceSelect = document.querySelector('select');

/*var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');*/
var img = document.querySelector("img");
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  for (var i = 0 ; i < voices.length ; i++){
    console.log(voices[i]);

  }
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
inputForm.addEventListener("click", function(event){
  event.preventDefault();
  var utter = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utter.voice = voices[i];
    }
  }
  synth.speak(utter);
  inputTxt.blur();
});
}