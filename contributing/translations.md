---
title: Translations
nav_order: 2
layout: page
description: ""
parent: Contributing
---

# Translations

Translations are managed directly in the repository as `.ts` XML files under `src/vorta/i18n/ts/`. AI-assisted translation is done via [Claude Code](https://code.claude.com/docs)'s `/translate` skill. Per-language glossaries in `.claude/skills/translate/glossaries/<lang>.md` enforce consistent terminology across translations.

Currently supported languages: ar, cs, de, es, fi, fr, gl, it, nl, ru, sk, sv.

### Policy for Translations

- Native or near-native speaker review is encouraged for all translations.
- A translator should also be a user of Vorta, with ongoing interest in maintaining the translation.
- A translation must have >90% translated strings. If it falls and stays below that for a longer time, it will not be used by Vorta and may be removed from the repository.

### Adding a New Language

- Only add a new language if you are willing to also update the translation in future, when new strings are added and existing strings change.
- Steps to add a new language:

1. Copy an existing `.ts` file:
   ```
   $ cp src/vorta/i18n/ts/vorta.de.ts src/vorta/i18n/ts/vorta.XX.ts
   ```
2. Update the language attribute in the new file: `<TS version="2.1" language="XX">`
3. Clear all existing translations (set entries to `type="unfinished"`)
4. Run `/translate translate XX` in Claude Code
5. Run `/translate compile` to compile `.ts` to `.qm`
6. Test in the app: `LANG=XX vorta`

### Updating a Language

- Run `/translate missing` to check untranslated string counts per language
- Run `/translate translate <lang>` to generate translations for a specific language
- Review the diff to verify translation quality
- Run `/translate compile` to compile updated `.ts` files to `.qm`

### Using and Testing Translations

- Extract from source files (needed after most code changes): `make translations-from-source`
- Compile: `make translations-to-qm` or `/translate compile`
- Test with specific translation: `LANG=de vorta`
- Scale strings to test UI: `LANG=de TRANS_SCALE=200 vorta --foreground`

### Style Guide/Glossary

We use Qt's translation framework. Some guidelines for translations:

- Original strings in `.ui` and `.py` must be American English (en_US) and ASCII.
- Headings, buttons and dropdowns are titleized: "Apply Changes"
- Field labels (same or next line) end with a colon and are titleized. "Allowed Networks:"
- No full stop `.` at the end of short labels, but when it's a full sentence.
- If something is in progress, use three dots (no ellipsis): "Starting backup..."
- **Repo/repository** = local or remote folder where Borg stores files.
- **Archive** (not snapshot) = result of `borg create` execution, an identifier to find a collection of files in a repo, as they existed at a past point in time.

Not translated, always in English:

- log messages (log file as well as log output on console or elsewhere)
- other console output, print().
- docs
- py source code, comments, docstrings

Translated:

- GUI texts / messages

Add new strings for translation:

- In Qt (sub)classes, use self.tr("English string"), scope will be the instance class name.
- Elsewhere use `vorta.i18n.translate("scopename", "English string")`
- To only mark a string, but not translate: `vorta.i18n.trans_late` (Translated string will be used later. E.g. when displaying settings.)

### Required Software

To work with translations, you need:

- `make` — for running Makefile targets
- `lrelease` — from Qt tools, for compiling `.ts` to `.qm`
- [Claude Code](https://code.claude.com/docs) — for running `/translate` commands
