chrome.action.onClicked.addListener((tab) => {
  // Prevent executing script on Chrome system pages or Web Store
  if (!tab.url || 
      tab.url.startsWith("chrome://") || 
      tab.url.startsWith("chrome-extension://") || 
      tab.url.startsWith("https://chrome.google.com/webstore")) {
    return;
  }
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["llms_txt_checker.js"]
  }).catch((err) => {
    console.error("Failed to inject compliance inspector script:", err);
  });
});
