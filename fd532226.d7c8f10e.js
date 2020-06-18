(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a(2),r=a(9),o=(a(0),a(185)),s=a(241),i={id:"architecture_overview",title:"Overview",sidebar_label:"Overview"},l={id:"architecture_overview",title:"Overview",description:"This section describes the high-level architecture of the Interoperability Test Platform.",source:"@site/docs/architecture.mdx",permalink:"/architecture_overview",editUrl:"https://github.com/gsmainclusivetechlab/docs/architecture.mdx",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"How to Use this Documentation",permalink:"/docsguide"},next:{title:"How Components Connections Works",permalink:"/howconnectionswork"}},c=[{value:"Test Platform",id:"test-platform",children:[{value:"Frontend",id:"frontend",children:[]},{value:"Backend",id:"backend",children:[]},{value:"Test Management",id:"test-management",children:[]},{value:"Proxy",id:"proxy",children:[]}]},{value:"Simulators",id:"simulators",children:[{value:"Service Provider Simulator",id:"service-provider-simulator",children:[]},{value:"Mobile Money Operator 1",id:"mobile-money-operator-1",children:[]},{value:"Mobile Money Operator 2",id:"mobile-money-operator-2",children:[]},{value:"Mojaloop",id:"mojaloop",children:[]}]},{value:"System Under Test",id:"system-under-test",children:[]}],b={rightToc:c};function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section describes the high-level architecture of the Interoperability Test Platform.\nThe platform was designed to be possible scale and integrate with other simulators in the future, for that reason we have 3 main components:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Test Platform"),Object(o.b)("li",{parentName:"ul"},"Simulators"),Object(o.b)("li",{parentName:"ul"},"System Under Tests(SUTs)")),Object(o.b)("p",null,"The system can handle 2 System Under Test, Service Providers and Financial Service Providers."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/architecture_high_level.png",alt:"High Level Architecture"}))),Object(o.b)("h2",{id:"test-platform"},"Test Platform"),Object(o.b)("p",null,"It's the core of the system which is subdivided into 4 main blocks: Frontend, Backend, Test Management and Proxy. Within this, the test platform can provide a UI, manage users, manage sessions, manage test cases, intercepts messages between simulators and SUTs and test each message that is sent or received by the platform.\nThe platform uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://laravel.com/"}),"Laravel"),", a web application framework which uses PHP as base language."),Object(o.b)("h3",{id:"frontend"},"Frontend"),Object(o.b)("p",null,"The frontend responsible for rendering the UI and uses 2 main technologies: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://vuejs.org/"}),"Vue.js")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tabler.io/"}),"Tabler"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Vue.js: is used to build a single page application."),Object(o.b)("li",{parentName:"ul"},"Tabler: provide the admin and dashboard layout to build the UI, underneath uses ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://getbootstrap.com/"}),"Bootstrap")," one the most popular frontend frameworks.")),Object(o.b)("h3",{id:"backend"},"Backend"),Object(o.b)("p",null,"The backend is responsible for providing the data to UI and interact with the database, and uses 1 main technology: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://inertiajs.com/"}),"Inertia.js"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inertia.js: Allows to create a single page application without the need to build an API.")),Object(o.b)("h3",{id:"test-management"},"Test Management"),Object(o.b)("p",null,"It's the core part of the testing which holds the test case, test run and test validators, and uses 1 main technology: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thephpleague/openapi-psr7-validator"}),"OpenAPI PSR-7 Message Validator"),", besides the testing logic create for this.\nThe test management supports 2 types of validation Schema validation and Business rule validations, more details ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:""}),"here"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenAPI PSR-7 Message Validator: Combine the power of OpenAPI Spec and PS7-Message, and validates all messages(request/response) in the platform.")),Object(o.b)("h3",{id:"proxy"},"Proxy"),Object(o.b)("p",null,"One of the objectives of the platform is to provide an end-to-end test, which means the platform should be able to follow all messages exchanged by all different entities.\nThe proxy layer was created with this purpose.\nAll messages pass to the proxy layer where the platform is able to get the message, store, validate and send to the correct simulator to process the response and the possible next message if needed."),Object(o.b)("p",null,"In the diagram below, you can understand how any simulator and proxy are being connected, see more details ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/howconnectionswork"}),"here"),"."),Object(o.b)(s.a,{options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3];\n      edge [ fontname="var(--ifm-font-family)"];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      simulator1 [ label="Simulator 1" shape="box"]\n      simulator2 [ label="Simulator 2" shape="box"]\n      simulator3 [ label="Simulator 3" shape="box"]\n      simulatorN [ label="Simulator N" shape="box"]\n      ITP [ label="Test Platform" shape="box"]\n      subgraph sim {\n        rank="same"\n        simulator1 -> simulator2 -> simulator3 -> simulatorN -> simulator3 -> simulator2 -> simulator1[ style="dashed", nodesep=1]\n      }\n      ITP -> {simulator1 simulator2 simulator3 simulatorN} [dir="both"]\n      subgraph cluster_key {\n        size="6,1";\n        label="Legend";\n        box [shape=point style=invis] ;\n        node[ shape = plaintext ];\n        leg2[ label = "Actual message" ];\n        leg4[ label = "Logical message" ];\n        node [ shape = point height = 0 width = 0 margin = 0 ];\n        leg1 leg3\n        { rank = same; leg1 leg2 leg3 leg4 }\n        edge[ minlen = 2 ];\n        leg1 -> leg2[ penwidth = 4 ];\n        leg3 -> leg4[ style = dotted ];\n      }\n      simulatorN -> box [style=invis] ;\n    }\n',mdxType:"Graphviz"}),Object(o.b)("h2",{id:"simulators"},"Simulators"),Object(o.b)("p",null,"The simulators are an important part of the system and hold specific knowledge of messages and how the flow should happen.\nEach simulator represents a real entity from the real scenario, and any of them can be replaced to be the SUT."),Object(o.b)("h3",{id:"service-provider-simulator"},"Service Provider Simulator"),Object(o.b)("p",null,"Acts as a mock service provider (SP) such as a utility company or supermarket checkout to simulate their role in a transaction.",Object(o.b)("br",null),"\nThis simulator can receive and send messages through GSMA Mobile Money API and has a connection with Mobile Money Operator 1."),Object(o.b)("h3",{id:"mobile-money-operator-1"},"Mobile Money Operator 1"),Object(o.b)("p",null,"Acts as a mock financial services provider (FSP) such as a Mobile Money Operator or Bank to simulate their role in a transaction.",Object(o.b)("br",null),"\nThis simulator can perform 2 types of actions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Receive messages through GSMA Mobile Money API and map it to Mojaloop API.",Object(o.b)("br",null),"\nThis simulates a scenario when a Mobile Money Operator receives a request from a Service Provider to perform a transaction, acting as Payee. For more details, see the use case ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/uclist#mimp"}),"Merchant-Initiate Merchant Payment"),"."),Object(o.b)("li",{parentName:"ul"},"Initiate messages direct trough Mojaloop API.",Object(o.b)("br",null),"\nThis simulates a scenario when a FSP start a transaction to a Mojaloop network, acting as Payer. For more details, see the use case ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/uclist#p2p"}),"P2P"),".")),Object(o.b)("h3",{id:"mobile-money-operator-2"},"Mobile Money Operator 2"),Object(o.b)("p",null,"Acts as a mock financial services provider (FSP) such as a Mobile Money Operator or Bank to simulate their role in a transaction.",Object(o.b)("br",null),"\nThis simulator can perform 1 action:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Receive and send messages through trough Mojaloop API.",Object(o.b)("br",null),"\nThis simulates a scenario when a FSP receives a request to initiate a transaction(transactionRequest) to a Mojaloop network, acting as Payer. For more details, see the use case ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/uclist#mimp"}),"Merchant-Initiate Merchant Payment"),". ",Object(o.b)("br",null),"\nThis simulates a scenario when a FSP reply a transaction to a Mojaloop network, acting as Payee. For more details, see the use case ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/uclist#p2p"}),"P2P"),".")),Object(o.b)("h3",{id:"mojaloop"},"Mojaloop"),Object(o.b)("p",null,"It's the interoperability hub, which links 2 or more FSPs and enables. This is not simulated by the system and use a vanilla version of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mojaloop.io/"}),"Mojaloop software"),"."),Object(o.b)("h2",{id:"system-under-test"},"System Under Test"),Object(o.b)("p",null,"A System Under Test(SUT) is the entity who is being tested. Current the system can handle 2 System Under Test, Service Providers and Financial Service Providers.",Object(o.b)("br",null),"\nOnce a SUT is selected in the platform, the simulator who represents the same entity is not used during the test, so we can ensure the SUT is properly tested."))}h.isMDXComponent=!0},229:function(e,t){},230:function(e,t){},249:function(e,t){}}]);