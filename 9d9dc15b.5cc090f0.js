(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(9),i=(a(0),a(179)),b={id:"creation",title:"Test Case Template",sidebar_label:"Creating a Test Case"},s={id:"testcases/creation",title:"Test Case Template",description:"The ITP test cases are defined using YAML files. Each file is composed of",source:"@site/docs/testcases/creation.md",permalink:"/testcases/creation",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/testcases/creation.md",sidebar_label:"Creating a Test Case",sidebar:"someSidebar",previous:{title:"ITP Test Cases",permalink:"/testcases/list"},next:{title:"Quick Guide for Tests",permalink:"/manual/quickguide"}},l=[{value:"Proposing New Test Cases",id:"proposing-new-test-cases",children:[]},{value:"Test Case Data",id:"test-case-data",children:[]},{value:"Test Step Data",id:"test-step-data",children:[{value:"Common Values",id:"common-values",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Overrides",id:"overrides",children:[]},{value:"Request and Response Examples",id:"request-and-response-examples",children:[]}]}],o={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ITP test cases are defined using YAML files. Each file is composed of\nseveral fields that are interpreted by the platform to carry out tests and\nvalidations of the different use cases paths. This page describes the basic\nmodel of a YAML file for the test platform."),Object(i.b)("h2",{id:"proposing-new-test-cases"},"Proposing New Test Cases"),Object(i.b)("p",null,"Any party interested in using the Interoperability Test Platform can propose new\ntest cases using the template presented here. For this, it is important to\nfollow the creation guide ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/usecases/creation"}),"starting from a use case"),", to\nunderstand its application context, then determine which paths should/need to be\ntested. Then, it is possible to use the template shown below to create the test\ncases for each path. The creation of new test cases is based on the following\nroadmap:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Elaboration and understanding of the scenario you want to test;"),Object(i.b)("li",{parentName:"ol"},"Creation of a use case that can be implemented by ITP;"),Object(i.b)("li",{parentName:"ol"},"Description of the use case following the model available\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/usecases/creation"}),"here"),";"),Object(i.b)("li",{parentName:"ol"},"Definition of the paths that should be tested for the use case (happy and\nunhappy flows);"),Object(i.b)("li",{parentName:"ol"},"Preparation of each test case following the model below.")),Object(i.b)("h2",{id:"test-case-data"},"Test Case Data"),Object(i.b)("p",null,"The Test Case Data is the first part of the YAML file. It contains seven fields\nused as a header to specify particular characteristics related to the test case\nand the use case it belongs to. Below you can see a table with the fields used\nin the header and an example of the test case data in a YAML file."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the Test Case that will be shown to users. Names do not need to be unique, so it is possible to have multiple Test Cases with the same name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorized Transaction by Payer FSP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"use_case")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the Use Case that the Use Case is related to. This should be identical for all Test Cases sharing a Use Case."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"behavior")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Defines the type of the Test Case, i.e. "Happy flow" (',Object(i.b)("inlineCode",{parentName:"td"},"positive"),') and "Unhappy flow" (',Object(i.b)("inlineCode",{parentName:"td"},"negative"),")."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"positive")),Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"negative"))))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A description of the Test Case. It is useful to include some business background of what we are trying to achieve in this case."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Service Provider wants to test if he is capable of receiving a transaction from a different wallet...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"precondition")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An additional area describing specific values that should be used to execute a Test Case. This may include directions for using test case ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"triggers"),"."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"components")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of components involved in the that the Test Case. Some Test Cases involve MMOs only (P2P transfer) or contain some specific errors that can only be received by SUT and not handled by it."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,"Service Provider"),Object(i.b)("li",null,"Mobile Money Operator 1"),Object(i.b)("li",null,"Mobile Money Operator 2"),Object(i.b)("li",null,"Any combination of the above")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"test_steps")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Contains details of the steps involved in the test case."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h4",{id:"example-of-test-case-data-in-a-yaml-file"},"Example of test case data in a YAML file"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'name: Authorized Transaction by Payer FSP\nuse_case: Merchant-Initiated Merchant Payment\nbehavior: positive\ndescription: |\n  The Service Provider wants to test if he is capable of receiving a\n  transaction from a different wallet provider than the one with which he has\n  an account. In this case, we simulate the scenario when the Payer would\n  like to buy goods or services from a Service Provider (the Payee), but each\n  of them uses different wallet providers. This flow shows the necessary\n  steps for this transaction simulating an approved transaction.\nprecondition: |\n  - Service Provider has GSMA Mobile Money API Implemented.\n  - Service Provider is capable of handling async calls.\n  - Payee and Payer MMOs exist in Mojaloop as Participants.\n  - Payee and Payer exist in Mojaloop as Parties.\n  - Amount should be the value "1001".\n  - Debit party should be identified by account identifier "msisdn" with the value "+33555123456".\n  - Credit party should be identified by account identifier "msisdn" with the value "+33555789123".\ncomponents:\n  - Service Provider\n  - Mobile Money Operator 1\n  - Mobile Money Operator 2\ntest_steps:\n  # ...\n')),Object(i.b)("h2",{id:"test-step-data"},"Test Step Data"),Object(i.b)("p",null,"The second part of the test case file is called Test Step Data. Each step\nrepresents an HTTP request made as part of the test, and is defined by a series\nof common values, in addition to step-specific parameters such as ",Object(i.b)("em",{parentName:"p"},"assertions"),",\n",Object(i.b)("em",{parentName:"p"},"overrides")," and ",Object(i.b)("em",{parentName:"p"},"request and response examples"),"."),Object(i.b)("h3",{id:"common-values"},"Common Values"),Object(i.b)("p",null,"These common values are present in every step of the test case."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"method")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The request method that will be used to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"match a message"),"."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"POST")),Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"PUT")),Object(i.b)("li",null,"etc.")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"pattern")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The a regular expression will be used to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"match a message")," using the request path."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"^transactionRequests\\$")),Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\\$")),Object(i.b)("li",null,"etc.")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The path that will be shown on Flow Diagrams and on Test Run steps that were not executed."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"/quotes/{ID}")),Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"/transactionRequests")),Object(i.b)("li",null,"etc.")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"source")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The sender of the request. Should be a Component name from the database. Will be used to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"match a message")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,"Service Provider"),Object(i.b)("li",null,"Mobile Money Operator 1"),Object(i.b)("li",null,"Mojaloop "),Object(i.b)("li",null,"Mobile Money Operator 2")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"target")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The recipient of the request. Should be a Component name from the database. Will be used to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"match a message")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,"Service Provider"),Object(i.b)("li",null,"Mobile Money Operator 1"),Object(i.b)("li",null,"Mojaloop "),Object(i.b)("li",null,"Mobile Money Operator 2")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"trigger")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The trigger value(s) that should be used to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/architecture/matching"}),"match a message"),"."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"{amount: '99'}")),Object(i.b)("li",null,"etc.")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"api_spec")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The API spec to perform schema validation. Should be a Specification name from the database."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,"Mojaloop v1.0"),Object(i.b)("li",null,"MM v1.1.2"),Object(i.b)("li",null,"etc.")))))),Object(i.b)("h4",{id:"example-of-global-values-in-a-yaml-file"},"Example of Global Values in a YAML file"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'- path: /quotes/{ID}\n  pattern: "^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"\n  method: PUT\n  source: Mojaloop\n  target: Mobile Money Operator 1\n  api_spec: Mojaloop v1.0\n  trigger:\n    transferAmount:\n      amount: "99"\n')),Object(i.b)("h3",{id:"assertions"},"Assertions"),Object(i.b)("p",null,"Assertions can be used to validate that certain business conditions hold, in a\nmore powerful way than is possible using API schema validation. Assertions can\nbe performed for any value in the header or body of the request or response. In\na response, the ",Object(i.b)("inlineCode",{parentName:"p"},"status")," field may also be used for assertions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"test_request_scripts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of assertions that will be performed for the request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"test_response_scripts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of assertions that will be performed for the HTTP response.")))),Object(i.b)("p",null,"Each request/response may have a number of assertions, and each assertion is\ndefined by a ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and a list of Laravel validation ",Object(i.b)("inlineCode",{parentName:"p"},"rules"),". The key for each\nrule is a path to a field using 'dot' syntax within the request/response object.\nFor more information on the syntax of these rules, visit the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/docs/7.x/validation#available-validataion-rules"}),"Laravel documentation site"),".\nEach validation rule should contain the ",Object(i.b)("inlineCode",{parentName:"p"},"required")," rule at least, otherwise the\nassertion may pass even if the value is wrong or empty."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'test_steps:\n  - #...\n    test_request_scripts:\n      - name: Amounts and currencies are specified correctly\n        rules:\n          body.transferAmount.amount: "required|in:99"\n          body.transferAmount.currency: "required|regex:/^[A-Z]{3}/"\n          body.payeeReceiveAmount.amount: "required|in:100"\n          body.payeeReceiveAmount.currency: "required|regex:/^[A-Z]{3}/"\n          body.payeeFspCommission.amount: "required|in:1"\n          body.payeeFspCommission.currency: "required|regex:/^[A-Z]{3}/"\n    test_response_scripts:\n      - name: Transaction was successfully accepted\n        rules:\n          status: "required|in:200"\n')),Object(i.b)("h3",{id:"overrides"},"Overrides"),Object(i.b)("p",null,"Overrides are used in situations where it is necessary to force a value provided\nby a simulator to have a different value for the purposes of directing the test\nflow."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"test_request_setups")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of overrides that will be performed for the request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"test_response_setups")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of overrides that will be performed for the response.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the override that will be shown on the Test Step page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"values")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of overrides that should be performed per request/response. Overriding will override the existing values in the message or create a new one if it does not already exist.")))),Object(i.b)("p",null,"Override values can either be provided using dot-notation to override a single\nvalue, or a whole object can be overridden by providing an object as in the\n",Object(i.b)("inlineCode",{parentName:"p"},"Force 400 error")," example below, where an object has been passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"body"),"\nfield."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'test_steps:\n  - #...\n    test_request_setups:\n      - name: Override request amounts\n        values:\n          body.transferAmount.currency: "USD"\n          body.transferAmount.amount: "399"\n          body.payeeReceiveAmount.currency: "USD"\n          body.payeeReceiveAmount.amount: "398"\n          body.payeeFspFee.currency: "USD"\n          body.payeeFspFee.amount: "1"\n\n    test_response_setups:\n      - name: Force 400 error\n        values:\n          status: 400\n          body:\n            errorCode: "genericError"\n            errorCategory: "businessRule"\n            errorDateTime: "2000-01-01T00:00:00.000Z"\n            errorDescription:\n              "The specified property contents do not conform to the format\n              required for this Property."\n')),Object(i.b)("h3",{id:"request-and-response-examples"},"Request and Response Examples"),Object(i.b)("p",null,'Each test step is also defined by an example request and response. This provides\nguidance for test platform users, to identify what data he needs to send or can\nexpect to receive during the test execution. Importantly, the example request\ndefined in the first test step is also used by the test platform to trigger the\nstart of a test run when the "Execute Test" button is clicked within the test\nplatform.'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"method"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uri"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An example path or URI for this request/response.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"headers"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A list of expected headers.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"body"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An example payload for the request/response.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"status"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Example response status.")))),Object(i.b)("h4",{id:"model-of-a-request-and-response-example-in-a-yaml-file"},"Model of a request and response example in a YAML file"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'test_steps:\n  - #...\n    request:\n      method: POST\n      uri: /transactions\n      headers:\n        accept: "application/json"\n        content-type: "application/json"\n        x-callback-url: "https://example.com/example"\n        x-date: "2000-01-01T00:00:00.000Z"\n      body:\n        amount: "1005"\n        currency: "USD"\n        type: "merchantpay"\n        debitParty:\n          - key: "msisdn"\n            value: "+33555123456"\n        creditParty:\n          - key: "msisdn"\n            value: "+33555789123"\n    response:\n      status: 400\n      headers:\n        x-date: "2000-01-01T00:00:00.000Z"\n        content-type: "application/json"\n')))}c.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,u=p["".concat(b,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(u,s({ref:t},o,{components:a})):r.a.createElement(u,s({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,b[1]=s;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);