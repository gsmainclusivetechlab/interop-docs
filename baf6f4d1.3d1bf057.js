(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return h}));var s=n(2),a=n(9),o=(n(0),n(184)),r={id:"results",title:"Test Results",sidebar_label:"Test Results"},i={id:"results",title:"Test Results",description:"As the tests are carried out, the platform stores the information for each execution in the session history. Thus, the user can access and analyse all the tests run for each test case. In the figure below it is possible to see the main elements  present in the session screen when several tests are performed and then, a brief description of these elements is shown.",source:"@site/docs/umresults.md",permalink:"/results",editUrl:"https://github.com/gsmainclusivetechlab/docs/umresults.md",sidebar_label:"Test Results",sidebar:"someSidebar",previous:{title:"Running Tests",permalink:"/tests"}},c=[{value:"Test Information",id:"test-information",children:[]},{value:"Test Runs",id:"test-runs",children:[]},{value:"Test Steps",id:"test-steps",children:[]},{value:"Test Flow",id:"test-flow",children:[]}],l={rightToc:c};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As the tests are carried out, the platform stores the information for each execution in the session history. Thus, the user can access and analyse all the tests run for each test case. In the figure below it is possible to see the main elements  present in the session screen when several tests are performed and then, a brief description of these elements is shown."),Object(o.b)("p",null,"Session screen elements:\n",Object(o.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testsmainscreen.png",alt:"ITP Session Info"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sumary of the number of passed test cases, in green, failed tests, in red, and unexecuted tests, in gray."),Object(o.b)("li",{parentName:"ol"},"Information about the execution of test cases. The information is groupped by date. "),Object(o.b)("li",{parentName:"ol"},"The user can choose the use cases and the test cases through this part of the interface."),Object(o.b)("li",{parentName:"ol"},"When expanding option three, the user has an overview of test cases organized by use case and by happy flow and unhappy flow."),Object(o.b)("li",{parentName:"ol"},"In this area, you can view the latest tests run and its information such as:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Test Case Name: Name given to the test case extracted from the information in the yaml file."),Object(o.b)("li",{parentName:"ul"},"Run ID: Identifier created by the platform to differentiate this execution from the others. For the same test case executed more than once, the platform will assign an identifier for each execution."),Object(o.b)("li",{parentName:"ul"},"Status: Estate of the test case execution, and may contain the following values: pass, fail or unexecuted."),Object(o.b)("li",{parentName:"ul"},"Duration: Time in milliseconds that the execution of this test consumed ",Object(o.b)("sup",null,Object(o.b)("a",Object(s.a)({parentName:"li"},{href:"#testduration"}),"1")),"."),Object(o.b)("li",{parentName:"ul"},"Date: Defines when the test was performed.")))),Object(o.b)("p",null,"When clicking on a test case, the user will have access to information and the results of all executions carried out for this particular test. The data that can be seen are principally: configuration (1), description (2), preconditions (3), test runs (4), test steps (5) and test flow (6). This information will be further detailed below."),Object(o.b)("p",null,"Executions for a test case:\n",Object(o.b)("img",Object(s.a)({parentName:"p"},{src:"/img/runlist.png",alt:"List of Executed Tests"}))),Object(o.b)("h3",{id:"test-information"},"Test Information"),Object(o.b)("p",null,"Each test case has relevant information for its execution. In the confuiguration field it is possible to access the addresses of the simulated modules that are necessary to run the test case. In the example in the previous figure, we can see that the links to the Service Provider and Mojaloop are available in this field, so the user can view or copy. The other two relevant information are extracted from the YAML file created for the test case and are: description and preconditions. The description contains the general purpose of the test, describing the scenario under simulation. The preconditions help in understanding how the tests should be performed and state the existing decisions and rules that must be met for the correct execution of the tests."),Object(o.b)("h3",{id:"test-runs"},"Test Runs"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Test Runs")," tab are all the executions performed for the test case. Each run contains information such as the test run identifier, the state, the duration and how long the run was performed. This information is the same as found in the latest tests run, shown in topic 5 of the figure of session screen elements."),Object(o.b)("p",null,"When selecting a run, the user can navigate through the steps that were taken when the test was run. For each step it is possible to see the status of the same, all the necessary tests so that the step is complete and the request and response messages. By clicking on the performed test itens list, it is possible to view the information of the request message that was sent and the expected message for the request. This information is very useful to understand how the step works and the test case as a whole, being notoriously relevant in situations of failure in one of the steps. The following figure shows a screen of the system with this information previously described."),Object(o.b)("p",null,"Information of Test Runs tab:\n",Object(o.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testruns.png",alt:"Example of Test Runs"}))),Object(o.b)("h3",{id:"test-steps"},"Test Steps"),Object(o.b)("p",null,"When choosing the ",Object(o.b)("strong",{parentName:"p"},"Test Steps")," tab, it is possible to see a more detailed view of each step when executing the test case. In each row of the table you can see the method used, the endpoint and the source and destination modules involved in the step being executed. In addition, the information that was used in the request and response for each step is also available. The following figure shows an example of visualization of the steps for the execution of a test case for P2P in which the transaction is accepted, having receive for amount type and disclosing fees and commissions."),Object(o.b)("p",null,"Information of Test Steps tab:\n",Object(o.b)("img",Object(s.a)({parentName:"p"},{src:"/img/teststeps.png",alt:"Example of Test Steps"}))),Object(o.b)("h3",{id:"test-flow"},"Test Flow"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"test flow")," consists of a sequence diagram showing the messages exchanged between the components involved in the test. Through the flow diagram it is possible to understand how the objects involved in the test collaborate with each other and what is their behavior over time. This information can also be found in the test steps tab, however the diagram provides a simpler and more objective view of the steps performed, while the steps view provides more detailed information, such as data contained in the header and in the body of the requests. The following picture displays a test flow for the same test mentioned before: an accepted P2P transaction with amount type receive and disclosing of fees and commissions."),Object(o.b)("p",null,"If the user wishes, the test flow can be exported or edited. By clicking on the Diagrgam Editor option, the code generated for the test flow is opened on the Mermaid platform. Through Mermaid the user can change the flows, export different types of images and generate the diagram markdown. This possibility can be a useful tool for creating and viewing new test cases before proposing them to the Interoperability Test Platform."),Object(o.b)("p",null,"Information of Test Flow tab:\n",Object(o.b)("img",Object(s.a)({parentName:"p"},{src:"/img/testflow.png",alt:"Example of Test Flow"}))),Object(o.b)("hr",null),Object(o.b)("h5",{id:"footnotes"},"Footnotes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{name:"testduration"},"1"),": This duration is directly related to the Interoperability Test Platform. The performance of the system under test is not evaluated here, since part of the test execution comes from simulated components.")))}h.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var s=n(0),a=n.n(s);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(s.forwardRef)((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),f=s,d=u["".concat(r,".").concat(f)]||u[f]||p[f]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);