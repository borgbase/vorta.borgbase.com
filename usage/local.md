---
title: Local Backups
nav_order: 2
layout: page
description: ""
parent: Usage
---

# Setting up Vorta for Local Backups

## Step 1 – Download Vorta

Visit the [Download](/download) page for different install options.

If you chose the binary image for macOS, you will see the following installer image after downloading:

<img src="/assets/images/vorta/Screenshot-2018-11-02-at-19.56.04-300x188.png" alt="" width="300" height="188" />

After starting Vorta, you should see a new settings window.

<img src="/assets/images/vorta/local1.png" alt="" width="500" />

## Step 2 - Setting up Local Repository

Click on the **Add Repository** drop-down menu, and select **"New Repository…"**. After clicking, a new window should pop up.

<img src="/assets/images/vorta/local-add-new-repo.png" alt="" width="400" />

Click on the <img src="/assets/images/vorta/local-folder-icon.png" /> icon to select the directory where you would like your new Borg repository to be initialized. Enter in your chosen passphrase for the repository. **Make sure and store your passphrase somewhere safe!** When you are sure all of the information you have entered in is correct, hit **Add**.

You can also add an existing repository by clicking on the **Add Repository** drop-down menu, and selecting **"Existing Repository…"**. After clicking, a new window should pop up.

<img src="/assets/images/vorta/local-add-existing-repo.png" alt="" width="400" />

## Step 3 – Add folders to back up

With your repo settings in place, you can now add some backup folders and make your first backup. Navigate to the **Sources** tab to add some folders or exclusions.

<img src="/assets/images/vorta/Screenshot-2018-11-02-at-20.37.32.png" alt="" width="300" height="169" class="aligncenter size-medium wp-image-65" />

Next press **Start Backup** to do your first backup. After every successful backup (or snapshot), a new line will be added to the **Snapshot** tab. There you can also mount a snapshot and restore files.

<img src="/assets/images/vorta/Screenshot-2018-11-02-at-20.40.41.png" alt="" width="300" height="180" class="aligncenter size-medium wp-image-66" />

## Conclusion

After you have validated that everything works as expected, you can put your backups on auto-pilot. If you chose [BorgBase.com](https://www.borgbase.com) as repo provider, you can set alerts to be notified if your backups stop working for longer than X days.
