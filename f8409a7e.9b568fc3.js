(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n(2),i=n(9),a=(n(0),n(179)),s=n(200),r={id:"intro",title:"The Interoperability Test Platform",sidebar_label:"About"},l={id:"intro",title:"The Interoperability Test Platform",description:"The GSMA Inclusive Tech Lab continues to support the mobile money industry to",source:"@site/docs/intro.mdx",permalink:"/intro",editUrl:"https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/docs/intro.mdx",sidebar_label:"About",sidebar:"someSidebar",next:{title:"How to Use this Documentation",permalink:"/docsguide"}},c=[],d={rightToc:c};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The GSMA Inclusive Tech Lab continues to support the mobile money industry to\ndevelop the mobile financial ecosystem and enable a broad range of digital\ntransactions. It makes mobile wallets central to the lives of the financially\nexcluded and underserved, providing them with better solutions to manage their\nfinancial resources and face economic shocks. Mobile money is poised to evolve\nfrom a platform of 500 million accounts to reach more than a billion emerging\nmarket consumers, bringing financial access to the previously underserved and\nexcluded."),Object(a.b)("p",null,"The GSMA Inclusive Tech Lab has published a set of harmonised Mobile Money\nApplication Programming Interfaces (APIs), and now is looking at how to expand\nthe Mobile Money market through interoperability. The GSMA is working with its\nmembers, and mobile money industry partners to support the interoperability\nmarket using the Mojaloop technology. Thus, the Inclusive Tech Lab has dedicated\nefforts to create a platform for interoperability testing."),Object(a.b)("p",null,'This test environment provides a set of simulators to test different scenarios,\nwhere the System Under Test (SUT) can be a Service Provider (SP) or a Digital\nFinancial Services Provider (DFSP). The test environment is composed of a\nportal, test controller and set of simulators, each of which can be replaced\nwith "real" operational software. The diagram below describes an example of this\nflow.'),Object(a.b)(s.a,{options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2];\n      edge [ fontname="var(--ifm-font-family)", penwidth=2];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      simulator1 [ label="Simulator 1"]\n      sut [ label="System \nUnder Test"]\n      simulator2 [ label="Simulator 2"]\n      simulatorN [ label="Simulator N"]\n      ITP [ label="Test Platform"]\n      subgraph sim {\n        rank="same"\n        simulator1 -> sut -> simulator2 -> simulatorN -> simulator2 -> sut -> simulator1[ style="dashed"]\n      }\n      ITP -> {simulator1 sut simulator2 simulatorN} [dir="both"]\n      subgraph cluster_key {\n        style=invis;\n        {\n          node [ width=0.5, height=0.3, label="", style="invis" ];\n          rank = same;\n          edge[ minlen = 2 ];\n          leg1 -> leg2[ label="Actual Message" ];\n          leg2 -> leg4[ style = dashed, label="Logical Message"];\n        }\n      }\n      sut -> leg2 [style=invis] ;\n      simulator2 -> leg2 [style=invis] ;\n    }\n',mdxType:"Graphviz"}),Object(a.b)("p",null,"The Interoperability Test Platform allows the user to choose one of the\ncomponents in the diagram above to assess its behaviour in different scenarios.\nThis allows the interoperability of the system to be tested through several test\ncases, evaluating the different paths that transactions can take. This project\nis still growing and our goal is to add more components and assessment\nscenarios. The Interoperability Test Platform is also released under the MIT\nlicense, which allows interested parties to use the platform and its source\ncode."))}m.isMDXComponent=!0},195:function(e,t){},196:function(e,t){},206:function(e,t){}}]);