(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(83)),s={title:"Creating Test Case",sidebar_label:"Creating Test Case"},i={unversionedId:"testcases/creating-tc",id:"testcases/creating-tc",isDocsHomePage:!1,title:"Creating Test Case",description:"Write something here",source:"@site/docs/testcases/creating-tc.md",slug:"/testcases/creating-tc",permalink:"/testcases/creating-tc",version:"current",sidebar_label:"Creating Test Case",sidebar:"someSidebar",previous:{title:"Test Case Template",permalink:"/testcases/template-tc"},next:{title:"Proposing New Use Cases",permalink:"/testcases/proposing-uc"}},c=[{value:"Proposing New Test Cases",id:"proposing-new-test-cases",children:[]},{value:"Using the Test Case visual Editor",id:"using-the-test-case-visual-editor",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Write something here"),Object(o.b)("h2",{id:"proposing-new-test-cases"},"Proposing New Test Cases"),Object(o.b)("p",null,"Any party interested in using the Interoperability Test Platform can propose new\ntest cases using the template presented here. For this, it is important to\nfollow the creation guide ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./proposing-uc"}),"starting from a use case"),", to\nunderstand its application context, then determine which paths should/need to be\ntested. Then, it is possible to use the template shown below to create the test\ncases for each path. The creation of new test cases is based on the following\nroadmap:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Elaboration and understanding of the scenario you want to test;"),Object(o.b)("li",{parentName:"ol"},"Creation of a use case that can be implemented by ITP;"),Object(o.b)("li",{parentName:"ol"},"Description of the use case following the model available\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/testcases/proposing-uc"}),"here"),";"),Object(o.b)("li",{parentName:"ol"},"Definition of the paths that should be tested for the use case (happy and\nunhappy flows);"),Object(o.b)("li",{parentName:"ol"},"Preparation of each test case following the model below.")),Object(o.b)("h2",{id:"using-the-test-case-visual-editor"},"Using the Test Case visual Editor"),Object(o.b)("p",null,"Although test cases are often quicker to produce using the YAML syntax, it is\nalso possible for users with the Test Case Creator role to edit test cases\ndirectly through the web interface."))}p.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);