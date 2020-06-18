(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),o=(a(0),a(184)),c={id:"installitp",title:"Interoperability Test Platform Installation Guide",sidebar_label:"Interoperability Test Platform"},i={id:"installitp",title:"Interoperability Test Platform Installation Guide",description:"This guide is intended for users who wish to install the Interoperability Test Platform. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements: 1 GB RAM \\ 15 GB Storagespace \\ 1 VCpu.",source:"@site/docs/installitp.md",permalink:"/installitp",editUrl:"https://github.com/gsmainclusivetechlab/docs/installitp.md",sidebar_label:"Interoperability Test Platform",sidebar:"someSidebar",previous:{title:"How Tests Work with Components",permalink:"/howtestswork"},next:{title:"Mobile Money Operator Installation Guide",permalink:"/installmmo"}},l=[{value:'GSMA ITP Test Platform <a name="tp"></a>',id:"gsma-itp-test-platform",children:[{value:"installation steps",id:"installation-steps",children:[]},{value:"Updating",id:"updating",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"System Requrements")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This guide is intended for users who wish to install the Interoperability Test Platform. The Guide was created taking into account the Ubuntu 18 operating system and minimal requirements: 1 GB RAM \\ 15 GB Storagespace \\ 1 VCpu."))),Object(o.b)("h2",{id:"gsma-itp-test-platform"},"GSMA ITP Test Platform ",Object(o.b)("a",{name:"tp"})),Object(o.b)("p",null,"Project folder on ",Object(o.b)("strong",{parentName:"p"},"production"),": /var/docker"),Object(o.b)("p",null,"Project folder on ",Object(o.b)("strong",{parentName:"p"},"staging"),": /var/docker"),Object(o.b)("h3",{id:"installation-steps"},"installation steps"),Object(o.b)("h4",{id:"1-install-docker"},"1. Install docker"),Object(o.b)("p",null,"Install docker ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/"}),"https://docs.docker.com/install/linux/docker-ce/ubuntu/")),Object(o.b)("p",null,"and docker-compose: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"https://docs.docker.com/compose/install/")," "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# apt install make\n")),Object(o.b)("h4",{id:"2-clone-project-from-repo"},"2. Clone project from repo"),Object(o.b)("h4",{id:"3-configure-env-variables-docker-composeyml-and-nginxconf"},"3. Configure .env variables, docker-compose.yml and nginx.conf"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ make init\n")),Object(o.b)("p",null,"Modify .env, src/.env, docker-compose.yml and build/nginx-server.conf according to you needs."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Add \u201crestart: always\u201d to all docker-compose.yml services "))),Object(o.b)("h4",{id:"4-perform-test-run--stop-after-db-initialize-by-ctrlc"},"4. Perform test run  (stop after DB initialize by CTRL+C)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ make test-run\n")),Object(o.b)("h4",{id:"5-run-the-project"},"5. Run the project"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ make run\n")),Object(o.b)("h4",{id:"6-run-installation-procedure"},"6. Run installation procedure"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ make install\n")),Object(o.b)("h4",{id:"7-install-nginx"},"7. Install nginx"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# apt install nginx\n")),Object(o.b)("h4",{id:"8-configure-nginx-vhost"},"8. Configure nginx vhost"),Object(o.b)("h5",{id:"create-new-vhost-file-etcnginxsites-availableitpexamplecom"},"Create new vhost file: /etc/nginx/sites-available/itp.example.com"),Object(o.b)("h5",{id:"vhost-locations-config"},"vhost locations config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'server {\n    root /var/www/html/;\n    listen 80;\n    server_name interop.example.com;\n    access_log /var/log/nginx/interop.example.com_access.log;\n    error_log /var/log/nginx/interop.example.com_error.log;\n\n    location / {\n        proxy_pass http://127.0.0.1:8084;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n        proxy_set_header Host $host;\n\n    }\n\n    location ^~ /mailhog/ {\n        rewrite ^/mailhog(.*) $1 break;\n        proxy_set_header Accept-Encoding "";\n        proxy_pass http://127.0.0.1:8086;\n        proxy_buffering on;\n        proxy_buffers 12 12k;\n        proxy_redirect off;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header REMOTE_ADDR $remote_addr;\n        proxy_set_header Host $host;\n\n    }\n}\n')),Object(o.b)("h5",{id:"apply-config"},"Apply config"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# cd /etc/nginx/sites-enabled\n# ln -sf ../sites-available/mojaloop.conf\n# nginx -t\n# service nginx reload\n")),Object(o.b)("h3",{id:"updating"},"Updating"),Object(o.b)("h4",{id:"1-perform-mysql-database-backup-mysql-dump-file-will-be-placed-in-datamysql"},"1. Perform mysql database backup (mysql dump file will be placed in data/mysql):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),'docker-compose exec -T mysqldb bash -c "mysqldump --single-transaction -u $DB_USERNAME -p$DB_PASSWORD $DB_DATABASE > /var/lib/mysql/itp-test-control_`date +%Y-%m-%d`.sql"\n')),Object(o.b)("h4",{id:"2-perform-full-project-backup"},"2. Perform full project backup"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose stop\nrsync -auvz ./ /var/backups/`date +%Y-%m-%d`_itp_full\n")),Object(o.b)("h4",{id:"3-git-pull"},"3. git pull"),Object(o.b)("h4",{id:"4-if-there-was-changes-in-docker-composeexampleyml-please-perform-manually-update-of-docker-composeyml"},"4. If there was changes in docker-compose.example.yml please perform manually update of docker-compose.yml"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Don\'t forget to add "restart: always" in each docker-compose service'))),Object(o.b)("h4",{id:"7-if-there-was-changes-in-buildnginx-serverexampleconf-please-perform-manually-update-of-buildnginx-serverexampleconf"},"7. If there was changes in build/nginx-server.example.conf please perform manually update of build/nginx-server.example.conf"),Object(o.b)("h4",{id:"8-docker-compose-pull"},"8. docker-compose pull"),Object(o.b)("h4",{id:"7-make-update"},"7. make update"))}p.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return a?r.a.createElement(u,i({ref:t},s,{components:a})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);