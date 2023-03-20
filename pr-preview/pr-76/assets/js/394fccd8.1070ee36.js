"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),h=o,y=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"The Golden Retriever: Making uploads survive browser crashes",date:new Date("2017-07-31T00:00:00.000Z"),authors:["arturi"],image:"http://uppy.io/img/blog/golden-retriever/uppy-team-kong.jpg",published:!0,slug:"2017/07/golden/retriever"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-76/blog/2017/07/golden/retriever",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-07-golden-retriever.md",source:"@site/blog/2017-07-golden-retriever.md",title:"The Golden Retriever: Making uploads survive browser crashes",description:"TL;DR: We're on a mission to improve file uploading on the web. We released",date:"2017-07-31T00:00:00.000Z",formattedDate:"July 31, 2017",tags:[],readingTime:6.98,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"The Golden Retriever: Making uploads survive browser crashes",date:"2017-07-31T00:00:00.000Z",authors:["arturi"],image:"http://uppy.io/img/blog/golden-retriever/uppy-team-kong.jpg",published:!0,slug:"2017/07/golden/retriever"},prevItem:{title:"Uppy 0.18: Dogumentation and The GoldenRetriever",permalink:"/uppy.io/pr-preview/pr-76/blog/2017/08/0.18"},nextItem:{title:"Uppy 0.17: Restrictions",permalink:"/uppy.io/pr-preview/pr-76/blog/2017/05/0.17"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR:")," We're on a mission to improve file uploading on the web. We released\n",(0,o.kt)("a",{parentName:"p",href:"https://tus.io"},"tus"),": the open protocol for resumable file uploads, as well as\nUppy: the next open source file uploader for web browsers. Uppy uses tus, which\nmakes it resilient to poor network conditions and crashing servers. Today we\u2019re\nlaunching an Uppy feature that also makes it resilient to browser crashes, which\nwe believe is an industry first. We\u2019re sharing a quick\n",(0,o.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#demo"},"demo")," video, a bit of\n",(0,o.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#uppy"},"background"),",\n",(0,o.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#how"},"how")," exactly we achieved this, and how you\ncan ",(0,o.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/#try"},"try")," it yourself."),(0,o.kt)("p",null,"*","*","*"),(0,o.kt)("p",null,"Don\u2019t you just hate it when you\u2019re about to share the perfect photos from your\ntrip to Iceland, and halfway through, your cat jumps on the keyboard and trashes\nyour browser? Or the battery in your laptop dies? Or you accidentally close the\ntab or navigate away? We hate that too!"),(0,o.kt)("p",null,"If action games have had checkpoints since 1687 \u2014 why can\u2019t file uploaders?\nWell, as it turns out, they can! We found a way to get those Iceland pics into\nthe hands of your loved ones with near-zero levels of frustration, even after a\ndreaded Blue Screen of Death! (if that is still a thing ;)"))}d.isMDXComponent=!0}}]);