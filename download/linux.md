---
title: Linux
nav_order: 2
layout: page
description: ""
parent: Download
---
# Download for Linux

## Flatpak

<a href='https://flathub.org/apps/details/com.borgbase.Vorta'><img width='180' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

## Install from Source
The most generic way is to install it as Python package using [PIP](https://pip.readthedocs.io/en/stable/installing/). First [install](https://borgbackup.readthedocs.io/en/stable/installation.html) Borg using the package of your distribution or via PyPI. The latter needs some additional [source packages](https://borgbackup.readthedocs.io/en/stable/installation.html#dependencies). Then install Vorta from PyPI. Your local Python version should be >= 3.6.
```
$ pip3 install vorta
```

## Distribution Packages

### Ubuntu/Debian

### CentOS/Red Hat

### Arch Linux
Use the [AUR package](https://aur.archlinux.org/packages/vorta/) maintained by [@bjo81](https://github.com/bjo81).
```
$ yaourt -S vorta
```
