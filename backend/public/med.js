/*let timerInterval;
let timeLeft;
let isPaused = true;

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const timerDisplay = document.getElementById('timer');
const message = document.getElementById('message');
const backgroundAudio = document.getElementById('background-audio');

startButton.addEventListener('click', function() {
    if (isPaused) {
        const minutesInput = document.getElementById('minutes').value;
        if (timeLeft === undefined) {
            timeLeft = parseInt(minutesInput) * 60;
        }

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
                message.textContent = 'Have a peaceful day ahead!';
                backgroundAudio.pause();
                backgroundAudio.currentTime = 0;
            }
        }

        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
        backgroundAudio.play();
        isPaused = false;
    }
});

stopButton.addEventListener('click', function() {
    if (!isPaused) {
        clearInterval(timerInterval);
        backgroundAudio.pause();
        isPaused = true;
        message.textContent = 'Timer paused.';
    }
});*/
// JavaScript code for meditation timer

// JavaScript code for meditation timer

let timerInterval;
let timeLeft;
let isPaused = true;

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const timerDisplay = document.getElementById('timer');
const message = document.getElementById('message');
const backgroundAudio = document.getElementById('background-audio');
const timerEndSound = document.getElementById('timer-end-sound');

startButton.addEventListener('click', function() {
    if (isPaused) {
        const minutesInput = document.getElementById('minutes').value;
        if (timeLeft === undefined) {
            timeLeft = parseInt(minutesInput) * 60;
        }

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
                message.textContent = 'Have a peaceful day ahead!';
                backgroundAudio.pause();
                backgroundAudio.currentTime = 0;
                timerEndSound.play();
            }
        }

        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
        backgroundAudio.play();
        isPaused = false;
    }
});

stopButton.addEventListener('click', function() {
    if (!isPaused) {
        clearInterval(timerInterval);
        backgroundAudio.pause();
        isPaused = true;
        message.textContent = 'Timer paused.';
    }
});
