chrome.action.onClicked.addListener((tab) => {
    chrome.action.setTitle({
      tabId: tab.id,
      title: `You are on tab: ${tab.id}`});
  });
  chrome.action.setBadgeText({text: 'ON'});
chrome.action.setBadgeBackgroundColor({color: '#4688F1'});