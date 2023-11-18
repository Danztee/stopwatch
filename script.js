let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("reset");

// console.log(resetBtn);

function startStop() {
  if (isRunning) {
    // TODO: something
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = "Start";
  } else {
    isRunning = true;
    startStopBtn.textContent = "Stop";
    // runStopwatch();
    // setInterval(() => {
    //   console.log("yo! im calling every one sec😉");
    // }, 1000);

    timer = setInterval(runStopwatch, 100);
  }
}

function runStopwatch() {
  //   console.log("run stopwatch");

  seconds++;

  //   console.log(seconds);

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  display.textContent =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
};

function resetStopwatch() {
  //   console.log("resetStopwatch");
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;

  display.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", resetStopwatch);
