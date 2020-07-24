(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),r=(n(0),n(163)),s={title:"Testing without a SUT",sidebar_label:"Testing without a SUT"},i={id:"manual/postman-sut",title:"Testing without a SUT",description:"If you do not yet have a system to test, but still wish to try the",source:"@site/docs/manual/postman-sut.md",permalink:"/manual/postman-sut",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/manual/postman-sut.md",sidebar_label:"Testing without a SUT",sidebar:"someSidebar",previous:{title:"Test Sessions",permalink:"/manual/session"},next:{title:"Test Results",permalink:"/manual/results"}},c=[{value:"Postman Collections",id:"postman-collections",children:[]},{value:"Creating a Session",id:"creating-a-session",children:[]},{value:"Sending Requests from Postman",id:"sending-requests-from-postman",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Running Multiple Tests",id:"running-multiple-tests",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you do not yet have a system to test, but still wish to try the\nInteroperability Test Platform, you can do so by simulating the action of a real\nSUT manually using an HTTP client tool such as\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.postman.com"}),"Postman"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://insomnia.rest"}),"Insomnia"),",\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://postwoman.io"}),"Postwoman"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://httpie.org"}),"HTTPie"),",\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.soapui.org"}),"SoapUI"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://paw.cloud"}),"Paw"),", etc. To simplify\nthis, we have provided Postman Collections which will allow you to simulate the\noperation of a Service Provider under each of the currently supported test cases\nfor the Merchant Payments use-case."),Object(r.b)("h3",{id:"postman-collections"},"Postman Collections"),Object(r.b)("p",null,"The requests that can be made for each test case are grouped into collections to\nsimplify the testing process. The collection for the Service Provider is freely\naccessible\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://explore.postman.com/api/5380/interoperability-test-platform---service-provider-simulator"}),"here"),".\nIt is worth remembering that the collections can be easily adapted to another\nHTTP client of your choice."),Object(r.b)("p",null,"Collections available in Postman:\n",Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/postmancollections.png",alt:"Postman Collections"}))),Object(r.b)("h2",{id:"creating-a-session"},"Creating a Session"),Object(r.b)("p",null,'To create a session for our Postman SUT, you can select "Service Provider" as\nthe SUT type. In the currently supported test-cases, the Service Provider URL is\nnever actually used, so it is safe to enter any valid URL as the SUT URL. On the\nsecond page, select all "Merchant-Initiated Merchant Payment" test cases.'),Object(r.b)("p",null,'Finally, like any other SUT, the Postman SUT needs to be configured with the\ncomponent URLs presented within the test platform. In particular, we will need\nto set up the URL for Mobile Money Operator 1, which is provided to you in\nstep 3. Copy the URL, and then open up the Postman environment variable window.\nSelect the "Current Value" field for the environment variable ',Object(r.b)("inlineCode",{parentName:"p"},"full_url")," and\npaste in the URL just copied."),Object(r.b)("h2",{id:"sending-requests-from-postman"},"Sending Requests from Postman"),Object(r.b)("p",null,'Now that the test platform session is created, and your SUT is configured, you\nare ready to run the first test. Looking through the test flow for any of the\ntest cases selected in the previous step, you can see that every interaction\nbegins with a message sent by the service provider. To start the test execution,\nthen, we simply need to return to Postman, select one of the test cases in the\nimported collection, and click "Send". When you do, the response from MMO1\nshould look like this:'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": "pending",\n  "notificationMethod": "callback",\n  "serverCorrelationId": "93d7eac2-3556-4e49-b672-ad7f65ad2be1"\n}\n')),Object(r.b)("p",null,"That means that MMO1 has accepted the API call, and you can now return to the\nITP dashboard to view the test results. Select the test case corresponding to\nthe request you just sent, and examine the test results just as you would for a\nnormal SUT."),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("p",null,"After sending your request from Postman, you may receive the following response\nin place of what is described above:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "No query results for model [App\\\\Models\\\\TestStep]."\n}\n')),Object(r.b)("p",null,"This error is caused when the test platform is unable to\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/architecture/matching"}),"match"),' the incoming request with any active test cases.\nThis is most commonly a sign that some of the request triggers have been\nincorrectly configured. Double-check that the request payload contains the same\ndata as that which is described in the "Precondition" section of the test case\nyou are trying to run.'),Object(r.b)("h2",{id:"running-multiple-tests"},"Running Multiple Tests"),Object(r.b)("p",null,"If you would like to run multiple tests simultaneously, this is possible with\nPostman through the Collection Runner. Using this, it is possible to define\nparameters for the execution of the test cases collection, such as: number of\niterations, delay between requests, and so forth."),Object(r.b)("p",null,"Running a Collection of Test Cases:\n",Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/runcollection.png",alt:"Run Test Case Collection"}))))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(s,".").concat(b)]||p[b]||h[b]||r;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);