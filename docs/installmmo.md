--- 
id: installmmo
title: Mobile Money Operator Installation Guide
sidebar_label: Mobile Money Operator
--- 

:::tip System Requrements
This guide is intended for users who wish to install the two Mobile Money Operator Simulators used in the tests. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements: 1 GB RAM \ 15 GB Storagespace \ 1 VCpu.
:::

## GSMA MMO1 Simulator <a name="mmo1"></a>

Project folder on **production**: /var/docker

Project folder on **staging**:   /var/docker

### installation steps

#### 1. Install docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/

```bash
# apt install make
```

#### 2. Clone project from repo

#### 3. Configure .env variables, docker-compose.yml and nginx.conf

```bash
$ make init 
```

Modify .env, src/.env, docker-compose.yml and build/nginx-server.conf according to you needs.

:::important
Don't forget to add "restart: always" in each docker-compose.yml service
:::

#### 4. Perform test run  (stop after DB initialize by CTRL+C)

```bash
$ make test-run
```

#### 5. Run the project

```bash
$ make run
```

#### 6. Run installation procedure

```bash
$ make install
```

#### 7. Install nginx

```bash
# apt install nginx
```

#### 8. Configure nginx vhost

##### Create new vhost file: /etc/nginx/sites-available/itp.example.com

##### vhost locations config: 

```bash
server {
    root /var/www/html/;
    listen 80;
    server_name mmo1.example.com;
    access_log /var/log/nginx/mmo1.example.com_access.log;
    error_log /var/log/nginx/mmo1.example.com_error.log;

    location / {
        proxy_pass http://127.0.0.1:8084;
        proxy_buffering on;
        proxy_buffers 12 12k;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header Host $host;

    }
```

##### Apply config:

```bash
# cd /etc/nginx/sites-enabled
# ln -sf ../sites-available/mojaloop.conf
# nginx -t
# service nginx reload
```

### Updating

#### 1. Perform mysql database backup (mysql dump file will be placed in data/mysql)

```sql
docker-compose exec -T mysqldb bash -c "mysqldump --single-transaction -u $DB_USERNAME -p$DB_PASSWORD $DB_DATABASE > /var/lib/mysql/mmo1_`date +%Y-%m-%d`.sql"
```

#### 2. Perform full project backup 

```bash
docker-compose stop
rsync -auvz ./ /var/backups/`date +%Y-%m-%d`_mmo1_full
```

#### 3. git pull

#### 4. If there was changes in docker-compose.example.yml please perform manually update of docker-compose.yml

:::important
Don't forget to add restart: always in each docker-compose service
:::

#### 5. If there was changes in build/nginx-server.example.conf please perform manually update of build/nginx-server.example.conf

#### 6. docker-compose pull

#### 7. make update

## GSMA MMO2 Simulator <a name="mmo2"></a>

Project folder on **production**: /var/docker

Project folder on **staging**:   /var/docker

### installation steps

#### 1. Install docker

Install docker from: https://docs.docker.com/install/linux/docker-ce/ubuntu/

```bash
# apt install make
```

#### 2. Install and configure nginx

```bash
apt install nginx
```

Add the following location config to your vhost:

```bash
server {
    root /var/www/html/;
    listen 80;
    server_name mmo2.staging.example.com;
    access_log /var/log/nginx/mmo2.example.com_access.log;
    error_log /var/log/nginx/mmo2.example.com_error.log;

    location / {
        proxy_pass http://localhost:8444;
        proxy_http_version 1.1;
        proxy_buffering on;
        proxy_request_buffering on;
        proxy_redirect off;
        proxy_buffers 12 12k;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header Host $host;
    }

}
```

#### 3. Clone project from repo

Configure .env variables and docker-compose.yml

:::impostant
Add “restart: always” to all docker-compose.yml services
:::
  
#### 4. Run the project

```bash
$ docker-compose up -d
```


### Updating

#### 1. Perform full project backup 

```bash
docker-compose stop
rsync -auvz ./ /var/backups/`date +%Y-%m-%d`_mmo2_full
```

#### 2. git pull

#### 3. docker-compose build

#### 4. docker-compose up -d --gorce-recreate
