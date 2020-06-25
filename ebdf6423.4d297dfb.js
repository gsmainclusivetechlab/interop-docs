(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{171:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return a})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return l}));var n=s(2),o=s(9),i=(s(0),s(179)),r={id:"session",title:"Test Sessions",sidebar_label:"Test Sessions"},a={id:"session",title:"Test Sessions",description:"The execution of tests in the Interoperability Test Platform (ITP) is performed through the creation of sessions. Sessions are a group of use cases and test cases with a validation purpose and possibly a common scope. Through the sessions it is possible to modularize the groups of tests by affinity, as the user wishes and taking into account the selection of the System Under Test (SUT). During the creation of a session, the user sets the address of the SUT, defines information related to the session and selects the test cases to be included. After creation, it is possible to run tests by changing parameters for each test case. The created session is available on the home screen of the ITP (as shown in the picture below), allowing the user to consult previously run tests, delete and run new tests.",source:"@site/docs/umsession.md",permalink:"/session",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/umsession.md",sidebar_label:"Test Sessions",sidebar:"someSidebar",previous:{title:"Quick Guide for Tests",permalink:"/quickguide"},next:{title:"Running Tests",permalink:"/tests"}},c=[{value:"Creting a Test Session",id:"creting-a-test-session",children:[{value:"Step 01: SUT Selection",id:"step-01-sut-selection",children:[]},{value:"Step 02: Session Info",id:"step-02-session-info",children:[]},{value:"Step 03: Configure Components",id:"step-03-configure-components",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The execution of tests in the Interoperability Test Platform (ITP) is performed through the creation of sessions. Sessions are a group of use cases and test cases with a validation purpose and possibly a common scope. Through the sessions it is possible to modularize the groups of tests by affinity, as the user wishes and taking into account the selection of the System Under Test (SUT). During the creation of a session, the user sets the address of the SUT, defines information related to the session and selects the test cases to be included. After creation, it is possible to run tests by changing parameters for each test case. The created session is available on the home screen of the ITP (as shown in the picture below), allowing the user to consult previously run tests, delete and run new tests."),Object(i.b)("p",null,"Home screen with the user sessions:\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/itphome.png",alt:"ITP Home"}))),Object(i.b)("h2",{id:"creting-a-test-session"},"Creting a Test Session"),Object(i.b)("p",null,"During the creation of a session the user must perform three main steps. In each step the user might insert information and parameters related to the session to be created. Following, each step and the form required fields are described."),Object(i.b)("h3",{id:"step-01-sut-selection"},"Step 01: SUT Selection"),Object(i.b)("p",null,"In this step, the user must enter the information about the SUT that will be tested by the platform. The form consists of two fields: type of ",Object(i.b)("strong",{parentName:"p"},"SUT")," and ",Object(i.b)("strong",{parentName:"p"},"URL"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"SUT:")," The user must choose the type of SUT to be included in the session. The current types are Service Provider, Mobile Money Operator 1 and Mobile Money Operator 2."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL:")," The user inserts the link of the SUT included in the session. There are two possibilities: the user can choose to test with his own SUT",Object(i.b)("sup",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#instancedsut"}),"1"))," or with a SUT simulated by the platform",Object(i.b)("sup",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#simulatedsut"}),"2")),"."),Object(i.b)("p",null,"Step 01 - Selecting the system under test:\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/itpselectsut.png",alt:"ITP Session SUT Selection"}))),Object(i.b)("h3",{id:"step-02-session-info"},"Step 02: Session Info"),Object(i.b)("p",null,"In this step the user must provide information for the definition and creation of the session using 3 main fields, which are:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Name:")," Alias used to name the session. This name will be visible in the dashboard."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description:")," Information described by the user to help understand the purpose of the section created."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use Cases:")," In this part, considering the type of SUT chosen, all use cases and their respective test cases are shown. The user can then select the test cases to be used by the session under creation. It is worth mentioning that the test cases for each use case are divided into happy flow and unhappy flow."),Object(i.b)("p",null,"Step 02 - Session information form:\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/itpsessioninfo.png",alt:"ITP Session Info"}))),Object(i.b)("h3",{id:"step-03-configure-components"},"Step 03: Configure Components"),Object(i.b)("p",null,"In this step, the components other than the SUT, which must be present in the execution of the tests, are automatically filled with addresses of components simulated by the platform. During the execution of tests for a session, these addresses remain at the user's view so that they can be copied and used in the execution of tests using an API client tool, such as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postman.com"}),"Postman")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://insomnia.rest"}),"Insomnia"),", for example."),Object(i.b)("p",null,"Step 03 - Information about the configure components:\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/itpsessionconfigure.png",alt:"ITP Session Configure Compponents"}))),Object(i.b)("p",null,"After the session has been created, the user has at his disposal the group of test cases selected during the creation steps. From there, it is possible to select a specific test case and proceed with the test execution."),Object(i.b)("p",null,"Example of session main screen after its creation:\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/itpsessionscreen.png",alt:"Session Screen"}))),Object(i.b)("hr",null),Object(i.b)("h5",{id:"footnotes"},"Footnotes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{name:"instancedsut"},"1"),": To understand about how to run your ouwn SUT read more in the installation section."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{name:"simulatedsut"},"2"),": This possibility in under construction and will allow the user to use the platform simulating all componentes, including the SUT.")))}l.isMDXComponent=!0},179:function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return d}));var n=s(0),o=s.n(n);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),s=t;return e&&(s="function"==typeof e?e(t):a({},t,{},e)),s},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(s),b=n,d=u["".concat(r,".").concat(b)]||u[b]||h[b]||i;return s?o.a.createElement(d,a({ref:t},p,{components:s})):o.a.createElement(d,a({ref:t},p))}));function d(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,r=new Array(i);r[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var p=2;p<i;p++)r[p]=s[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,s)}b.displayName="MDXCreateElement"}}]);