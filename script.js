let timerInterval = null;
let timeLeft = 25 * 60;

function startApp() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');
}

function startTimer() {
  if (timerInterval || timeLeft === 0) return;

  timerInterval = setInterval(() => {
    timeLeft = Math.max(0, timeLeft - 1);
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      updateTimerControls();
      document.getElementById("kitten-img").src = "kittenhappy.gif";
      alert("Pomodoro session is complete! Take a short break 🎉");
    }
  }, 1000);
  updateTimerControls();
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  updateTimerControls();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  document.getElementById("kitten-img").src = "kittensleeping.gif";
  updateDisplay();
  updateTimerControls();
}

function updateTimerControls() {
  document.getElementById("start-button").disabled = Boolean(timerInterval) || timeLeft === 0;
  document.getElementById("pause-button").disabled = !timerInterval;
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("pomodoro-display").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (!taskText) {
    input.focus();
    return;
  }

  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");

  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  text.textContent = taskText;
  label.append(checkbox, text);
  listItem.appendChild(label);
  document.getElementById("todo-list").appendChild(listItem);
  input.value = "";
  input.focus();
});

