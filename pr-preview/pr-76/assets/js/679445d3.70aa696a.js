"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Uppy 0.18: Dogumentation and The GoldenRetriever",image:"http://uppy.io/img/blog/0.18/golden-retriever.jpg",date:new Date("2017-09-15T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2017/08/0.18"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-76/blog/2017/08/0.18",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-08-0.18.md",source:"@site/blog/2017-08-0.18.md",title:"Uppy 0.18: Dogumentation and The GoldenRetriever",description:"Hi! Another month \u2014 a new Uppy release \ud83c\udf89",date:"2017-09-15T00:00:00.000Z",formattedDate:"September 15, 2017",tags:[],readingTime:4.78,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.18: Dogumentation and The GoldenRetriever",image:"http://uppy.io/img/blog/0.18/golden-retriever.jpg",date:"2017-09-15T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2017/08/0.18"},prevItem:{title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",permalink:"/uppy.io/pr-preview/pr-76/blog/2017/09/0.19"},nextItem:{title:"The Golden Retriever: Making uploads survive browser crashes",permalink:"/uppy.io/pr-preview/pr-76/blog/2017/07/golden/retriever"}},s={authorsImageUrls:[void 0]},p=[{value:"New documentation",id:"new-documentation",level:2},{value:"The GoldenRetriever",id:"the-goldenretriever",level:2},{value:"Multipart uploader is now XHRUpload",id:"multipart-uploader-is-now-xhrupload",level:2},{value:"AwsS3",id:"awss3",level:2},{value:"Transloadit <code>getAssemblyOptions</code>",id:"transloadit-getassemblyoptions",level:2},{value:"Webcam: 1, 2, 3 smile!",id:"webcam-1-2-3-smile",level:2},{value:"Tons of Uppy Server improvements",id:"tons-of-uppy-server-improvements",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hi! Another month \u2014 a new Uppy release \ud83c\udf89"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: current latest release is actually ",(0,n.kt)("inlineCode",{parentName:"em"},"0.19"),", but this post got delayed, so\nwe are publishing it first. ",(0,n.kt)("inlineCode",{parentName:"em"},"0.19")," post is coming next.")),(0,n.kt)("h2",{id:"new-documentation"},"New documentation"),(0,n.kt)("p",null,"Documentation for Uppy has been re-written, and now features chapters on Uppy\u2019s\nsettings and API, using various plugins, and running Uppy Server. Check it out:\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/"},"https://uppy.io/docs/"),". More chapters to come!"),(0,n.kt)("h2",{id:"the-goldenretriever"},"The GoldenRetriever"),(0,n.kt)("p",null,"The GoldenRetriever has been released as a public beta. For details, please\nrefer to the previous post,\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/07/golden-retriever/"},"The GoldenRetriever: Making uploads survive browser crashes"),",\nbut the gist is: when enabled, this plugin will save uppy-state to localStorage\non every change, and then if your browser crashes, or you accidentaly navigate\naway from a tab,later when you return, your uploads will resume like nothing\nhappened. Spoiler: it uses Service Workers and IndexedDB."),(0,n.kt)("img",{className:"border",src:"/img/blog/0.18/golden-retriever.jpg"}),(0,n.kt)("h2",{id:"multipart-uploader-is-now-xhrupload"},"Multipart uploader is now XHRUpload"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Multipart")," has been replaced by a more flexible ",(0,n.kt)("inlineCode",{parentName:"p"},"XHRUpload"),", so that other\nplugins, like ",(0,n.kt)("inlineCode",{parentName:"p"},"AwsS3"),", can depend on it."),(0,n.kt)("h2",{id:"awss3"},"AwsS3"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"AwsS3")," plugin can be used to upload files directly to an S3 bucket."),(0,n.kt)("p",null,"As of now, the AwsS3 plugin \u201cdecorates\u201d the ",(0,n.kt)("inlineCode",{parentName:"p"},"XHRUpload")," plugin. To upload files\ndirectly to S3, both the ",(0,n.kt)("inlineCode",{parentName:"p"},"XHRUpload")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AwsS3")," plugins must be used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// No options have to be provided to the XHRUpload plugin,\n// the S3 plugin will configure it.\nuppy.use(XHRUpload);\nuppy.use(AwsS3, {\n    // Options for S3\n});\n")),(0,n.kt)("p",null,"Please find ",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/aws-s3/"},"more info and examples")," in the docs."),(0,n.kt)("h2",{id:"transloadit-getassemblyoptions"},"Transloadit ",(0,n.kt)("inlineCode",{parentName:"h2"},"getAssemblyOptions")),(0,n.kt)("p",null,"We\u2019ve added a ",(0,n.kt)("inlineCode",{parentName:"p"},"getAssemblyOptions")," function option to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Transloadit")," plugin.\nThis option can return an object or a Promise for an object to configure the\nTransloadit assembly. The returned object can contain params, a signature, and\nfields."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"getAssemblyOptions")," is called on each file, so each file can return a different\nset of options. Files that returned the same options are bundled together and\nrun through a single assembly. Files that return different options will be run\nthrough different assemblies."),(0,n.kt)("p",null,"This means that it is now possible to make assembly parameters depend on user\ninput from eg. the ",(0,n.kt)("inlineCode",{parentName:"p"},"MetaData")," plugin, and have different parameters for\ndifferent files. It\u2019s now also possible to generate very short-lived signatures\non the server when an upload starts, by calling fetch inside the\n",(0,n.kt)("inlineCode",{parentName:"p"},"getAssemblyOptions")," hook."),(0,n.kt)("h2",{id:"webcam-1-2-3-smile"},"Webcam: 1, 2, 3 smile!"),(0,n.kt)("p",null,"Webcam plugin now has a new exciting feature \u2014 \u23f1 ",(0,n.kt)("inlineCode",{parentName:"p"},"countdown"),". If you set it to 3\nseconds, for example, then after pressing the capture button, Uppy will count to\n3 before actually taking your selfie, so you\u2019ll have the time to fix your hair:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Webcam, { countdown: 3 });\n")),(0,n.kt)("h2",{id:"tons-of-uppy-server-improvements"},"Tons of Uppy Server improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Uppy Server uses Informer to display errors;"),(0,n.kt)("li",{parentName:"ul"},"Pictures from Instagram carousels show up inline;"),(0,n.kt)("li",{parentName:"ul"},"Uppy server now returns an ",(0,n.kt)("inlineCode",{parentName:"li"},"i-am")," containing its instance url;"),(0,n.kt)("li",{parentName:"ul"},"Disable socket channel from restarting an already completed file download;"),(0,n.kt)("li",{parentName:"ul"},"Uppy client whitelisting has been made optional, you may use wildcard instead;"),(0,n.kt)("li",{parentName:"ul"},"Added feature to set master oauth redirect uri for multiple uppy-server\ninstances;"),(0,n.kt)("li",{parentName:"ul"},"Added options to support for redis session storage on the standalone server;"),(0,n.kt)("li",{parentName:"ul"},"Uppy-server can be started as a binary ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy-server"),";"),(0,n.kt)("li",{parentName:"ul"},"Downloaded files are stored based on uuids;"),(0,n.kt)("li",{parentName:"ul"},"Upload state is stored on redis (useful for Goldern Retriever plugin).")),(0,n.kt)("h2",{id:"release-notes"},"Release Notes"),(0,n.kt)("p",null,"Here is the full list of changes for version ",(0,n.kt)("inlineCode",{parentName:"p"},"0.18"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"goldenretriver: use Service Woker first, then IndexedDB, add file limits for\nIndexedDB, figure out what restores from where, add throttling for\nlocalStorage state sync (@goto-bus-stop @arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: flag to hide the upload button, for cases when you want to manually\nstat the upload (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"dashboard: place close btn inside the Dashboard, don\u2019t close on click outside,\nplace source icon near the file size (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"core: informer becomes a core API, ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy.info('Smile! \ud83d\udcf8', 'warning', 5000)"),"\nso its more concise with ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy.log('my msg')")," and supports different UI\nimplementations (@arturi, #271)"),(0,n.kt)("li",{parentName:"ul"},"docs: first stage \u2014 on using plugins, all options, list of plugins, i18n,\nuppy-server (@arturi, @goto-bus-stop, @ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"provider: file size sorting (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"provider: show loading screen when checking auth too (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"uploaders: add direct-to-s3 upload plugin (@goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"core: ability to re-upload all files, even ",(0,n.kt)("inlineCode",{parentName:"li"},"uploadComplete")," ones, reset\nprogress (@arturi)"),(0,n.kt)("li",{parentName:"ul"},"goldenretriver: recover selected or in progress files after a browser crash or\nclosed tab: alpha-version, add LocalStorage, Service Worker and IndexedDB\n(@arturi @goto-bus-stop @nqst #268)"),(0,n.kt)("li",{parentName:"ul"},"xhrupload: add XHRUpload a more flexible successor to Multipart, so that S3\nplugin can depend on it (@goto-bus-stop #242)"),(0,n.kt)("li",{parentName:"ul"},"core: add getFile method (@goto-bus-stop, #263)"),(0,n.kt)("li",{parentName:"ul"},"provider: use informer to display errors (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"provider: flatten instagram carousels #234 (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: add uppy-server url as ",(0,n.kt)("inlineCode",{parentName:"li"},"i-am")," header (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: disable socket channel from restarting an already completed file\ndownload (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: make uppy client whitelisting optional. You may use wildcard instead\n(@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: master oauth redirect uri for multiple uppy-server instances"),(0,n.kt)("li",{parentName:"ul"},"server: options support for redis session storage on standalone server\n(@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: start uppy-server as binary ",(0,n.kt)("inlineCode",{parentName:"li"},"uppy-server")," (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: store downloaded files based on uuids (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: store upload state on redis (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"server: use uppy informer for server errors (@ifedapoolarewaju, #272)"),(0,n.kt)("li",{parentName:"ul"},"server: whitelist multiple uppy clients (@ifedapoolarewaju)"),(0,n.kt)("li",{parentName:"ul"},"transloadit: emit an event when an assembly is created (@goto-bus-stop / #244)"),(0,n.kt)("li",{parentName:"ul"},"transloadit: function option for file-dependent ",(0,n.kt)("inlineCode",{parentName:"li"},"params")," (@goto-bus-stop /\n#250)"),(0,n.kt)("li",{parentName:"ul"},"tus: Save upload URL early on (@goto-bus-stop #261)"),(0,n.kt)("li",{parentName:"ul"},"tus: return immediately if no files are selected (@goto-bus-stop #245)"),(0,n.kt)("li",{parentName:"ul"},"uppy-server: add uppy-server metrics to Librato (@ifedapoolarewaju @kiloreux)"),(0,n.kt)("li",{parentName:"ul"},"webcam: add 1, 2, 3, smile! to webcam, onBeforeSnapshothook (@arturi, #187,\n#248)"),(0,n.kt)("li",{parentName:"ul"},"website: live example on the homepage, \u201ctry me\u201d button, improve /examples\n(@arturi)")),(0,n.kt)("p",null,"The Uppy Team"))}m.isMDXComponent=!0}}]);