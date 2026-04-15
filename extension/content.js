(() => {
  'use strict';

  const SITE = 'https://pingrab-self.vercel.app';
  const BTN_CLASS = 'pingrab-dl-btn';
  const PROCESSED = 'pingrab-processed';

  function pinUrlFromContainer(container) {
    // 1. If we're already on a pin closeup page, use the address bar — most reliable.
    if (/\/pin\/\d+/.test(location.href)) {
      return location.href.split('?')[0].replace(/\/$/, '');
    }

    // 2. Search within the container.
    let a = container.querySelector('a[href*="/pin/"]');
    if (a?.href) return a.href.split('?')[0];

    // 3. Walk up the ancestor chain (feed cards sometimes wrap the <a> around the container).
    let node = container.parentElement;
    for (let i = 0; i < 8 && node; i++) {
      if (node.tagName === 'A' && node.href?.includes('/pin/')) {
        return node.href.split('?')[0];
      }
      const found = node.querySelector?.('a[href*="/pin/"]');
      if (found?.href) return found.href.split('?')[0];
      node = node.parentElement;
    }

    // 4. Fallback: reconstruct from data-pin-id or data-test-pin-id attribute.
    const idAttr =
      container.getAttribute('data-test-pin-id') ||
      container.closest('[data-test-pin-id]')?.getAttribute('data-test-pin-id') ||
      container.querySelector('[data-pin-id]')?.getAttribute('data-pin-id');
    if (idAttr) return `https://www.pinterest.com/pin/${idAttr}/`;

    return null;
  }

  function detectType(container) {
    if (container.querySelector('video')) return 'video';
    const img = container.querySelector('img');
    if (img?.src?.endsWith('.gif')) return 'gif';
    return 'image';
  }

  function landingPathFor(type) {
    if (type === 'video') return '/video-downloader';
    if (type === 'gif') return '/gif-downloader';
    return '/image-downloader';
  }

  function openOnSite(pinUrl, type) {
    const path = landingPathFor(type);
    const target = `${SITE}${path}?url=${encodeURIComponent(pinUrl)}&src=extension&autodownload=1`;
    window.open(target, '_blank', 'noopener');
  }

  function buildButton() {
    const btn = document.createElement('button');
    btn.className = BTN_CLASS;
    btn.title = 'Download with PinGrab';
    btn.type = 'button';
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3v12"/>
        <path d="m7 10 5 5 5-5"/>
        <path d="M5 21h14"/>
      </svg>`;
    return btn;
  }

  function handleClick(e, container) {
    e.preventDefault();
    e.stopPropagation();
    const pinUrl = pinUrlFromContainer(container);
    console.log('[PinGrab] resolved pin URL:', pinUrl);
    if (!pinUrl) {
      alert(
        'PinGrab could not detect the pin URL.\n\nOpen the pin in its own tab (click the pin to enter closeup view) and try again.'
      );
      return;
    }
    const type = detectType(container);
    openOnSite(pinUrl, type);
  }

  function attachToPin(container) {
    if (!container || container.dataset[PROCESSED] === '1') return;
    const img = container.querySelector('img');
    const video = container.querySelector('video');
    if (!img && !video) return;

    container.dataset[PROCESSED] = '1';
    container.style.position = container.style.position || 'relative';

    const btn = buildButton();
    btn.addEventListener('click', (e) => handleClick(e, container));
    container.appendChild(btn);
  }

  function scan() {
    const selectors = [
      '[data-test-id="pin"]',
      '[data-test-id="pinWrapper"]',
      'div[data-test-pin-id]',
      'div[role="listitem"]'
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach(attachToPin);
    }
    const closeup = document.querySelector('[data-test-id="closeup-image"], [data-test-id="visual-content-container"]');
    if (closeup) attachToPin(closeup);
  }

  const observer = new MutationObserver(() => {
    clearTimeout(window.__pingrabTimer);
    window.__pingrabTimer = setTimeout(scan, 250);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  scan();

  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg?.type === 'PINGRAB_TRIGGER_CURRENT') {
      if (!/\/pin\//.test(location.href)) {
        sendResponse({ ok: false, error: 'Not on a pin page' });
        return;
      }
      const container =
        document.querySelector('[data-test-id="closeup-image"], [data-test-id="visual-content-container"]') ||
        document.body;
      const type = detectType(container);
      openOnSite(location.href.split('?')[0], type);
      sendResponse({ ok: true });
    }
  });
})();
