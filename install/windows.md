---
title: Windows
nav_order: 3
layout: page
description: ""
parent: Install
---

# Install on Windows

Vorta was built using Qt, which could also run on Windows. Unfortunately the underlying Borg Backup we use is currently [not officially available](https://github.com/borgbackup/borg/issues/936) on Windows, though work is in progress.

Until then users had [good](https://github.com/borgbase/vorta.borgbase.com/issues/26) [success](https://eeems.website/running-vorta-on-windows/) running Vorta and Borg via Windows' Linux Subsystem (WSL). Here the latest confirmed instructions, contributed by Github user [end-usr2](https://github.com/end-usr2):

## Install Ubuntu via Windows Subsystem for Linux

First enable Windows Subsystem for Linux
1. Click the Start button.
2. Click Control Panel.
3. Click Programs.
4. Click Turn Windows features on or off.If you're prompted for an administrator password or confirmation, type the password or provide confirmation.
5. Click the box next to "Windows Subsystem for Linux" to put a checkmark
6. Click OK and reboot

Next install Ubuntu from Microsoft App Store
1. Click the Start button
2. Type Microsoft
3. Click Microsoft Store 
4. Search for Ubuntu or use this [direct link](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6)
5. Click Get
6. Once it is done downloading, click Open
7. Enter a default user name and password when prompted ([more details](https://ubuntu.com/tutorials/ubuntu-on-windows#4-install-ubuntu-for-windows-10))

Then upgrade Ubuntu version. Vorta is is [packaged](https://packages.ubuntu.com/search?keywords=vorta ) for Ubuntu (Debian) starting with Ubuntu 21.04. If it is before April 21, 2022 and Ubuntu 22.04 is not yet available, you will need to upgrade to a [non-Long Term Support](https://wiki.ubuntu.com/Releases) (non-LTS) version of Ubuntu. To do so, change `Prompt=LTS` to `Prompt=normal` in `/etc/update-manager/release-upgrades` using vi or another file editing option. To avoid usmerge error during upgrade, check that both of these don't exist:

- `/lib/udev/hwdb.bin`
- `/usr/lib/udev/hwdb.bin`

If both exist, delete the oldest one.

Then start the upgrade process:   
```
$ sudo do-release-upgrade
```

If you get error and upgrade aborts with "lspci: Cannot find any working access method.", remove the `snapd` package:
```
$ sudo apt purge snapd
```

Then try upgrade again...[ref](https://superuser.com/questions/1662669/upgrade-wsl-to-ubuntu-hirsute-21-04-from-20-10)
```
$ sudo do-release-upgrade
```

After the upgrade is complete, reboot Ubuntu:
- Start > Services. Run as administrator
- Restart LXSSMANAGER service

## Install and Run Vorta

And finally install Vorta
```
$ sudo apt install vorta
```

After that you can run Vorta with
```
$ vorta
```

## Possible Errors

- If you get error, `ImportError: libQt5Core.so.5 :  cannot open shared object file: No such file or directory`, run
  ```
  $ sudo strip --remove-section=.note.ABI-tag /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  ```
  (As described [here](https://superuser.com/questions/1347723/arch-on-wsl-libqt5core-so-5-not-found-despite-being-installed) and [here](https://askubuntu.com/questions/1034313/ubuntu-18-4-libqt5core-so-5-cannot-open-shared-object-file-no-such-file-or-dir))

- If you get error, `could not connect to display`: Download and install VcXsrv in Windows from [here](https://sourceforge.net/projects/vcxsrv/). ([ref](https://github.com/microsoft/WSL/issues/4793))
  - Run XLaunch
  - Start > XLaunch
  - Select 'multiple windows' and set Display number to 0, click Next
  - Select 'start no client', click Next
  - Add a check for 'Disable access control', click Next
  - Click 'Finish' and hover over the XLaunch icon in the system tray and verify that is shows "0.0".
  - Find your IP address
      - Start > Settings > Network and Internet > Wi-Fi or LAN (depending on your connection type) > Hardware properties
      - Note the IPv4 address

  - Back at the Ubuntu command line...
  ```
  export DISPLAY=192.168.1.1:0.0  (substitute your IP address from above)
  export LIBGL_ALWAYS_INDIRECT=1
  ```

## Using Vorta
    
To set up with BorgBase: See the video [here](https://www.youtube.com/watch?v=asZX2YbTaNE)

If you need to mount a drive or share:
- To see currently mounted drives
  ```
  $ mount
  ```
- Mount removable media: (e.g. D:)
  ```
  sudo mkdir /mnt/d
  sudo mount -t drvfs D: /mnt/d
  ```
- To safely unmount
  ```
  sudo umount /mnt/d
  ```
- You can also mount network shares without smbfs:
  ```
  sudo mount -t drvfs '\\server\share' /mnt/share
  ```
  (As described [here](https://superuser.com/questions/1114341/windows-10-ubuntu-bash-shell-how-do-i-mount-other-windows-drives))


### References:
- <https://ubuntu.com/tutorials/ubuntu-on-windows#4-install-ubuntu-for-windows-10>
- <https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6>
- <https://packages.ubuntu.com/search?keywords=vorta>
- <https://wiki.ubuntu.com/Releases>
- <https://superuser.com/questions/1662669/upgrade-wsl-to-ubuntu-hirsute-21-04-from-20-10>
- <https://superuser.com/questions/1347723/arch-on-wsl-libqt5core-so-5-not-found-despite-being-installed>
- <https://askubuntu.com/questions/1034313/ubuntu-18-4-libqt5core-so-5-cannot-open-shared-object-file-no-such-file-or-dir>
- <https://sourceforge.net/projects/vcxsrv/>
- <https://github.com/microsoft/WSL/issues/4793>
- <https://superuser.com/questions/1114341/windows-10-ubuntu-bash-shell-how-do-i-mount-other-windows-drives>
