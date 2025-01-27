---
layout: doc
title: Setup
---
# Manjaro Setup Guide
## Setup Script

```sh
git clone https://github.com/fynks/configs.git && cd configs/scripts/ && sudo chmod +x ./setup.sh && sudo ./setup.sh
```

## Update Mirrors
```bash
sudo pacman-mirrors --fasttrack 5 && sudo pacman -Syu 
```

## Chaotic AUR Setup
- [Chaotic AUR Github](https://github.com/chaotic-aur)
```bash
sudo pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
```
```bash
sudo pacman-key --lsign-key 3056513887B78AEB
```
```bash
sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst' 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```
- Append (adding to the end of the file) to `/etc/pacman.conf`:
```
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

## KDE Configuration
1. Import KDE configuration
```bash
konsave -i manjaro-kde.knsv
```
2. Apply configuration
```sh
konsave -a manjaro-kde
```

## Host Blocking Setup
- [HBlock](https://raw.githubusercontent.com/fynks/configs/refs/heads/main/system/backups/hblock_sources.list)


