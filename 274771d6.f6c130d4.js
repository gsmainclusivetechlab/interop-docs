(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(9),s=(a(0),a(184)),c={id:"usecases",title:"Guide for ITP Use Cases",sidebar_label:"Use Cases Guide"},i={id:"usecases",title:"Guide for ITP Use Cases",description:"ITP Use Cases",source:"@site/docs/usecases.md",permalink:"/usecases",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/docs/usecases.md",sidebar_label:"Use Cases Guide",sidebar:"someSidebar",previous:{title:"Mojaloop Installation Guide",permalink:"/installmoja"},next:{title:"ITP Use Cases List",permalink:"/uclist"}},o=[{value:'ITP Use Cases <a name="what"></a>',id:"itp-use-cases",children:[]},{value:"What an ITP Use Case represents",id:"what-an-itp-use-case-represents",children:[]},{value:"Transaction Elements",id:"transaction-elements",children:[]},{value:"Transaction Actions",id:"transaction-actions",children:[]}],b={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"itp-use-cases"},"ITP Use Cases ",Object(s.b)("a",{name:"what"})),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"ITP Use Cases")," are used to capture the system requirements documenting the action of external actors ",Object(s.b)("sup",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#actors"}),"1"))," interacting with a system to achieve a specific goal. They map the business and user requisites to demonstrate precisely what to expect from the system. A Use Case (UC) makes possible the understanding of all possible paths through a given user/system interaction. Theses paths include both basic and alternative flows. The basic path (also called happy flow) is the main one and comply with all user needs. Alternative paths include several other situations that are related to the use case, even if they are not frequent or desired (unhappy flow), such as errors for example. Through this documentation  it is possible to understand more about the use cases and see all the use cases available in the Interoperability Test Platform. Also, it is possible to understand what types of requirements are related to the UC and the different paths under test by the platform. In way to a better understanding about the behaviour of the different use cases paths, please see the guide for ITP test cases."),Object(s.b)("h3",{id:"what-an-itp-use-case-represents"},"What an ITP Use Case represents"),Object(s.b)("p",null,"The use cases represents the Mobile Money transactions types available for testing in the platform. Each use case is composed by a set of transaction elements which are used to represent the type of use case. These elements are: the ",Object(s.b)("strong",{parentName:"p"},"scenario")," where the UC refers to, the ",Object(s.b)("strong",{parentName:"p"},"initiator party")," of the transaction, and the ",Object(s.b)("strong",{parentName:"p"},"type"),", containing the classification of the initiator part. These elements can be combined in different waits to provide information about the use case under evaluation. For example, in a merchant-initiated merchant payment transaction we could have payment as the scenario, payee as the initiator and business as the type. Nevertheless, if the transaction was initiated by a POS the type would change to device. In addition to the set of elements mentioned, each transaction consists of one or more actions defined by the services available in the APIs. The ",Object(s.b)("strong",{parentName:"p"},"Transaction Elements")," and ",Object(s.b)("strong",{parentName:"p"},"Transaction Actions")," are detailed below."),Object(s.b)("h3",{id:"transaction-elements"},"Transaction Elements"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Transaction Scenarios:")," A Transaction Scenario represents one of the several ways of using mobile money and is directly related to the objective that the use case validates."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Initiator Party:")," The Initiator Party specifies the actor",Object(s.b)("sup",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#myfootnote1"}),"1"))," who initiate the transaction."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Initiator Type:")," The start of the transaction can occur from different sources that are defined by Initiator Type. This source also determines the types of transactions that can occur."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Transaction Scenarios"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiator Party"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiator Type"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transfer"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payer"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Consumer")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Deposit"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payee"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Business")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Withdrar"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Service Provider"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Device")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payment"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Mobile Money Operator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Agent")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Refund"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(s.b)("h3",{id:"transaction-actions"},"Transaction Actions"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Transacrtion Action"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Participant"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Information related to the FSP participant location")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Party"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Financial information about a party in a transaction")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quote"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculation of all values that can influence a transaction, such as fees and commissions")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transfer"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Performs the transfer of funds from Payer to Payee")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Authorization"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requires the necessary credentials to carry out a transaction on devices such as POS, ATM, etc")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Request"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Payee requires the transfer of funds by Payer who can approve or reject the request")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Information"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Obtains information regarding a financial transaction")))),Object(s.b)("a",{name:"actors"},"1"),": Actors are usually considered as humans and/or external systems.")}l.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return a?r.a.createElement(m,i({ref:t},b,{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<s;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);