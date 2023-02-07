---
title: Contributing
nav_order: 4
layout: page
description: ""
has_children: true
has_toc: false
---

# Contributing

First off, thanks for taking the time to contribute!

All contributions that improve Vorta for everyone are welcome. This includes bug fixes, new features, translations, answering questions or improving documentation.

Before actually coding a new feature it's usually best to discuss it with other users and maintainers on [GitHub Discussions](https://github.com/borgbase/vorta/discussions).

If your questions are Borg-specific it might be advisable to join the #borgbackup IRC channel on chat.freenode.net instead. Matrix is very suitable to be used as an always-on IRC-client, simply [register/identify to NickServ](https://github.com/matrix-org/matrix-appservice-irc/wiki/End-user-FAQ#how-do-i-registeridentify-to-nickserv) and then join the room `#freenode_#borgbackup:matrix.org`.

## Testing the current development version

If you have an issue with a current release, the issue may already be fixed in our Github repo. To test the latest code without doing much setup, you can install Vorta directly from Github:

```
$ pip install git+https://github.com/borgbase/vorta#egg=vorta
```

## Local Development Setup

Clone the latest version of this repo:

```
$ git clone https://github.com/borgbase/vorta/
```

Install in development/editable mode while in the repo root:

```
$ pip install -e .
```

Install additional developer packages (pytest, tox, pyinstaller):

```
pip install -r requirements.d/dev.txt
```

Then run as Python script. Any changes from your source folder should be reflected.

```
$ vorta
```

## Working on the GUI

Qt Creator is used to edit views. Install from [their site](https://www.qt.io/download) or using Homebrew and then open the .ui files in `vorta/assets/UI` with Qt Creator:

```
$ brew cask install qt-creator
$ brew install qt
```

To learn about PyQt we recommend the following tutorial: https://www.pythonguis.com/pyqt5-tutorial/.

## Icons

For UI icons, we use Fontawesome. You can browse available icons [here](https://fontawesome.com/icons) and download them as SVG [here](https://github.com/encharm/Font-Awesome-SVG-PNG). New icons are first added to src/vorta/assets/icons, and can be gotten with the `get_colored_icon` function

## Testing

Tests are in the folder `/tests`. Testing happens at the level of UI components. Calls to `borg` are mocked and can be replaced with some example json-output. To run tests:

```
$ pytest
```

To test for style errors:

```
$ flake8
```
