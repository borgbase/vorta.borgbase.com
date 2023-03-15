---
title: Linux
nav_order: 2
layout: page
description: ""
parent: Install
---

# Install on Linux

## Flatpak

Can be installed on any Linux distribution. Find Vorta on [Flathub](https://flathub.org/apps/details/com.borgbase.Vorta). To install:

```
$ flatpak install flathub com.borgbase.Vorta
```

Flatpak apps run in a sandboxed environment and can't access certain folders, like `/root`, `/etc` and `/var`. See [here](https://docs.flatpak.org/de/latest/sandbox-permissions.html#filesystem-access) for the full list. If you need access to those directories, consider a different installation option.

Settings can be transferred by copying `~/.local/share/Vorta/settings.db` to `~/.var/app/com.borgbase.Vorta/data/Vorta/`.

Maintained by [@Hofer-Julian](https://github.com/Hofer-Julian).

## Install from Source

The most generic way is to install it as Python package using [PIP](https://pip.readthedocs.io/en/stable/installing/). First [install](https://borgbackup.readthedocs.io/en/stable/installation.html) Borg using the package of your distribution or via PyPI. The latter needs some additional [source packages](https://borgbackup.readthedocs.io/en/stable/installation.html#dependencies). Then install Vorta from PyPI. Your local Python version must be >= 3.7. If you keep Python packages in your home folder, you can add the `--user` option.

```
$ pip3 install vorta
```

### Add Entry to Application Launcher

You can add a `.desktop` entry to get a link to Vorta in your application launcher, usually `~/.local/share/applications/vorta.desktop`. Use the template available [here](https://github.com/borgbase/vorta/blob/master/src/vorta/assets/metadata/com.borgbase.Vorta.desktop) and adjust the `Exec` and [`Icon`](https://github.com/borgbase/vorta/blob/master/src/vorta/assets/icons/scalable/com.borgbase.Vorta.svg) paths if necessary.

## Distribution Packages

### Arch Linux

Use the [AUR package](https://aur.archlinux.org/packages/vorta/).

```
$ yay -S vorta
```

Maintained by [@bjo81](https://github.com/bjo81).

### Debian and derivatives

Users of Debian ≥11 (Bullseye), its derivative Ubuntu ≥21.04 (Hirsute), and its derivatives (Pop!\_OS, Mint, elementaryOS, Kubuntu, Neon, etc), may install Vorta from the App Store, or

```
sudo apt install vorta
```

Please note that some app stores provide both _deb_ and _flatpak_ packages.

Users who require features from a newer version of Vorta, or users of older OS releases should investigate if their distribution provides _backports_, and should prefer Vorta from this distribution stream. E.g. [Debian Backports](https://backports.debian.org) or [Ubuntu Backports](https://help.ubuntu.com/community/UbuntuBackports).

Failing this, ask your distribution to provide a package, and failing that, use the flatpak!

Maintained by [@sten0](https://salsa.debian.org/python-team/packages/vorta)

### Enterprise Linux and derivatives (RPM)

Vorta is [available](https://src.fedoraproject.org/rpms/vorta) for any distribution using EPEL9 (Enterprise Linux 9 and derivatives, like Alma, Rocky, Fedora, RHEL and CentOS). First enable EPEL as described [here](https://docs.fedoraproject.org/en-US/epel/). Then install using `dnf`/`yum`:

```
$ yum install vorta
```

Maintained by [@Jonathan](https://src.fedoraproject.org/user/jonathanspw)

### Fedora COPR (unofficial)

Can be used on for EPEL (and friends), OpenSuse, Mageia and CentOS >= 7. For more details see the [custom repo](https://copr.fedorainfracloud.org/coprs/luminoso/vorta/).

```
$ sudo dnf copr enable luminoso/vorta
$ sudo dnf install vorta
```

Maintained by [@luminoso](https://github.com/luminoso)

### Solus Linux

Use the official [package](https://dev.getsol.us/source/vorta/). Command for install:

```
$ sudo eopkg it vorta
```

Maintained by [@kyrios123](https://github.com/kyrios123).

**Looking to maintain a package?** [Open](https://github.com/borgbase/vorta/issues/new) an issue or pull request and it will be added here.
