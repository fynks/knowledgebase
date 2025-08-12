---
layout: doc
title: VLC Troubleshooting
description: Troubleshoot common VLC errors
---

If VLC shows codec errors (e.g., “codec not supported”), install the required plugins/codecs.

On Arch-based systems (pacman):
```bash
sudo pacman -S --asdeps vlc-plugin-ffmpeg vlc-plugin-aribb24 vlc-plugin-matroska vlc-plugin-srt vlc-plugin-svg
```

Notes:
- Restart VLC after installing plugins and try the file again.
