---
title: Installation Guide
sidebar_label: Installation Guide
---

The interoperability test platform is built using
[Docker](https://www.docker.com/), which means that each component can run on
any environment which supports Docker. Installation guides are available for
[Ubuntu](https://docs.docker.com/engine/install/ubuntu/),
[macOS](https://docs.docker.com/docker-for-mac/install/) and
[Windows](https://docs.docker.com/docker-for-windows/install/).

Additionally, each component is developed using microservices which are
coordinated using [`docker-compose`](https://docs.docker.com/compose/).On
Windows and macOS, `docker-compose` should be installed automatically with
Docker. On a Linux host, `docker-compose` must be installed separately using
[this guide](https://docs.docker.com/compose/install/).

You can check that both Docker and `docker-compose` have been correctly
installed by running the following commands on your machine:

```bash
$ docker --version
#  Docker version 19.03.11, build 42e35e61f3
$ docker-compose --version
#  docker-compose version 1.26.0, build d4451659
```

Finally, we recommend the use of `git` to download source code and fetch
updates, along with the use of `make` to simplify installation. Installation
guides for `git` for all platforms can be found
[here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
Instructions for installing `make` are also available for
[Ubuntu](https://askubuntu.com/a/272020),
[macOS](https://stackoverflow.com/a/10265766/1590962) and
[Windows](http://gnuwin32.sourceforge.net/packages/make.htm).
