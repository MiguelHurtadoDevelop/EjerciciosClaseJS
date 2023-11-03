window.onload = function(){
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);
}

let isRunning = false;
let startTime = 0;
let interval;
let pausedTime = 0;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - (pausedTime ? pausedTime : startTime);
    interval = setInterval(updateDisplay, 10);
  }
  pausedTime = 0;
  isRunning = true;
}

function stopTimer() {
  if (isRunning) {
    clearInterval(interval);
    pausedTime = Date.now() - startTime;
  }
  isRunning = false;
}
function resetTimer() {
    var temporizador = document.getElementById("temporizador");
    temporizador.innerHTML = "00:00";
    clearInterval(interval);
    isRunning = false;
    pausedTime = 0;
    startTime = 0;
  }

function updateDisplay() {
  var time = new Date(Date.now() - startTime);

  var seconds = time.getSeconds().toString().padStart(2, '0');
  var milliseconds = time.getMilliseconds().toString().slice(0, 2).padStart(2, '0');
  var temporizador = document.getElementById("temporizador");
  temporizador.innerHTML = seconds + ":" + milliseconds;
}