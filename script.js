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
      document.getElementById("kitten-img").src = "kittenhappy.gif";
      alert("Pomodoro timer is complete! Take a short break 🎉");
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    const label = document.createElement("label");
    label.textContent = taskText;
    label.style.marginLeft = "0.5em";

    checkbox.addEventListener("change", function () {
      label.style.textDecoration = this.checked ? "line-through" : "none";
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    document.getElementById("todo-list").appendChild(listItem);

    input.value = "";
  }
}


