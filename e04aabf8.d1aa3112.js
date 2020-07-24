(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(163)),i={title:"Installation Guide",sidebar_label:"Installation Guide"},c={id:"installation/introduction",title:"Installation Guide",description:"The interoperability test platform is built using",source:"@site/docs/installation/introduction.md",permalink:"/installation/introduction",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/installation/introduction.md",sidebar_label:"Installation Guide",sidebar:"someSidebar",previous:{title:"Test Case Matching",permalink:"/architecture/matching"},next:{title:"Interoperability Test Platform Installation Guide",permalink:"/installation/itp"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The interoperability test platform is built using\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker"),", which means that each component can run on\nany environment which supports Docker. Installation guides are available for\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/ubuntu/"}),"Ubuntu"),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"macOS")," and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"Windows"),"."),Object(o.b)("p",null,"Additionally, each component is developed using microservices which are\ncoordinated using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/"}),Object(o.b)("inlineCode",{parentName:"a"},"docker-compose")),". On\nWindows and macOS, ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," should be installed automatically with\nDocker. On a Linux host, ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," must be installed separately using\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"this guide"),"."),Object(o.b)("p",null,"You can check that both Docker and ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose")," have been correctly\ninstalled by running the following commands on your machine:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker --version\n#  Docker version 19.03.11, build 42e35e61f3\n$ docker-compose --version\n#  docker-compose version 1.26.0, build d4451659\n")),Object(o.b)("p",null,"Finally, we recommend the use of ",Object(o.b)("inlineCode",{parentName:"p"},"git")," to download source code and fetch\nupdates, along with the use of ",Object(o.b)("inlineCode",{parentName:"p"},"make")," to simplify installation. Installation\nguides for ",Object(o.b)("inlineCode",{parentName:"p"},"git")," for all platforms can be found\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"here"),".\nInstructions for installing ",Object(o.b)("inlineCode",{parentName:"p"},"make")," are also available for\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://askubuntu.com/a/272020"}),"Ubuntu"),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/a/10265766/1590962"}),"macOS")," and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://gnuwin32.sourceforge.net/packages/make.htm"}),"Windows"),"."))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);