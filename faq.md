---
title: FAQ
nav_order: 6
layout: page
description: ""
---

# Frequently Asked Questions

### Why the name "Vorta"?
[Vorta](http://memory-alpha.wikia.com/wiki/Vorta) are a race referenced in Star Trek. After dying they are replaced by their cloned backup. Just like your data.

### Can I use Vorta on Windows?
Borg, the underlying library we use doesn't work directly with Windows, but works on Windows 10 WSL 1 and 2. See [this Github issue](https://github.com/borgbackup/borg/issues/4466) for details.

Vorta is based on Qt, which also works on Windows. Get in touch if you have a working setup on Windows.

### Can I migrate my profiles and settings to a new installation of Vorta?
Yes. You can find your settings in:
- `~/.var/app/com.borgbase.Vorta/data/Vorta/settings.db` if you use flatpak
- `~/.local/share/Vorta/settings.db` if you use pip

Copy that file to the same location on the new installtion.

We are working on a way to do this via the GUI -- check [this GitHub issue](https://github.com/borgbase/vorta/issues/462) for details.

### My file/folder dialog looks different than other Linux programs.
<img src="/assets/images/vorta/qt_default_dialog.png" alt="" width="300" height="188" />

If your file/folder dialog looks like the picture above then you need to install [qt5-styleplugins](https://repology.org/project/qt5-styleplugins/versions), and  set `QT_STYLE_OVERRIDE` to `gtk2`. See [the Arch wiki](https://wiki.archlinux.org/index.php/Uniform_look_for_Qt_and_GTK_applications) for more

### Something doesn't work. Where can I get help?
For general questions or to simply talk about Vorta, hit us up at [Matrix](https://matrix.to/#/#vorta:matrix.org)

If you have found a bug or miss a feature, look into the existing [Github issues](https://github.com/borgbase/vorta/issues) or open a new [one](https://github.com/borgbase/vorta/issues/new/choose).

If your questions are Borg-specific, join the #borgbackup IRC channel on chat.freenode.net instead. Matrix is very suitable to be used as an always-on IRC-client, simply [register/identify to NickServ](https://github.com/matrix-org/matrix-appservice-irc/wiki/End-user-FAQ#how-do-i-registeridentify-to-nickserv) and then join the room `#freenode_#borgbackup:matrix.org`.

