---
title: Shell Commands
nav_order: 7
layout: page
parent: Usage
---

# Run Shell Commands Before and After a Backup

Each profile can run a shell command before and after every backup. You find the fields in the _Schedule_ tab, under _Shell Commands_. Common uses are mounting and unmounting a drive, stopping a service while its data is backed up, or telling a monitoring service that a backup ran.

## How the commands run

- The **pre-backup command** runs before Borg starts. If it exits with a non-zero code, Vorta skips the backup and the post-backup command does not run.
- The **post-backup command** runs after `borg create` finishes, whether the backup succeeded or failed. It runs after manual backups, scheduled backups and `vorta --create`.
- Neither command runs for prune, check or compact jobs.
- Commands run through the system shell (`/bin/sh`), so pipes, `&&` and `$variables` work.
- Vorta waits for each command to finish. Keep them short, or run long tasks in the background.

## Available variables

Vorta sets these environment variables for both commands:

| Variable        | Value                                                     |
| --------------- | --------------------------------------------------------- |
| `$profile_name` | Name of the profile, e.g. `Laptop Home`                   |
| `$profile_slug` | Profile name as a slug, e.g. `laptop-home`                |
| `$repo_url`     | Repository path or URL                                    |
| `$returncode`   | Exit code of `borg create`. Always `0` in the pre-backup command. |

Borg's exit code is `0` for success, `1` for warnings (for example a file changed while it was read; the archive is still created) and `2` or higher for errors. See the [Borg documentation](https://borgbackup.readthedocs.io/en/stable/usage/general.html#return-codes) for details.

## Example: get alerted when backups stop

Vorta only backs up while it is running and the computer is awake. If a laptop stays closed for a week, or a backup keeps failing in the background, nothing tells you. A heartbeat (dead man's switch) monitoring service such as [Watchgoose](https://watchgoose.com) fills this gap: Vorta pings a URL after each backup, and the service alerts you when the pings stop or report a failure.

Create a check with a period that matches your backup schedule, then use its ping URL in the profile's shell commands.

Pre-backup command (optional, measures how long backups take):

```
curl -fsS -m 10 --retry 3 -o /dev/null https://watchgoose.com/ping/your-check-uuid/start || true
```

Post-backup command:

```
curl -fsS -m 10 --retry 3 -o /dev/null "https://watchgoose.com/ping/your-check-uuid/$( { [ "$returncode" = 0 ] || [ "$returncode" = 1 ]; } && echo 0 || echo fail)"
```

This marks the check as up when Borg finished with `0` (success) or `1` (warnings, for example a file changed while it was read; the archive is still created). Any other result marks it as failed, including a backup that was stopped (Borg exits with `143`) or killed (Vorta then reports a negative code, such as `-9`).

If you want warnings to alert you as well, use this post-backup command instead:

```
curl -fsS -m 10 --retry 3 -o /dev/null "https://watchgoose.com/ping/your-check-uuid/$([ "$returncode" = 0 ] && echo 0 || echo fail)"
```

Run one backup by hand after saving the commands and confirm that the check shows as up. A new check only starts watching for missed backups after its first success ping.

Keep `|| true` at the end of the pre-backup command. Without it, a network problem that stops `curl` from reaching the monitoring service would also stop the backup.
