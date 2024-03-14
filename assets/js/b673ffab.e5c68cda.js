"use strict";(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[345],{6160:function(e,t,s){s.r(t),s.d(t,{assets:function(){return h},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return l}});var n=s(5893),i=s(1151);const a={title:"Test Results",sidebar_label:"Test Results"},o=void 0,r={id:"manual/results",title:"Test Results",description:"After executing a test, all results are stored and available to the user in the",source:"@site/docs/manual/results.md",sourceDirName:"manual",slug:"/manual/results",permalink:"/manual/results",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Test Results",sidebar_label:"Test Results"},sidebar:"someSidebar",previous:{title:"Test Sessions",permalink:"/manual/session"},next:{title:"Secure Connections",permalink:"/manual/security"}},h={},l=[{value:"Session Results",id:"session-results",level:2},{value:"Accessing Test Case Results",id:"accessing-test-case-results",level:2},{value:"Test Information",id:"test-information",level:2},{value:"Test Runs",id:"test-runs",level:3},{value:"Test Steps",id:"test-steps",level:3},{value:"Test Flow",id:"test-flow",level:3},{value:"Message Log",id:"message-log",level:3},{value:"Footnotes",id:"footnotes",level:5}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h5:"h5",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"After executing a test, all results are stored and available to the user in the\ntest session on the Interoperability Test Platform."}),"\n",(0,n.jsx)(t.h2,{id:"session-results",children:"Session Results"}),"\n",(0,n.jsx)(t.p,{children:"As the tests are carried out, the platform stores the information for each\nexecution in the session history. Thus, the user can access and analyse all the\ntests run for each test case. In the figure below it is possible to see the main\nelements present in the session screen when several tests are performed and\nthen, a brief description of these elements is shown."}),"\n",(0,n.jsxs)(t.p,{children:["Session screen elements: ",(0,n.jsx)(t.img,{alt:"ITP Session Info",src:s(9131).Z+"",width:"2444",height:"1736"})]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Summary of the number of passed test cases. Failed tests are shown in red,\npassed tests in green, and non-executed tests, in grey."}),"\n",(0,n.jsx)(t.li,{children:"Information about the recent execution of test cases. The information is\ngrouped by date."}),"\n",(0,n.jsxs)(t.li,{children:["Link to the session Message Log, where ",(0,n.jsx)(t.em,{children:"all"})," requests to the platform are\nrecorded. This is often useful in debugging, when a request is not matched\nwith a test case."]}),"\n",(0,n.jsx)(t.li,{children:"An overview of test cases selected for this session, organized by use case\nand by happy / unhappy flow."}),"\n",(0,n.jsxs)(t.li,{children:["In this area, you can view the latest tests run and its information such as:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Execution ID: Identifier created by the platform to differentiate this\nexecution from the others. For the same test case executed more than once,\nthe platform will assign different Run ID for each execution."}),"\n",(0,n.jsx)(t.li,{children:"Test Case Name"}),"\n",(0,n.jsx)(t.li,{children:"Status: Indicates the state of the test case execution (pass, fail or\nincomplete)"}),"\n",(0,n.jsxs)(t.li,{children:["Duration: Time in milliseconds that the execution of this test consumed\n",(0,n.jsx)("sup",{children:(0,n.jsx)(t.a,{href:"#testduration",children:"1"})}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Date: Describes when the test was performed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"accessing-test-case-results",children:"Accessing Test Case Results"}),"\n",(0,n.jsx)(t.p,{children:"When clicking on a test case, the user will have access to its information and\nthe results of all executions carried out for this particular test. The data\nthat can be seen are principally: configuration, description, preconditions,\ntest runs, test steps and test flow. This information will be further detailed\nbelow."}),"\n",(0,n.jsxs)(t.p,{children:["Executions for a test case: ",(0,n.jsx)(t.img,{alt:"List of Executed Tests",src:s(8417).Z+"",width:"2440",height:"1216"})]}),"\n",(0,n.jsx)(t.h2,{id:"test-information",children:"Test Information"}),"\n",(0,n.jsxs)(t.p,{children:['Each test case displays its basic information on the left of the screen. Under\n"configuration," the base URLs are listed for each component addressed by the\nchosen SUTs. In the figure above, we see the URL that the component called\n"Client" (which is a SUT in this test session) should use to reach the component\ncalled "Server". Underneath, the ',(0,n.jsx)(t.strong,{children:"description"})," contains a general purpose of\nthe test, describing the scenario under simulation. Finally, some test cases\ndescribe test ",(0,n.jsx)(t.strong,{children:"preconditions"}),' which help in understanding how the tests should\nbe performed. For example, a test case may require a particular "amount" to be\nset in order to trigger certain behaviour within the simulators.']}),"\n",(0,n.jsx)(t.h3,{id:"test-runs",children:"Test Runs"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Test Runs"})," tab are all the historic executions of the test case. Each\nrun contains information such as the test run ID, the status, the duration and\nhow long ago the run was performed."]}),"\n",(0,n.jsx)(t.p,{children:'After clicking on a test run ID, the user can navigate through the steps\ninvolved in the test case. For each step it is possible to see the overall\nstatus, every assertion performed for the test step, and a log of the request\nand response messages. By clicking on a test assertion, you can see both the\ndetails of the request or response as well as the "expected" state when this is\ndifferent. This information is very useful to understand how the step works and\nthe test case as a whole, especially in the case of unexplained failure in one\nof the steps.'}),"\n",(0,n.jsxs)(t.p,{children:["Information of Test Runs tab: ",(0,n.jsx)(t.img,{alt:"Example of Test Runs",src:s(1504).Z+"",width:"775",height:"876"})]}),"\n",(0,n.jsx)(t.h3,{id:"test-steps",children:"Test Steps"}),"\n",(0,n.jsxs)(t.p,{children:["Under the ",(0,n.jsx)(t.strong,{children:"Test Steps"})," tab, it is possible to see a more detailed view of each\nof the scripted steps in the test case. In each row of the table you can see the\nmethod used, the endpoint, and the source and destination components for the\nrequest. Clicking on the Request or Response buttons will show an example\nrequest or response, which can be useful in designing your implementation. A\nbutton to copy the request in ",(0,n.jsx)(t.code,{children:"cURL"})," format is also available, which can be a\nconvenient way to execute or debug a test case."]}),"\n",(0,n.jsxs)(t.p,{children:["Information of Test Steps tab: ",(0,n.jsx)(t.img,{alt:"Example of Test Steps",src:s(7511).Z+"",width:"766",height:"748"})]}),"\n",(0,n.jsx)(t.h3,{id:"test-flow",children:"Test Flow"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"test flow"})," consists of a sequence diagram showing the messages exchanged\nbetween the components involved in the test. Through the flow diagram it is\npossible to understand how the different components interact over time. This\ninformation can also be found in the test steps tab, however the diagram\nprovides a simpler and more directed view of the steps performed, while the\nsteps view provides more detailed information, such as data contained in the\nheader and in the body of the requests."]}),"\n",(0,n.jsx)(t.p,{children:"If the user wishes, the test flow can be exported or edited. By clicking on the\nDiagram Editor option, the code generated for the test flow is opened on the\nMermaid platform. Through Mermaid the user can change the flows, export\ndifferent types of images and generate the diagram markdown file. This\npossibility can be a useful tool for creating and viewing new test cases before\nproposing them to the Interoperability Test Platform."}),"\n",(0,n.jsxs)(t.p,{children:["Information of Test Flow tab: ",(0,n.jsx)(t.img,{alt:"Example of Test Flow",src:s(3162).Z+"",width:"1077",height:"898"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"message-log",children:"Message Log"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Test Results"})," tab described above lists the execution of every ",(0,n.jsx)(t.em,{children:"expected"}),"\nrequest and response to reach the platform. However it can be the case that\nmessages do not arrive at the platform in quite the way expected. For example, a\nhappy test case may expect a message to be sent to the ",(0,n.jsx)(t.code,{children:"/callback"})," endpoint, but\nin reality the SUT sends a message to the ",(0,n.jsx)(t.code,{children:"/error"})," callback. The same problem\nmay happen in reverse for an unhappy test case, where an ",(0,n.jsx)(t.code,{children:"/error"})," request is\nexpected but a ",(0,n.jsx)(t.code,{children:"/callback"})," request is sent instead."]}),"\n",(0,n.jsxs)(t.p,{children:["These messages will not be displayed in the ",(0,n.jsx)(t.strong,{children:"Test Results"}),' tab, because they\nare not recognised as part of the test case. Instead, they will be displayed in\nthe Message Log view, which is accessible by clicking on the "Log" button in the\ntop right.']}),"\n",(0,n.jsx)(t.p,{children:"On this page, every request which reached the platform is displayed. Where a\ntest case is identified for the request, the matching test step is included.\nWhere a test case is not identified, the request details are nonetheless\ndisplayed for debugging purposes, along with any error messages that were\ngenerated by the platform on receipt."}),"\n",(0,n.jsxs)(t.p,{children:["Message log: ",(0,n.jsx)(t.img,{alt:"Message Log",src:s(8437).Z+"",width:"2412",height:"2080"})]}),"\n",(0,n.jsx)(t.h5,{id:"footnotes",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("a",{name:"testduration",children:"1"}),": This duration is directly related to the\nInteroperability Test Platform. The performance of the system under test is\nnot evaluated here, since part of the test execution comes from simulated\ncomponents, which may involve artificial simulated delays."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8417:function(e,t,s){t.Z=s.p+"assets/images/runlist-9746416cf57aac068669dd856abe34e3.png"},3162:function(e,t,s){t.Z=s.p+"assets/images/testflow-6b3e1e22bd87f9682f0c5c0b94445777.png"},8437:function(e,t,s){t.Z=s.p+"assets/images/testmessagelog-d1c06d95de11afb2377e5939e9832842.png"},1504:function(e,t,s){t.Z=s.p+"assets/images/testruns-9c7ebab3ba7aa7f9f446333bda465387.png"},9131:function(e,t,s){t.Z=s.p+"assets/images/testsmainscreen-8c61b621c6dfe78a294d547eb152e4d0.png"},7511:function(e,t,s){t.Z=s.p+"assets/images/teststeps-9a2236b31a9406300863c1d9d5248bc9.png"},1151:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return o}});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);