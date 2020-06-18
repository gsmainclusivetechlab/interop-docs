(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),c=(a(0),a(151)),b={id:"tclist",title:"ITP Test Case List",sidebar_label:"Test Cases List"},i={id:"tclist",title:"ITP Test Case List",description:"Table of Contents",source:"@site/docs/tclist.md",permalink:"/tclist",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/docs/tclist.md",sidebar_label:"Test Cases List",sidebar:"someSidebar",previous:{title:"How to Create a New Use Case",permalink:"/uccreation"},next:{title:"Test Case Template",permalink:"/tctemplate"}},s=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:'ITP Test Cases <a name="what"></a>',id:"itp-test-cases",children:[]},{value:'List of Teste Cases <a name="tc"></a>',id:"list-of-teste-cases",children:[{value:'Merchant-Initiated Merchant Payment <a name="mimp"></a>',id:"merchant-initiated-merchant-payment",children:[]},{value:'Customer-Initiated Merchant Payment <a name="cimp"></a>',id:"customer-initiated-merchant-payment",children:[]},{value:'Use Case: Peer-2-Peer <a name="p2p"></a>',id:"use-case-peer-2-peer",children:[]},{value:'International Remmittance <a name="ir"></a>',id:"international-remmittance",children:[]}]}],l={rightToc:s};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#what"}),"ITP Test Cases")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#tc"}),"List of Test Cases"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#mimp"}),"Merchant-Initiated Merchant Payment")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#cimp"}),"Customer-Initiated Merchant Payment")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#p2p"}),"Peer-2-Peer")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#ir"}),"International Remmittance"))))),Object(c.b)("h2",{id:"itp-test-cases"},"ITP Test Cases ",Object(c.b)("a",{name:"what"})),Object(c.b)("p",null,"ITP Test Cases approach all diferent paths related to a specific use case to validade if the requirements are met. In way to assure the quality of a system, the test cases are separated into happy and unhappy so that they cover all the existing possibilities for a use case. Tests typically include several alternative paths that evaluate the exceptions and errors in the use case. It is also possible that there are several happy paths, addressing different business rules that allow to obtain the expected result."),Object(c.b)("p",null,"All test cases currently available on the ITP platform are listed below. As new test cases are created, the documentation, and therefore the list, is updated. The list of test cases is divided by use case and contains the following attributes:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Code:")," Code that identifies the test case in relation to the others. The TC code contains the acronym. The code consists of two parts: an acronym that is directly related to the use case, and a code that differentiates tests for the test group to which it belongs (e.g. P2P0057 is the test case 0057 for the use case P2P)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Test Case Scenario:")," This field is made up of properties that define the scenario in which the test case is being executed. Through these properties we can obtain specific information necessary for a better characterization of the transaction, such as: involved fees and commissions, use of account lookup system, provider supported currencies, etc."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Results:")," The results field indicates the expected behavior for test cases under validation. Such behavior is related to the transaction being approved or not. When dealing with a not approved transaction, the value of this attribute allows a better understanding of the reason for not carrying out the transaction."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Status:")," Expected results after running the test case. The result indicates whether the evaluated path is a happy flow or unhappy flow."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Error Number:")," Indicates the number of the current error for the test case. Through this number it is possible to know which category the error belongs to in relation to the API to which it is related (e.g. 3208 - Transfer ID not found)."),Object(c.b)("h2",{id:"list-of-teste-cases"},"List of Teste Cases ",Object(c.b)("a",{name:"tc"})),Object(c.b)("h3",{id:"merchant-initiated-merchant-payment"},"Merchant-Initiated Merchant Payment ",Object(c.b)("a",{name:"mimp"})),Object(c.b)("h3",{id:"customer-initiated-merchant-payment"},"Customer-Initiated Merchant Payment ",Object(c.b)("a",{name:"cimp"})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Under development"))),Object(c.b)("h3",{id:"use-case-peer-2-peer"},"Use Case: Peer-2-Peer ",Object(c.b)("a",{name:"p2p"})),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Teste Case"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Test Scenario"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Results"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Status"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Error"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0100.yml"}),"P2P0100")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0200.yml"}),"P2P0200")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0300.yml"}),"P2P0300")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0400.yml"}),"P2P0400")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Send / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0500.yml"}),"P2P0500")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:YES / AmountType: Receive / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0600.yml"}),"P2P0600")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:YES / AmountType: Send / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0700.yml"}),"P2P0700")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:YES / AmountType: Receive / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P0800.yml"}),"P2P0800")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:YES / AmountType: Send / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Aproved"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Pass"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P5001.yml"}),"P2P5001")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Receive / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rejected Quote by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P5002.yml"}),"P2P5002")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Send / Fee: Non-Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rejected Quote by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P5003.yml"}),"P2P5003")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Receive / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rejected Quote by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"files/tc/p2p/P2P5004.yml"}),"P2P5004")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"P2P transference ALS:NO / AmountType: Send / Fee: Disclosing"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rejected Quote by Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"5103")))),Object(c.b)("h3",{id:"international-remmittance"},"International Remmittance ",Object(c.b)("a",{name:"ir"})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Under development"))))}o.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=o(a),m=n,d=p["".concat(b,".").concat(m)]||p[m]||O[m]||c;return a?r.a.createElement(d,i({ref:t},l,{components:a})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<c;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);