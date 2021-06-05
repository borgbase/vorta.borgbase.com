---
title: Manage Settings
nav_order: 6
layout: page
description: ""
parent: Usage
---

# Manage Vorta Settings

## Import and Export Settings as JSON

Often it can be convenient to import and export your Vorta settings to move them to a new machine. You can use the import/export buttons next to the profile selector for this. The export file contains the following details:

- Profile settings (e.g. source folders, exclusions, pruning)
- Repository settings (remote URL, password)
- Global Vorta settings

Adding the repo password is optional and can be decided during the export process.

Global Vorta settings are optional during import. I.e. you can choose to only import the profile, but not other global settings.

This feature requires Vorta `>=0.7.6`.

## Bootstrap Vorta with Default Profile

After exporting an existing profile to JSON, you can use it to bootstrap Vorta with a default profile. This will import all the settings found in the import file and overwrite any existing profile with the same name. If no profile exists yet (because Vorta was never run before), only the imported profile will be visible.

To trigger an import on startup place a file called `.vorta-init.json` in the user's home directory. During the next startup, Vorta will import and then delete this file.
