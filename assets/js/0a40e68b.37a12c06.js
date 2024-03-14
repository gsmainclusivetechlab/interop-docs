(self.webpackChunkinterop_docs=self.webpackChunkinterop_docs||[]).push([[276],{2176:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var o=n(5893),i=n(1151),s=n(4841);const a={slug:"/",title:"The Interoperability Test Platform",sidebar_label:"About"},r=void 0,l={id:"home",title:"The Interoperability Test Platform",description:"The GSMA Inclusive Tech Lab continues to support the mobile money industry to",source:"@site/docs/home.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/",title:"The Interoperability Test Platform",sidebar_label:"About"},sidebar:"someSidebar",next:{title:"Documentation Guide",permalink:"/docsguide"}},u={},c=[];function d(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The GSMA Inclusive Tech Lab continues to support the mobile money industry to\ndevelop the mobile financial ecosystem and enable a broad range of digital\ntransactions. It makes mobile wallets central to the lives of the financially\nexcluded and underserved, providing them with better solutions to manage their\nfinancial resources and face economic shocks. Mobile money is poised to evolve\nfrom a platform of 500 million accounts to reach more than a billion emerging\nmarket consumers, bringing financial access to the previously underserved and\nexcluded."}),"\n",(0,o.jsx)(t.p,{children:"The GSMA Inclusive Tech Lab has published a set of harmonised Mobile Money\nApplication Programming Interfaces (APIs), and now is looking at how to expand\nthe Mobile Money market through interoperability. The GSMA is working with its\nmembers, and mobile money industry partners to support the interoperability\nmarket using the Mojaloop technology. Thus, the Inclusive Tech Lab has dedicated\nefforts to create a platform for interoperability testing."}),"\n",(0,o.jsx)(t.p,{children:'The test environment is composed of a portal, test controller and set of\nsimulators, each of which can be replaced with "real" operational system under test.\nThe diagram below describes an example of this flow.'}),"\n","\n","\n",(0,o.jsx)(s.o,{timeout:1e3,options:{width:"100%",height:"auto"},dot:'\n    digraph {\n      node [ fontname="var(--ifm-font-family)", shape="box", margin=0.3, penwidth=2];\n      edge [ fontname="var(--ifm-font-family)", penwidth=2];\n      rankdir="TD"\n      ratio="fill";\n      size="3,1";\n      simulator1 [ label="Simulator 1"]\n      sut [ label="System \nUnder Test"]\n      simulator2 [ label="Simulator 2"]\n      simulatorN [ label="Simulator N"]\n      ITP [ label="Test Platform"]\n      subgraph sim {\n        rank="same"\n        simulator1 -> sut -> simulator2 -> simulatorN -> simulator2 -> sut -> simulator1[ style="dashed"]\n      }\n      ITP -> {simulator1 sut simulator2 simulatorN} [dir="both"]\n      subgraph cluster_key {\n        style=invis;\n        {\n          node [ width=0.5, height=0.3, label="", style="invis" ];\n          rank = same;\n          edge[ minlen = 2 ];\n          leg1 -> leg2[ label="Actual Message" ];\n          leg2 -> leg4[ style = dashed, label="Logical Message"];\n        }\n      }\n      sut -> leg2 [style=invis] ;\n      simulator2 -> leg2 [style=invis] ;\n    }\n'}),"\n",(0,o.jsx)(t.p,{children:"The Interoperability Test Platform allows the user to choose one of the\ncomponents in the diagram above to assess its behaviour in different scenarios.\nThis allows the interoperability of the system to be tested through several test\ncases, evaluating the different paths that transactions can take. This project\nis still growing and our goal is to add more components and assessment\nscenarios. The Interoperability Test Platform is also released under the MIT\nlicense, which allows interested parties to use and modify the platform and its\nsource code."})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4841:function(e,t,n){"use strict";n.d(t,{o:function(){return l}});var o=n(3366),i=n(5120),s=n(7294),a=n(5893),r=["timeout"],l=function(e){var t=e.timeout,n=void 0===t?1e3:t,l=(0,o.Z)(e,r),u=(0,s.useState)(!1),c=u[0],d=u[1];return(0,s.useEffect)((function(){setTimeout((function(){return d(!0)}),n)}),[]),c?(0,a.jsx)(i.w,Object.assign({},l)):(0,a.jsx)("p",{children:"Loading..."})}},6825:function(){},5159:function(){},5701:function(){}}]);