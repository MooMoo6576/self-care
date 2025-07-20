const customDuration = parseInt(localStorage.getItem('workout_timer_custom_duration'), 10);
const TIMER_DURATION = (!isNaN(customDuration) && customDuration > 0) ? customDuration : 1800; // 30 min default
const STORAGE_KEY = "workout_timer_end";
const PAUSED_KEY = "workout_timer_paused";
const REMAINING_KEY = "workout_timer_remaining";
const timerDiv = document.getElementById('timer');
const btn = document.getElementById('start-pause-btn');

let interval = null;
let paused = localStorage.getItem(PAUSED_KEY) === "true";
let endTime = localStorage.getItem(STORAGE_KEY);
let remaining = localStorage.getItem(REMAINING_KEY);

function formatTime(t) {
  const min = Math.floor(t / 60);
  const sec = t % 60;
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function getRemaining() {
  if (paused && remaining !== null) {
    return parseInt(remaining, 10);
  }
  if (!endTime) return TIMER_DURATION;
  return Math.max(0, Math.floor((parseInt(endTime, 10) - Date.now()) / 1000));
}

function updateTimer() {
  let rem = getRemaining();
  timerDiv.textContent = formatTime(rem);
  if (rem <= 0) {
    clearInterval(interval);
    interval = null;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PAUSED_KEY);
    localStorage.removeItem(REMAINING_KEY);
    btn.textContent = "Start";
    paused = false;
  }
}

function startTimer() {
  if (paused && remaining !== null) {
    // Resume from paused
    endTime = Date.now() + parseInt(remaining, 10) * 1000;
    localStorage.setItem(STORAGE_KEY, endTime);
    localStorage.setItem(PAUSED_KEY, "false");
    localStorage.removeItem(REMAINING_KEY);
    paused = false;
  } else if (!endTime || getRemaining() <= 0) {
    // Start new timer
    endTime = Date.now() + TIMER_DURATION * 1000;
    localStorage.setItem(STORAGE_KEY, endTime);
    localStorage.setItem(PAUSED_KEY, "false");
    localStorage.removeItem(REMAINING_KEY);
    paused = false;
  }
  btn.textContent = "Pause";
  btn.classList.add('paused'); // <-- Add this line
  if (!interval) {
    interval = setInterval(updateTimer, 1000);
  }
  updateTimer();
}

function pauseTimer() {
  let rem = getRemaining();
  localStorage.setItem(PAUSED_KEY, "true");
  localStorage.setItem(REMAINING_KEY, rem);
  clearInterval(interval);
  interval = null;
  btn.textContent = "Start";
  btn.classList.remove('paused'); // <-- Add this line
  paused = true;
  updateTimer();
}

// On load, set up timer state
if (paused && remaining !== null) {
  btn.textContent = "Start";
  btn.classList.remove('paused'); // <-- Add this line
  updateTimer();
} else if (endTime && getRemaining() > 0) {
  btn.textContent = "Pause";
  btn.classList.add('paused'); // <-- Add this line
  interval = setInterval(updateTimer, 1000);
  paused = false;
  updateTimer();
} else {
  btn.textContent = "Start";
  btn.classList.remove('paused'); // <-- Add this line
  timerDiv.textContent = formatTime(TIMER_DURATION);
}
function playAlert() {
  // Sound
  const audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae5b7.mp3');
  audio.play();
  // Vibration (if supported)
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
}
document.getElementById('set-timer-btn').onclick = function() {
  const mins = parseInt(document.getElementById('custom-minutes').value, 10);
  if (mins > 0 && mins <= 120) {
    // Save the new duration in localStorage
    localStorage.setItem('workout_timer_custom_duration', mins * 60);
    // Remove any previous timer state
    localStorage.removeItem('workout_timer_end');
    localStorage.removeItem('workout_timer_paused');
    localStorage.removeItem('workout_timer_remaining');
    // Reload the page to apply the new timer
    location.reload();
  }
};

// Reset timer button
document.getElementById('reset-timer').onclick = function() {
  localStorage.removeItem('workout_timer_end');
  localStorage.removeItem('workout_timer_paused');
  localStorage.removeItem('workout_timer_remaining');
  location.reload();
};

btn.addEventListener('click', function() {
  if (paused) {
    startTimer();
  } else {
    pauseTimer();
  }
});