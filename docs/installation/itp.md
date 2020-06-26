---
id: itp
title: Interoperability Test Platform Installation Guide
sidebar_label: Interoperability Test Platform
---

## Project Set-up

To begin with, download the code for the test platform onto your machine. To do
this using git, run:

```bash
$ git clone git@github.com:gsmainclusivetechlab/interop-test-platform.git
$ cd interop-test-platform
```

Certain configuration files must be created to customise the test platform to
your own environment. To get you started, you can copy the `*.example` files
included in the codebase. Alternatively, you can run the `make init` command if
you have `make` installed on your machine. The files to copy are:

- `.env`: In this file, you can configure the ports that the test platform
  should listen for connections on, as well as defining credentials for the
  MySQL database, and setting appropriate user permissions.
- `src/.env`: In this file, you can configure the URL for the test platform, as
  well as the URLs that the platform will use to contact other simulator
  components.

Once the configuration files have been added, you should be able to launch all
microservices using the following command:

```bash
$ docker-compose up -d
# Creating network "test-platform_default" with the default driver
# Creating test-platform_mailhog_1 ... done
# Creating test-platform_redis_1   ... done
# Creating test-platform_nodejs_1  ... done
# Creating test-platform_mysqldb_1 ... done
# Creating test-platform_app_1     ... done
# Creating test-platform_queue_1   ... done
# Creating test-platform_web_1     ... done
```

## Database Installation

At this point, `docker-compose` has launched all services required for the test
platform, but they will require further set-up. You can now set up the database
and install any missing dependencies by running the following `make` script.

> In a future version of the test platform, the images used by Docker will be
> pre-configured, so this step will not be necessary.

```bash
$ make install
# docker-compose exec app bash -c "make install"
# Chmod storage and bootstrap cache...
# Install composer...
# ...
# make[1]: Leaving directory '~/Code/GSMA/interop-test-platform'
# touch runtime/installed
```

### Troubleshooting

This installation script may fail if the `mysql` service is unable to write
files to your host machine. Check that the `runtime/mysql` directory exists and
is writable by your user. Another common cause of this is forgetting to update
the `UID` field inside the `.env` file. The value should be equal to your user
and group ID. To find out your user id, run `id -u` and to find out your primary
group ID, run `id -g`. In the example below, `UID` should be set to `1000:1001`.

```bash
$ id -u
# 1000
$ id -g
# 1001
```

## URL Configuration

Once you have set up all simulator components, you must add the URLs for the
simulators into the `src/.env` file. When these URLs are updated, the
installation script above should be re-run to ensure that the URLs are persisted
to the database.

> It is a current limitation of the test platform that this process will also
> erase other contents of the database. To work around this, it is possible to
> update the `components` table of the MySQL database directly.

## Logging In

At this point, all services are set up, and you should be able to log in. If you
did not change the default port in `.env`, then you will be able to browse to
`http://localhost:8084` in your web browser and see a login page.

By default, the test platform does not connect to a real SMTP server, but emails
are instead intercepted and shown on a test email server, which you will be able
to access on `http://localhost:8086`. Using this mail server, you will be able
to register a new account and verify your email address to log in to the
platform.

## Production Use

To set up the test platform for production use, a few changes are recommended:

- The `mailhog` service should be disabled and a real SMTP server connected to
  allow user registration emails.
- Other services should be configured to restart on failure by adding
  `restart: always` into the docker-compose configuration.
- You may choose to add a reverse proxy (for example using
  [`nginx`](https://www.nginx.com/)) to make the platform available on other
  hostnames.

## Updating

### Backing Up

Updating the test platform is very straightforward and unlikely to cause any
data loss. Before you proceed, you may nonetheless choose to make a backup of
your database with the following command:

```bash
$ docker-compose exec mysqldb bash -c "mysqldump -p -u $DB_USERNAME $DB_DATABASE > /var/lib/mysql/itp-test-control_`date +%Y-%m-%d`.sql"
# Enter password...
```

This will place a `.sql` dump file inside the `runtime/mysql` directory. You may
also choose to backup any modifications you have made to configuration files or
code (including the mysql backup just made) using `rsync`:

```bash
$ rsync -auvz ./ ~/backups/`date +%Y-%m-%d`_itp_full
# sending incremental file list
# .git/
# ...
# src/vendor/webmozart/assert/src/Assert.php
# sent 153,373,035 bytes  received 741,354 bytes  4,341,250.39 bytes/sec
# total size is 602,736,172  speedup is 3.91
```

### Fetching Updates

To update the project code, simply pull the latest changes using git. You can
also update service images (such as those used for mysql and redis) with
`docker-compose`:

```bash
$ docker-compose stop
# Stopping test-platform_web_1     ... done
# Stopping test-platform_app_1     ... done
# Stopping test-platform_queue_1   ... done
# Stopping test-platform_mysqldb_1 ... done
# Stopping test-platform_mailhog_1 ... done
# Stopping test-platform_redis_1   ... done

$ git pull
# Updating 59995d74..0af9196d
# Fast-forward
# ...

$ docker-compose pull
# Pulling redis   ... done
# Pulling mysqldb ... done
# Pulling queue   ... done
# Pulling app     ... done
# Pulling web     ... done
# Pulling nodejs  ... done
# Pulling mailhog ... done
```

Once you have obtained the latest code, you can restart the services, install
any missing dependencies and update the database structure using another `make`
script:

```bash
$ docker-compose up -d --force-recreate
# Recreating test-platform_mailhog_1   ... done
# Recreating test-platform_redis_1     ... done
# Recreating test-platform_nodejs_1    ... done
# Recreating test-platform_mysqldb_1   ... done
# Recreating test-platform_queue_1     ... done
# Recreating test-platform_app_1       ... done
# Recreating test-platform_web_1       ... done

$ make update
# docker-compose exec  --privileged --index=1 -w /var/www/html app bash -c "make update"
# ...
# make[1]: Leaving directory '~/Code/GSMA/interop-test-platform'
```
