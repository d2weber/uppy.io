"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={title:"Uppy 1.6: setOptions(), Icelandic and Thai",date:new Date("2019-11-13T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2019/11/1.6"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-76/blog/2019/11/1.6",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-11-1.6.md",source:"@site/blog/2019-11-1.6.md",title:"Uppy 1.6: setOptions(), Icelandic and Thai",description:"This release adds a long-awaited uppy.setOptions() API, allowing you to update",date:"2019-11-13T00:00:00.000Z",formattedDate:"November 13, 2019",tags:[],readingTime:1.71,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.6: setOptions(), Icelandic and Thai",date:"2019-11-13T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2019/11/1.6"},prevItem:{title:"Uppy 1.7: A Small One",permalink:"/uppy.io/pr-preview/pr-76/blog/2019/12/1.7"},nextItem:{title:"Uppy 1.5: Facebook and OneDrive (beta) support, upload cancellation",permalink:"/uppy.io/pr-preview/pr-76/blog/2019/10/1.5"}},l={authorsImageUrls:[void 0]},s=[{value:"uppy.setOptions()",id:"uppysetoptions",level:2},{value:"Misc",id:"misc",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release adds a long-awaited ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.setOptions()")," API, allowing you to update\noptions of Uppy and its plugins on the fly. It also includes locales for the\nIcelandic and Thai languages!"),(0,o.kt)("h2",{id:"uppysetoptions"},"uppy.setOptions()"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".setOptions()")," for Uppy and its plugins supports most options that can be\neasily changed on the fly: ",(0,o.kt)("inlineCode",{parentName:"p"},"restrictions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),", Dashboard\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"note")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"metaFields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disableThumbnailGenerator"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"showProgressDetails"),", etc."),(0,o.kt)("p",null,"\u26a0\ufe0f Note that some options like ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," cannot be changed on\nthe fly, as internal statefull things depend on them."),(0,o.kt)("p",null,"Here\u2019s how the magic works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = Uppy({\n    restrictions: {\n        maxNumberOfFiles: 3,\n    },\n});\nuppy.use(Dashboard, {\n    note: 'You can upload up to 3 files',\n});\n")),(0,o.kt)("p",null,"Now, based on some condition in our app, we want to allow more files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Updating Uppy options\nuppy.setOptions({\n    restrictions: {\n        maxNumberOfFiles: 5,\n    },\n});\n// Updating Dashboard options\nuppy\n    .getPlugin('Dashboard')\n    .setOptions({ note: 'You can upload up to 5 files' });\n")),(0,o.kt)("p",null,"Say, later on, the user changed their locale and we would like to reflect that\nin Uppy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fi_FI = require('@uppy/locales/lib/fi_FI');\n\nuppy.setOptions({\n    locale: fi_FI,\n});\n")),(0,o.kt)("p",null,"Now, Uppy will bark in Finnish! Hau, hau, hau!"),(0,o.kt)("p",null,"Please see\n",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#uppy-setOptions-opts"},(0,o.kt)("inlineCode",{parentName:"a"},"uppy.setOptions()")," docs")," for\ndetails."),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/facebook: In the new Facebook plugin (beta), we now use grid view with\nbig image previews for albums (@ifedapoolarewaju, #1886)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: The thumbnail size has been increased for Dropbox\n(@ifedapoolarewaju, #1917)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/dashboard: The retry icons have been fixed on individual files\n(@goto-bus-stop, #1888)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: Support ",(0,o.kt)("inlineCode",{parentName:"li"},"COMPANION_AWS_ENDPOINT")," in aws-companion example so\nit can be used with other S3-compatible services (@goto-bus-stop,\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/commit/1ab63aa395859815871c4e1e62dda6e9ca66595f"},"1ab63aa"),")"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: Add S3 useAccelerateEndpoint option (@steverob, #1884)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: only set ",(0,o.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials")," header when\norigin is whitelisted (@ifedapoolarewaju, #1901)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/transloadit: We now send ",(0,o.kt)("inlineCode",{parentName:"li"},"Transloadit-Client")," header with HTTP API\nrequests (@goto-bus-stop, #1919)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/tus: Uploads are now being terminated when cancelling, instead of just\npausing and letting them expire (@ifedapoolarewaju, #1909)"),(0,o.kt)("li",{parentName:"ul"},"build: Updated Lerna, ESlint, and Jest (@goto-bus-stop)")),(0,o.kt)("p",null,"As always, you can find the full list of changes and package versions, as well\nas future plans, in our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md"},"changelog"),"."))}d.isMDXComponent=!0}}]);