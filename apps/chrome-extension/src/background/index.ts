/// <reference types="chrome"/>

export default chrome.runtime.onInstalled.addListener(() => {
  console.log("Background Service Worker working...");

  chrome.action.onClicked.addListener(() => {
    chrome.sidePanel.setOptions({
        path: "index.html",
        enabled: true,
    });
  });

  chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true,
  });
});
