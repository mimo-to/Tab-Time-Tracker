let activeTabId = null;
let tabTimes = {};

chrome.tabs.onActivated.addListener(activeInfo => {
  const now = Date.now();

  if (activeTabId !== null) {
    if (!tabTimes[activeTabId]) tabTimes[activeTabId] = 0;
    tabTimes[activeTabId] += now - (tabTimes.lastActive || now);
  }

  activeTabId = activeInfo.tabId;
  tabTimes.lastActive = now;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getTimes") {
    sendResponse(tabTimes);
  }
});