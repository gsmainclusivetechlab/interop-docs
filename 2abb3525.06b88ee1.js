(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(163)),s={title:"Mojaloop Installation Guide",sidebar_label:"Mojaloop"},i={id:"installation/mojaloop",title:"Mojaloop Installation Guide",description:"Mojaloop can be installed on Linux, Mac and Windows operating systems.",source:"@site/docs/installation/mojaloop.md",permalink:"/installation/mojaloop",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/installation/mojaloop.md",sidebar_label:"Mojaloop",sidebar:"someSidebar",previous:{title:"Service Provider Installation Guide",permalink:"/installation/sp"},next:{title:"ITP Use Cases",permalink:"/usecases/intro"}},c=[{value:"Install Dependencies",id:"install-dependencies",children:[{value:"Install helm",id:"install-helm",children:[]},{value:"Modify Helm for Mojaloop",id:"modify-helm-for-mojaloop",children:[]},{value:"Add helm repos",id:"add-helm-repos",children:[]}]},{value:"Install Mojaloop",id:"install-mojaloop",children:[{value:"Configure Mojaloop",id:"configure-mojaloop",children:[]}]},{value:"Kubernetes Dashboard installation",id:"kubernetes-dashboard-installation",children:[]},{value:"Updating",id:"updating",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mojaloop can be installed on Linux, Mac and Windows operating systems.\nInstallation and deployment instructions can be found on the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.mojaloop.io/documentation"}),"official Mojaloop website"),". The\nfollowing guide presents additional guidance on installing Mojaloop on Ubuntu in\nparticular."),Object(o.b)("h2",{id:"install-dependencies"},"Install Dependencies"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"kubelet, kubeadm and kubectl should be version 1.17.3 ",Object(o.b)("br",null)),Object(o.b)("li",{parentName:"ol"},"Flannel is broken, use weave-kube")))),Object(o.b)("p",null,"This Kubernetes installation process is based on this article:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/"}),"https://www.linuxtechi.com/install-configure-kubernetes-ubuntu-18-04-ubuntu-18-10/")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ sudo apt update\n$ sudo apt install apt-transport-https ca-certificates curl gnupg-agent     software-properties-common\n$ sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add\n$ sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"\n$ sudo swapoff -a\n$ sudo apt update\n$ sudo apt-get install kubectl=1.17.3-00 kubelet=1.17.3-00 kubeadm=1.17.3-00\n$ sudo kubeadm init --pod-network-cidr=10.244.0.0/16\n\n$ mkdir -p $HOME/.kube\n$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config\n$ kubectl apply -f "https://raw.githubusercontent.com/weaveworks/weave/master/prog/weave-kube/weave-daemonset-k8s-1.9.yaml"\n')),Object(o.b)("h3",{id:"install-helm"},"Install helm"),Object(o.b)("p",null,"An installation guide can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://helm.sh/docs/intro/install/"}),"here")),Object(o.b)("h3",{id:"modify-helm-for-mojaloop"},"Modify Helm for Mojaloop"),Object(o.b)("p",null,"Edit the configuration file found at\n",Object(o.b)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-apiserver.yaml"),", identifying the following\nsection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  containers:\n    - command:\n        - kube-apiserver\n      #  ...\n")),Object(o.b)("p",null,"At the bottom of this section, add the following line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"- --runtime-config=apps/v1beta1=true,apps/v1beta2=true,extensions/v1beta1/daemonsets=true,extensions/v1beta1/deployments=true,extensions/v1beta1/replicasets=true,extensions/v1beta1/networkpolicies=true,extensions/v1beta1/podsecuritypolicies=true\n")),Object(o.b)("p",null,"After adding the line, the file should look like this:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/mojahelm.png",alt:"Install Example"}))),Object(o.b)("h3",{id:"add-helm-repos"},"Add helm repos"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm repo add mojaloop http://mojaloop.io/helm/repo/\n$ helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator\n$ helm repo add kiwigrid https://kiwigrid.github.io\n$ helm repo add elastic https://helm.elastic.co\n$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/\n$ helm repo update\n")),Object(o.b)("h2",{id:"install-mojaloop"},"Install Mojaloop"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl taint nodes --all node-role.kubernetes.io/master-\n$ kubectl create namespace moja880\n$ helm --namespace moja880 install mojaloop/mojaloop --version 8.8.0 --name-template mj8\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For some reason proxying through nginx-ingress by hostname cause freezes on\nevery 3-5 requests to any of the mojaloop services. It is currently suggested to\nuse nginx at the OS level to proxy traffic the the kubernetes pods by IP."))),Object(o.b)("h4",{id:"install-nginx"},"Install nginx."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get install nginx\n")),Object(o.b)("h4",{id:"configure-nginx-vhost"},"Configure nginx vhost"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Discover IP addresses for each service with the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get services --all-namespaces\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new nginx configuration file at\n",Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/mojaloop.conf")," with the following contents. Make\nsure to adjust the IP addresses to reflect those returned in step 1:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'server {\n    root /var/www/html;\n    listen 80;\n    server_name mojaloop.example.com;\n\n    access_log /var/log/nginx/mojaloop_access.log;\n    error_log /var/log/nginx/mojaloop_error.log;\n\n    #############################################\n    #                                           #\n    # Locatins for specific routes of services  #\n    #                                           #\n    #############################################\n\n    ### ml-api-adapter-service ###\n    location /transfers {\n        proxy_pass http://10.100.202.212;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### quoting-service ###\n    location ^~ /quotes {\n        proxy_pass http://10.100.116.36;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n        #proxy_set_header Host $host;\n\n    }\n\n    ### transaction-requests-service/transactionRequests###\n    location ^~ /transactionRequests {\n        proxy_pass http://10.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n    ### transaction-requests-service/authorizations ###\n    location ^~ /authorizations/ {\n        proxy_pass http://0.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    #########################\n    #                       #\n    # Locatins for services #\n    #                       #\n    #########################\n\n    ### ml-api-adapter-service ###\n    location /mlapiadapterservice {\n        rewrite ^/mlapiadapterservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.100.202.212;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### quoting-service ###\n    location /quotingservice {\n        rewrite ^/quotingservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.100.116.36;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### simulator ###\n    location /simulator {\n        rewrite ^/simulator(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.103.209.76;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### transaction-requests-service ###\n    location /transactionrequestsservice {\n        rewrite ^/transactionrequestsservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.96.202.216;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n\n    ### centralledger-service ###\n    location /centralledgerservice {\n        rewrite ^/centralledgerservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.106.153.89;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### centralsettlement ###\n    location /centralsettlement {\n        rewrite ^/centralsettlement(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.110.171.46;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### account-lookup-service ###\n    location /accountlookupservice {\n        rewrite ^/accountlookupservice(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.96.8.76;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n    ### account-lookup-service-admin ###\n    location /accountlookupadmin {\n        rewrite ^/accountlookupadmin(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://10.105.96.98;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n    }\n\n}\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Finally, reload nginx to apply the configuration:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo cd /etc/nginx/sites-enabled\n$ sudo ln -sf ../sites-available/mojaloop.conf\n$ sudo nginx -t\n$ sudo service nginx reload\n")))),Object(o.b)("h3",{id:"configure-mojaloop"},"Configure Mojaloop"),Object(o.b)("p",null,"Mojaloop now needs to be configured with endpoints for the test platform\ncorresponding to DFSPs within Mojaloop. We have prepared configuration files to\nallow this to be completed easily with Postman."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/files/postmanEnvSamples.json"}),"environment")," configuration file should be\nedited to reflect your own mojaloop server URL, and then imported."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/files/postmanDeployment.json"}),"new deployment")," configuration file can\nnow be imported into Postman, and executed to set up the deployment."),Object(o.b)("li",{parentName:"ol"},"Finally, the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/files/participantsEndpointSetup.json"}),"new participant"),"\nconfiguration file can be imported and executed to set up the correct\nendpoint URLs for the DFSP simulators.")),Object(o.b)("h2",{id:"kubernetes-dashboard-installation"},"Kubernetes Dashboard installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install kubernetes-dashboard service"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get token"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl -n kube-system get secrets | grep dashboard-token\n$ kubectl -n kube-system describe  secrets/kubernetes-dashboard-token-s5v6b\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add permissions"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl create clusterrolebinding kubernetes-dashboard -n kube-system\n--clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create .httpasswd"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# apt install apache2-utils\n# mkdir /etc/nginx/basic_auth/\n# htpasswd -c /etc/nginx/basic_auth/.htpasswd username\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure nginx. Kubernetes dashboard requires HTTPS, but a self-signed\ncertificate is fine."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'server {\n    root /var/www/html;\n    listen 443 ssl;\n    server_name mojaloop.example.com;\n\n    ssl_certificate  /etc/nginx/ssl/kubeadm/mojaloop.example.com.cert;\n    ssl_certificate_key  /etc/nginx/ssl/kubeadm/mojaloop.example.com.key;\n\n    location /kubeadm/ {\n        auth_basic "Restricted";\n        auth_basic_user_file /etc/nginx/basic_auth/.htpasswd;\n        rewrite ^/kubeadm(/.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass https://10.110.168.82;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n\n    }\n}\n')))),Object(o.b)("h2",{id:"updating"},"Updating"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Updating works only with helm 3.2 or 2.6"))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Perform dry-run upgrade:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm repo update\n$ helm -n moja upgrade moja mojaloop/mojaloop --dry-run\n"))),Object(o.b)("li",{parentName:"ol"},"If dry-run upgrade was successful you can upgrade:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ helm -n moja upgrade moja mojaloop/mojaloop\n")))))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||o;return n?r.a.createElement(u,i({ref:t},l,{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);