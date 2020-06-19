(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(9),i=(n(0),n(180)),s=n(213),r={id:"connections",title:"Connections between Components",sidebar_label:"Component Connections"},c={id:"architecture/connections",title:"Connections between Components",description:"In normal operation, the payer's MMO would connect directly to Mojaloop to",source:"@site/docs/architecture/connections.mdx",permalink:"/architecture/connections",editUrl:"https://github.com/gsmainclusivetechlab/docs/architecture/connections.mdx",sidebar_label:"Component Connections",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/architecture/overview"},next:{title:"Test Case Matching",permalink:"/architecture/matching"}},l=[{value:"Component IDs",id:"component-ids",children:[]},{value:"SUT URLs",id:"sut-urls",children:[]},{value:"Simulator URLs",id:"simulator-urls",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In normal operation, the payer's MMO would connect directly to Mojaloop to\narrange a funds transfer to the payee's MMO. In testing, however, we must\ninspect every message to validate that they are correctly formed. To achieve\nthis, the ITP acts as a transparent proxy between all components. By configuring\nendpoint URLs within component A to point at the ITP instead of directly to\ncomponent B, the ITP can store all messages and forward them onto component B."),Object(i.b)(s.a,{options:{height:"auto",width:"100%"},dot:'\n    digraph {\n      rankdir="TD"\n      ratio="fill";\n      size="8,3";\n      node [\n        fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2\n      ];\n      edge [fontname="var(--ifm-font-family)", penwidth=2];\n      sp [label="SP"]\n      mmo1 [label="MMO1"]\n      mojaloop [label="Mojaloop"]\n      mmo2 [label="MMO2"]\n      ITP [label="Test Platform"]\n      subgraph sim {\n        rank="same"\n        edge[style="dashed", dir="both"]\n        sp -> mmo1 [color="#67ab9f"]\n        mmo1 -> mojaloop -> mmo2 \n      }\n      {\n        edge[dir="both"]\n        ITP -> {sp mmo1} [color="#67ab9f"]\n        ITP -> {mmo1 mojaloop mmo2}\n        ITP -> mojaloop[style="invis"]\n      }\n      subgraph leg {\n        node [width=0.5, height=0.3, label="", style="invis"]\n        {\n          rank="same"\n          a -> b [label="Actual message\n(MM API)", color="#67ab9f"] ;\n          b -> c [label="Actual message\n(Mojaloop API)"] ;\n        }\n        {\n          rank="same"\n          d -> e [label="Logical message\n(MM API)", style=dashed, color="#67ab9f"];\n          e -> f [label="Logical message\n(Mojaloop API)", style=dashed] ;\n        }\n        edge[style="invis"]\n        {mmo1 mojaloop} -> b\n        b -> e\n      }\n    }\n',mdxType:"Graphviz"}),Object(i.b)("h2",{id:"component-ids"},"Component IDs"),Object(i.b)("p",null,"In order to recognise the sender and intended recipient of each message received\nby the test platform, this information must be embedded within the message.\nSpecifically, the test platform expects that the base URL for each request will\ncontain a UUID corresponding to both the sender and intended recipients of the\nmessage. Normally, the test platform will insert these UUIDs transparently so\nthat it is not necessary to know which component corresponds to which UUID, but\nit can be helpful for debugging to know which UUID is which:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SP"),": 114511be-74e9-49d5-b93e-b4a461e01626"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MMO1"),": e5f5e817-94d6-4a43-a7ec-f7274b6d85c2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Mojaloop"),": b2a85076-b748-4d93-8df1-2b39844e6d4b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MMO2"),": e602a859-a25f-4d37-9abe-0ac09fb734af")),Object(i.b)("h2",{id:"sut-urls"},"SUT URLs"),Object(i.b)("p",null,"Within a SUT, the base URL of each component should be configured according to\nthe following scheme:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-handlebars"}),"https://{itp_url}/testing/{session_uuid}/{my_uuid}/{recipient_uuid}/sut/\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"session_uuid")," corresponds to a unique ID for each testing session, and\nhelps the test platform to validate incoming messages to ensure that the\nexpected test-cases are being correctly matched. ",Object(i.b)("inlineCode",{parentName:"p"},"itp_url")," is the base URL of\nthe test platform (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"interop.gsmainclusivetechlab.io"),"). ",Object(i.b)("inlineCode",{parentName:"p"},"my_uuid")," is the\nUUID of the component which is being tested, and ",Object(i.b)("inlineCode",{parentName:"p"},"recipient_uuid")," is the UUID of\nthe component to which the request will be made."),Object(i.b)("p",null,"Thus, the URL that an MMO1 test subject should use to send messages to Mojaloop\n(through the test platform) would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"https://interop.gsmainclusivetechlab.io/testing/41a2e8d5-3ce4-459b-a6eb-1a1e2988c357/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/b2a85076-b748-4d93-8df1-2b39844e6d4b/sut/\n")),Object(i.b)("h2",{id:"simulator-urls"},"Simulator URLs"),Object(i.b)("p",null,"Since the simulators are within the control of the test platform, we can\nslightly simplify the request URLs compared to SUTs. In particular, the\nsimulators use a ",Object(i.b)("inlineCode",{parentName:"p"},"traceparent")," header in place of the ",Object(i.b)("inlineCode",{parentName:"p"},"session_uuid")," from above.\nFor this reason base URLs used by each simulator have this structure."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-handlebars"}),"https://{itp_url}/testing/{my_uuid}/{recipient_uuid}/simulator/\n")),Object(i.b)("p",null,"Thus, the URL that an MMO1 simulator should use to send messages to Mojaloop\n(through the test platform) would be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"https://interop.gsmainclusivetechlab.io/testing/e5f5e817-94d6-4a43-a7ec-f7274b6d85c2/b2a85076-b748-4d93-8df1-2b39844e6d4b/simulator/\n")))}p.isMDXComponent=!0},204:function(e,t){},205:function(e,t){},223:function(e,t){}}]);