---
id: mojaloop
title: Mojaloop Installation Guide
sidebar_label: Mojaloop
---

Mojaloop can be installed on Linux, Mac and Windows operating systems.
Installation and deployment instructions can be found on the
[official Mojaloop website](https://docs.mojaloop.io/documentation). The
following guide presents additional guidance on installing Mojaloop on Ubuntu in
particular.

## Install Dependencies

:::caution

1. kubelet, kubeadm and kubectl should be version 1.17.3 <br/>
2. Flannel is broken, use weave-kube

:::

This Kubernetes installation process is based on this article:
https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/

```bash
$ sudo apt update
$ sudo apt install apt-transport-https ca-certificates curl gnupg-agent 	software-properties-common
$ sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add
$ sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"
$ sudo swapoff -a
$ sudo apt update
$ sudo apt-get install kubectl=1.17.3-00 kubelet=1.17.3-00 kubeadm=1.17.3-00
$ sudo kubeadm init --pod-network-cidr=10.244.0.0/16

$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml"
```

### Install helm

An installation guide can be found [here](https://helm.sh/docs/intro/install/)

### Modify Helm for Mojaloop

Edit the configuration file found at
`/etc/kubernetes/manifests/kube-apiserver.yaml`, identifying the following
section:

```yaml
spec:
  containers:
    - command:
        - kube-apiserver
      #  ...
```

At the bottom of this section, add the following line:

```yaml
- --runtime-config=apps/v1beta1=true,apps/v1beta2=true,extensions/v1beta1/daemonsets=true,extensions/v1beta1/deployments=true,extensions/v1beta1/replicasets=true,extensions/v1beta1/networkpolicies=true,extensions/v1beta1/podsecuritypolicies=true
```

After adding the line, the file should look like this:
![Install Example](/img/mojahelm.png)

### Add helm repos

```bash
$ helm repo add mojaloop http://mojaloop.io/helm/repo/
$ helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator
$ helm repo add kiwigrid https://kiwigrid.github.io
$ helm repo add elastic https://helm.elastic.co
$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/
$ helm repo update
```

## Install Mojaloop

```bash
$ kubectl taint nodes --all node-role.kubernetes.io/master-
$ kubectl create namespace moja880
$ helm --namespace moja880 install mojaloop/mojaloop --version 8.8.0 --name-template mj8
```

:::important

For some reason proxying through nginx-ingress by hostname cause freezes on
every 3-5 requests to any of the mojaloop services. It is currently suggested to
use nginx at the OS level to proxy traffic the the kubernetes pods by IP.

:::

#### Install nginx.

```bash
$ sudo apt-get install nginx
```

#### Configure nginx vhost

1. Discover IP addresses for each service with the following command:
   ```bash
   $ kubectl get services --all-namespaces
   ```
2. Create a new nginx configuration file at
   `/etc/nginx/sites-available/mojaloop.conf` with the following contents. Make
   sure to adjust the IP addresses to reflect those returned in step 1:

   ```bash
   server {
       root /var/www/html;
       listen 80;
       server_name mojaloop.example.com;

       access_log /var/log/nginx/mojaloop_access.log;
       error_log /var/log/nginx/mojaloop_error.log;

       #############################################
       #                                           #
       # Locatins for specific routes of services  #
       #                                           #
       #############################################

       ### ml-api-adapter-service ###
       location /transfers {
           proxy_pass http://10.100.202.212;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       ### quoting-service ###
       location ^~ /quotes {
           proxy_pass http://10.100.116.36;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;
           #proxy_set_header Host $host;

       }

       ### transaction-requests-service/transactionRequests###
       location ^~ /transactionRequests {
           proxy_pass http://10.96.202.216;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }
       ### transaction-requests-service/authorizations ###
       location ^~ /authorizations/ {
           proxy_pass http://0.96.202.216;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       #########################
       #                       #
       # Locatins for services #
       #                       #
       #########################

       ### ml-api-adapter-service ###
       location /mlapiadapterservice {
           rewrite ^/mlapiadapterservice(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.100.202.212;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       ### quoting-service ###
       location /quotingservice {
           rewrite ^/quotingservice(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.100.116.36;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       ### simulator ###
       location /simulator {
           rewrite ^/simulator(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.103.209.76;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       ### transaction-requests-service ###
       location /transactionrequestsservice {
           rewrite ^/transactionrequestsservice(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.96.202.216;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }

       ### centralledger-service ###
       location /centralledgerservice {
           rewrite ^/centralledgerservice(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.106.153.89;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;
       }

       ### centralsettlement ###
       location /centralsettlement {
           rewrite ^/centralsettlement(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.110.171.46;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header REMOTE_ADDR $remote_addr;
       }

       ### account-lookup-service ###
       location /accountlookupservice {
           rewrite ^/accountlookupservice(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.96.8.76;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header REMOTE_ADDR $remote_addr;
       }

       ### account-lookup-service-admin ###
       location /accountlookupadmin {
           rewrite ^/accountlookupadmin(.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass http://10.105.96.98;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header REMOTE_ADDR $remote_addr;
       }

   }
   ```

3. Finally, reload nginx to apply the configuration:
   ```bash
   $ sudo cd /etc/nginx/sites-enabled
   $ sudo ln -sf ../sites-available/mojaloop.conf
   $ sudo nginx -t
   $ sudo service nginx reload
   ```

### Configure Mojaloop

Mojaloop now needs to be configured with endpoints for the test platform
corresponding to DFSPs within Mojaloop. We have prepared configuration files to
allow this to be completed easily with Postman.

1. The [environment](/files/postmanEnvSamples.json) configuration file should be
   edited to reflect your own mojaloop server URL, and then imported.
2. The [new deployment](/files/postmanDeployment.json) configuration file can
   now be imported into Postman, and executed to set up the deployment.
3. Finally, the [new participant](/files/participantsEndpointSetup.json)
   configuration file can be imported and executed to set up the correct
   endpoint URLs for the DFSP simulators.

## Kubernetes Dashboard installation

1. Install kubernetes-dashboard service
   ```bash
   $ kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
   ```
2. Get token
   ```bash
   $ kubectl -n kube-system get secrets | grep dashboard-token
   $ kubectl -n kube-system describe  secrets/kubernetes-dashboard-token-s5v6b
   ```
3. Add permissions
   ```bash
   $ kubectl create clusterrolebinding kubernetes-dashboard -n kube-system
   --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard
   ```
4. Create .httpasswd
   ```bash
   # apt install apache2-utils
   # mkdir /etc/nginx/basic_auth/
   # htpasswd -c /etc/nginx/basic_auth/.htpasswd username
   ```
5. Configure nginx. Kubernetes dashboard requires HTTPS, but a self-signed
   certificate is fine.

   ```bash
   server {
       root /var/www/html;
       listen 443 ssl;
       server_name mojaloop.example.com;

       ssl_certificate  /etc/nginx/ssl/kubeadm/mojaloop.example.com.cert;
       ssl_certificate_key  /etc/nginx/ssl/kubeadm/mojaloop.example.com.key;

       location /kubeadm/ {
           auth_basic "Restricted";
           auth_basic_user_file /etc/nginx/basic_auth/.htpasswd;
           rewrite ^/kubeadm(/.*) $1 break;
           proxy_set_header Accept-Encoding "";
           proxy_pass https://10.110.168.82;
           proxy_buffering on;
           proxy_buffers 12 12k;
           proxy_redirect off;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $remote_addr;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header REMOTE_ADDR $remote_addr;

       }
   }
   ```

## Updating

:::warning

Updating works only with helm 3.2 or 2.6

:::

1. Perform dry-run upgrade:
   ```bash
   $ helm repo update
   $ helm -n moja upgrade moja mojaloop/mojaloop --dry-run
   ```
2. If dry-run upgrade was successful you can upgrade:
   ```bash
   $ helm -n moja upgrade moja mojaloop/mojaloop
   ```