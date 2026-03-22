# MusicBoard — Video Storyboard Studio

A freeform storyboarding tool built for music video directors and anyone who needs to visually plan video set to music.

## Features

- **Infinite canvas** — pan with middle mouse, zoom with scroll wheel
- **Audio waveform** — load any audio file as a visual waveform with playback, scrubbing, and volume control
- **Storyboard frames** — draggable post-it style cards with Draw, Text, and Media tabs
- **Freehand drawing** — pressure-sensitive drawing tablet support via Pointer Events API
- **Media in frames** — import images, video files, or embed YouTube links
- **Drawing on canvas** — draw directly on the whiteboard, select and move strokes
- **Save / Load** — full project save as JSON
- **Offline support** — works without an internet connection after first load (PWA)

## Hosting (GitHub Pages)

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Your app will be live at `https://yourusername.github.io/musicboard`

## Running Locally

Open `index.html` directly in Chrome or Firefox for most features.

For YouTube embeds, run a local server first:

```bash
# Python (pre-installed on Mac/Linux)
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080` in your browser.

## App Icons

Place your own `icon-192.png` and `icon-512.png` in the root folder to customise the PWA app icon. Any square image works — the browser will mask it to a rounded square on most platforms.

## Save Files

Projects save as `.json` files to your Downloads folder. Load them back with the **Load** button.

> **Note:** Audio and local video files are not stored in the save file due to browser security limits. You will need to re-add them after loading a project. YouTube embeds and images save and restore correctly.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| V | Select / Move tool |
| D | Draw tool |
| E | Erase tool |
| T | Text label tool |
| F | Add storyboard frame |
| A | Add audio track |
| I | Import image |
