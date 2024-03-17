---
title: Fixing Freezes and Glitches on Fedora with the Framework
publishDate: 2022-11-02
summary: The method that helped me fix freezes and visual glitches on my Framework Laptop 13 running Fedora.
---

> This guide refers to the **Intel 12th Gen Version** of the Framework 13. I
> can't guarantee whether this method still works, or whether it works for other
> models of the laptop.

My new Framework laptop initially had some freezes and visual glitches on
Fedora 37. I read through quite a large number of forum posts to find the
solution, so I thought I'd write it up somewhere hopefully easier to access. The
solution is sourced from
[this](https://community.frame.work/t/hard-freezing-on-fedora-36-with-the-new-12th-gen-system/20675/146)
forum comment. Full credit for the solution goes to that author.

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
