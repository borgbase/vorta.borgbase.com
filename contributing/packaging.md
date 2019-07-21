---
title: Packaging
nav_order: 3
layout: page
description: ""
parent: Contributing
---
# Packaging Vorta

## Linux with Flatpak

Follow the setup guide on [flatpak.org](http://flatpak.org/setup/) to make sure you have ``flatpak`` and ``flathub`` installed.

You also need to have ``flatpak-builder`` installed, which is usually available from the same repository as the ``flatpak`` package.

Install the org.kde 5.12 runtime and SDK
```
$ flatpak install flathub org.kde.Platform//5.12 org.kde.Sdk//5.12
```

Make a repo for your local builds (If you get the error: ``Remote listing for my-flatpak-builds not available; server has no summary file. Check the URL passed to remote-add was valid`` you can ignore it):
```
$ mkdir ~/my-flatpak-builds
$ flatpak remote-add --user --no-gpg-verify my-flatpak-builds ~/my-flatpak-builds
```

Next, in Vorta’s source directory, use ``flatpak-builder`` to build a Vorta flatpak and install it (this can take more than an hour):
```
$ cd vorta/flatpak/
$ mkdir app
$ flatpak-builder --repo=$HOME/my-flatpak-builds app com.borgbase.Vorta.yaml
$ flatpak install --user my-flatpak-builds com.borgbase.Vorta//devel -y
```

Now you can work on the codebase.
When you want to test your changes you can execute inside of ``vorta/flatpak/``
```
$ flatpak-builder --repo=$HOME/my-flatpak-builds app com.borgbase.Vorta.yaml --force-clean && flatpak update com.borgbase.Vorta//devel -y
$ flatpak run com.borgbase.Vorta//devel 
```

To set which branch of Vorta (master from flathub or devel from local development setup) will be used in your OS you can use

```
$ flatpak make-current com.borgbase.vorta [master|devel]
```
