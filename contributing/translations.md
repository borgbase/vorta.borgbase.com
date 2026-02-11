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
4. Create a per-language glossary at `.claude/skills/translate/glossaries/XX.md` (use `de.md` as template)
5. Run `/translate translate XX` to generate translations
6. Run `/translate review XX` to check translation quality
7. Run `/translate compile` to compile `.ts` to `.qm`
8. Test in the app: `LANG=XX vorta`

### Updating a Language

- Run `/translate missing` to check untranslated string counts per language
- Run `/translate translate <lang>` to generate translations for a specific language
- Run `/translate review <lang>` to quality-check translations (glossary compliance, consistency, style, XML escaping, keyboard shortcuts). Reports issues with line numbers and offers auto-fix.
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

### Per-Language Glossaries

Each supported language should have a glossary file at `.claude/skills/translate/glossaries/<lang>.md` that enforces consistent terminology across translations. These glossaries are used by both `/translate translate` and `/translate review` to ensure key terms are translated correctly.

When adding a new language, create a glossary file for it. Use an existing glossary (e.g., `de.md`) as a template and adapt the terms for the target language.

### Glossary of Common Terms

| English Term | Context/Notes |
|---|---|
| Passphrase | Password to unlock the borg key (NOT for encryption/decryption) |
| Repository | Local or remote folder where Borg stores data |
| Archive | Result of `borg create`, a point-in-time collection of files (not called "snapshot") |
| Backup | Noun: keep English; Verb: translate per language |
| Prune | Removing old archives per retention policy |
| Mount | Mounting an archive for browsing files |
| Extract | Restoring files from an archive |
| Profile | Backup profile configuration |
| Schedule | Backup schedule/timing |
| Source | Directories/files being backed up |
| Exclude | File/folder exclusion patterns |

### Translation Quality Guidelines

**DO:**
- Preserve placeholders like `{}`, `%1`, `%n` exactly as they appear
- Keep keyboard shortcuts (e.g., `&File`) with the `&` prefix
- Maintain XML escaping (`&amp;`, `&lt;`, etc.)
- Use Title Case for headings, buttons, and dropdowns
- End field labels with a colon

**DON'T:**
- Translate technical terms (Borg, SSH, etc.)
- Change placeholder order without linguistic necessity
- Add or remove punctuation that changes meaning
- Accept AI-generated translations without running `/translate review`

### Workflow Example

```bash
# 1. Check what needs translating
/translate missing

# 2. Generate translations for German
/translate translate de

# 3. Review translation quality
/translate review de

# 4. Compile translations
/translate compile

# 5. Test locally
LANG=de vorta
```

### Required Software

To work with translations, you need:

- `make` — for running Makefile targets
- `lrelease` — from Qt tools, for compiling `.ts` to `.qm`
- [Claude Code](https://code.claude.com/docs) — for running `/translate` commands
