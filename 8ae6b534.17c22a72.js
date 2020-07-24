(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(9),c=(a(0),a(163)),b={title:"ITP Test Cases",sidebar_label:"List of Test Cases"},l={id:"testcases/list",title:"ITP Test Cases",description:"Where an ITP Use Case represents the different goals that",source:"@site/docs/testcases/list.md",permalink:"/testcases/list",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/testcases/list.md",sidebar_label:"List of Test Cases",sidebar:"someSidebar",previous:{title:"Creating New Use Cases",permalink:"/usecases/creation"},next:{title:"Test Case Template",permalink:"/testcases/creation"}},s=[{value:'List of Test Cases <a name="tc"></a>',id:"list-of-test-cases",children:[{value:'Merchant-Initiated Merchant Payment <a name="mimp"></a>',id:"merchant-initiated-merchant-payment",children:[]},{value:'Customer-Initiated Merchant Payment <a name="cimp"></a>',id:"customer-initiated-merchant-payment",children:[]},{value:'Peer to Peer <a name="p2p"></a>',id:"peer-to-peer",children:[]},{value:'International Remittance <a name="ir"></a>',id:"international-remittance",children:[]}]}],i={rightToc:s};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Where an ITP ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/usecases/intro"}),"Use Case")," represents the different goals that\nactors within the system might have, a ",Object(c.b)("em",{parentName:"p"},"test case"),' represents a specific path\ntaken to achieve a goal. Test cases are separated into "',Object(c.b)("em",{parentName:"p"},"happy"),'" and "',Object(c.b)("em",{parentName:"p"},"unhappy"),'"\nso that they cover all the possibilities for a use case. Tests typically include\nseveral alternative paths that evaluate the exceptions and errors in the use\ncase. It is also possible that there are several happy paths, addressing\ndifferent business rules that result in different intended outcomes.'),Object(c.b)("p",null,"All test cases currently available on the Interoperability Test Platform are\nlisted below. As new test cases are created, the documentation, and therefore\nthe list, will be updated. The list of test cases is split according to use\ncases and contains the following attributes:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Code:")," Code that identifies the test case in relation to the\nothers. The code consists of two parts: an acronym that is directly related to\nthe use case, and a code that differentiates tests for the test group to which\nit belongs (e.g. P2P0057 is the test case 0057 for the use case P2P)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Scenario:")," This field is made up of properties that define the\nscenario in which the test case is being executed. These are the specific\nparameters that define a scenario, such as: fees and commissions involved, use\nof an account lookup system, currencies supported by the provider, etc."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Status:"),' Expected results after running the test case. The result indicates\nwhether the evaluated path is a "happy" flow or "unhappy" flow.'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Results:")," The results field indicates the expected behaviour for test cases\nunder validation. Particularly when dealing with rejected transactions, the\nvalue of this attribute gives a better understanding of the reason for not\ncarrying out the transaction."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Error Number:")," Indicates the number of the current error for the test case.\nThis will generally be a 3-digit (for HTTP errors) or 4-digit (for Mojaloop\nerrors) error code, which can be understood with reference to the documentation\nfor the APIs under test. For example, the Error Number 5103 corresponds to the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/Logical%20Data%20Model.md#464-payee-errors--5xxx"}),"Mojaloop error"),"\nindicating that the Payee doesn\u2019t want to proceed with the financial transaction\nafter receiving a quote."),Object(c.b)("h2",{id:"list-of-test-cases"},"List of Test Cases ",Object(c.b)("a",{name:"tc"})),Object(c.b)("h3",{id:"merchant-initiated-merchant-payment"},"Merchant-Initiated Merchant Payment ",Object(c.b)("a",{name:"mimp"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-transaction.yaml"}),"MC0100")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorized Transaction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-account-lookup.yaml"}),"MC0200")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorized Transaction w/ Account Lookup"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/authorized-with-authorizationcode.yaml"}),"MC0300")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorized Transaction w/ Authorisation Codes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-400.yaml"}),"MC0400")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Declined Transacation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"400")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-401.yaml"}),"MC0500")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Declined Transacation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"401")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-404.yaml"}),"MC0600")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Declined Transacation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"404")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-500.yaml"}),"MC0700")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Declined Transacation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/decline-transaction-error-503.yaml"}),"MC0800")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Declined Transacation"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Declined"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"503")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-quote-by-payee-fsp.yaml"}),"MC5001")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rejected Quote"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Quote Rejected by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-transaction-by-payer-fsp.yaml"}),"MC5002")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rejected Transaction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transaction Request Rejected Late by Payer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4101")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/master/src/database/seeds/test-cases/merchant/rejected-transaction-request-by-payer-fsp.yaml"}),"MC5003")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rejected Transaction Request"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transaction Request Rejected by Payer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4101")))),Object(c.b)("h3",{id:"customer-initiated-merchant-payment"},"Customer-Initiated Merchant Payment ",Object(c.b)("a",{name:"cimp"})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Under development")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))),Object(c.b)("h3",{id:"peer-to-peer"},"Peer to Peer ",Object(c.b)("a",{name:"p2p"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Test Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0100.yml"}),"P2P0100")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0200.yml"}),"P2P0200")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0300.yml"}),"P2P0300")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0400.yml"}),"P2P0400")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0500.yml"}),"P2P0500")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: Yes")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0600.yml"}),"P2P0600")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: Yes")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0700.yml"}),"P2P0700")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: Yes")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P0800.yml"}),"P2P0800")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: Yes")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Approved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5001.yml"}),"P2P5001")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Quote Rejected by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5002.yml"}),"P2P5002")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Non-Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Quote Rejected by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5003.yml"}),"P2P5003")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Receive "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Quote Rejected by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeds/test-cases/P2P/P2P5004.yml"}),"P2P5004")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"P2P Transfer")," ",Object(c.b)("li",null,"Account Lookup: No")," ",Object(c.b)("li",null," AmountType: Send "),Object(c.b)("li",null," Fees: Disclosing"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Quote Rejected by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")))),Object(c.b)("h3",{id:"international-remittance"},"International Remittance ",Object(c.b)("a",{name:"ir"})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Under development")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))))}o.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=o(a),O=n,m=p["".concat(b,".").concat(O)]||p[O]||j[O]||c;return a?r.a.createElement(m,l({ref:t},i,{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=O;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);