---
layout: default
title: Home
nav_order: 1
description: ""
permalink: /
---

<!-- prettier-ignore-start -->
# A Desktop Client for Borg Backup
{: .fs-9 }

Vorta is a backup client for macOS and Linux desktops. It integrates the mighty [Borg Backup](https://borgbackup.readthedocs.io/en/stable/) with your favorite desktop environment to protect your data from disk failure, ransomware and theft.
{: .fs-6 .fw-300 }
<!-- prettier-ignore-end -->

[Install](install){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [Use](/usage){: .btn .fs-5 .mb-4 .mb-md-0 .mr-2 } [Get Involved](contributing){: .btn .fs-5 .mb-4 .mb-md-0 }

<video controls preload="none" src="/assets/images/vorta/vorta-0.9-1080.mp4" poster="/assets/images/vorta/vorta-0.9-preview.webp">
</video>

---

## Why is this great? 🤩

- **Encrypted, deduplicated and compressed backups** using [Borg](https://borgbackup.readthedocs.io) as backend.
- **No vendor lock-in** – back up to local drives, your own server or [BorgBase](https://www.borgbase.com), a hosting service for Borg backups.
- **Open source** – free to use, modify, improve and audit.
- **Flexible profiles** to group source folders, backup destinations and schedules.
- **One place** to view all point-in-time archives and restore individual files.

## Installation

Vorta should work on all platforms that support Qt and Borg. This includes macOS, Ubuntu, Debian, Fedora, Arch Linux and many others. Windows is currently not fully supported by Borg, but this may change in the future.

See [here](install) for available packages and install instructions.

## Usage

Learn how to set up a backup workflow to a [remote](usage/remote) (or [local](usage/local)) destination. And most importantly, how to [restore](usage/restore) files later.

## Getting Involved

Want to contribute to Vorta? Great! See [Contributing](contributing) to see how you can help with coding, packaging and translation. See our [Github contributors page](https://github.com/borgbase/vorta/blob/master/CONTRIBUTORS.md) for the people behind Vorta.

Thanks to [Alexander Taylor](https://github.com/meowmix3) for expanding the documentation.

---

## License

Vorta is open source and licenced under the Gnu GPL.
