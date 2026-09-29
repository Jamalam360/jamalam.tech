---
title: NixOS Unstable for Busy People - Automatic Flake Updates with GitHub Actions
summary: A weekly GitHub Actions workflow that updates my flake inputs, test-builds all my NixOS machines, and opens a PR with the results.
date: "2026-09-29"
human-date: September 29th, 2026
---

> In a hurry? The entire workflow content is available in the [appendix](#full-workflow). Make sure to enable **"Allow GitHub Actions to create and approve pull requests"** in your repository settings.

I have been running 3 NixOS machines on the unstable channel for almost 3 years now. All too often I think I will get away with just quickly updating my machine, which turns into an hour long debugging session figuring out what has broken in the latest unstable update.

Of course, one solution would be to switch to a stable update channel, but I do actually like getting software updates quickly. Using unstable is a calculated risk that I choose to take.

My solution was to build a GitHub Action which updates my flake inputs, runs a test build, and submits an update PR. If the builds all pass, I can merge and update my machines without worries. If any of the builds fail, I can jump into debugging if I have time, or wait for the next week's PR to see if that fixes it.

# The Design

The job of the workflow is fairly simple:
1. Trigger on a schedule (mine runs weekly on Mondays).
2. Close the previous week's PR if it has not been merged.
3. Set up Nix on the runner and update the flake inputs.
4. If the inputs have changed, build each configuration in sequence, recording whether the build passed.
5. Open a PR with the run details in the body.

# Workflow Walkthrough

The workflow starts as usual:

```yml
name: Update flake.lock

on:
  schedule:
    - cron: 0 6 * * 1
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write
```

The `cron` trigger runs on Mondays at 6am, and the `workflow_dispatch` allows manual updating. 

The permissions are needed to create pull requests. You will also need to navigate to **Settings > Actions > General** in your repository and tick **"Allow GitHub Actions to create and approve pull requests"**:

![A screenshot showing the tickbox that must be enabled.](/blog/content/github-create-prs.png)

Next, we check out the repository contents:

```yml
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0
```

And close stale update PRs (according to a label) using the GitHub CLI:

```yml
- name: Close stale flake-update PR
  env:
    GH_TOKEN: ${{ github.token }}
  run: |
    gh pr list --label flake-update --state open --json number --jq '.[].number' | \
    while read -r pr; do
      gh pr close "$pr" --delete-branch
    done
```

Next, we have to allow unprivileged user namespaces. Ubuntu 24.04 runners restrict unprivileged user namespaces via AppArmor, which breaks Nix's sandboxed builds. This is required for the testing of some packages to pass:

```yml
- name: Allow unprivileged user namespaces (needed for some sandboxed tests)
  run: sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```

Install Nix and update the flake inputs:

```yml
- uses: cachix/install-nix-action@v31
  with:
    extra_nix_config: |
      accept-flake-config = true

- name: Update flake.lock
  run: nix flake update --accept-flake-config
```

Check if the `flake.lock` has been modified, as there is no point proceeding if there have been no changes:

```yml
- name: Check for changes
  id: diff
  run: |
    if git diff --quiet flake.lock; then
      echo "changed=false" >> "$GITHUB_OUTPUT"
    else
      echo "changed=true" >> "$GITHUB_OUTPUT"
    fi
```

Now for the important part - building all of the NixOS configurations in the flake:

```yml
- name: Build all nixosConfigurations
  if: steps.diff.outputs.changed == 'true'
  id: build
  run: |
    echo "## Build results" > build_report.md
    status=0
    for name in $(nix flake show --json --accept-flake-config 2>/dev/null | jq -r '.nixosConfigurations // {} | keys[]'); do
      if nix build ".#nixosConfigurations.$name.config.system.build.toplevel" \
          --accept-flake-config --no-link -L \
          --option download-attempts 5 \
          --option connect-timeout 10 2>&1; then
        echo "### ✅ $name built" >> build_report.md
      else
        echo "### ❌ $name failed" >> build_report.md
        status=1
      fi
    done
    exit "$status"
  continue-on-error: true
```

A few things worth noting:
- We only run this step if the diff shows a change in the `flake.lock`.
- We increase the `download-attempts` and `connect-timeout` options to reduce the chance of flaky builds due to network errors.
- We report successes and failures to a `build_report.md` file.
- `continue-on-error` means that all system builds will be attempted even if one fails.

Finally, the workflow creates a PR with the correct label and the content of the `build_report.md` file.

```yml
- name: Create pull request
  if: steps.diff.outputs.changed == 'true'
  uses: peter-evans/create-pull-request@v8
  with:
    commit-message: "deps: update flake.lock"
    committer: GitHub Actions <actions@github.com>
    author: GitHub Actions <actions@github.com>
    branch: flake-update-${{ github.run_id }}
    delete-branch: true
    title: "deps: update flake.lock (${{ steps.build.outcome == 'success' && 'build pass' || 'build failures' }})"
    body-path: build_report.md
    add-paths: flake.lock
    draft: always-true
    labels: flake-update
```

# Conclusion

Since creating this workflow, I receive an update PR every Monday. I have merged 3 PRs without issue, left 1 which was fixed by the next week's updates, and debugged 1 myself. Due to Nix's reproducible nature, once the build passes on the Actions runner, I can be fairly sure it will build on my machine - far fewer work delays because something broke when trying to update my systems.

# Appendix

- My NixOS repository can be found on [GitHub](https://github.com/Jamalam360/nixos).
- If you have any questions, suggestions, or comments, you can reach me via the contact details on [my homepage](https://jamalam.tech).

## Full Workflow

```yml
name: Update flake.lock

on:
  schedule:
    - cron: 0 6 * * 1
  workflow_dispatch:

permissions:
  contents: write
  pull-requests: write

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7
        with:
          fetch-depth: 0

      - name: Close stale flake-update PR
        env:
          GH_TOKEN: ${{ github.token }}
        run: |
          gh pr list --label flake-update --state open --json number --jq '.[].number' | \
          while read -r pr; do
            gh pr close "$pr" --delete-branch
          done

      - name: Allow unprivileged user namespaces (needed for some sandboxed tests)
        run: sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0

      - uses: cachix/install-nix-action@v31
        with:
          extra_nix_config: |
            accept-flake-config = true

      - name: Update flake.lock
        run: nix flake update --accept-flake-config

      - name: Check for changes
        id: diff
        run: |
          if git diff --quiet flake.lock; then
            echo "changed=false" >> "$GITHUB_OUTPUT"
          else
            echo "changed=true" >> "$GITHUB_OUTPUT"
          fi

      - name: Build all nixosConfigurations
        if: steps.diff.outputs.changed == 'true'
        id: build
        run: |
          echo "## Build results" > build_report.md
          status=0
          for name in $(nix flake show --json --accept-flake-config 2>/dev/null | jq -r '.nixosConfigurations // {} | keys[]'); do
            if nix build ".#nixosConfigurations.$name.config.system.build.toplevel" \
                --accept-flake-config --no-link -L \
                --option download-attempts 5 \
                --option connect-timeout 10 2>&1; then
              echo "### ✅ $name built" >> build_report.md
            else
              echo "### ❌ $name failed" >> build_report.md
              status=1
            fi
          done
          exit "$status"
        continue-on-error: true

      - name: Create pull request
        if: steps.diff.outputs.changed == 'true'
        uses: peter-evans/create-pull-request@v8
        with:
          commit-message: "deps: update flake.lock"
          committer: GitHub Actions <actions@github.com>
          author: GitHub Actions <actions@github.com>
          branch: flake-update-${{ github.run_id }}
          delete-branch: true
          title: "deps: update flake.lock (${{ steps.build.outcome == 'success' && 'build pass' || 'build failures' }})"
          body-path: build_report.md
          add-paths: flake.lock
          draft: always-true
          labels: flake-update
```