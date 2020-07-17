---
title: Writing New Code
---

To ensure that your contributions are merged in effectively, and that no one is
duplicating efforts working on the same issue, please follow the steps below
when you would like to write new code for the ITP.

### 1. Fork

[Fork](https://help.github.com/articles/fork-a-repo/) the relevant repository
into your own personal space. It's worth ensuring that you keep the `master` and
`develop` branches in sync so that you don't miss out on upstream changes while
you're working.

1. Click the "Fork" button on the top right of the Github repository page

2. Clone your forked repository onto your development machine:

   ```bash
   git clone https://github.com/<your_username>/interop-test-platform.git
   ```

3. Add a new upstream remote to pull in later updates

   ```bash
   git remote add upstream https://github.com/gsmainclusivetechlab/interop-test-platform.git
   ```

4. To sync to your current copy of `develop`, run

   ```bash
   git pull upstream develop
   ```

   This will merge any changes from our repository into your forked one. You can
   do the same for the `master` branch.

5. Push your code changes back to your own repository:
   `git push origin <current_branch>`

### Creating a Branch

Create a new branch from the `develop` branch like so:

1. Create and checkout the branch:

   ```bash
   git checkout develop
   git checkout -b feature/<issueNumber><issueDescription>
   ```

2. Push the branch to your remote:
   ```bash
   git push origin feature/<issueNumber><issueDescription>
   ```

Instead of `feature` you may use other branch types, such as `bugfix` or
`release`. The issue number refers to the issue in Github. If there is no
corresponding issue yet, please create one before starting work! The issue
description is optional, but is very useful to recognise the right branch on
your computer!

### Prepare for Merging

Once you have completed work on your new code, you need to make sure that the
code is of a high enough quality to be accepted into the main project. There are
two easy ways to ensure this - check code style with `prettier` and test code
quality with unit tests.

### Code Style

Code style across all repositories is simply enforced using
[`prettier`](https://prettier.io/). To detect and fix any styling errors, run
`npx prettier . --write`. In most (but not yet all) of the project repositories,
a `.prettierrc` file has been set up to ensure that the correct code style is
applied (adding this `.prettierrc` file across other projects would be a
[good first issue](https://github.com/orgs/gsmainclusivetechlab/projects/1?card_filter_query=label%3A%22good+first+issue%22)!).
Similarly, a top-level `package.json` file has been added to most project
repositories, allowing you to lint all project files by simply running
`yarn lint`.

### Testing

Our different projects use different technologies, and therefore are tested in
different ways. All are set up with some kind of test suite, however. If you are
adding new functionality, please add some tests to demonstrate that the
functionality is working as intended. If you are fixing a bug, please add a test
which fails when the bug is present, and passes when your fix is applied.

All projects will run the test suite automatically as part of the continuous
integration process which is triggered when a pull request is created. If the
test suite does not pass, the pull request will not be accepted.

### Git History

It is very useful for the project to ensure a clean commit history. This allows
future developers to understand the context of every change. To ensure this, we
will only merge pull requests which are up-to-date with the `develop` branch.
You should also try to ensure that your pull request is focussed, and aim for
one succinct commit. For example, squash commits like `'oops, fix typo/bug'`
into the parent commit. You can use `git rebase -i` to clean up the commit
history before submitting the pull request.

Include the message `Closes gsmainclusivetechlab/<project>#123` (replacing `123`
with the issue number for the feature you are working on) inside your commit
message so that Github links the issue and tracks progress correctly. You can do
the same inside the pull request description, to ensure that your work doesn't
go un-noticed!

### Merge into Upstream Repository

Once your code has been linted and tested, you are ready to merge your code into
the main repository. To do this, create a pull request from your branch (on your
forked repository) into the `develop` branch of the upstream repository. You can
request a review from a member of the maintenance team to ensure the PR is not
missed. If the change is acceptable, and all code quality tests pass, then the
pull request will be merged.

If you'd like to preview your pull request before it's complete, feel free to
create it early and mark it as a "draft" until you've finished. It will not be
reviewed until the "WIP" marker is removed.
