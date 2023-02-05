const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(() => {
    let randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
