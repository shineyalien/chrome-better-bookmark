// service-worker.js - MV3 replacement for background.html
chrome.runtime.onInstalled.addListener(() => {
  // One-time setup or migrations can go here.
});

// Optional: open the popup from a keyboard command (assign in chrome://extensions/shortcuts)
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'open-popup') {
    try {
      await chrome.action.openPopup();
    } catch (e) {
      chrome.windows.create({
        url: chrome.runtime.getURL('init.html'),
        type: 'popup',
        width: 520,
        height: 600
      });
    }
  }
});
