---
title: Windows
nav_order: 3
layout: page
description: ""
parent: Install
---

# Install on Windows

Vorta was built using Qt, which could also run on Windows. Unfortunately the underlying Borg Backup we use is currently [not officially available](https://github.com/borgbackup/borg/issues/936) on Windows, though work is in progress.

Until then users had [good success](https://eeems.website/running-vorta-on-windows/) running Vorta and Borg via Windows' Linux Subsystem (WSL). Nathaniel and Christer have confirmed and shared the following instructions:

1. In the powershell `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux` (reboot). Or see [here](https://ubuntu.com/wsl) on how to install Ubuntu without powershell.
2. `Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform` (reboot) wsl --set-default-version 2
3. `Invoke-WebRequest -Uri https://aka.ms/wsl-debian-gnulinux -OutFile Debian.appx -UseBasicParsing Add-AppxPackage .\Debian.appx`
4. Remove-Item Debian.appx
5. You now have a working Debian (or Ubuntu) install.
6. Then create a backup script from within WSL, and schedule it with Windows Task Scheduler: _Administrative Tools -> Task Scheduler_, _Add Basic Task with command line_ `C:\Windows\System32\bash.exe -c <path_to_script_as_seen_within_Debian`
