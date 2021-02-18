(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(80)),i={title:"Installation Guide",sidebar_label:"Installation Guide"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation Guide",description:"Installation Dependencies",source:"@site/docs/installation.md",slug:"/installation",permalink:"/installation",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/installation.md",version:"current",sidebar_label:"Installation Guide",sidebar:"someSidebar",previous:{title:"Test Case Matching",permalink:"/architecture/matching"},next:{title:"ITP Use Cases",permalink:"/testcases/intro"}},l=[{value:"Installation Dependencies",id:"installation-dependencies",children:[]},{value:"Project Set-up",id:"project-set-up",children:[]},{value:"Database Installation",id:"database-installation",children:[]},{value:"Logging In",id:"logging-in",children:[]},{value:"Updating",id:"updating",children:[{value:"Backing Up",id:"backing-up",children:[]},{value:"Fetching Updates",id:"fetching-updates",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation-dependencies"},"Installation Dependencies"),Object(r.b)("p",null,"The interoperability test platform is built using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker"),", which means that it can run on any\nenvironment which supports Docker. Installation guides for Docker are available\nfor ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/ubuntu/"}),"Ubuntu"),",\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"macOS")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"Windows"),"."),Object(r.b)("p",null,"Additionally, the platform is developed using microservices which are\ncoordinated using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),Object(r.b)("inlineCode",{parentName:"a"},"docker-compose")),". On\nWindows and macOS, ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," should be installed automatically with\nDocker. On a Linux host, ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," must be installed separately using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"this guide"),"."),Object(r.b)("p",null,"You can check that both Docker and ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," have been correctly\ninstalled by running the following commands on your machine:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker --version\n#  Docker version 19.03.11, build 42e35e61f3\n$ docker-compose --version\n#  docker-compose version 1.26.0, build d4451659\n")),Object(r.b)("p",null,"Finally, we recommend the use of ",Object(r.b)("inlineCode",{parentName:"p"},"git")," to download source code and fetch\nupdates. Installation guides for ",Object(r.b)("inlineCode",{parentName:"p"},"git")," for all platforms can be found\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"here"),"."),Object(r.b)("h2",{id:"project-set-up"},"Project Set-up"),Object(r.b)("p",null,"To simplify installation, we have prepared a template repository with example\nconfigurations for installation\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gsmainclusivetechlab/interop-release-configuration"}),"here"),'.\nTo begin with, click "Use this template" to make a copy of the repository in\nyour own namespace. Once the template has been applied, you can copy the\nconfiguration files onto your host machine using git:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone git@github.com:your-user-id/interop-release-configuration.git interop-test-platform\n$ cd interop-test-platform\n")),Object(r.b)("p",null,"Certain configuration files must be adjusted to customise the test platform to\nyour own environment. More detail on the configuration options required is\navailable in the README file within the repository (and is guaranteed to be up\nto date with the version of ",Object(r.b)("inlineCode",{parentName:"p"},"interop-release-configuration")," you are using). In\nparticular, you should take note of the platform version which is configured\ninside docker-compose.yml."),Object(r.b)("p",null,"Once the configuration files have been adjusted, you should be able to launch\nall services using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker-compose up -d\n# Creating network "interop-test-platform_default" with the default driver\n# Creating interop-test-platform_redis_1   ... done\n# Creating interop-test-platform_mysqldb_1 ... done\n# Creating interop-test-platform_app_1     ... done\n# Creating interop-test-platform_queue_1   ... done\n')),Object(r.b)("p",null,"This will download Docker images corresponding to the appropriate version of the\ntest platform, and launch them on your system."),Object(r.b)("h2",{id:"database-installation"},"Database Installation"),Object(r.b)("p",null,"At this point, ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose")," has launched all services required for the test\nplatform, but they will require further set-up. You can now set up the database\nby running the migration script."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose exec app php artisan migrate:refresh --seed\n")),Object(r.b)("p",null,'Note that this command will perform a "factory reset" on the database.'),Object(r.b)("h2",{id:"logging-in"},"Logging In"),Object(r.b)("p",null,"At this point, all services are set up, and you should be able to log in. You\nshould now be able to browse to the domain you configured in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," and see a\nlogin page."),Object(r.b)("h2",{id:"updating"},"Updating"),Object(r.b)("h3",{id:"backing-up"},"Backing Up"),Object(r.b)("p",null,"Updating the test platform is very straightforward and unlikely to cause any\ndata loss. Before you proceed, you may nonetheless choose to make a backup of\nyour database with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ docker-compose exec mysqldb bash -c "mysqldump -p -u $DB_USERNAME $DB_DATABASE" > itp_`date +%Y-%m-%d`.sql\n# Enter password...\n')),Object(r.b)("p",null,"This will place a ",Object(r.b)("inlineCode",{parentName:"p"},".sql")," dump file inside the your working directory."),Object(r.b)("h3",{id:"fetching-updates"},"Fetching Updates"),Object(r.b)("p",null,"To update the project code, update the version number inside docker-compose, and\nthen pull the new images:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose pull\n# Pulling queue     ... done\n# Pulling app     ... done\n")),Object(r.b)("p",null,"Once you have obtained the latest code, you can restart the services, install\nany missing dependencies and update the database structure using another ",Object(r.b)("inlineCode",{parentName:"p"},"make"),"\nscript:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker-compose up -d --force-recreate\n# Recreating test-platform_redis_1     ... done\n# Recreating test-platform_mysqldb_1   ... done\n# Recreating test-platform_queue_1     ... done\n# Recreating test-platform_app_1       ... done\n\n$ docker-compose exec app php artisan migrate\n")))}p.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);