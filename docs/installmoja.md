--- 
id: installmoja
title: Mojaloop Installation Guide
sidebar_label: Mojaloop
--- 

:::tip System Requrements
This guide is intended for users who wish to install the Mojaloop 1.0. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements: 1 GB RAM \ 15 GB Storagespace \ 1 VCpu. In way to install other Mojaloop versions please check more information here: https://docs.mojaloop.io/documentation/
:::

## Mojaloop <a name="moja"></a>

### installation steps

#### 1. Install docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/

#### 2. Install K8s (for Ubuntu 18):

:::important

1. \# - means that command should be executed by root user <br/>
2. $ - means that command should be executed by regular user

:::

:::caution

1. kubelet, kubeadm and kubectl shoud be version 1.17.3 <br/>
2. Flannel is broken, use weave-kube

:::

```bash
$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml" 
```
k8s installation steps

```bash
# apt update
# apt install apt-transport-https ca-certificates curl gnupg-agent 	software-properties-common 
# curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add
# apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"
# swapoff -a
# apt update
# apt-get install kubectl=1.17.3-00 kubelet=1.17.3-00 kubeadm=1.17.3-00
# kubeadm init --pod-network-cidr=10.244.0.0/16

$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml"
```

The K8s installation process is based on this article: https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/

#### 3. Install helm: https://helm.sh/docs/intro/install/

#### 4. Modify to compatibility with mojaloop helm repo

Add the following line:

```bash
- --runtime-config=apps/v1beta1=true,apps/v1beta2=true,extensions/v1beta1/daemonsets=true,extensions/v1beta1/deployments=true,extensions/v1beta1/replicasets=true,extensions/v1beta1/networkpolicies=true,extensions/v1beta1/podsecuritypolicies=true
```

To file: /etc/kubernetes/manifests/kube-apiserver.yaml in to this key:

```bash
spec:
  containers:
  - command:
```

After adding the line, it should look like this:
![Install Example](/img/mojahelm.png)



#### 5. Add helm repos

```bash
$ helm repo add mojaloop http://mojaloop.io/helm/repo/
$ helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator
$ helm repo add kiwigrid https://kiwigrid.github.io
$ helm repo add elastic https://helm.elastic.co
$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/
$ helm repo update
```

#### 6. Install mojaloop via helm:

```bash
$ kubectl taint nodes --all node-role.kubernetes.io/master-
$ kubectl create namespace moja880
$ helm --namespace moja880 install mojaloop/mojaloop --version 8.8.0 --name-template mj8
```
:::important

For some reasons proxying through nginx-ingress by hostname cause freezeson on about each 3-5 requests to any of moja services. Its need a lots of time to investigate the issue and fix. So i suggest to use nginx in OS level to proxying traffic to k8s pods by IP

:::

#### 7. Install nginx. 

```bash
# apt-get install nginx 
```
 
#### 8. Configure nginx vhost

##### a. Create a new vhost file: /etc/nginx/sites-available/mojaloop.conf

##### b. vhost locations config

IP addresses for each service can be allocated by command:

```bash
$ kubectl get services --all-namespaces 
```

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

##### c. Apply config:

```bash
# cd /etc/nginx/sites-enabled
# ln -sf ../sites-available/mojaloop.conf
# nginx -t
# service nginx reload
```

#### 9. Modify postman collection environments according to you mojaloop server url and import into postman

To get more information check the environment JSON sample file available in the section [configuration files](#envjson)

#### 10. Run the new deployment postman collection:

To get more information check the new deployment Postman collection sample file available in the section [configuration files](#deployjson)

#### 11. Run mojaloop participants endpoint setup postman collection:

To get more information check the Mojaloop participants endpoint setup sample file available in the section [configuration files](#mojajson)

### Kubernetes Dashboard installation

#### 1. Install kubernetes-dashboard service

```bash
$ kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
```

#### 2. Get token

```bash
$ kubectl -n kube-system get secrets | grep dashboard-token
$ kubectl -n kube-system describe  secrets/kubernetes-dashboard-token-s5v6b
```

#### 3. Add permissions
$ kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard

#### 4. Create .httpasswd 

```bash
# apt install apache2-utils
# mkdir /etc/nginx/basic_auth/
# htpasswd -c /etc/nginx/basic_auth/.htpasswd username
```

#### 5. Configure nginx 

:::tip
For kubernetes dashboard you should use https. Selfsigned SSL is fine. So the nginx location should look like this:
:::

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

### Updating

:::warning
updating works only with helm 3.2 or 2.6
:::

#### 1. Perform dry-run upgrade:

```bash
$ helm repo update
$ helm -n moja upgrade moja mojaloop/mojaloop --dry-run
```

#### 2. If dry-run upgrade was successful you can upgrade:

```bash
$ helm -n moja upgrade moja mojaloop/mojaloop
```

## Configuration Files

### Postman Collection Environments Sample <a name="envjson"></a>

```json
{
    "id": "57f5df7f-c2dd-4315-92ff-202ef3cb492d",
	"name": "MY-Mojaloop-GSMA-live",
	"values": [
		{
			"key": "payeefsp",
			"value": "payeefsp",
			"enabled": true
		},
		{
			"key": "payerfsp",
			"value": "payerfsp",
			"enabled": true
	... CLICK IN THE LINK BELOW TO SEE MORE
```

[Click here to access the complete Postman Environment JSON sample file](files/postmanEnvSamples.json)

### New Deployment Postman Collection <a name="deployjson"></a>

```json
{
	"info": {
		"_postman_id": "0530d647-93f9-47ac-9095-d1d9054e819b",
		"name": "OSS-New-Deployment-FSP-Setup",
		"description": "Purpose: Perform Golden path end-to-end testing on a deployed Mojaloop system\n\nContributors:\n- Mowali\n- Amar Ramachandran <amarnath.ramachandran@modusbox.com>\n- Georgi Georgiev <georgi.georgiev@modusbox.com>\n- Juan Correa <juan.correa@modusbox.com>\n- Miguel deBarros <miguel.debarros@modusbox.com>\n- Nico Duvenage <nico.duvenage@modusbox.com>\n- Sam Kummary <sam@modusbox.com>\n- Sri Miryala <sridevi.miriyala@modusbox.com>\n- Steven Oderayi <steven.oderayi@modusbox.com>\n- valentin genev <valentin.genev@modusbox.com>\n- Vijay Guthi <vijaya.guthi@modusbox.com>",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	... CLICK IN THE LINK BELOW TO SEE MORE
```

[Click here to access the complete Postman Deployment JSON sample file](files/postmanDeployment.json)

### Mojaloop Participants Endpoint Setup <a name="mojajson"></a>

```json
{
	"info": {
		"_postman_id": "2eea2ba5-4ed7-4a33-87da-ff9ec221b13a",
		"name": "Mojaloop_Participantу_Endpoints_Setup",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	... CLICK IN THE LINK BELOW TO SEE MORE
```

[Click here to access the complete Participants Endpoint Setup JSON sample file](files/participantsEndpointSetup.json)