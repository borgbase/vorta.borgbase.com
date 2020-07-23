---
title: Translations
nav_order: 2
layout: page
description: ""
parent: Contributing
---
# Translations

Translations are managed on [Transifex](https://www.Transifex.com/borgbase/vorta/). If you are interested in adding a new language, first let us know in the [translation thread](https://github.com/borgbase/vorta/issues/159). We will then set you up on Transifex. No coding skill are required for translations.

### Policy for Translations

- No google translate or other automated translation.
- Only native or as-good-as-native speakers should translate.
- As there is a need for continued maintenance, a translator should be also a
  user of vorta, having some own interest in the translation (one-time
  translations are not that helpful if there is no one updating them regularly)
- A translation must have >90% translated strings. If a translation falls
  and stays below that for a longer time, it will not be used by vorta and
  ultimately, it will get removed from the repository also.

### Adding a New Language

- Only add a new language if you are willing to also update the translation
  in future, when new strings are added and existing strings change.
- Request a new language by opening a new issue on Github. We will then add it on Transifex.

### Updating a Language

- Please only work on a translation if you are a native speaker or you have
  similar language skills.
- Open a new issue on Github.
- Edit the language on Transifex.

### Using and Testing Transifex Translations

- Extract from source files (needed after most code changes to update line number):
  `make translations-from-source`
- Push to Transifex: `make translations-push`
- Pull finished translations from Transifex: `make translations-pull`
- Compile: `make translations-to-qm`
- Test with specific translation: `LANG=de vorta`
- Scale strings to test UI: `LANG=de TRANS_SCALE=200 vorta --foreground`
  
### Style Guide/Glossary

- Headings, buttons and dropdowns are titleized: "Apply Changes"
- Field labels (same or next line) end with a colon and are titleized. "Allowed Networks:"
- No full stop `.` at the end of short labels, but when it's a full sentence.
- If something is in progress, use three dots (no ellipsis): "Starting backup..."
- **Repo/repository** = local or remote folder where Borg stores files.
- **Archive** (not snapshot) = result of `borg create` execution, an identifier to find a
  collection of files in a repo, as they existed at a past point in time.

### Required Software

To successfully run the translation-related Makefile targets, the translations
maintainer needs:

- `make` tool
- `pylupdate5` (from PyQt)
- `lrelease` (from Qt package)
- `tx` Transifex client (PyPI package `transifex-client`, contained in requirements.d/dev.txt)

Install on Debian 9 "Stretch":
```
$ apt install qttools5-dev-tools pyqt5-dev-tools
```

Install on macOS via Homebrew:
```
$ cd requirements.d && brew bundle
```
