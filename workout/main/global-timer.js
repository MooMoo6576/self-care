(function() {
  const TIMER_DURATION = 1800; // 30 minutes in seconds
  const STORAGE_KEY = "workout_timer_end";
  let timerDiv = document.getElementById('global-timer');
  if (!timerDiv) return;

  timerDiv.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: linear-gradient(90deg, #ff4081, #40e6ff);
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    padding: 12px 0;
    letter-spacing: 0.1em;
    box-shadow: 0 2px 12px #ff408180;
  `;

  let endTime = localStorage.getItem(STORAGE_KEY);
  if (!endTime) {
    timerDiv.textContent = '';
    return;
  }
  endTime = parseInt(endTime, 10);

  function formatTime(t) {
    const min = Math.floor(t / 60);
    const sec = t % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  function updateTimer() {
    const now = Date.now();
    let remaining = Math.max(0, Math.floor((endTime - now) / 1000));
    if (remaining > 0) {
      timerDiv.textContent = `⏰ Workout Timer: ${formatTime(remaining)}`;
    } else {
      timerDiv.textContent = '';
      localStorage.removeItem(STORAGE_KEY);
      clearInterval(interval);
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
})();