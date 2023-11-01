"use strict";(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[949],{715:function(e,t,s){s.r(t),s.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return o},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return a}});var n=s(5893),r=s(1151);const l={title:"ITP Test Cases",sidebar_label:"List of Test Cases"},i=void 0,c={id:"testcases/tclist",title:"ITP Test Cases",description:"Where an ITP Use Case represents the different goals that",source:"@site/docs/testcases/tclist.md",sourceDirName:"testcases",slug:"/testcases/tclist",permalink:"/testcases/tclist",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ITP Test Cases",sidebar_label:"List of Test Cases"},sidebar:"someSidebar",previous:{title:"List of Use Cases",permalink:"/testcases/uclist"},next:{title:"Test Case Template",permalink:"/testcases/template-tc"}},d={},a=[{value:"List of Test Cases <a></a>",id:"list-of-test-cases-",level:2},{value:"Merchant-Initiated Merchant Payment <a></a>",id:"merchant-initiated-merchant-payment-",level:3},{value:"Customer-Initiated Merchant Payment <a></a>",id:"customer-initiated-merchant-payment-",level:3},{value:"Peer to Peer <a></a>",id:"peer-to-peer-",level:3},{value:"International Remittance <a></a>",id:"international-remittance-",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Where an ITP ",(0,n.jsx)(t.a,{href:"/testcases/intro",children:"Use Case"})," represents the different goals that\nactors within the system might have, a ",(0,n.jsx)(t.em,{children:"test case"}),' represents a specific path\ntaken to achieve a goal. Test cases are separated into "',(0,n.jsx)(t.em,{children:"happy"}),'" and "',(0,n.jsx)(t.em,{children:"unhappy"}),'"\nso that they cover all the possibilities for a use case. Tests typically include\nseveral alternative paths that evaluate the exceptions and errors in the use\ncase. It is also possible that there are several happy paths, addressing\ndifferent business rules that result in different expected outcomes.']}),"\n",(0,n.jsx)(t.p,{children:"All test cases currently available on the Interoperability Test Platform are\nlisted below. As new test cases are created, the documentation, and therefore\nthe list, will be updated. The list of test cases is split according to use\ncases and contains the following attributes:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Test Case Code:"})," Code that identifies the test case in relation to the\nothers. The code consists of two parts: an acronym that is directly related to\nthe use case, and a code that differentiates tests for the test group to which\nit belongs (e.g. P2P0057 is the test case 0057 for the use case P2P)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Test Case Scenario:"})," This field is made up of properties that define the\nscenario in which the test case is being executed. These are the specific\nparameters that define a scenario, such as: fees and commissions involved, use\nof an account lookup system, currencies supported by the provider, etc."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Status:"}),' Expected results after running the test case. The result indicates\nwhether the evaluated path is a "happy" flow or "unhappy" flow.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Results:"})," The results field indicates the expected behaviour for test cases\nunder validation. Particularly when dealing with rejected transactions, the\nvalue of this attribute gives a better understanding of the reason for not\ncarrying out the transaction."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Error Number:"})," Indicates the number of the current error for the test case.\nThis will generally be a 3-digit (for HTTP errors) or 4-digit (for Mojaloop\nerrors) error code, which can be understood with reference to the documentation\nfor the APIs under test. For example, the Error Number 5103 corresponds to the\n",(0,n.jsx)(t.a,{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/Logical%20Data%20Model.md#464-payee-errors--5xxx",children:"Mojaloop error"}),"\nindicating that the Payee doesn\u2019t want to proceed with the financial transaction\nafter receiving a quote."]}),"\n",(0,n.jsxs)(t.h2,{id:"list-of-test-cases-",children:["List of Test Cases ",(0,n.jsx)("a",{name:"tc"})]}),"\n",(0,n.jsxs)(t.h3,{id:"merchant-initiated-merchant-payment-",children:["Merchant-Initiated Merchant Payment ",(0,n.jsx)("a",{name:"mimp"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Test Case"}),(0,n.jsx)(t.th,{children:"Test Scenario"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Results"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Error"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/authorized-transaction.yaml",children:"MC0100"})}),(0,n.jsx)(t.td,{children:"Authorized Transaction"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/authorized-with-account-lookup.yaml",children:"MC0200"})}),(0,n.jsx)(t.td,{children:"Authorized Transaction w/ Account Lookup"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/authorized-with-authorizationcode.yaml",children:"MC0300"})}),(0,n.jsx)(t.td,{children:"Authorized Transaction w/ Authorisation Codes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/decline-transaction-error-400.yaml",children:"MC0400"})}),(0,n.jsx)(t.td,{children:"Declined Transacation"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Declined"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"400"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/decline-transaction-error-401.yaml",children:"MC0500"})}),(0,n.jsx)(t.td,{children:"Declined Transacation"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Declined"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"401"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/decline-transaction-error-404.yaml",children:"MC0600"})}),(0,n.jsx)(t.td,{children:"Declined Transacation"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Declined"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"404"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/decline-transaction-error-500.yaml",children:"MC0700"})}),(0,n.jsx)(t.td,{children:"Declined Transacation"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Declined"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"500"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/decline-transaction-error-503.yaml",children:"MC0800"})}),(0,n.jsx)(t.td,{children:"Declined Transacation"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Declined"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"503"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/rejected-quote-by-payee-fsp.yaml",children:"MC5001"})}),(0,n.jsx)(t.td,{children:"Rejected Quote"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Quote Rejected by Payee"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5103"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/rejected-transaction-by-payer-fsp.yaml",children:"MC5002"})}),(0,n.jsx)(t.td,{children:"Rejected Transaction"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Transaction Request Rejected Late by Payer"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/merchant/rejected-transaction-request-by-payer-fsp.yaml",children:"MC5003"})}),(0,n.jsx)(t.td,{children:"Rejected Transaction Request"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Transaction Request Rejected by Payer"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"4101"})]})]})]}),"\n",(0,n.jsxs)(t.h3,{id:"customer-initiated-merchant-payment-",children:["Customer-Initiated Merchant Payment ",(0,n.jsx)("a",{name:"cimp"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Under development",type:"note"}),"\n",(0,n.jsxs)(t.h3,{id:"peer-to-peer-",children:["Peer to Peer ",(0,n.jsx)("a",{name:"p2p"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Test Case"}),(0,n.jsx)(t.th,{children:"Test Scenario"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Results"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Error"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0100.yml",children:"P2P0100"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0200.yml",children:"P2P0200"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0300.yml",children:"P2P0300"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0400.yml",children:"P2P0400"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0500.yml",children:"P2P0500"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: Yes"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0600.yml",children:"P2P0600"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: Yes"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0700.yml",children:"P2P0700"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: Yes"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P0800.yml",children:"P2P0800"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: Yes"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Approved"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pass"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P5001.yml",children:"P2P5001"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Quote Rejected by Payee"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5103"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P5002.yml",children:"P2P5002"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Non-Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Quote Rejected by Payee"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5103"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P5003.yml",children:"P2P5003"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Receive "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Quote Rejected by Payee"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5103"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://github.com/gsmainclusivetechlab/interop-test-platform/blob/develop/src/database/seeders/test-cases/P2P/P2P5004.yml",children:"P2P5004"})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"P2P Transfer"})," ",(0,n.jsx)("li",{children:"Account Lookup: No"})," ",(0,n.jsx)("li",{children:" AmountType: Send "}),(0,n.jsx)("li",{children:" Fees: Disclosing"})]})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Quote Rejected by Payee"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Fail"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"5103"})]})]})]}),"\n",(0,n.jsxs)(t.h3,{id:"international-remittance-",children:["International Remittance ",(0,n.jsx)("a",{name:"ir"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Under development",type:"note"})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return i}});var n=s(7294);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);