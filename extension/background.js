chrome.commands.onCommand.addListener(async (command) => {
  if (command !== 'download-current-pin') return;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || !tab.url?.includes('pinterest.com')) return;
  chrome.tabs.sendMessage(tab.id, { type: 'PINGRAB_TRIGGER_CURRENT' });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'https://pingrab.click/chrome-extension?welcome=1' });
  }
});
