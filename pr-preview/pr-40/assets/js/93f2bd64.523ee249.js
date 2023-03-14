"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:new Date("2022-12-23T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-40/blog/2022/12/3.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-12-3.3.md",source:"@site/blog/2022-12-3.3.md",title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",description:"\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three minor releases ago we\u2019ve introduced Uppy 3.0. It\u2019s time to give you an update on what\u2019s been cooking in the Uppy-Transloadit headquarters (besides cranberry sauce) for the past couple of months.",date:"2022-12-23T00:00:00.000Z",formattedDate:"December 23, 2022",tags:[],readingTime:2.48,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:"2022-12-23T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},nextItem:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",permalink:"/uppy.io/pr-preview/pr-40/blog/2022/09/3.0"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0]},s=[{value:"Safer AWS S3 Multipart uploads on slow connections",id:"safer-aws-s3-multipart-uploads-on-slow-connections",level:2},{value:"Single File Mode",id:"single-file-mode",level:2},{value:"Bug fixes and Upgrades",id:"bug-fixes-and-upgrades",level:2},{value:"Companion",id:"companion",level:2},{value:"Locales",id:"locales",level:2}],u={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9232).Z,width:"1400",height:"1097"})),(0,r.kt)("p",null,"\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three ",(0,r.kt)("inlineCode",{parentName:"p"},"minor")," releases ago we\u2019ve introduced Uppy 3.0. It\u2019s time to give you an update on what\u2019s been cooking in the Uppy-Transloadit headquarters (besides cranberry sauce) for the past couple of months."),(0,r.kt)("p",null,"In short: AWS S3 Multipart stability improvements, Single File Mode for the Dashboard, more tests and bugfixes, new locales."),(0,r.kt)("h2",{id:"safer-aws-s3-multipart-uploads-on-slow-connections"},"Safer AWS S3 Multipart uploads on slow connections"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," has been serving well for people who prefer a ",(0,r.kt)("em",{parentName:"p"},"client-to","_","s3")," setup with Uppy. However, some uploads could occasionally fail in poor network conditions. It turned out, simultaneously signing and uploading many chunks at once saturated the HTTP/1.1 connection limit, which lead to signatures expiring by the time Uppy started uploading the next chunk."),(0,r.kt)("p",null,"We\u2019ve refactored our internal queue mechanism to sign chunks right before we begin uploading them to the remote server. When the upload is paused, the queue is emptied and re-populated again on resume. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," for this plugin has been set to ",(0,r.kt)("inlineCode",{parentName:"p"},"6")," and the default S3 signature expiry has been lifted from ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"800")," seconds."),(0,r.kt)("h2",{id:"single-file-mode"},"Single File Mode"),(0,r.kt)("p",null,"Often times people only want to upload a single file (most commonly an image) via Uppy. But the Dashboard UI is tailored to handling many files at once, and it used to display the single image as a small, sad-looking block in the corner. This ends now! (Actually, it ended a few releases ago, figure of speech)."),(0,r.kt)("img",{src:"/img/blog/3.1-3.3/single-file-mode.jpg",class:"border"}),(0,r.kt)("p",null,"With only one file selected, we\u2019ll display it large and centered, and make sure to re-generate the image preview so it\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"600px")," wide, looking nice and sleek on modern displays."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/4188"},"PR #4188")," for more screenshots."),(0,r.kt)("h2",{id:"bug-fixes-and-upgrades"},"Bug fixes and Upgrades"),(0,r.kt)("p",null,"We\u2019ve upgraded Typescript to ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.8")," and Jest to ",(0,r.kt)("inlineCode",{parentName:"p"},"v29"),", among other tools and packages."),(0,r.kt)("p",null,"We are now additionally testing that Uppy packages are correctly bundled with the latest Rollup, Webpack, Parcel, Vite, and ESBuild."),(0,r.kt)("p",null,"Notable bug fixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XHR Upload: Queue requests for socket token for remote files"),(0,r.kt)("li",{parentName:"ul"},"Core: Prevent crashes when a file is removed before the upload starts"),(0,r.kt)("li",{parentName:"ul"},"Golden Retriever: Fixed upload retries"),(0,r.kt)("li",{parentName:"ul"},"AWS S3 and XHR Upload: Fixed Cannot mark a queued request as done in MiniXHRUpload"),(0,r.kt)("li",{parentName:"ul"},"Webcam: Set default videoConstraints"),(0,r.kt)("li",{parentName:"ul"},"Image Editor: Fix controls in small Dashboard")),(0,r.kt)("p",null,"See the full list in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/main/CHANGELOG.md"},"changelog"),"."),(0,r.kt)("h2",{id:"companion"},"Companion"),(0,r.kt)("p",null,"And of course, this festive season we are not forgetting Companion under the tree:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Throttle progress by time"),(0,r.kt)("li",{parentName:"ul"},"Added workaround for S3 accelerated endpoints"),(0,r.kt)("li",{parentName:"ul"},"Send expire info for non-multipart uploads"),(0,r.kt)("li",{parentName:"ul"},"Send expiry time alongside S3 signed requests"),(0,r.kt)("li",{parentName:"ul"},"Added support for AbortSignal"),(0,r.kt)("li",{parentName:"ul"},"Prevent preflight race condition")),(0,r.kt)("h2",{id:"locales"},"Locales"),(0,r.kt)("p",null,"Uzbek language pack was added, while Polish and Ukrainian language packs were updated."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"That\u2019s it for our updates! Stay tuned for more in 2023 and happy holidays (if you are celebrating)! Cheers. In the meantime, we are driving home, driving home for Christmas. Yeah."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(310).Z,width:"480",height:"270"})))}d.isMDXComponent=!0},9232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-christmas-7bdeb276706cce5b1944c93b7680ccfa.jpg"},310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/driving-home-0b068883d13788971c4bd54faf9e66f6.gif"}}]);