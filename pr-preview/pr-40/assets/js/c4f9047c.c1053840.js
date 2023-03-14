"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Uppy 0.18: Dogumentation and The GoldenRetriever",image:"http://uppy.io/img/blog/0.18/golden-retriever.jpg",date:new Date("2017-09-15T00:00:00.000Z"),author:"arturi",published:!0,slug:"2017/08/0.18"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-40/blog/2017/08/0.18",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-08-0.18.md",source:"@site/blog/2017-08-0.18.md",title:"Uppy 0.18: Dogumentation and The GoldenRetriever",description:"Hi! Another month \u2014 a new Uppy release \ud83c\udf89",date:"2017-09-15T00:00:00.000Z",formattedDate:"September 15, 2017",tags:[],readingTime:4.78,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 0.18: Dogumentation and The GoldenRetriever",image:"http://uppy.io/img/blog/0.18/golden-retriever.jpg",date:"2017-09-15T00:00:00.000Z",author:"arturi",published:!0,slug:"2017/08/0.18"},prevItem:{title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/09/0.19"},nextItem:{title:"The Golden Retriever: Making uploads survive browser crashes",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/07/golden/retriever"}},l={authorsImageUrls:[void 0]},u=[{value:"New documentation",id:"new-documentation",level:2},{value:"The GoldenRetriever",id:"the-goldenretriever",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hi! Another month \u2014 a new Uppy release \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: current latest release is actually ",(0,o.kt)("inlineCode",{parentName:"em"},"0.19"),", but this post got delayed, so we are publishing it first. ",(0,o.kt)("inlineCode",{parentName:"em"},"0.19")," post is coming next.")),(0,o.kt)("h2",{id:"new-documentation"},"New documentation"),(0,o.kt)("p",null,"Documentation for Uppy has been re-written, and now features chapters on Uppy\u2019s settings and API, using various plugins, and running Uppy Server. Check it out: ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/"},"https://uppy.io/docs/"),". More chapters to come!"),(0,o.kt)("h2",{id:"the-goldenretriever"},"The GoldenRetriever"),(0,o.kt)("p",null,"The GoldenRetriever has been released as a public beta. For details, please refer to the previous post, ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/07/golden-retriever/"},"The GoldenRetriever: Making uploads survive browser crashes"),", but the gist is: when enabled, this plugin will save uppy-state to localStorage on every change, and then if your browser crashes, or you accidentaly navigate away from a tab,later when you return, your uploads will resume like nothing happened. Spoiler: it uses Service Workers and IndexedDB."),(0,o.kt)("img",{class:"border",src:"/img/blog/0.18/golden-retriever.jpg"}))}c.isMDXComponent=!0}}]);