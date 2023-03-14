"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",date:new Date("2021-04-05T00:00:00.000Z"),author:"arturi",image:"https://uppy.io/img/blog/1.27/drop-target.jpg",published:!0,slug:"2021/04/1.27"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-40/blog/2021/04/1.27",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-04-1.27.md",source:"@site/blog/2021-04-1.27.md",title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",description:"In Uppy 1.27 we\u2019ve added a new @uppy/drop-target plugin, enabled support for Vue 3, introduced dynamic metaFields option for Dashboard, Google Drive now lists documents that have been shared with you.",date:"2021-04-05T00:00:00.000Z",formattedDate:"April 5, 2021",tags:[],readingTime:2.65,hasTruncateMarker:!0,authors:[{name:"arturi"}],frontMatter:{title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",date:"2021-04-05T00:00:00.000Z",author:"arturi",image:"https://uppy.io/img/blog/1.27/drop-target.jpg",published:!0,slug:"2021/04/1.27"},prevItem:{title:"Uppy 1.29: Golden Retriever, disableLocalFiles, Webcam previews, uppy.logout",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/04/1.29"},nextItem:{title:"Uppy 1.26: Dashboard \u201cdisabled\u201d, per-file headers",permalink:"/uppy.io/pr-preview/pr-40/blog/2021/02/1.26"}},l={authorsImageUrls:[void 0]},s=[{value:"Drop Target",id:"drop-target",level:2},{value:"Google Drive \u201cShared with me\u201d",id:"google-drive-shared-with-me",level:2},{value:"Dashboard Dynamic <code>metaFields</code>",id:"dashboard-dynamic-metafields",level:2},{value:"Vue 3",id:"vue-3",level:2},{value:"Companion CORS and Better Testing",id:"companion-cors-and-better-testing",level:2},{value:"npm 7",id:"npm-7",level:2},{value:"New Linter Rules",id:"new-linter-rules",level:2},{value:"Misc",id:"misc",level:2},{value:"Download",id:"download",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In Uppy 1.27 we\u2019ve added a new ",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin, enabled support for Vue 3, introduced dynamic ",(0,n.kt)("inlineCode",{parentName:"p"},"metaFields")," option for Dashboard, Google Drive now lists documents that have been shared with you."),(0,n.kt)("video",{alt:"Demo video showing Uppy with Drop Target plugin which allows accepting drag and drop anywhere on a page",poster:"/img/blog/1.26/dashboard-disabled.jpg",muted:!0,autoplay:!0,loop:!0},(0,n.kt)("source",{src:"/img/blog/1.27/drop-target.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/1.27/drop-target.mp4"),(0,n.kt)("h2",{id:"drop-target"},"Drop Target"),(0,n.kt)("p",null,"With ",(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," it is now possible to turn your whole app / page (or any other element, like ",(0,n.kt)("inlineCode",{parentName:"p"},"<textarea>"),", for instance) into a drag-and-drop area:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Uppy Dashboard UI with drop target plugin",src:a(954).Z,width:"1600",height:"812"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(DropTarget, {\n  target: document.body,\n})\n")),(0,n.kt)("h2",{id:"google-drive-shared-with-me"},"Google Drive \u201cShared with me\u201d"),(0,n.kt)("p",null,"If you connect Uppy to Google Drive, you\u2019ll now see a new virtual folder called \u201cShared with me\u201d \u2014 there you\u2019ll find (hard to guess, I know), documents that have been shared with you."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Google Drive \u201cShared with me\u201d folder",src:a(5320).Z,width:"1226",height:"968"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2758"},"PR #2758"),"."),(0,n.kt)("h2",{id:"dashboard-dynamic-metafields"},"Dashboard Dynamic ",(0,n.kt)("inlineCode",{parentName:"h2"},"metaFields")),(0,n.kt)("p",null,"Sometimes you may want to show specific meta fields for certain type of files. For instance, you may want to show location and alt attribute for images. Now, instead of setting a fixed array of fields, you can pass a function that will be called for each file, returning an array of fields from it:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},".use(Dashboard, {\n  trigger: '#pick-files',\n  metaFields: (file) => {\n    const fields = [{ id: 'name', name: 'File name' }]\n    if (file.type.startsWith('image/')) {\n      fields.push({ id: 'location', name: 'Photo Location' })\n      fields.push({ id: 'alt', name: 'Alt text' })\n    }\n    return fields\n  },\n})\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#metaFields"},"Dashboard ",(0,n.kt)("inlineCode",{parentName:"a"},"metaFields"))," docs for details."),(0,n.kt)("h2",{id:"vue-3"},"Vue 3"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/vue")," integration now supports Vue 3! This is done by checking the arguments of the ",(0,n.kt)("inlineCode",{parentName:"p"},"render")," function and determining whether it is using Vue 2 or 3, and then returning the appropriate rendering method."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2755"},"PR #2755"),"."),(0,n.kt)("h2",{id:"companion-cors-and-better-testing"},"Companion CORS and Better Testing"),(0,n.kt)("p",null,"In Companion, we\u2019ve improved unit testing DX (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2827"},"#2827"),") and switched to using the ",(0,n.kt)("inlineCode",{parentName:"p"},"cors")," module instead of custom cors logic (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2823"},"#2823"),")."),(0,n.kt)("p",null,"@coreprocess submited a fix that allows Companion to serve on a subpath (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2797"},"#2797"),"), and added Redis pubsub scope setting (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2804"},"#2804"),")!"),(0,n.kt)("h2",{id:"npm-7"},"npm 7"),(0,n.kt)("p",null,"We\u2019ve finally upgraded our monorepo to npm 7 and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces"},"Workspaces"),". If you are a contributor, please upgrade ",(0,n.kt)("inlineCode",{parentName:"p"},"npm install npm -g"),", as npm 7 is now required for the Uppy repo."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2835"},"PR #2835")),(0,n.kt)("h2",{id:"new-linter-rules"},"New Linter Rules"),(0,n.kt)("p",null,"Quite a few new rules have been added to our eslint-config, which is now mostly ",(0,n.kt)("inlineCode",{parentName:"p"},"eslint-config-transloadit")," with some custom uppy-specific overrides."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/2796"},"PR #2796")),(0,n.kt)("h2",{id:"misc"},"Misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@uppy/xhr-upload: Set headers just before the upload in case options changed (#2781 / @rart)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/aws-s3-multipart: Aws-s3-multipart sends outdated file info to upload-success event (#2828 / @goto-bus-stop)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/aws-s3: removeUploader triggered on uninstall (#2824 / @slawexxx44)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/webcam: Fix issue where the modes: ",(0,n.kt)("inlineCode",{parentName:"li"},"['audio-only']")," option was ignored when getting tracks from the media stream (#2810 / @dominiceden)"),(0,n.kt)("li",{parentName:"ul"},"website: Website improvements (#2803 / @nqst)")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1270"},"changelog")," for details."),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("a",{class:"TryButton",href:"https://releases.transloadit.com/uppy/v1.27.0/uppy-v1.27.0.zip"},"Download Uppy 1.27.0"),(0,n.kt)("small",null,"Or [include from CDN](https://uppy.io/docs/). Note that it\u2019s highly recommended to [pick and choose specific Uppy plugins](https://uppy.io/docs/plugins/#package-list) that you need, and install them with `npm` or `yarn`. This is because the bundle includes all Uppy plugins at once."))}u.isMDXComponent=!0},954:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/drop-target-ece163fa99fef8451195acc5d4077e73.jpg"},5320:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/shared-with-me-caed07cd7437ba1a316ab05327ce55e7.jpg"}}]);