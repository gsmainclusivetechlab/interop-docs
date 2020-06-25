(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(9),c=(a(0),a(179)),i={id:"usecases",title:"Guide for ITP Use Cases",sidebar_label:"Use Cases Guide"},s={id:"usecases",title:"Guide for ITP Use Cases",description:"ITP Use Cases",source:"@site/docs/uc.md",permalink:"/usecases",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/uc.md",sidebar_label:"Use Cases Guide",sidebar:"someSidebar",previous:{title:"Mojaloop Installation Guide",permalink:"/installation/mojaloop"},next:{title:"ITP Use Cases List",permalink:"/uclist"}},o=[{value:'ITP Use Cases <a name="what"></a>',id:"itp-use-cases",children:[]},{value:"What an ITP Use Case represents",id:"what-an-itp-use-case-represents",children:[]},{value:"Transaction Elements",id:"transaction-elements",children:[]},{value:"Transaction Actions",id:"transaction-actions",children:[]}],b={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"itp-use-cases"},"ITP Use Cases ",Object(c.b)("a",{name:"what"})),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"ITP Use Cases")," are used to capture the system requirements and document the action of external actors ",Object(c.b)("sup",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#actors"}),"1"))," interacting with a system to achieve a specific goal. They map the business and user requisites to demonstrate precisely what to expect from the system. A Use Case (UC) makes possible the understanding of all possible paths through a given user/system interaction. Theses paths include both basic and alternative flows. The basic path (also called happy flow) is the main one and comply with all user needs. Alternative paths include several other situations that are related to the use case, even if they are not frequent or desired (unhappy flow), such as errors for example. Through this documentation  it is possible to understand more about the use cases and see all the use cases available in the Interoperability Test Platform. Also, it is possible to understand what types of requirements are related to the UC and the different paths under test by the platform. In way to a better understanding about the behaviour of the different use cases paths, please see the guide for the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/tclist"}),"ITP test cases"),"."),Object(c.b)("h3",{id:"what-an-itp-use-case-represents"},"What an ITP Use Case represents"),Object(c.b)("p",null,"The use cases represent the different kinds of Mobile Money transactions available for testing in the platform. Each use case is composed by a set of transaction elements which are used to define its main characteristics. These elements are: the ",Object(c.b)("strong",{parentName:"p"},"Transaction Scenario")," refering to main objective of the transaction, the ",Object(c.b)("strong",{parentName:"p"},"Initiator Party")," of the transaction, and the ",Object(c.b)("strong",{parentName:"p"},"Initiator Type"),", containing a classification for the initiator part. These elements can be combined in different ways to provide information about the use case under evaluation. For example, in a merchant-initiated merchant payment transaction we could have ",Object(c.b)("em",{parentName:"p"},"payment")," as the transaction scenario, ",Object(c.b)("em",{parentName:"p"},"payee")," as the initiator and ",Object(c.b)("em",{parentName:"p"},"business")," as the type. Nevertheless, if the transaction was initiated by a POS the type would change to device. In addition to the set of ",Object(c.b)("strong",{parentName:"p"},"transaction elements")," mentioned earlier, each transaction consists of one or more ",Object(c.b)("strong",{parentName:"p"},"actions")," defined by the services available in the APIs. The ",Object(c.b)("strong",{parentName:"p"},"Transaction Elements")," and ",Object(c.b)("strong",{parentName:"p"},"Transaction Actions")," are detailed below."),Object(c.b)("h3",{id:"transaction-elements"},"Transaction Elements"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Transaction Scenarios:")," A Transaction Scenario represents one of the several ways of using mobile money and is directly related to the objective that the use case validates."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Initiator Party:")," The Initiator Party specifies the actor",Object(c.b)("sup",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#myfootnote1"}),"1"))," who initiate the transaction."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Initiator Type:")," The start of the transaction can occur from different sources that are defined by Initiator Type. This source also determines the types of transactions that can occur."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Transaction Scenarios"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiator Party"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Initiator Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Transfer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Consumer")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Deposit"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payee"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Business")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Withdrar"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Service Provider"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Device")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Payment"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Mobile Money Operator"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Agent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Refund"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-")))),Object(c.b)("h3",{id:"transaction-actions"},"Transaction Actions"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Transacrtion Action"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Participant"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Information related to the FSP participant location")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Party"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Financial information about a party in a transaction")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Quote"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Calculation of all values that can influence a transaction, such as fees and commissions")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transfer"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Performs the transfer of funds from Payer to Payee")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Authorization"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Requires the necessary credentials to carry out a transaction on devices such as POS, ATM, etc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Request"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Payee requires the transfer of funds by Payer who can approve or reject the request")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Transaction Information"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Obtains information regarding a financial transaction")))),Object(c.b)("hr",null),Object(c.b)("h5",{id:"footnotes"},"Footnotes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{name:"actors"},"1"),": Actors are usually considered as humans and/or external systems.")))}l.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return a?r.a.createElement(u,s({ref:t},b,{components:a})):r.a.createElement(u,s({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);