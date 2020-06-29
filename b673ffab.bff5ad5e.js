(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var s=n(2),a=n(9),r=(n(0),n(180)),o={id:"results",title:"Test Results",sidebar_label:"Test Results"},i={id:"manual/results",title:"Test Results",description:"After running tests using the API Client Tool, all results are stored and",source:"@site/docs/manual/results.md",permalink:"/manual/results",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/manual/results.md",sidebar_label:"Test Results",sidebar:"someSidebar",previous:{title:"Testing without a SUT",permalink:"/manual/postman-sut"}},l=[{value:"Session Results",id:"session-results",children:[]},{value:"Accessing Test Case Results",id:"accessing-test-case-results",children:[]},{value:"Test Information",id:"test-information",children:[{value:"Test Runs",id:"test-runs",children:[]},{value:"Test Steps",id:"test-steps",children:[]},{value:"Test Flow",id:"test-flow",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After running tests using the API Client Tool, all results are stored and\navailable to the user in the test session on the Interoperability Test Platform."),Object(r.b)("h2",{id:"session-results"},"Session Results"),Object(r.b)("p",null,"As the tests are carried out, the platform stores the information for each\nexecution in the session history. Thus, the user can access and analyse all the\ntests run for each test case. In the figure below it is possible to see the main\nelements present in the session screen when several tests are performed and\nthen, a brief description of these elements is shown."),Object(r.b)("p",null,"Session screen elements: ",Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testsmainscreen.png",alt:"ITP Session Info"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Summary of the number of passed test cases. Failed tests are shown in red,\npassed tests in green, and un-executed tests, in grey."),Object(r.b)("li",{parentName:"ol"},"Information about the execution of test cases. The information is grouped by\ndate."),Object(r.b)("li",{parentName:"ol"},"The user can choose the use cases and the test cases through this part of the\ninterface."),Object(r.b)("li",{parentName:"ol"},"When expanding option three, the user has an overview of test cases organized\nby use case and by happy flow and unhappy flow."),Object(r.b)("li",{parentName:"ol"},"In this area, you can view the latest tests run and its information such as:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Test Case Name: Name given to the test case extracted from the information\nin the YAML file."),Object(r.b)("li",{parentName:"ul"},"Run ID: Identifier created by the platform to differentiate this execution\nfrom the others. For the same test case executed more than once, the\nplatform will assign different Run ID for each execution."),Object(r.b)("li",{parentName:"ul"},"Status: Indicates the state of the test case execution and may contain the\nfollowing values: pass, fail or un-executed."),Object(r.b)("li",{parentName:"ul"},"Duration: Time in milliseconds that the execution of this test consumed",Object(r.b)("sup",null,"[1](#testduration)"),"."),Object(r.b)("li",{parentName:"ul"},"Date: Describes when the test was performed.")))),Object(r.b)("h2",{id:"accessing-test-case-results"},"Accessing Test Case Results"),Object(r.b)("p",null,"When clicking on a test case, the user will have access to its information and\nthe results of all executions carried out for this particular test. The data\nthat can be seen are principally: configuration, description, preconditions,\ntest runs, test steps and test flow. This information will be further detailed\nbelow."),Object(r.b)("p",null,"Executions for a test case: ",Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"/img/runlist.png",alt:"List of Executed Tests"}))),Object(r.b)("h2",{id:"test-information"},"Test Information"),Object(r.b)("p",null,"Each test case has relevant information for its execution. In the configuration\nfield it is possible to access the addresses of the simulated modules that are\nnecessary to run the test case. In the example in the previous figure, we can\nsee that the links to the Service Provider and Mojaloop are available in this\nfield, for the user to view or copy. The ",Object(r.b)("strong",{parentName:"p"},"description")," contains the general\npurpose of the test, describing the scenario under simulation. The\n",Object(r.b)("strong",{parentName:"p"},"preconditions")," help in understanding how the tests should be performed and\nstate the existing decisions and rules that must be met for a correct execution\nof the test."),Object(r.b)("h3",{id:"test-runs"},"Test Runs"),Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Test Runs")," tab are all the executions performed for the test case.\nEach run contains information such as the test run identifier, the state, the\nduration and how long ago the run was performed. This information is the same as\nfound in the latest tests run, shown in topic 5 of the figure of session screen\nelements."),Object(r.b)("p",null,"When selecting a run, the user can navigate through the steps that were taken\nwhen the test was run. For each step it is possible to see the status, every\ntest performed for the step, and a log of the request and response messages. By\nclicking on the performed test items list, you can see the information of the\nrequest message that was sent and the expected message for the request. This\ninformation is very useful to understand how the step works and the test case as\na whole, being notoriously relevant in situations of failure in one of the\nsteps."),Object(r.b)("p",null,"Information of Test Runs tab: ",Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testruns.png",alt:"Example of Test Runs"}))),Object(r.b)("h3",{id:"test-steps"},"Test Steps"),Object(r.b)("p",null,"When choosing the ",Object(r.b)("strong",{parentName:"p"},"Test Steps")," tab, it is possible to see a more detailed view\nof each expected step when executing the test case. In each row of the table you\ncan see the method used, the endpoint and the source and destination modules\ninvolved in the step being executed. In addition, an example of the request and\nresponse for each step is also available."),Object(r.b)("p",null,"Information of Test Steps tab: ",Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"/img/teststeps.png",alt:"Example of Test Steps"}))),Object(r.b)("h3",{id:"test-flow"},"Test Flow"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"test flow")," consists of a sequence diagram showing the messages exchanged\nbetween the components involved in the test. Through the flow diagram it is\npossible to understand how the objects presented in the test collaborate with\neach other and what is their behaviour over time. This information can also be\nfound in the test steps tab, however the diagram provides a simpler and more\nobjective view of the steps performed, while the steps view provides more\ndetailed information, such as data contained in the header and in the body of\nthe requests. The figure below displays a test flow for the same test mentioned\nbefore."),Object(r.b)("p",null,"If the user wishes, the test flow can be exported or edited. By clicking on the\nDiagram Editor option, the code generated for the test flow is opened on the\nMermaid platform. Through Mermaid the user can change the flows, export\ndifferent types of images and generate the diagram markdown file. This\npossibility can be a useful tool for creating and viewing new test cases before\nproposing them to the Interoperability Test Platform."),Object(r.b)("p",null,"Information of Test Flow tab: ",Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testflow.png",alt:"Example of Test Flow"}))),Object(r.b)("hr",null),Object(r.b)("h5",{id:"footnotes"},"Footnotes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{name:"testduration"},"1"),": This duration is directly related to the Interoperability Test Platform. The performance of the system under test is not evaluated here, since part of the test execution comes from simulated components.")))}u.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},h=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(s.forwardRef)((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=s,b=h["".concat(o,".").concat(d)]||h[d]||p[d]||r;return n?a.a.createElement(b,i({ref:t},c,{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);