(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),i=(a(0),a(172)),o={id:"tctemplate",title:"Test Case Template",sidebar_label:"TC Template"},s={id:"tctemplate",title:"Test Case Template",description:"This manual describes how to fill in the Test Case .yaml, what fields it should contain and how they are used in ITP.",source:"@site/docs/tctemplate.md",permalink:"/interop-docs/tctemplate",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/docs/tctemplate.md",sidebar_label:"TC Template",sidebar:"someSidebar",previous:{title:"ITP Test Case List",permalink:"/interop-docs/tclist"},next:{title:"Style Guide / Teste",permalink:"/interop-docs/doc1"}},l=[{value:"Test Case data",id:"test-case-data",children:[]},{value:"Test Step data",id:"test-step-data",children:[{value:"Global values",id:"global-values",children:[]}]},{value:"Assertions",id:"assertions",children:[]},{value:"Overridings",id:"overridings",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This manual describes how to fill in the Test Case .yaml, what fields it should contain and how they are used in ITP."),Object(i.b)("h2",{id:"test-case-data"},"Test Case data"),Object(i.b)("p",null,"This is the first layer of the data that contains the info about the Test Case itself.\nThey are:"),Object(i.b)("p",null,"TABELA"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the Test Case that will be shown to users. Names may not be unique. So it is possible to have Test Cases with the same name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorized Transaction by Payer FSP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"use_case"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of the Use Case that the Use Case is related to. Names may not be unique. So it is possible to have Use Cases with the same name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Merchant-Initiated Merchant Payment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"behavior"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Shows the type of the Test Case, i.e. the folder inside the Use Case for the Test Case. Folders are Happy flow and Unhappy flow."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("ul",null,Object(i.b)("li",null,"positive"),Object(i.b)("li",null,"negative")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"description"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Just the description of the Test Case. Some business background of what we are trying to achieve in this case."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Service Provider wants to test if he is capable of receiving a transaction from a different wallet...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"precondition"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An additional area where specific values that should be used to execute a Test Case can be put. Test Case may require using some defined amounts"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'- Amount should be the value "1001". - Debit party should be identified by account identifier "msisdn" with the value "+33555123456".')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"components"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The list of Components that the Test Case is applicable for. Some Test Cases can be applicable for MMOs only (P2P transfer) or contain some specific errors that can only be received by SUT and not handled by it."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"- Service Provider - Mobile Money Operator 1 - Mobile Money Operator 2 Or any combination of them")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"test_steps"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Indicates the start of Test Steps data."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"The whole Test Case info may look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'name: Authorized Transaction by Payer FSP\nuse_case: Merchant-Initiated Merchant Payment\nbehavior: positive\ndescription: |\n  The Service Provider wants to test if he is capable of receiving a transaction from a different wallet provider that he has an account. In this case, we simulate the scenario when the Payer would like to buy goods or services from a Service Provider (the Payee), but each of them uses different wallet providers. This flow shows the necessary steps for this transaction simulating an approved transaction.\nprecondition: |\n  - Service Provider has GSMA Mobile Money API Implemented.\n  - Service Provider is capable of handled async calls.\n  - Payee and Payer MMOs exist in Mojaloop as Participants.\n  - Payee and Payer exist in Mojaloop as Parties.\n  - Amount should be the value "1001".\n  - Debit party should be identified by account identifier "msisdn" with the value "+33555123456".\n  - Credit party should be identified by account identifier "msisdn" with the value "+33555789123".\ncomponents:\n  - Service Provider\n  - Mobile Money Operator 1\n  - Mobile Money Operator 2\ntest_steps:\n')),Object(i.b)("h2",{id:"test-step-data"},"Test Step data"),Object(i.b)("p",null,"The second lawyer of the yaml file is the description of all Test Steps one-by-one.\nTest Steps contains very much information so it will be divided into smaller sections."),Object(i.b)("h3",{id:"global-values"},"Global values"),Object(i.b)("p",null,"Tabela"),Object(i.b)("p",null,"Example of global values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  - path: /quotes/{ID}\n    pattern: '^quotes/[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$'\n    method: PUT\n    source: Mojaloop\n    target: Mobile Money Operator 1\n    api_spec: Mojaloop v1.0\n    trigger:\n      transferAmount:\n        amount: '99'\n")),Object(i.b)("h2",{id:"assertions"},"Assertions"),Object(i.b)("p",null,"Assertions can be performed for any value in the header or body of the Request or Response. Status may also be set for Response."),Object(i.b)("p",null,"TABELA"),Object(i.b)("p",null,"Example of assertions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"test_request_scripts:\n      - name: Amounts and currencies are specified correctly\n        rules:\n          body.transferAmount.amount: 'required|in:99'\n          body.transferAmount.currency: 'required|regex:/^[A-Z]{3}/'\n          body.payeeReceiveAmount.amount: 'required|in:100'\n          body.payeeReceiveAmount.currency: 'required|regex:/^[A-Z]{3}/'\n          body.payeeFspCommission.amount: 'required|in:1'\n          body.payeeFspCommission.currency: 'required|regex:/^[A-Z]{3}/'\n\n    test_response_scripts:\n      - name: Transaction was successfully accepted\n        rules:\n          status: 'required|in:200'\n")),Object(i.b)("h2",{id:"overridings"},"Overridings"),Object(i.b)("p",null,"tbc"))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,s({ref:t},c,{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);