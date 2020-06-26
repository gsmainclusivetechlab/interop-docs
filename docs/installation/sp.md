---
id: sp
title: Service Provider Installation Guide
sidebar_label: Service Provider
---

### GSMA SP Simulator

To begin with, download the code for the simulator onto your machine. To do this
using git, run:

```bash
$ git clone git@github.com:gsmainclusivetechlab/interop-sp-simulator.git
$ cd interop-sp-simulator
```

Certain configuration files must be created to customise the simulator to your
own environment. To get you started, you can copy the `*.example` files included
in the codebase. Alternatively, you can run the `make init` command if you have
`make` installed on your machine. The files to copy are:

- `.env`: In this file, you can configure the ports that the simulator should
  listen for connections on, as well as defining credentials for the MySQL
  database.
- `src/.env`: In this file, you can configure the URL for the test platform (see
  [URL Configuration](#url-configuration) below)
- `docker-compose.yml`: No changes should be required for development.

### URL Configuration

The simulator must be configured with the URL for the service provider's MMO
inside the `src/.env` file. In our case, you will actually need to add URLs for
the core test platform, which will redirect requests to the MMO. All simulators
must be configured with URLs that follow a consistent structure:

```
https://{itp_url}/testing/{my_uuid}/{recipient_uuid}/simulator/
```

- Within the SP simulator, `my_uuid` should always be equal to
  `114511be-74e9-49d5-b93e-b4a461e01626`
- Within the SP simulator, `recipient_uuid` should always be equal to
  `e5f5e817-94d6-4a43-a7ec-f7274b6d85c2` (MMO1 simulator).

The configured URL should end up looking like this:

```ini
HOST_MMO_1=https://{itp_url}/114511be-74e9-49d5-b93e-b4a461e01626/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/simulator/
```

Once the configuration files have been added, you should be able to launch all
services using the following command:

```bash
$ docker-compose up -d
# Creating network "sp-simulator_default" with the default driver
# Creating sp-simulator_mysqldb_1 ... done
# Creating sp-simulator_nodejs_1 ... done
# Creating sp-simulator_app_1     ... done
# Creating sp-simulator_web_1     ... done
```

### Database Installation

At this point, `docker-compose` has launched all services required for the
simulator, but they still require further set-up. You can now set up the
database and install any missing dependencies by simply running `make install`:

> In a future version of the MMO1 simulator, the images used by Docker will be
> pre-configured, so this step will not be necessary.

```bash
$ make install
# docker-compose exec app bash -c "make install"
# Chmod storage and bootstrap cache...
# Install composer...
# ...
# make[1]: Leaving directory '~/Code/GSMA/interop-sp-simulator'
# touch runtime/installed
```

The simulator should now be accessible at `http://localhost:8087`.

## Updating Simulators

### Backing Up

Updating the simulator is very straightforward and unlikely to cause any data
loss. Before you proceed, you may nonetheless choose to make a backup of your
database with the following command:

```bash
$ docker-compose exec mysqldb bash -c "mysqldump -p -u $DB_USERNAME  $DB_DATABASE > /var/lib/mysql/sp-simulator_`date +%Y-%m-%d`.sql"
# Enter password...
```

This will place a `.sql` dump file inside the `runtime/mysql` directory. You may
also choose to backup any modifications you have made to configuration files or
code (including the mysql backup just made) using `rsync`:

```bash
$ rsync -auvz ./ ~/backups/`date +%Y-%m-%d`sp-simulator
# sending incremental file list
# .git/
# ...
# src/vendor/webmozart/assert/src/Assert.php
# sent 153,373,035 bytes  received 741,354 bytes  4,341,250.39 bytes/sec
# total size is 602,736,172  speedup is 3.91
```

### Fetching Updates

To update the project code, simply run pull the latest changes using git. You
can also update service images (such as those used for mysql) with
`docker-compose`:

```bash
$ docker-compose stop
# Stopping sp-simulator_web_1     ... done
# Stopping sp-simulator_app_1     ... done
# Stopping sp-simulator_mysqldb_1 ... done

$ git pull
# Updating 59995d74..0af9196d
# ...

$ docker-compose pull
# Pulling mysqldb ... done
# Pulling app     ... done
# Pulling web     ... done
```

At this point, the services can immediately be restarted, and any missing
dependencies can be installed using the `make update` script:

```bash
$ docker-compose up -d --force-recreate
# Recreating sp-simulator_mysqldb_1   ... done
# Recreating sp-simulator_app_1       ... done
# Recreating sp-simulator_web_1       ... done

$ make update
# docker-compose exec  --privileged --index=1 -w /var/www/html app bash -c "make update"
# ...
# make[1]: Leaving directory '~/Code/GSMA/interop-sp-simulator'
```

## Production Use

To set up the simulators for production use, a few changes are recommended:

- The services defined in `docker-compose.yml` should be configured to restart
  on failure by adding `restart: always` into the docker-compose configuration.
- You may choose to add a reverse proxy (for example using
  [`nginx`](https://www.nginx.com/)) to make the simulator available on other
  hostnames.
