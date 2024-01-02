import { Game } from "./src/game/Game.js";
let timeCount = 0;
let timerInterval;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const container = document.getElementById('grid-container');
const onStart = () => {
    let game = new Game(container);
    startButton.hidden = true;
    stopButton.hidden = false;
    timeCount = 0;
    stopButton.innerText = "00:00";
    timerInterval = setInterval(() => {
        if (game.gameOver()) {
            clearInterval(timerInterval);
            return;
        }
        timeCount += 1;
        const m = Math.floor(timeCount / 60);
        const minutes = m < 10 ? '0' + m : m;
        const s = timeCount % 60;
        const seconds = s < 10 ? '0' + s : s;
        stopButton.innerText = minutes + ':' + seconds;
    }, 1000);
};
const onStop = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    clearInterval(timerInterval);
    startButton.hidden = false;
    stopButton.hidden = true;
};
startButton.onclick = onStart;
stopButton.onclick = onStop;
