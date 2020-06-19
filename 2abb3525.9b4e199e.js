(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(180)),s={id:"mojaloop",title:"Mojaloop Installation Guide",sidebar_label:"Mojaloop"},i={id:"installation/mojaloop",title:"Mojaloop Installation Guide",description:"This guide is intended for users who wish to install the Mojaloop 1.0. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements https://docs.mojaloop.io/documentation/",source:"@site/docs/installation/mojaloop.md",permalink:"/installation/mojaloop",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/installation/mojaloop.md",sidebar_label:"Mojaloop",sidebar:"someSidebar",previous:{title:"Service Provider Installation Guide",permalink:"/installation/sp"},next:{title:"Guide for ITP Use Cases",permalink:"/usecases"}},c=[{value:'Mojaloop <a name="moja"></a>',id:"mojaloop",children:[{value:"installation steps",id:"installation-steps",children:[]},{value:"Kubernetes Dashboard installation",id:"kubernetes-dashboard-installation",children:[]},{value:"Updating",id:"updating",children:[]}]},{value:"Configuration Files",id:"configuration-files",children:[{value:'Postman Collection Environments Sample <a name="envjson"></a>',id:"postman-collection-environments-sample",children:[]},{value:'New Deployment Postman Collection <a name="deployjson"></a>',id:"new-deployment-postman-collection",children:[]},{value:'Mojaloop Participants Endpoint Setup <a name="mojajson"></a>',id:"mojaloop-participants-endpoint-setup",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"System Requrements")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This guide is intended for users who wish to install the Mojaloop 1.0. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements: 1 GB RAM \\ 15 GB Storagespace \\ 1 VCpu. In way to install other Mojaloop versions please check more information here: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mojaloop.io/documentation/"}),"https://docs.mojaloop.io/documentation/")))),Object(r.b)("h2",{id:"mojaloop"},"Mojaloop ",Object(r.b)("a",{name:"moja"})),Object(r.b)("h3",{id:"installation-steps"},"installation steps"),Object(r.b)("h4",{id:"1-install-docker-httpsdocsdockercominstalllinuxdocker-ceubuntu"},"1. Install docker: ",Object(r.b)("a",Object(a.a)({parentName:"h4"},{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"}),"https://docs.docker.com/install/linux/docker-ce/ubuntu/")),Object(r.b)("h4",{id:"2-install-k8s-for-ubuntu-18"},"2. Install K8s (for Ubuntu 18):"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"#"," - means that command should be executed by root user ",Object(r.b)("br",null)),Object(r.b)("li",{parentName:"ol"},"$ - means that command should be executed by regular user")))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"kubelet, kubeadm and kubectl shoud be version 1.17.3 ",Object(r.b)("br",null)),Object(r.b)("li",{parentName:"ol"},"Flannel is broken, use weave-kube")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml" \n')),Object(r.b)("p",null,"k8s installation steps"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# apt update\n# apt install apt-transport-https ca-certificates curl gnupg-agent  software-properties-common \n# curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add\n# apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"\n# swapoff -a\n# apt update\n# apt-get install kubectl=1.17.3-00 kubelet=1.17.3-00 kubeadm=1.17.3-00\n# kubeadm init --pod-network-cidr=10.244.0.0/16\n\n$ mkdir -p $HOME/.kube\n$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config\n$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml"\n')),Object(r.b)("p",null,"The K8s installation process is based on this article: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/"}),"https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/")),Object(r.b)("h4",{id:"3-install-helm-httpshelmshdocsintroinstall"},"3. Install helm: ",Object(r.b)("a",Object(a.a)({parentName:"h4"},{href:"https://helm.sh/docs/intro/install/"}),"https://helm.sh/docs/intro/install/")),Object(r.b)("h4",{id:"4-modify-to-compatibility-with-mojaloop-helm-repo"},"4. Modify to compatibility with mojaloop helm repo"),Object(r.b)("p",null,"Add the following line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"- --runtime-config=apps/v1beta1=true,apps/v1beta2=true,extensions/v1beta1/daemonsets=true,extensions/v1beta1/deployments=true,extensions/v1beta1/replicasets=true,extensions/v1beta1/networkpolicies=true,extensions/v1beta1/podsecuritypolicies=true\n")),Object(r.b)("p",null,"To file: /etc/kubernetes/manifests/kube-apiserver.yaml in to this key:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"spec:\n  containers:\n  - command:\n")),Object(r.b)("p",null,"After adding the line, it should look like this:\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/mojahelm.png",alt:"Install Example"}))),Object(r.b)("h4",{id:"5-add-helm-repos"},"5. Add helm repos"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm repo add mojaloop http://mojaloop.io/helm/repo/\n$ helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator\n$ helm repo add kiwigrid https://kiwigrid.github.io\n$ helm repo add elastic https://helm.elastic.co\n$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/\n$ helm repo update\n")),Object(r.b)("h4",{id:"6-install-mojaloop-via-helm"},"6. Install mojaloop via helm:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl taint nodes --all node-role.kubernetes.io/master-\n$ kubectl create namespace moja880\n$ helm --namespace moja880 install mojaloop/mojaloop --version 8.8.0 --name-template mj8\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For some reasons proxying through nginx-ingress by hostname cause freezeson on about each 3-5 requests to any of moja services. Its need a lots of time to investigate the issue and fix. So i suggest to use nginx in OS level to proxying traffic to k8s pods by IP"))),Object(r.b)("h4",{id:"7-install-nginx"},"7. Install nginx."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# apt-get install nginx \n")),Object(r.b)("h4",{id:"8-configure-nginx-vhost"},"8. Configure nginx vhost"),Object(r.b)("h5",{id:"a-create-a-new-vhost-file-etcnginxsites-availablemojaloopconf"},"a. Create a new vhost file: /etc/nginx/sites-available/mojaloop.conf"),Object(r.b)("h5",{id:"b-vhost-locations-config"},"b. vhost locations config"),Object(r.b)("p",null,"IP addresses for each service can be allocated by command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get services --all-namespaces \n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'server {\n    root /var/www/html;\n    listen 80;\n    server_name mojaloop.example.com;\n\n    access_log /var/log/nginx/mojaloop_access.log;\n    error_log /var/log/nginx/mojaloop_error.log;\n\n    #############################################\n    #                                           #\n    # Locatins for specific routes of services  #\n    #                                           #\n    #############################################\n\n    ### ml-api-adapter-service ###\n    location /transfers {\n        proxy_pass http://10.100.202.212;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### quoting-service ###\n    location ^~ /quotes {\n        proxy_pass http://10.100.116.36;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n        #proxy_set_header Host $host;\n\n    }\n\n    ### transaction-requests-service/transactionRequests###\n    location ^~ /transactionRequests {\n        proxy_pass http://10.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n    ### transaction-requests-service/authorizations ###\n    location ^~ /authorizations/ {\n        proxy_pass http://0.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    #########################\n    #                       #\n    # Locatins for services #\n    #                       #\n    #########################\n\n    ### ml-api-adapter-service ###\n    location /mlapiadapterservice {\n        rewrite ^/mlapiadapterservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.100.202.212;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### quoting-service ###\n    location /quotingservice {\n        rewrite ^/quotingservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.100.116.36;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### simulator ###\n    location /simulator {\n        rewrite ^/simulator(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.103.209.76;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### transaction-requests-service ###\n    location /transactionrequestsservice {\n        rewrite ^/transactionrequestsservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### centralledger-service ###\n    location /centralledgerservice {\n        rewrite ^/centralledgerservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.106.153.89;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### centralsettlement ###\n    location /centralsettlement {\n        rewrite ^/centralsettlement(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.110.171.46;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### account-lookup-service ###\n    location /accountlookupservice {\n        rewrite ^/accountlookupservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.96.8.76;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### account-lookup-service-admin ###\n    location /accountlookupadmin {\n        rewrite ^/accountlookupadmin(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.105.96.98;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n}\n')),Object(r.b)("h5",{id:"c-apply-config"},"c. Apply config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# cd /etc/nginx/sites-enabled\n# ln -sf ../sites-available/mojaloop.conf\n# nginx -t\n# service nginx reload\n")),Object(r.b)("h4",{id:"9-modify-postman-collection-environments-according-to-you-mojaloop-server-url-and-import-into-postman"},"9. Modify postman collection environments according to you mojaloop server url and import into postman"),Object(r.b)("p",null,"To get more information check the environment JSON sample file available in the section ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#envjson"}),"configuration files")),Object(r.b)("h4",{id:"10-run-the-new-deployment-postman-collection"},"10. Run the new deployment postman collection:"),Object(r.b)("p",null,"To get more information check the new deployment Postman collection sample file available in the section ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#deployjson"}),"configuration files")),Object(r.b)("h4",{id:"11-run-mojaloop-participants-endpoint-setup-postman-collection"},"11. Run mojaloop participants endpoint setup postman collection:"),Object(r.b)("p",null,"To get more information check the Mojaloop participants endpoint setup sample file available in the section ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#mojajson"}),"configuration files")),Object(r.b)("h3",{id:"kubernetes-dashboard-installation"},"Kubernetes Dashboard installation"),Object(r.b)("h4",{id:"1-install-kubernetes-dashboard-service"},"1. Install kubernetes-dashboard service"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml\n")),Object(r.b)("h4",{id:"2-get-token"},"2. Get token"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl -n kube-system get secrets | grep dashboard-token\n$ kubectl -n kube-system describe  secrets/kubernetes-dashboard-token-s5v6b\n")),Object(r.b)("h4",{id:"3-add-permissions"},"3. Add permissions"),Object(r.b)("p",null,"$ kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard"),Object(r.b)("h4",{id:"4-create-httpasswd"},"4. Create .httpasswd"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# apt install apache2-utils\n# mkdir /etc/nginx/basic_auth/\n# htpasswd -c /etc/nginx/basic_auth/.htpasswd username\n")),Object(r.b)("h4",{id:"5-configure-nginx"},"5. Configure nginx"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For kubernetes dashboard you should use https. Selfsigned SSL is fine. So the nginx location should look like this:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'server {\n    root /var/www/html;\n    listen 443 ssl;\n    server_name mojaloop.example.com;\n\n    ssl_certificate  /etc/nginx/ssl/kubeadm/mojaloop.example.com.cert;\n    ssl_certificate_key  /etc/nginx/ssl/kubeadm/mojaloop.example.com.key;\n\n    location /kubeadm/ {\n        auth_basic "Restricted";\n        auth_basic_user_file /etc/nginx/basic_auth/.htpasswd;\n        rewrite ^/kubeadm(/.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass https://10.110.168.82;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n}\n')),Object(r.b)("h3",{id:"updating"},"Updating"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"updating works only with helm 3.2 or 2.6"))),Object(r.b)("h4",{id:"1-perform-dry-run-upgrade"},"1. Perform dry-run upgrade:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm repo update\n$ helm -n moja upgrade moja mojaloop/mojaloop --dry-run\n")),Object(r.b)("h4",{id:"2-if-dry-run-upgrade-was-successful-you-can-upgrade"},"2. If dry-run upgrade was successful you can upgrade:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm -n moja upgrade moja mojaloop/mojaloop\n")),Object(r.b)("h2",{id:"configuration-files"},"Configuration Files"),Object(r.b)("h3",{id:"postman-collection-environments-sample"},"Postman Collection Environments Sample ",Object(r.b)("a",{name:"envjson"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "57f5df7f-c2dd-4315-92ff-202ef3cb492d",\n    "name": "MY-Mojaloop-GSMA-live",\n    "values": [\n        {\n            "key": "payeefsp",\n            "value": "payeefsp",\n            "enabled": true\n        },\n        {\n            "key": "payerfsp",\n            "value": "payerfsp",\n            "enabled": true\n    ... CLICK IN THE LINK BELOW TO SEE MORE\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"files/postmanEnvSamples.json"}),"Click here to access the complete Postman Environment JSON sample file")),Object(r.b)("h3",{id:"new-deployment-postman-collection"},"New Deployment Postman Collection ",Object(r.b)("a",{name:"deployjson"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "info": {\n        "_postman_id": "0530d647-93f9-47ac-9095-d1d9054e819b",\n        "name": "OSS-New-Deployment-FSP-Setup",\n        "description": "Purpose: Perform Golden path end-to-end testing on a deployed Mojaloop system\\n\\nContributors:\\n- Mowali\\n- Amar Ramachandran <amarnath.ramachandran@modusbox.com>\\n- Georgi Georgiev <georgi.georgiev@modusbox.com>\\n- Juan Correa <juan.correa@modusbox.com>\\n- Miguel deBarros <miguel.debarros@modusbox.com>\\n- Nico Duvenage <nico.duvenage@modusbox.com>\\n- Sam Kummary <sam@modusbox.com>\\n- Sri Miryala <sridevi.miriyala@modusbox.com>\\n- Steven Oderayi <steven.oderayi@modusbox.com>\\n- valentin genev <valentin.genev@modusbox.com>\\n- Vijay Guthi <vijaya.guthi@modusbox.com>",\n        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n    },\n    ... CLICK IN THE LINK BELOW TO SEE MORE\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"files/postmanDeployment.json"}),"Click here to access the complete Postman Deployment JSON sample file")),Object(r.b)("h3",{id:"mojaloop-participants-endpoint-setup"},"Mojaloop Participants Endpoint Setup ",Object(r.b)("a",{name:"mojajson"})),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "info": {\n        "_postman_id": "2eea2ba5-4ed7-4a33-87da-ff9ec221b13a",\n        "name": "Mojaloop_Participant\u0443_Endpoints_Setup",\n        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"\n    },\n    ... CLICK IN THE LINK BELOW TO SEE MORE\n')),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"files/participantsEndpointSetup.json"}),"Click here to access the complete Participants Endpoint Setup JSON sample file")))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||r;return n?o.a.createElement(u,i({ref:t},l,{components:n})):o.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);