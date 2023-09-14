let speech = new SpeechSynthesisUtterance();
const textArea = document.querySelector("textarea");

let voices  = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=> (voiceSelect.options[i] = new Option(voice.name,i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener('click',()=>{
    if(textArea.value.length>0){
        speech.text = textArea.value;
        window.speechSynthesis.speak(speech);
    }else{
        textArea.setAttribute('id','error');
        setTimeout(()=>{
            textArea.removeAttribute('id','error');
        },1000);
    }
    
});

