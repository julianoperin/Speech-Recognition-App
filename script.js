const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log('Number:', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

//Capture user speak
function onSpeak(e) {
    console.log(e);
    const msg = e.results[0][0].transcript;

    console.log(msg);
    writeMessage(msg);
    checkNumber(msg);
}

// Write what user speaks
function writeMessage(msg) {
    msgEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
    `;
}

// Check msg against number
function checkNumber(msg) {
    const num = msg;

    // Check if valid number
    if(Number.isNaN(num)) {
        msgEl.innerHTML = '<div>Number must be between 1 and 100</div>'
    return;
    }
}

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

//Speak result
recognition.addEventListener('result', onSpeak);