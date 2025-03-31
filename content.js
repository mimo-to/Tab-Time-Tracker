let timerDiv = document.createElement("div");
timerDiv.id = "tab-time-tracker-timer";
document.body.appendChild(timerDiv);

let timeSpent = 0;
setInterval(() => {
  timeSpent++;
  timerDiv.innerText = `Time on this tab: ${timeSpent}s`;
}, 1000);