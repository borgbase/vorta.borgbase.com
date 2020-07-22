---
title: Contributing
nav_order: 4
layout: page
description: ""
has_children: true
---
# Contributing
First off, thanks for taking the time to contribute!

All contributions that improve Vorta for everyone are welcome. Before coding a new feature it's usually best to discuss it with other users on [GitHub](https://github.com/borgbase/vorta/issues) or [Matrix](https://matrix.to/#/#vorta:matrix.org).

If your questions are Borg-specific it might be advisable to join the #borgbackup IRC channel on chat.freenode.net instead. Matrix is very suitable to be used as an always-on IRC-client, simply [register/identify to NickServ](https://github.com/matrix-org/matrix-appservice-irc/wiki/End-user-FAQ#how-do-i-registeridentify-to-nickserv) and then join the room `#freenode_#borgbackup:matrix.org`.


## Local Development Setup

### macOS (or Linux if Flatpak is not an option) with pip

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

### Linux with flatpak

The recommended way to build Vorta on Linux is via Flatpak.
This can be done by following these [instructions](https://wiki.gnome.org/Newcomers/BuildProject).
They first guide you through the installation of the IDE GNOME Builder.
GNOME Builder is then used to clone, build and run Vorta.


## Working on the GUI
Qt Creator is used to edit views. Install from [their site](https://www.qt.io/download) or using Homebrew and then open the .ui files in `vorta/assets/UI` with Qt Creator:
```
$ brew cask install qt-creator
$ brew install qt
```

For UI icons, we use Fontawesome. You can browse available icons [here](https://fontawesome.com/icons) and download them as SVG [here](https://github.com/encharm/Font-Awesome-SVG-PNG). New icons are first added to src/vorta/assets/icons, and can be gotten with the `get_colored_icon` function

### Notes for Developers

- Original strings in `.ui` and `.py` must be American English (en_US) and ASCII.
- In English, not translated:
  - log messages (log file as well as log output on console or elsewhere)
  - other console output, print().
  - docs
  - py source code, comments, docstrings

- Translated:
  - GUI texts / messages

- In Qt (sub)classes, use self.tr("English string"), scope will
  be the instance class name.
- Elsewhere use vorta.i18n.translate("scopename", "English string")
- To only mark for string extraction, but not immediately translate,
  use vorta.i18n.trans_late function.
  Later, to translate, use vorta.i18n.translate (giving same scope).

## Building Binaries
To build a macOS app package:
- add `Sparkle.framework` from [here](https://github.com/sparkle-project/Sparkle) and `borg` from [here](https://github.com/borgbackup/borg/releases) in `bin/macosx64`
- then uncomment or change the Apple signing profile to be used in `Makefile`
- finally run to `$ make Vorta.app` to build the app into the `dist` folder.

## Testing

Tests are in the folder `/tests`. Testing happens at the level of UI components. Calls to `borg` are mocked and can be replaced with some example json-output. To run tests:
```
$ pytest
```

To test for style errors:
```
$ flake8
```
