(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[657],{4841:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var a=n(3366),s=n(5120),i=n(7294),r=["timeout"],o=function(e){var t=e.timeout,n=void 0===t?1e3:t,o=(0,a.Z)(e,r),l=(0,i.useState)(!1),u=l[0],d=l[1];return(0,i.useEffect)((function(){setTimeout((function(){return d(!0)}),n)}),[]),u?i.createElement(s.w,o):i.createElement("p",null,"Loading...")}},9826:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(7462),s=n(3366),i=(n(7294),n(3905)),r=n(4841),o=["components"],l={title:"Overview",sidebar_label:"Overview"},u=void 0,d={unversionedId:"architecture/overview",id:"architecture/overview",title:"Overview",description:"This section describes the high-level architecture of the Interoperability Test",source:"@site/docs/architecture/overview.mdx",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/architecture/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Documentation Guide",permalink:"/docsguide"},next:{title:"Component Connections",permalink:"/architecture/connections"}},c={},m=[{value:"Core Test Platform",id:"core-test-platform",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Test Manager",id:"test-manager",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Simulators",id:"simulators",level:2},{value:"System Under Test",id:"system-under-test",level:2}],h={toc:m},p="wrapper";function f(e){var t=e.components,l=(0,s.Z)(e,o);return(0,i.kt)(p,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the high-level architecture of the Interoperability Test\nPlatform. The platform was designed to be scalable and integrate with novel\nsystems in future, and so it was designed around a flexible architecture\nconsisting of three sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core Test Platform"),(0,i.kt)("li",{parentName:"ul"},"Simulators"),(0,i.kt)("li",{parentName:"ul"},"Systems Under Test (SUTs)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"High Level Architecture",src:n(607).Z,width:"2876",height:"1350"})),(0,i.kt)("h2",{id:"core-test-platform"},"Core Test Platform"),(0,i.kt)("p",null,"The core test platform presents a frontend interface to manage users, sessions\nand test cases. In addition, it presents a proxy layer which is capable of\nintercepting and validating every message between simulators and SUTs. The\nplatform uses ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/"},"Laravel"),", a web application framework built\nwith PHP."),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"The frontend is responsible for rendering the user interface and uses two main\ntechnologies: ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://tabler.io/"},"Tabler"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vue.js: Used to build a single page application, rendered through\n",(0,i.kt)("a",{parentName:"li",href:"https://inertiajs.com/"},"Inertia.js"),"."),(0,i.kt)("li",{parentName:"ul"},"Tabler: Provides the admin and dashboard layout to build the UI, using\n",(0,i.kt)("a",{parentName:"li",href:"https://getbootstrap.com/"},"Bootstrap")," internally.")),(0,i.kt)("h3",{id:"test-manager"},"Test Manager"),(0,i.kt)("p",null,"The core of the test platform is the test manager. Test cases define the\nexecution flow of tests, as well as defining schema validation and business rule\nvalidations. Schema validation is performed automatically bsed on an OpenAPI\nSpecification (powered by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thephpleague/openapi-psr7-validator"},"OpenAPI PSR-7 Message Validator"),"),\nwhile business rule validations are controlled by custom logic defined inside\nthe test case definition."),(0,i.kt)("h3",{id:"proxy"},"Proxy"),(0,i.kt)("p",null,"In order to provide an end-to-end test, the platform must be able to follow all\nmessages exchanged between entities. All messages within the system pass through\na proxy layer, allowing the platform to store and validate messages before\nforwarding them to the correct recipient. When the receiver sends an HTTP\nresponse, that too will be validated before forwarding back to the original\nsender."),(0,i.kt)("p",null,"This diagram illustrates communication through the proxy layer. More details\nabout these connections are available ",(0,i.kt)("a",{parentName:"p",href:"/architecture/connections"},"here"),"."),(0,i.kt)(r.o,{timeout:1e3,options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2];\n      edge [ fontname="var(--ifm-font-family)", penwidth=2];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      simulator1 [ label="Simulator 1"]\n      sut [ label="System \nUnder Test"]\n      simulator2 [ label="Simulator 2"]\n      simulatorN [ label="Simulator N"]\n      ITP [ label="Test Platform"]\n      subgraph sim {\n        rank="same"\n        simulator1 -> sut -> simulator2 -> simulatorN -> simulator2 -> sut -> simulator1[ style="dashed"]\n      }\n      ITP -> {simulator1 sut simulator2 simulatorN} [dir="both"]\n      subgraph cluster_key {\n        style=invis;\n        {\n          node [ width=0.5, height=0.3, label="", style="invis" ];\n          rank = same;\n          edge[ minlen = 2 ];\n          leg1 -> leg2[ label="Actual Message" ];\n          leg2 -> leg4[ style = dashed, label="Logical Message"];\n        }\n      }\n      sut -> leg2 [style=invis] ;\n      simulator2 -> leg2 [style=invis] ;\n    }\n',mdxType:"DelayedGraphviz"}),(0,i.kt)("h2",{id:"simulators"},"Simulators"),(0,i.kt)("p",null,"Every component in the system may be either a simulated component, or a real\ncomponent known as a SUT. The behaviour of simulated components is entirely\ndefined within the test case file. Within the file, a series of test steps is\ndefined, with each step including a sample ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"response"),". By playing\nback these requests and responses in sequence, a full system flow can be\nsimulated."),(0,i.kt)("h2",{id:"system-under-test"},"System Under Test"),(0,i.kt)("p",null,'Any of the simulated requests and responses can be replaced by a real message\ngenerated by a live system. This live system is known as a "System Under Test"\n(SUT). When creating a test session, any component can be selected to be a SUT\nfor the duration of this session. Once it is selected, it replaces the simulator\nrepresenting that component for the duration of the test, and becomes\nresponsible for generating all requests and responses from that component.'))}f.isMDXComponent=!0},607:function(e,t,n){"use strict";t.Z=n.p+"assets/images/architecture_high_level-5bc2690e3c291b9ee2a347fdf0ea03ce.png"},6825:function(){},5159:function(){},5701:function(){}}]);