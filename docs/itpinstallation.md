--- 
id: itpinstallation 
title: ITP Installation Guide
sidebar_label: ITP Installation
--- 

Mojaloop
installation steps:
Install docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/
Install K8s (for Ubuntu 18):

:::important

1. \# - means that command should be executed by root user <br/>
2. $ - means that command should be executed by regular user

:::

:::caution

1. kubelet, kubeadm and kubectl shoud be version 1.17.3 <br/>
2. Flannel is broken, use weave-kube

:::
