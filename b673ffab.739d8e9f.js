(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{171:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/testsmainscreen-8c61b621c6dfe78a294d547eb152e4d0.png"},172:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/runlist-9746416cf57aac068669dd856abe34e3.png"},173:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/testruns-9c7ebab3ba7aa7f9f446333bda465387.png"},174:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/teststeps-9a2236b31a9406300863c1d9d5248bc9.png"},175:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/testflow-6b3e1e22bd87f9682f0c5c0b94445777.png"},176:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/testmessagelog-d1c06d95de11afb2377e5939e9832842.png"},71:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return i})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return u}));var n=s(2),a=s(6),r=(s(0),s(82)),o={title:"Test Results",sidebar_label:"Test Results"},i={unversionedId:"manual/results",id:"manual/results",isDocsHomePage:!1,title:"Test Results",description:"After executing a test, all results are stored and available to the user in the",source:"@site/docs/manual/results.md",slug:"/manual/results",permalink:"/manual/results",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/manual/results.md",version:"current",sidebar_label:"Test Results",sidebar:"someSidebar",previous:{title:"Test Sessions",permalink:"/manual/session"},next:{title:"Secure Connections",permalink:"/manual/security"}},c=[{value:"Session Results",id:"session-results",children:[]},{value:"Accessing Test Case Results",id:"accessing-test-case-results",children:[]},{value:"Test Information",id:"test-information",children:[{value:"Test Runs",id:"test-runs",children:[]},{value:"Test Steps",id:"test-steps",children:[]},{value:"Test Flow",id:"test-flow",children:[]},{value:"Message Log",id:"message-log",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After executing a test, all results are stored and available to the user in the\ntest session on the Interoperability Test Platform."),Object(r.b)("h2",{id:"session-results"},"Session Results"),Object(r.b)("p",null,"As the tests are carried out, the platform stores the information for each\nexecution in the session history. Thus, the user can access and analyse all the\ntests run for each test case. In the figure below it is possible to see the main\nelements present in the session screen when several tests are performed and\nthen, a brief description of these elements is shown."),Object(r.b)("p",null,"Session screen elements: ",Object(r.b)("img",{alt:"ITP Session Info",src:s(171).default})),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Summary of the number of passed test cases. Failed tests are shown in red,\npassed tests in green, and non-executed tests, in grey."),Object(r.b)("li",{parentName:"ol"},"Information about the recent execution of test cases. The information is\ngrouped by date."),Object(r.b)("li",{parentName:"ol"},"Link to the session Message Log, where ",Object(r.b)("em",{parentName:"li"},"all")," requests to the platform are\nrecorded. This is often useful in debugging, when a request is not matched\nwith a test case."),Object(r.b)("li",{parentName:"ol"},"An overview of test cases selected for this session, organized by use case\nand by happy / unhappy flow."),Object(r.b)("li",{parentName:"ol"},"In this area, you can view the latest tests run and its information such as:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Execution ID: Identifier created by the platform to differentiate this\nexecution from the others. For the same test case executed more than once,\nthe platform will assign different Run ID for each execution."),Object(r.b)("li",{parentName:"ul"},"Test Case Name"),Object(r.b)("li",{parentName:"ul"},"Status: Indicates the state of the test case execution (pass, fail or\nincomplete)"),Object(r.b)("li",{parentName:"ul"},"Duration: Time in milliseconds that the execution of this test consumed",Object(r.b)("sup",null,"[1](#testduration)"),"."),Object(r.b)("li",{parentName:"ul"},"Date: Describes when the test was performed.")))),Object(r.b)("h2",{id:"accessing-test-case-results"},"Accessing Test Case Results"),Object(r.b)("p",null,"When clicking on a test case, the user will have access to its information and\nthe results of all executions carried out for this particular test. The data\nthat can be seen are principally: configuration, description, preconditions,\ntest runs, test steps and test flow. This information will be further detailed\nbelow."),Object(r.b)("p",null,"Executions for a test case: ",Object(r.b)("img",{alt:"List of Executed Tests",src:s(172).default})),Object(r.b)("h2",{id:"test-information"},"Test Information"),Object(r.b)("p",null,'Each test case displays its basic information on the left of the screen. Under\n"configuration," the base URLs are listed for each component addressed by the\nchosen SUTs. In the figure above, we see the URL that the component called\n"Client" (which is a SUT in this test session) should use to reach the component\ncalled "Server". Underneath, the ',Object(r.b)("strong",{parentName:"p"},"description")," contains a general purpose of\nthe test, describing the scenario under simulation. Finally, some test cases\ndescribe test ",Object(r.b)("strong",{parentName:"p"},"preconditions"),' which help in understanding how the tests should\nbe performed. For example, a test case may require a particular "amount" to be\nset in order to trigger certain behaviour within the simulators.'),Object(r.b)("h3",{id:"test-runs"},"Test Runs"),Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Test Runs")," tab are all the historic executions of the test case. Each\nrun contains information such as the test run ID, the status, the duration and\nhow long ago the run was performed."),Object(r.b)("p",null,'After clicking on a test run ID, the user can navigate through the steps\ninvolved in the test case. For each step it is possible to see the overall\nstatus, every assertion performed for the test step, and a log of the request\nand response messages. By clicking on a test assertion, you can see both the\ndetails of the request or response as well as the "expected" state when this is\ndifferent. This information is very useful to understand how the step works and\nthe test case as a whole, especially in the case of unexplained failure in one\nof the steps.'),Object(r.b)("p",null,"Information of Test Runs tab: ",Object(r.b)("img",{alt:"Example of Test Runs",src:s(173).default})),Object(r.b)("h3",{id:"test-steps"},"Test Steps"),Object(r.b)("p",null,"Under the ",Object(r.b)("strong",{parentName:"p"},"Test Steps")," tab, it is possible to see a more detailed view of each\nof the scripted steps in the test case. In each row of the table you can see the\nmethod used, the endpoint, and the source and destination components for the\nrequest. Clicking on the Request or Response buttons will show an example\nrequest or response, which can be useful in designing your implementation. A\nbutton to copy the request in ",Object(r.b)("inlineCode",{parentName:"p"},"cURL")," format is also available, which can be a\nconvenient way to execute or debug a test case."),Object(r.b)("p",null,"Information of Test Steps tab: ",Object(r.b)("img",{alt:"Example of Test Steps",src:s(174).default})),Object(r.b)("h3",{id:"test-flow"},"Test Flow"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"test flow")," consists of a sequence diagram showing the messages exchanged\nbetween the components involved in the test. Through the flow diagram it is\npossible to understand how the different components interact over time. This\ninformation can also be found in the test steps tab, however the diagram\nprovides a simpler and more directed view of the steps performed, while the\nsteps view provides more detailed information, such as data contained in the\nheader and in the body of the requests."),Object(r.b)("p",null,"If the user wishes, the test flow can be exported or edited. By clicking on the\nDiagram Editor option, the code generated for the test flow is opened on the\nMermaid platform. Through Mermaid the user can change the flows, export\ndifferent types of images and generate the diagram markdown file. This\npossibility can be a useful tool for creating and viewing new test cases before\nproposing them to the Interoperability Test Platform."),Object(r.b)("p",null,"Information of Test Flow tab: ",Object(r.b)("img",{alt:"Example of Test Flow",src:s(175).default})),Object(r.b)("hr",null),Object(r.b)("h3",{id:"message-log"},"Message Log"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Test Results")," tab described above lists the execution of every ",Object(r.b)("em",{parentName:"p"},"expected"),"\nrequest and response to reach the platform. However it can be the case that\nmessages do not arrive at the platform in quite the way expected. For example, a\nhappy test case may expect a message to be sent to the ",Object(r.b)("inlineCode",{parentName:"p"},"/callback")," endpoint, but\nin reality the SUT sends a message to the ",Object(r.b)("inlineCode",{parentName:"p"},"/error")," callback. The same problem\nmay happen in reverse for an unhappy test case, where an ",Object(r.b)("inlineCode",{parentName:"p"},"/error")," request is\nexpected but a ",Object(r.b)("inlineCode",{parentName:"p"},"/callback")," request is sent instead."),Object(r.b)("p",null,"These messages will not be displayed in the ",Object(r.b)("strong",{parentName:"p"},"Test Results"),' tab, because they\nare not recognised as part of the test case. Instead, they will be displayed in\nthe Message Log view, which is accessible by clicking on the "Log" button in the\ntop right.'),Object(r.b)("p",null,"On this page, every request which reached the platform is displayed. Where a\ntest case is identified for the request, the matching test step is included.\nWhere a test case is not identified, the request details are nonetheless\ndisplayed for debugging purposes, along with any error messages that were\ngenerated by the platform on receipt."),Object(r.b)("p",null,"Message log: ",Object(r.b)("img",{alt:"Message Log",src:s(176).default})),Object(r.b)("h5",{id:"footnotes"},"Footnotes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{name:"testduration"},"1"),": This duration is directly related to the Interoperability Test Platform. The performance of the system under test is not evaluated here, since part of the test execution comes from simulated components, which may involve artificial simulated delays.")))}u.isMDXComponent=!0},82:function(e,t,s){"use strict";s.d(t,"a",(function(){return h})),s.d(t,"b",(function(){return b}));var n=s(0),a=s.n(n);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},h=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(s),d=n,b=h["".concat(o,".").concat(d)]||h[d]||p[d]||r;return s?a.a.createElement(b,i(i({ref:t},l),{},{components:s})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<r;l++)o[l]=s[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,s)}d.displayName="MDXCreateElement"}}]);