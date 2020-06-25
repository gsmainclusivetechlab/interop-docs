(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(2),s=n(9),o=(n(0),n(179)),r={id:"tests",title:"Running Tests",sidebar_label:"Running Tests"},i={id:"tests",title:"Running Tests",description:"In way to run test cases, the user may use an API Client Tool such as Postman, Insomnia, Postwoman, HTTPie, SoapUI, Paw, etc. The tool allows the user making requests for the Interoperability Test Platform using the component addresses, namely the SUT, the Service Provider and the Mobile Money Operator. These last two provided in the configuration step of session creation and also in the test case information.",source:"@site/docs/umtests.md",permalink:"/tests",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/umtests.md",sidebar_label:"Running Tests",sidebar:"someSidebar",previous:{title:"Test Sessions",permalink:"/session"},next:{title:"Test Results",permalink:"/results"}},c=[{value:"Postman Collections",id:"postman-collections",children:[]},{value:"Sending Requests from Postman",id:"sending-requests-from-postman",children:[{value:"Setting Test Environment",id:"setting-test-environment",children:[]},{value:"Sending a Test Request",id:"sending-a-test-request",children:[]},{value:"Running Multiple Tests",id:"running-multiple-tests",children:[]}]}],l={rightToc:c};function h(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In way to run test cases, the user may use an API Client Tool such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com"}),"Postman"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://insomnia.rest"}),"Insomnia"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://postwoman.io"}),"Postwoman"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://httpie.org"}),"HTTPie"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.soapui.org"}),"SoapUI"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://paw.cloud"}),"Paw"),", etc. The tool allows the user making requests for the Interoperability Test Platform using the component addresses, namely the SUT, the Service Provider and the Mobile Money Operator. These last two provided in the configuration step of session creation and also in the test case information."),Object(o.b)("h3",{id:"postman-collections"},"Postman Collections"),Object(o.b)("p",null,"The requests that can be made for each test case are already grouped into collections, preconfigured to be used, easing the testing process. The user has the power to change the information and parameters, making possible to perform different tests. To access the collections, visit ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://interop.gsmainclusivetechlab.io/tutorials"}),"ITP Postman Collections"),". It is worth remembering that the collections can be easily adapted to any other platform of your choice. The user can then run the test cases and, if desired, change the request data to proceed with different executions",Object(o.b)("sup",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#triggers"}),"1")),"."),Object(o.b)("p",null,"Collections available in Postman:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/postmancollections.png",alt:"Postman Collections"}))),Object(o.b)("h2",{id:"sending-requests-from-postman"},"Sending Requests from Postman"),Object(o.b)("p",null,"Once the System Under Test (SUT) is configured and the session created, the user can then run the test cases. For this, it will be necessary to use component addresses to configure the API Client Tool with the locations where the Interoperability Test Platform simulated components and the SUT are located. In this manual an example will be shown in which our SUT is the Mobile Money Operator 1. Therefore, we are running this component locally and we will use the Sevice Provider (SP) and the Switch (in this case Mojaloop ) as components simulated by the Interoperability Test Platform."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The addresses of the simulated components are made available on the platform during the creation of a session, or on the initial screen of each test case."))),Object(o.b)("h3",{id:"setting-test-environment"},"Setting Test Environment"),Object(o.b)("p",null,"Once you have the collections of test cases and the address of the components, a test environment must be created in our API client tool. The following figure shows an example of creating an environment for validating test cases for P2P. Note that the address used for Mobile Money Operator 1 is the address of the SUT and the addresses of Mojaloop and Service Provider are provided by the platform when creating a session."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The environment variables used for the components are respectively: Service Provider - ",Object(o.b)("strong",{parentName:"p"},"sp_url"),", Mobile Money Operator 1 - ",Object(o.b)("strong",{parentName:"p"},"mmo1_url"),", Mojaloop (switch) - ",Object(o.b)("strong",{parentName:"p"},"moja_url")," and when necessary, Mobile Money Operator 2 - ",Object(o.b)("strong",{parentName:"p"},"mm2_url"),"."))),Object(o.b)("p",null,"Creating a New Environment in Postman:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/creatingenv.png",alt:"Creating a New Env"}))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Remember that when creating a new session, the parameters of the SUT need to reference the simulated components. For our example in which the SUT is MMO1, we need to configure the .env file of our local system under test with the addresses provided for the SP and the Switch."))),Object(o.b)("h3",{id:"sending-a-test-request"},"Sending a Test Request"),Object(o.b)("p",null,"Now that we have the test parameters, present in the collections, and the configured environment variables, the next step is to send the test requests for execution. For this, the user chooses among the available test cases the one he/she wants to send for execution on the Interoperability Test Platform. After choosing the test, you can browse the information related to it, such as the request header and body, for example. When desired, just select the send option and then the request is sent to the platform."),Object(o.b)("p",null,"Example of Test Case File Information:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/runtestcase.png",alt:"Example of Test Case File Information"}))),Object(o.b)("p",null,"Depending on how the test case transaction occurs, it may contain more than one execution step. When this happens, you can see the different files in the collection grouped in a folder with the name of the test case. In the example we are using as a basis, we can see this happening when the test cases need access to the Account Lookup System (ALS), where there are two execution files for these tests. Thus, there is a need to send the GET request and then send the POST request for the complete execution of the test case."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The test cases have triggers that must be attended to in order for the platform to recognize the test to be performed. These parameters are defined in the test case preconditions under the item ",Object(o.b)("em",{parentName:"p"},"Required Parameters for Execution"),"."))),Object(o.b)("p",null,"After the execution, the user receives the result of the request, which can be either a success or an execution error. The following result message is an example of a possible test request error when one of the triggers is changed to an unrecognized value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'{\n    "message": "No query results for model [App\\\\Models\\\\TestStep]."\n}\n')),Object(o.b)("p",null,"After sending the request, some random variables are created in the current environment. In our example, for the execution of P2P test cases, two variables are made necessary: QuoteID and TransacrtionID. These variables values are automatically generated with each test run and added to the current environment. The following figure distinguishes the variables added by the user within the red square from the variables generated when the requests are sent, represented within the blue square."),Object(o.b)("p",null,"Environment Variables in Postman After a Request:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/environmentconfig.png",alt:"Environment Variables"}))),Object(o.b)("h3",{id:"running-multiple-tests"},"Running Multiple Tests"),Object(o.b)("p",null,"Depending on which API Client Tool is being used, there is the possibility of running multiple batch tests. This speeds up the evaluation process when it involves many test cases. In ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.postman.com"}),"Postman"),", this possibility is allowed through the Collection Runner option. In this modality, it is possible to define parameters for the execution of test cases collection, such as: number of iterations, delay between requests, and so forth."),Object(o.b)("p",null,"Running a Collection of Test Cases:\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/runcollection.png",alt:"Run Test Case Collection"}))),Object(o.b)("hr",null),Object(o.b)("h5",{id:"footnotes"},"Footnotes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{name:"triggers"},"1"),": It is important to pay attention to the required parameters for execution present in the the test cases, since they are used as triggers for tests.")))}h.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),h=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=h(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(n),b=a,d=p["".concat(r,".").concat(b)]||p[b]||m[b]||o;return n?s.a.createElement(d,i({ref:t},l,{components:n})):s.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);