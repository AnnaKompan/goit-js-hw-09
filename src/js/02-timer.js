import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer = document.querySelector('.timer');

const refs = {
  timerDays: document.querySelector('span[data-days]'),
  timerHours: document.querySelector('span[data-hours]'),
  timerMinutes: document.querySelector('span[data-minutes]'),
  timerSeconds: document.querySelector('span[data-seconds]'),
};
const startBtn = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

const myInput = document.getElementById('datetime-picker');
const fp = flatpickr(myInput, options);

startBtn.addEventListener('click', onStart);

function onStart() {
  startBtn.disabled = true;
  const intervalId = setInterval(() => {
    const now = Date.now();
    const countDownDate = fp.selectedDates[0];
    const deltaTime = countDownDate - now;
    if (deltaTime < 0) {
      clearInterval(intervalId);
    } else {
      const timeComponents = convertMs(deltaTime);
      updateTimer(timeComponents);
    }
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.timerDays.textContent = `${days}`;
  refs.timerHours.textContent = `${hours}`;
  refs.timerMinutes.textContent = `${minutes}`;
  refs.timerSeconds.textContent = `${seconds}`;
}
