"use strict";(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(k,i(i({ref:t},s),{},{components:n})):o.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Development Tools"},c=void 0,p={unversionedId:"contributors-guide/tools",id:"contributors-guide/tools",title:"Development Tools",description:"CLI Tools",source:"@site/docs/contributors-guide/tools.md",sourceDirName:"contributors-guide",slug:"/contributors-guide/tools",permalink:"/contributors-guide/tools",draft:!1,tags:[],version:"current",frontMatter:{title:"Development Tools"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/contributors-guide/contributing"},next:{title:"Writing New Code",permalink:"/contributors-guide/new-code"}},s={},d=[{value:"CLI Tools",id:"cli-tools",level:2},{value:"<code>docker</code>",id:"docker",level:3},{value:"<a name='docker-compose'></a>3. <code>docker-compose</code>",id:"3-docker-compose",level:3},{value:"<code>git</code>",id:"git",level:3},{value:"<code>npm</code>",id:"npm",level:3},{value:"macOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Non-CLI Tools",id:"non-cli-tools",level:2},{value:"Github",id:"github",level:3},{value:"Postman",id:"postman",level:3},{value:"IDE",id:"ide",level:3}],u={toc:d},m="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cli-tools"},"CLI Tools"),(0,a.kt)("p",null,"Throughout this guide, we assume the presence on your development machine of the\nfollowing tools:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#docker"},(0,a.kt)("inlineCode",{parentName:"a"},"docker"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#docker-compose"},(0,a.kt)("inlineCode",{parentName:"a"},"docker-compose"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#git"},(0,a.kt)("inlineCode",{parentName:"a"},"git"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#npm"},(0,a.kt)("inlineCode",{parentName:"a"},"npm"))," (optionally, yarn)")),(0,a.kt)("h3",{id:"docker"},(0,a.kt)("inlineCode",{parentName:"h3"},"docker")),(0,a.kt)("p",null,"The interoperability test platform is built using\n",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),", which means that each component can run on\nany environment which supports Docker. Installation guides are available for\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"Ubuntu"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"macOS")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/install/"},"Windows"),"."),(0,a.kt)("p",null,"You can check that Docker has been correctly installed by running the following\ncommands on your machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker --version\n#  Docker version 19.03.11, build 42e35e61f3\n")),(0,a.kt)("h3",{id:"3-docker-compose"},(0,a.kt)("a",{name:"docker-compose"}),"3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"docker-compose")),(0,a.kt)("p",null,"Each ITP component is developed using microservices which are coordinated using\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker-compose")),". On Windows and macOS,\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," should be installed automatically with Docker. On a Linux host,\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," must be installed separately using\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"this guide"),"."),(0,a.kt)("p",null,"You can check that ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," has been correctly installed by running the\nfollowing commands on your machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose --version\n#  docker-compose version 1.26.0, build d4451659\n")),(0,a.kt)("h3",{id:"git"},(0,a.kt)("inlineCode",{parentName:"h3"},"git")),(0,a.kt)("p",null,"We recommend the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," to download source code and fetch updates.\nInstallation guides for ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," for all platforms can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here"),"."),(0,a.kt)("h3",{id:"npm"},(0,a.kt)("inlineCode",{parentName:"h3"},"npm")),(0,a.kt)("h4",{id:"macos"},"macOS"),(0,a.kt)("p",null,"Use homebrew to install ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install node\n")),(0,a.kt)("h4",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Follow the installation guide\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Follow the installation guide\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/#windows"},"here")),(0,a.kt)("h2",{id:"non-cli-tools"},"Non-CLI Tools"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#github"},"Github")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#postman"},"Postman")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ide"},"IDE")," (optional)")),(0,a.kt)("h3",{id:"github"},"Github"),(0,a.kt)("p",null,"All of the ITP repositories are available on Github. While you don't need a\nGitHub account to download and play around with the code, you must have your own\nGitHub account set up in order to contribute."),(0,a.kt)("h3",{id:"postman"},"Postman"),(0,a.kt)("p",null,"Postman is a tool for exploring and testing APIs. You can download it from\n",(0,a.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"here"),"."),(0,a.kt)("p",null,"Alternatively on recent versions of Linux, you may run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install postman\n")),(0,a.kt)("h3",{id:"ide"},"IDE"),(0,a.kt)("p",null,"When writing code, you may wish to use an IDE instead of a simple text editor.\nThere are plenty available out there, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://atom.io/"},"Atom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.jetbrains.com/webstorm/"},"Webstorm")," (free 30 day trial)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.jetbrains.com/phpstorm/"},"PhpStorm")," (free 30 day trial)")))}k.isMDXComponent=!0}}]);