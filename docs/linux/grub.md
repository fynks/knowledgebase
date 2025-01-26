---
layout: doc
title: Grub
---

### Enable GRUB Menu
If GRUB menu is not showing during boot:

1. Edit GRUB configuration:
```sh
sudo nano /etc/default/grub
```
2. Change `GRUB_TIMEOUT_STYLE=hidden` to 
```sh
GRUB_TIMEOUT_STYLE=menu
```
3. Save and update GRUB:
```sh
sudo update-grub
```

### Restore GRUB After Windows Installation
1. Boot into Manjaro live environment
2. Open terminal & access system via chroot
```sh
sudo manjaro-chroot -a
```
3. Install GRUB to main drive
```sh
grub-install /dev/sda
```
(Replace /dev/sda with your boot drive)
4. Verify installation
```sh
grub-install --recheck /dev/sda
```
5. Update GRUB configuration
```sh
update-grub
```
6. Exit chroot and reboot
```sh
exit
reboot
```
  

