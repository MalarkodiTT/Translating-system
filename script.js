function startRecording(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.start();

recognition.onresult = function(event){

let speech = event.results[0][0].transcript;

document.getElementById("speechText").innerText = speech;

translateText(speech);

};

}

function translateText(text){

let targetLang = document.getElementById("targetLang").value;

fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" 
+ targetLang + "&dt=t&q=" + encodeURIComponent(text))

.then(response => response.json())

.then(data => {

document.getElementById("translatedText").innerText = data[0][0][0];

});

}