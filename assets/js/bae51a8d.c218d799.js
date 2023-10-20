"use strict";(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[714],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},47:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={title:"Proposing New Use Cases",sidebar_label:"Proposing a Use Case"},l=void 0,c={unversionedId:"testcases/proposing-uc",id:"testcases/proposing-uc",title:"Proposing New Use Cases",description:"The GSMA Inclusive Tech Lab is on hand to accept use",source:"@site/docs/testcases/proposing-uc.md",sourceDirName:"testcases",slug:"/testcases/proposing-uc",permalink:"/testcases/proposing-uc",draft:!1,tags:[],version:"current",frontMatter:{title:"Proposing New Use Cases",sidebar_label:"Proposing a Use Case"},sidebar:"someSidebar",previous:{title:"Creating Test Case",permalink:"/testcases/creating-tc"},next:{title:"Quick Guide for Tests",permalink:"/manual/quickguide"}},p={},u=[{value:"List of Steps",id:"list-of-steps",level:3},{value:"Use Case Description",id:"use-case-description",level:3},{value:"Footnotes",id:"footnotes",level:5}],d={toc:u},f="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://www.gsma.com/lab"},"GSMA Inclusive Tech Lab")," is on hand to accept use\ncase proposals and assist in their development. The creation of new Use Cases\n(UC) should take into account the modules and features pre-existing on the\nplatform. If the features needed for a UC creation are already present, the\ninclusion of the use cases and test cases may occur quickly or even immediately."),(0,s.kt)("p",null,"In order to create these new cases and submit them to our team, it is necessary\nto understand and detail the scenario that will be simulated. Below we provide\nrelevant information and a few steps to follow for creating and proposing new\ntest cases."),(0,s.kt)("h3",{id:"list-of-steps"},"List of Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Definition of a Scenario:")," Firstly, it is necessary to understand the\nscenario which the use case represents, as well as the actors and entities\ninvolved."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Creating a User Story:")," As a way of exemplifying the use case scenario,\nUser Stories can be used to give examples of real events where the use case\nmay be applied."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Choosing the evaluation paths:")," It is important to detail the different\nevaluation paths for the use case. This process will facilitate the\nunderstanding of the flow and the creation plan for the test cases that will\nbe used to validate each path. Both happy flows and unhappy flows may be\nconsidered."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Sequence Diagram:")," If possible, the creation of a sequence diagram for the\ndifferent paths will ease the test cases definition. You can also use the\nsection ",(0,s.kt)("a",{parentName:"li",href:"/testcases/creating-tc"},"Creating a Test Case")," to learn how to create\na Test Case YAML file directly.")),(0,s.kt)("h3",{id:"use-case-description"},"Use Case Description"),(0,s.kt)("p",null,"The following table contains essential fields for defining use cases. Before\ndescribing a new UC we suggest understanding and filling out this information."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"right"},"Use Case Name:"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Name by which the use case will be identified"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Summary:"),(0,s.kt)("td",{parentName:"tr",align:"left"},"A summary explaining the scenario that will be simulated by the use case")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Actors:"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Actors who may be involved in the transaction")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Preconditions:"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Preconditions that must be met for the use case to be successfully simulated")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Description:"),(0,s.kt)("td",{parentName:"tr",align:"left"},"A step-by-step description of the use case's operating sequence")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Exceptions",(0,s.kt)("sup",null,(0,s.kt)("a",{parentName:"td",href:"#exceptions"},"1")),":"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The exceptions that you want to address during the validation of the use case")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"right"},"Postconditions:"),(0,s.kt)("td",{parentName:"tr",align:"left"},"What state we can expect after simulating the use case")))),(0,s.kt)("admonition",{title:"PlantUML",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To create the sequence diagrams that describe each path of the use case, we use\nthe tool ",(0,s.kt)("a",{parentName:"p",href:"https://plantuml.com/"},"PlantUML"),". If you would like to attach test\nflow examples along with the suggested use case/test case, we have provided an\nexample file for the ",(0,s.kt)("a",{target:"_blank",href:a(7694).Z},"Test Case P2P0100"),".")),(0,s.kt)("admonition",{title:"Use Case Suggestions",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you have any suggestions for new use cases, please contact the GSMA Inclusive\nTech Lab through the website at ",(0,s.kt)("a",{parentName:"p",href:"https://www.gsma.com/lab"},"www.gsma.com/lab")," or\nby email at ",(0,s.kt)("a",{parentName:"p",href:"mailto:inclusivetechlab@gsma.com"},"inclusivetechlab@gsma.com"),".")),(0,s.kt)("hr",null),(0,s.kt)("h5",{id:"footnotes"},"Footnotes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{name:"exceptions"},"1 "),": The exceptions listed are directly related to alternative paths the use case can take. Using the exceptions, it is possible to derive the unhappy flows covered by the appropriate test cases.")))}m.isMDXComponent=!0},7694:function(e,t,a){t.Z=a.p+"assets/files/p2p0100-4d4f20fc087de33225f7a89dfd881eb2.plantuml"}}]);