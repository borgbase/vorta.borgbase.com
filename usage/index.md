---
title: Usage
nav_order: 3
layout: page
description: ""
has_children: true
has_toc: false
---
# Using Vorta

### Introduction
Vorta is a cross-platform open source backup client. It makes managing Borg backups easy and there is no need to run commands in the Terminal.

Vorta is also open source and everyone can contribute to improve the app or look at the source code. Together with Borg, which is also open source, this creates a strong chain of trust. By using Vorta, you can benefit from Borg's strengths and have the convenience of a graphical user interface at the same time.

If you are new to Vorta and Borg Backup, be sure to start with [this video](https://www.youtube.com/watch?v=asZX2YbTaNE) by Sun Knudsen. He gives a high level overview Borg's concepts and then walks through doing backups with Vorta step-by-step.

## Connecting to a backup repository

Vorta has the concept of a backup repository. This is where your actual backup files are stored. A single repository can have multiple archives (or snapshots), so you can always restore files from a previous state.

A backup repository can be on the same machine, a removable USB drive or on a remote server, like [BorgBase.com](https://www.borgbase.com).

- [Setting up Vorta for Local Backups](local)
- [Setting up Vorta for Remote Backups](remote)

## Scheduling automatic backups

Vorta has an integrated scheduler to perform automatic backups. After choosing a suitable interval in the *Schedule* tab, click the Apply button. To confirm it worked, inspect the *Next Backup* time to that Vorta has picked up your next backup time properly.

Since the Vorta application itself fires off our scheduled backups it **must be running** for that to occur. There is a check box on the *Misc* tab to enable Vorta to startup automatically when you log into your desktop.

### Trigger backups externally

If you prefer to start your backup jobs from system Cron or an external script (e.g. when a USB drive is plugged in), you can use the following command to start a backup run for a specific profile:

```
$ vorta --create 'Profile Name'
```

This will trigger a backup run in the current Vorta application.

## Restore

Once something bad happens to your files, you will want to restore them from a backup. Even better is to test restoring before you actually need it. Vorta offers two ways of restoring: First you can *mount* and browse an archive to pick individual files. Or you can choose a folder and extract everything in it. The latter option is great for bulk restoring. Read more about restoring [here](restore).

## Pruning old backups

Over time, you will amass a large number of archives. While hourly backups of the previous day are still useful, you may not need hourly backups of last month. This is where pruning comes in. It removes old archives over time and only keeps e.g. monthly archives of the previous year. Learn more about pruning [here](prune).
