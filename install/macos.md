---
title: macOS
nav_order: 1
layout: page
description: ""
parent: Install
---
# Install on macOS

The recommended installation method is via [Homebrew Cask](https://brew.sh/).

If you plan to use Borg's mount feature to browse backups, you will need to install macFUSE and Borg's [own tap](https://github.com/borgbackup/homebrew-tap):

```
$ brew install --cask macfuse
$ brew install borgbackup/tap/borgbackup-fuse
```

**OR** to install Borg **without** macFUSE/mount feature:

```
$ brew install borgbackup
```

Then, as last step install Vorta 

```
$ brew install --cask vorta
```

## Binary Install
If you don't use Homebrew, you can find [releases](https://github.com/borgbase/vorta/releases) on our Github page. This will usually work on the latest version of macOS only.

