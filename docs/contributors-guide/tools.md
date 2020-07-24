---
title: Development Tools
---

## CLI Tools

Throughout this guide, we assume the presence on your development machine of the
following tools:

1. [`docker`](#docker)
2. [`docker-compose`](#docker-compose)
3. [`git`](#git)
4. [`npm`](#npm) (optionally, yarn)

### `docker`

The interoperability test platform is built using
[Docker](https://www.docker.com/), which means that each component can run on
any environment which supports Docker. Installation guides are available for
[Ubuntu](https://docs.docker.com/engine/install/ubuntu/),
[macOS](https://docs.docker.com/docker-for-mac/install/) and
[Windows](https://docs.docker.com/docker-for-windows/install/).

You can check that Docker has been correctly installed by running the following
commands on your machine:

```bash
$ docker --version
#  Docker version 19.03.11, build 42e35e61f3
```

### <a name='docker-compose'></a>3. `docker-compose`

Each ITP component is developed using microservices which are coordinated using
[`docker-compose`](https://docs.docker.com/compose/). On Windows and macOS,
`docker-compose` should be installed automatically with Docker. On a Linux host,
`docker-compose` must be installed separately using
[this guide](https://docs.docker.com/compose/install/).

You can check that `docker-compose` has been correctly installed by running the
following commands on your machine:

```bash
$ docker-compose --version
#  docker-compose version 1.26.0, build d4451659
```

### `git`

We recommend the use of `git` to download source code and fetch updates.
Installation guides for `git` for all platforms can be found
[here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### `npm`

#### macOS

Use homebrew to install `node` and `npm` together.

```bash
brew install node
```

#### Linux

Follow the installation guide
[here](https://nodejs.org/en/download/package-manager/)

#### Windows

Follow the installation guide
[here](https://nodejs.org/en/download/package-manager/#windows)

## Non-CLI Tools

1. [Github](#github)
2. [Postman](#postman)
3. [IDE](#ide) (optional)

### Github

All of the ITP repositories are available on Github. While you don't need a
GitHub account to download and play around with the code, you must have your own
GitHub account set up in order to contribute.

### Postman

Postman is a tool for exploring and testing APIs. You can download it from
[here](https://www.postman.com/downloads/).

Alternatively on recent versions of Linux, you may run:

```bash
sudo snap install postman
```

### IDE

When writing code, you may wish to use an IDE instead of a simple text editor.
There are plenty available out there, including:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [Webstorm](http://www.jetbrains.com/webstorm/) (free 30 day trial)
- [PhpStorm](http://www.jetbrains.com/phpstorm/) (free 30 day trial)
