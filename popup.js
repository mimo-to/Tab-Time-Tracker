document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "getTimes" }, response => {
      const tabList = document.getElementById("tab-list");
      tabList.innerHTML = "";

      for (const tabId in response) {
        if (tabId !== "lastActive") {
          const li = document.createElement("li");
          li.textContent = `Tab ${tabId}: ${Math.round(response[tabId] / 1000)} sec`;
          tabList.appendChild(li);
        }
      }
    });
  });