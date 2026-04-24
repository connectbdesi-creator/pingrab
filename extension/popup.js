const SITE = 'https://pingrab.click';
const statusEl = document.getElementById('status');
const btn = document.getElementById('download');

function setStatus(cls, text) {
  statusEl.className = `status ${cls}`;
  statusEl.querySelector('span').textContent = text;
}

async function init() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) {
    setStatus('err', 'No active tab.');
    return;
  }
  const onPin = /pinterest\.com\/pin\//.test(tab.url);
  const onPinterest = /pinterest\.com/.test(tab.url);

  if (onPin) {
    setStatus('ready', 'Pin detected — ready to download.');
    btn.hidden = false;
    btn.onclick = () => {
      const pinUrl = tab.url.split('?')[0];
      const target = `${SITE}/?url=${encodeURIComponent(pinUrl)}&src=extension&autodownload=1`;
      chrome.tabs.create({ url: target });
      window.close();
    };
  } else if (onPinterest) {
    setStatus('idle', 'Hover any pin on this page to download.');
  } else {
    setStatus('idle', 'Open pinterest.com to start.');
  }
}

init();
