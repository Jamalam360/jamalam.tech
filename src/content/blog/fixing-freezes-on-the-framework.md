---
title: Fixing Freezes on Fedora with the Framework
summary: Details on the method that helped me fix the freezes and visual glitches I faced on my Framework.
date: November 2nd, 2022
---

My new Framework laptop initially had some freezes and visual glitches on
Fedora 37. I read through quite a large number of forum posts to find the
solution, so I thought I'd write it up somewhere hopefully easier to access. The
original solution is sourced from
[this](https://community.frame.work/t/hard-freezing-on-fedora-36-with-the-new-12th-gen-system/20675/146)
blog post. Full credit for the solution goes to that author, but it's not very
discoverable.

## The Fix

Edit `i915.conf` - the file might not exist, this is OK.

```bash
sudo nano /etc/modprobe.d/i915.conf
```

Add these lines:

```
options i915 enable_psr=0
options i915 enable_guc=3
options i915 enable_fbc=1
```

Two of those options are at their defaults, but it doesn't hurt to add them.

Now, to incorporate those changes:

```bash
sudo dracut --force
```

Hopefully this fixes any issues you might have been having! It certainly fixed
my problems with the Framework.
