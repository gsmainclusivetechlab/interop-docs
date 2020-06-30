(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(179)),i={id:"itp",title:"Interoperability Test Platform Installation Guide",sidebar_label:"Interoperability Test Platform"},l={id:"installation/itp",title:"Interoperability Test Platform Installation Guide",description:"Project Set-up",source:"@site/docs/installation/itp.md",permalink:"/installation/itp",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/installation/itp.md",sidebar_label:"Interoperability Test Platform",sidebar:"someSidebar",previous:{title:"Installation Guide",permalink:"/installation/introduction"},next:{title:"Mobile Money Operator Installation Guide",permalink:"/installation/mmo"}},s=[{value:"Project Set-up",id:"project-set-up",children:[]},{value:"Database Installation",id:"database-installation",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"URL Configuration",id:"url-configuration",children:[]},{value:"Logging In",id:"logging-in",children:[]},{value:"Production Use",id:"production-use",children:[]},{value:"Updating",id:"updating",children:[{value:"Backing Up",id:"backing-up",children:[]},{value:"Fetching Updates",id:"fetching-updates",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"project-set-up"},"Project Set-up"),Object(r.b)("p",null,"To begin with, download the code for the test platform onto your machine. To do\nthis using git, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone git@github.com:gsmainclusivetechlab/interop-test-platform.git\n$ cd interop-test-platform\n")),Object(r.b)("p",null,"Certain configuration files must be created to customise the test platform to\nyour own environment. To get you started, you can copy the ",Object(r.b)("inlineCode",{parentName:"p"},"*.example")," files\nincluded in the codebase. Alternatively, you can run the ",Object(r.b)("inlineCode",{parentName:"p"},"make init")," command if\nyou have ",Object(r.b)("inlineCode",{parentName:"p"},"make")," installed on your machine. The files to copy are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".env"),": In this file, you can configure the ports that the test platform\nshould listen for connections on, as well as defining credentials for the\nMySQL database, and setting appropriate user permissions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/.env"),": In this file, you can configure the URL for the test platform, as\nwell as the URLs that the platform will use to contact other simulator\ncomponents.")),Object(r.b)("p",null,"Once the configuration files have been added, you should be able to launch all\nmicroservices using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker-compose up -d\n# Creating network "test-platform_default" with the default driver\n# Creating test-platform_mailhog_1 ... done\n# Creating test-platform_redis_1   ... done\n# Creating test-platform_nodejs_1  ... done\n# Creating test-platform_mysqldb_1 ... done\n# Creating test-platform_app_1     ... done\n# Creating test-platform_queue_1   ... done\n# Creating test-platform_web_1     ... done\n')),Object(r.b)("h2",{id:"database-installation"},"Database Installation"),Object(r.b)("p",null,"At this point, ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," has launched all services required for the test\nplatform, but they will require further set-up. You can now set up the database\nand install any missing dependencies by running the following ",Object(r.b)("inlineCode",{parentName:"p"},"make")," script."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"In a future version of the test platform, the images used by Docker will be\npre-configured, so this step will not be necessary.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ make install\n# docker-compose exec app bash -c \"make install\"\n# Chmod storage and bootstrap cache...\n# Install composer...\n# ...\n# make[1]: Leaving directory '~/Code/GSMA/interop-test-platform'\n# touch runtime/installed\n")),Object(r.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("p",null,"This installation script may fail if the ",Object(r.b)("inlineCode",{parentName:"p"},"mysql")," service is unable to write\nfiles to your host machine. Check that the ",Object(r.b)("inlineCode",{parentName:"p"},"runtime/mysql")," directory exists and\nis writable by your user. Another common cause of this is forgetting to update\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"UID")," field inside the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file. The value should be equal to your user\nand group ID. To find out your user id, run ",Object(r.b)("inlineCode",{parentName:"p"},"id -u")," and to find out your primary\ngroup ID, run ",Object(r.b)("inlineCode",{parentName:"p"},"id -g"),". In the example below, ",Object(r.b)("inlineCode",{parentName:"p"},"UID")," should be set to ",Object(r.b)("inlineCode",{parentName:"p"},"1000:1001"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ id -u\n# 1000\n$ id -g\n# 1001\n")),Object(r.b)("h2",{id:"url-configuration"},"URL Configuration"),Object(r.b)("p",null,"Once you have set up all simulator components, you must add the URLs for the\nsimulators into the ",Object(r.b)("inlineCode",{parentName:"p"},"src/.env")," file. When these URLs are updated, the\ninstallation script above should be re-run to ensure that the URLs are persisted\nto the database."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It is a current limitation of the test platform that this process will also\nerase other contents of the database. To work around this, it is possible to\nupdate the ",Object(r.b)("inlineCode",{parentName:"p"},"components")," table of the MySQL database directly.")),Object(r.b)("h2",{id:"logging-in"},"Logging In"),Object(r.b)("p",null,"At this point, all services are set up, and you should be able to log in. If you\ndid not change the default port in ",Object(r.b)("inlineCode",{parentName:"p"},".env"),", then you will be able to browse to\n",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8084")," in your web browser and see a login page."),Object(r.b)("p",null,"By default, the test platform does not connect to a real SMTP server, but emails\nare instead intercepted and shown on a test email server, which you will be able\nto access on ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8086"),". Using this mail server, you will be able\nto register a new account and verify your email address to log in to the\nplatform."),Object(r.b)("h2",{id:"production-use"},"Production Use"),Object(r.b)("p",null,"To set up the test platform for production use, a few changes are recommended:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"mailhog")," service should be disabled and a real SMTP server connected to\nallow user registration emails."),Object(r.b)("li",{parentName:"ul"},"Other services should be configured to restart on failure by adding\n",Object(r.b)("inlineCode",{parentName:"li"},"restart: always")," into the docker-compose configuration."),Object(r.b)("li",{parentName:"ul"},"You may choose to add a reverse proxy (for example using\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.nginx.com/"}),Object(r.b)("inlineCode",{parentName:"a"},"nginx")),") to make the platform available on other\nhostnames.")),Object(r.b)("h2",{id:"updating"},"Updating"),Object(r.b)("h3",{id:"backing-up"},"Backing Up"),Object(r.b)("p",null,"Updating the test platform is very straightforward and unlikely to cause any\ndata loss. Before you proceed, you may nonetheless choose to make a backup of\nyour database with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker-compose exec mysqldb bash -c "mysqldump -p -u $DB_USERNAME $DB_DATABASE > /var/lib/mysql/itp-test-control_`date +%Y-%m-%d`.sql"\n# Enter password...\n')),Object(r.b)("p",null,"This will place a ",Object(r.b)("inlineCode",{parentName:"p"},".sql")," dump file inside the ",Object(r.b)("inlineCode",{parentName:"p"},"runtime/mysql")," directory. You may\nalso choose to backup any modifications you have made to configuration files or\ncode (including the mysql backup just made) using ",Object(r.b)("inlineCode",{parentName:"p"},"rsync"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ rsync -auvz ./ ~/backups/`date +%Y-%m-%d`_itp_full\n# sending incremental file list\n# .git/\n# ...\n# src/vendor/webmozart/assert/src/Assert.php\n# sent 153,373,035 bytes  received 741,354 bytes  4,341,250.39 bytes/sec\n# total size is 602,736,172  speedup is 3.91\n")),Object(r.b)("h3",{id:"fetching-updates"},"Fetching Updates"),Object(r.b)("p",null,"To update the project code, simply pull the latest changes using git. You can\nalso update service images (such as those used for mysql and redis) with\n",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose stop\n# Stopping test-platform_web_1     ... done\n# Stopping test-platform_app_1     ... done\n# Stopping test-platform_queue_1   ... done\n# Stopping test-platform_mysqldb_1 ... done\n# Stopping test-platform_mailhog_1 ... done\n# Stopping test-platform_redis_1   ... done\n\n$ git pull\n# Updating 59995d74..0af9196d\n# Fast-forward\n# ...\n\n$ docker-compose pull\n# Pulling redis   ... done\n# Pulling mysqldb ... done\n# Pulling queue   ... done\n# Pulling app     ... done\n# Pulling web     ... done\n# Pulling nodejs  ... done\n# Pulling mailhog ... done\n")),Object(r.b)("p",null,"Once you have obtained the latest code, you can restart the services, install\nany missing dependencies and update the database structure using another ",Object(r.b)("inlineCode",{parentName:"p"},"make"),"\nscript:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose up -d --force-recreate\n# Recreating test-platform_mailhog_1   ... done\n# Recreating test-platform_redis_1     ... done\n# Recreating test-platform_nodejs_1    ... done\n# Recreating test-platform_mysqldb_1   ... done\n# Recreating test-platform_queue_1     ... done\n# Recreating test-platform_app_1       ... done\n# Recreating test-platform_web_1       ... done\n\n$ make update\n# docker-compose exec  --privileged --index=1 -w /var/www/html app bash -c \"make update\"\n# ...\n# make[1]: Leaving directory '~/Code/GSMA/interop-test-platform'\n")))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return n?o.a.createElement(m,l({ref:t},c,{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);