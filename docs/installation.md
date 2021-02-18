---
title: Installation Guide
sidebar_label: Installation Guide
---

## Installation Dependencies

The interoperability test platform is built using
[Docker](https://www.docker.com/), which means that it can run on any
environment which supports Docker. Installation guides for Docker are available
for [Ubuntu](https://docs.docker.com/engine/install/ubuntu/),
[macOS](https://docs.docker.com/docker-for-mac/install/) and
[Windows](https://docs.docker.com/docker-for-windows/install/).

Additionally, the platform is developed using microservices which are
coordinated using [`docker-compose`](https://docs.docker.com/compose/). On
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
updates. Installation guides for `git` for all platforms can be found
[here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Project Set-up

To simplify installation, we have prepared a template repository with example
configurations for installation
[here](https://github.com/gsmainclusivetechlab/interop-release-configuration).
To begin with, click "Use this template" to make a copy of the repository in
your own namespace. Once the template has been applied, you can copy the
configuration files onto your host machine using git:

```bash
$ git clone git@github.com:your-user-id/interop-release-configuration.git interop-test-platform
$ cd interop-test-platform
```

Certain configuration files must be adjusted to customise the test platform to
your own environment. More detail on the configuration options required is
available in the README file within the repository (and is guaranteed to be up
to date with the version of `interop-release-configuration` you are using). In
particular, you should take note of the platform version which is configured
inside docker-compose.yml.

Once the configuration files have been adjusted, you should be able to launch
all services using the following command:

```bash
$ docker-compose up -d
# Creating network "interop-test-platform_default" with the default driver
# Creating interop-test-platform_redis_1   ... done
# Creating interop-test-platform_mysqldb_1 ... done
# Creating interop-test-platform_app_1     ... done
# Creating interop-test-platform_queue_1   ... done
```

This will download Docker images corresponding to the appropriate version of the
test platform, and launch them on your system.

## Database Installation

At this point, `docker-compose` has launched all services required for the test
platform, but they will require further set-up. You can now set up the database
by running the migration script.

```bash
$ docker-compose exec app php artisan migrate:refresh --seed
```

Note that this command will perform a "factory reset" on the database.

## Logging In

At this point, all services are set up, and you should be able to log in. You
should now be able to browse to the domain you configured in `.env` and see a
login page.

## Updating

### Backing Up

Updating the test platform is very straightforward and unlikely to cause any
data loss. Before you proceed, you may nonetheless choose to make a backup of
your database with the following command:

```bash
$ docker-compose exec mysqldb bash -c "mysqldump -p -u $DB_USERNAME $DB_DATABASE" > itp_`date +%Y-%m-%d`.sql
# Enter password...
```

This will place a `.sql` dump file inside the your working directory.

### Fetching Updates

To update the project code, update the version number inside docker-compose, and
then pull the new images:

```bash
$ docker-compose pull
# Pulling queue     ... done
# Pulling app     ... done
```

Once you have obtained the latest code, you can restart the services, install
any missing dependencies and update the database structure using another `make`
script:

```bash
$ docker-compose up -d --force-recreate
# Recreating test-platform_redis_1     ... done
# Recreating test-platform_mysqldb_1   ... done
# Recreating test-platform_queue_1     ... done
# Recreating test-platform_app_1       ... done

$ docker-compose exec app php artisan migrate
```
