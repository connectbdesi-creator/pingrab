# PinGrab Chrome Extension

Manifest V3 browser extension that adds a one-click download button to every Pinterest pin.

## Features

- Inline download button on feed pins, boards, and pin pages
- Handles **images** (fetches `/originals/` source), **videos** (queries Pinterest's widget API for the highest-bitrate MP4), and **GIFs**
- Popup with one-click "Download this Pin" for pin pages
- Keyboard shortcut `Alt+D` to download the currently open pin
- No tracking, no analytics — only talks to `pinterest.com` and `pinimg.com`

## Install locally (developer mode)

1. Add your icon PNGs in `extension/icons/` (see [icons/README.md](icons/README.md)).
2. Open `chrome://extensions` in Chrome / Edge / Brave.
3. Turn on **Developer mode** (top-right).
4. Click **Load unpacked** and select the `extension/` folder.
5. Open Pinterest and hover any pin — the red download button appears top-right.

## Publishing to the Chrome Web Store

1. Bump `version` in `manifest.json`.
2. Zip the contents of the `extension/` folder (not the folder itself):
   ```bash
   cd extension
   zip -r ../pingrab-extension-1.0.0.zip . -x "*.md" "icons/README.md"
   ```
3. Go to https://chrome.google.com/webstore/devconsole — one-time $5 developer fee.
4. **New item → Upload** your zip.
5. Fill in store listing:
   - Short description (132 chars max)
   - Detailed description (reuse copy from `/chrome-extension` page)
   - 1280×800 screenshots (at least 1, up to 5)
   - 128×128 store icon (reuse `icons/icon128.png`)
   - Category: **Productivity**
   - Privacy policy URL: `https://pingrab-self.vercel.app/privacy`
6. Submit for review. First review takes 1–3 business days.

## Permissions explained (needed for store review)

| Permission | Why |
|---|---|
| `downloads` | Save the media file to the user's Downloads folder. |
| `activeTab` | Read the current Pinterest tab when the user clicks the popup. |
| `scripting` | Inject the download button script into pin pages. |
| `storage` | Remember popup preferences (future use). |
| `host_permissions: pinterest.com, pinimg.com` | Fetch pin metadata and media files only from Pinterest's own domains. |

No broad-host permissions, no remote code execution.

## File layout

```
extension/
  manifest.json       # MV3 manifest
  background.js       # Service worker — handles downloads & shortcut
  content.js          # Injects download buttons on Pinterest pages
  content.css         # Button styling
  popup.html          # Toolbar popup
  popup.css
  popup.js
  icons/              # 16/32/48/128 PNGs (add these before loading)
```
