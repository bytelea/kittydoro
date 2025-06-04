let timer;
let timeLeft = 25 * 60;

function startApp() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');
}

function startTimer() {
  clearInterval(timer);
  updateDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("kitten-img").src = "assets/kitten-celebrate.png";
      alert("Pomodoro complete! Take a break 🎉");
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
