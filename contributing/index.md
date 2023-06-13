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

If your questions are Borg-specific it might be advisable to join the #borgbackup IRC channel on libera.chat instead. Matrix is very suitable to be used as an always-on IRC-client, simply [register/identify to NickServ](https://libera.chat/guides/faq#can-i-connect-with-matrix) and then join the room `#borgbackup:libera.chat`.

## Testing the current development version

If you have an issue with a current release, the issue may already be fixed in our Github repo. To test the latest code without doing much setup, you can install Vorta directly from Github:

```
pip install git+https://github.com/borgbase/vorta#egg=vorta
```

## Local Development Setup

Note: Installation of PyQt5 via pip is currently incompatible with M1/M2 Macs. To get it working on M1/M2 Macs, run the necessary commands in a terminal window opened with Rosetta.

Clone the latest version of this repo:

```
git clone https://github.com/borgbase/vorta/
```

Move to the created repo directory:

```
cd vorta
```

Create a virtual python environment for development. This sandboxes your development packages.

```
python3 -m venv --prompt vorta --upgrade-deps env
```

Activate the virtual environment. For bash type:

```
source ./env/bin/activate
```

Install in development/editable mode while in the repo root:

```
pip install -e .
```

Install additional developer packages (pytest, tox, pyinstaller, pre-commit):

```
pip install -r requirements.d/dev.txt
```

We use [pre-commit](https://pre-commit.com/) to ensure commit consistancy. Install the pre-commit hooks to your local copy of the repository:

```
pre-commit install
```

Then run as Python script. Any changes from your source folder should be reflected.

```
vorta
```

Note: If you run into errors with the Qt platform while running this command or when running `pytest`, try installing the following dependencies:

```
        sudo apt update && sudo apt install -y \
          xvfb libssl-dev openssl libacl1-dev libacl1 build-essential borgbackup \
          libxkbcommon-x11-0 dbus-x11 libxcb-icccm4 libxcb-image0 libxcb-keysyms1 \
          libxcb-randr0 libxcb-render-util0 libxcb-xinerama0 libxcb-xfixes0 libxcb-shape0 \
          libegl1 libxcb-cursor0
```

These are the dependencies used in Github Actions. If the command above still doesn't work, check the [here](https://github.com/borgbase/vorta/blob/master/.github/workflows/test.yml#L65) for an updated dependency list and try installing those.

You can deactivate the virtual environment again using:

```
deactivate
```

_Note: Don't forget to activate your virtual environment every time you wish to work on `vorta`._


## Manually run pre-commit checks

These checks include code formatter, linters and other code style checkers. The following command runs these checks for the modified files only.

```
pre-commit run
```

## Coding Conventions

- All files should be formatted using the [black](https://github.com/psf/black) auto-formatter. Black is already configured as a pre-commit hook.

- Use an editor with [EditorConfig](https://editorconfig.org/) support. The `.editorconfig` file in the repository defines style rules e.g. for indentation that must be followed.

- Follow [PEP8](https://peps.python.org/pep-0008/) with some exceptions like the maximum line length. Use flake8 to check your code. This tool is also automatically run by pre-commit.

- Sort your imports with [isort](https://pycqa.github.io/isort/). Pre-commit does that too.

- Write docstrings at least for methods and functions. Docstrings for classes, attributes and global variables are very welcome too. Use either [numpydoc ](https://numpydoc.readthedocs.io/en/latest/format.html) / [reST](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html)/ [google ](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings) style for your docstrings. We haven't decided on one docstring format yet.

- Use python type hints as applicable. Method and function signatures must be typed!

- Mark all strings for internationalization. See the [18n guide](#Internationalization).

- Use comments to explain your code and your implementation decisions.

- Use underscore naming convention (not camelCase).

- Avoid redundancy that is repeating code.

- Do not copy code from other people or projects! If you contribute code you must hold the right to distribute it under the terms of GPLv3 and coher to the [Developer Certificate of Origin](https://developercertificate.org/). If you want to use code from other people with a license compatible to GPLv3 talk to us first.

## Working on the GUI

Qt Creator or Qt Designer is used to edit views. There are many ways to install one of these two applications. For MacOS you can use homebrew or install from [their site](https://www.qt.io/download). Then you can open the .ui files in `vorta/assets/UI` with Qt Creator. To learn about PyQt we recommend the following [tutorial](https://www.pythonguis.com/pyqt5-tutorial/).

```
brew cask install qt-creator
brew install qt
```

## Internationalization

Vorta supports multiple languages. The UI strings in our source code must be written in English. However vorta ships with translations of these strings to multiple languages. The ui strings are later extracted automatically from the code into a `.qs` file. For that to work you must mark the user facing strings when writing code. Do not mark strings that aren't part of the user interface. Marking is done by wrapping the strings in the `translate` or `trans_late` method which are defined in `vorta.i18n`. Both methods share the same signature:

```py
translate(context: str, sourceText: str, disambiguation: str = None, n: int = -1) -> str
```

The arguments are explained in the [QT docs](https://doc.qt.io/qt-6/qcoreapplication.html#translate). Usually you will use `translate` that not only marks the string for translation but also translates it at runtime. However sometimes you want to mark a string, use the english version in a data structure, an algorithm of some sort or other calculations. In these cases you have to use `trans_late` and call `translate` on the string later before it is displayed. You can find more information on the translation process in the [Translations guide](translations). For general information on internationalization in PyQt see the [PyQt docs](https://www.riverbankcomputing.com/static/Docs/PyQt5/i18n.html#differences-between-pyqt5-and-qt).

## Icons

When adding UI icons, please make sure they are under a permissive license, like *MIT* or *Apache*. Most of our icons are from [Fork Awesome](https://forkaweso.me/Fork-Awesome/icons/) which was forked from *Font Awesome* before their license became less permissive.

You can also search for icons with a suitable license using [Iconduck](https://iconduck.com/) and then add a comment specifying the author and license in the SVG file. E.g.:

```
<!-- Material Design icons by Google (Apache License 2.0) -->
```

New icons are first added to src/vorta/assets/icons, and can be used with the `get_colored_icon` function. To ensure they can be colored for dark and light themes, add `fill="#000000"` as attribute in the root `<svg>` element.


## Testing

Tests are in the folder `/tests`. Testing happens at the level of UI components. Calls to `borg` are mocked and can be replaced with some example json-output. To run tests:

```
pytest
```

## Creating Commits, Opening PRs and Licensing

By opening a pull/merge request you provide your contribution under the [license](./../../LICENSE.txt) of this repository and you affirm the [Developer Certificate of Origin][dco]. You can show that by signing off your commits (using `git commit -s`).

[dco]: https://developercertificate.org/
