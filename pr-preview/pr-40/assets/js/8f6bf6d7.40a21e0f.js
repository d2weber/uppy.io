"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Uppy 0.20: React, Retry & Time Travel",image:"https://uppy.io/img/blog/0.20/dnd-gray.jpg",date:new Date("2017-10-05T00:00:00.000Z"),author:"renee",published:!0,slug:"2017/10/0.20"},l=void 0,i={permalink:"/uppy.io/pr-preview/pr-40/blog/2017/10/0.20",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-10-0.20.md",source:"@site/blog/2017-10-0.20.md",title:"Uppy 0.20: React, Retry & Time Travel",description:"We are proud to present Uppy 0.20. This one focuses on React and Redux support, adding storage expirations to GoldenRetriever and upload retries. Enjoy!",date:"2017-10-05T00:00:00.000Z",formattedDate:"October 5, 2017",tags:[],readingTime:5.405,hasTruncateMarker:!0,authors:[{name:"renee"}],frontMatter:{title:"Uppy 0.20: React, Retry & Time Travel",image:"https://uppy.io/img/blog/0.20/dnd-gray.jpg",date:"2017-10-05T00:00:00.000Z",author:"renee",published:!0,slug:"2017/10/0.20"},prevItem:{title:"Uppy 0.21: End to End Tests, Accessibility, Additional Security for Uppy Server",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/10/0.21"},nextItem:{title:"Uppy 0.19: Tests, Informer details and better\xa0APIs",permalink:"/uppy.io/pr-preview/pr-40/blog/2017/09/0.19"}},p={authorsImageUrls:[void 0]},s=[{value:"Uppy React components",id:"uppy-react-components",level:2},{value:"Redux",id:"redux",level:2},{value:"Redux DevTools",id:"redux-devtools",level:2},{value:"Retries",id:"retries",level:2},{value:"Re-designed Drag and Drop plugin",id:"re-designed-drag-and-drop-plugin",level:2},{value:"The Golden Retriever cleans up after itself",id:"the-golden-retriever-cleans-up-after-itself",level:2},{value:"Misc good stuff",id:"misc-good-stuff",level:2},{value:"Full Changelog",id:"full-changelog",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are proud to present Uppy ",(0,a.kt)("inlineCode",{parentName:"p"},"0.20"),". This one focuses on React and Redux support, adding storage expirations to ",(0,a.kt)("inlineCode",{parentName:"p"},"GoldenRetriever")," and upload retries. Enjoy!"),(0,a.kt)("h2",{id:"uppy-react-components"},"Uppy React components"),(0,a.kt)("p",null,"Uppy now ships with React components! We\u2019ve been exploring different approaches to React components for several months, so we\u2019re excited to finally have them in \u2728 There are components for each of Uppy\u2019s UI elements, like the Dashboard and the StatusBar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const uppy = Uppy()\nuppy.use(Tus10, { endpoint: '/upload' })\n\nconst Dashboard = require('uppy/lib/react/Dashboard')\n\nconst Uploader = () => (\n  <Dashboard\n    uppy={uppy}\n    note=\"Hey! It's a React component!\"\n  />\n)\n\nReactDOM.render(<Uploader />, document.querySelector('#uploader'))\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/react/"},"Check out the docs for more!")),(0,a.kt)("h2",{id:"redux"},"Redux"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/richardwillars"},"@richardwillars")," contributed a plugin that will sync Uppy\u2019s internal state with an existing Redux store.\nTo use it, define a Redux action and reducer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// The action creator receives 3 parameters:\n// - The previous state\n// - The new state\n// - The change set\nconst uppyStateUpdate = (previous, next, patch) => ({\n  type: 'UPPY_STATE_UPDATE',\n  previous,\n  next,\n  patch,\n})\n\nfunction reduce (state = {}, action) {\n  if (action.type === 'UPPY_STATE_UPDATE') {\n    return {\n      ...state,\n      // Merge in the changes.\n      ...action.patch,\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Then pass your Redux store's ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," function and the action creator to the Redux plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ReduxStore = require('uppy/lib/Redux')\n\nuppy.use(ReduxStore, {\n  dispatch: store.dispatch,\n  action: uppyStateUpdate,\n})\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/redux/"},"See the docs")),(0,a.kt)("h2",{id:"redux-devtools"},"Redux DevTools"),(0,a.kt)("p",null,"Even if you're not using Redux in your application, there's some Redux-related news! Uppy now has a new plugin, ",(0,a.kt)("inlineCode",{parentName:"p"},"ReduxDevTools"),", which adds debug support for Redux DevTools and allows you to time travel while debugging Uppy:"),(0,a.kt)("figure",{class:"wide"},(0,a.kt)("video",{alt:"Demo video showing Uppy with Redux Dev Tools and time traveling",controls:!0,autoplay:!0},(0,a.kt)("source",{src:"/img/blog/0.20/uppy-reduxdevtools.mp4",type:"video/mp4"}),"Your browser does not support the video tag, you can ",(0,a.kt)("a",{href:"/img/blog/0.20/uppy-reduxdevtools.mp4"},"download the video")," to watch it.")),(0,a.kt)("p",null,"To try it, add the plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ReduxDevTools = require('uppy/lib/plugins/ReduxDevTools')\n\nuppy.use(ReduxDevTools)\n")),(0,a.kt)("p",null,"And then ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"activate the browser extension"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/373"},"#373")," for details and discussion."),(0,a.kt)("h2",{id:"retries"},"Retries"),(0,a.kt)("p",null,"We\u2019ve added a retry UI to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),". If some of your uploads fail\u2014maybe the network is down or the endpoint is unresponsive\u2014you\u2019ll see this:"),(0,a.kt)("img",{alt:"Uppy Dashboard retry UI with individual retry buttons and \u201cretry all\u201d",src:"/img/blog/0.20/retry.jpg"}),(0,a.kt)("p",null,"From here it\u2019s easy to retry individual uploads or all at once. This feature currenty works best with ",(0,a.kt)("inlineCode",{parentName:"p"},"Tus10")," plugin, and has basic ",(0,a.kt)("inlineCode",{parentName:"p"},"XHRUpload")," support, but we\u2019ll improve on the latter in the future releases."),(0,a.kt)("h2",{id:"re-designed-drag-and-drop-plugin"},"Re-designed Drag and Drop plugin"),(0,a.kt)("p",null,"The old trustly ",(0,a.kt)("inlineCode",{parentName:"p"},"DragDrop")," plugin has been re-designed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/arturi"},"@arturi")," and ",(0,a.kt)("a",{parentName:"p",href:"http://zaytsev.io"},"@nqst"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fresh simple design, arrow icon, white background;"),(0,a.kt)("li",{parentName:"ul"},"New sizing options: ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"height")," (both ",(0,a.kt)("inlineCode",{parentName:"li"},"100%")," by default to fill the entire container space);"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"note")," option, like in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dashboard"),", to add info about restrictions or anything else you would like your users to know.")),(0,a.kt)("img",{class:"border",src:"/img/blog/0.20/dnd-gray.jpg"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/examples/dragdrop/"},"Check it out"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(DragDrop, {\n  target: 'body',\n  width: '600px',\n  height: '300px',\n  note: 'Videos only, up to 100 MB',\n})\n")),(0,a.kt)("h2",{id:"the-golden-retriever-cleans-up-after-itself"},"The Golden Retriever cleans up after itself"),(0,a.kt)("p",null,"We recently released the ",(0,a.kt)("inlineCode",{parentName:"p"},"GoldenRetriever")," plugin, which stores selected files on the client so that it can recover them after a browser crash. Previously, these stored files would stay around forever, and clog up the user's disk space. As of 0.20.0, files will be removed from client-side storage when they have been uploaded. Files that have had nothing happen to them for longer than 24 hours will be cleaned up automatically. This timeframe can be configured using the new ",(0,a.kt)("inlineCode",{parentName:"p"},"expires")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ms = require('ms')\n\nuppy.use(GoldenRetriever, {\n  expires: ms('4 hours'),\n})\n")),(0,a.kt)("p",null,"(The ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com/package/ms"},(0,a.kt)("inlineCode",{parentName:"a"},"ms"))," module is great for converting text durations to milliseconds!)"),(0,a.kt)("p",null,"This will clean up files when Uppy runs, but perhaps not every page of your app uses Uppy. If a user selected some files, but then never came back to that same page, files could still hang around for a long time. To aid this, there's a new module that you can call to clean up Uppy's cache without needing an Uppy instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cleanup = require('uppy/lib/plugins/GoldenRetriever/cleanup')\n\ncleanup()\n")),(0,a.kt)("p",null,"We'll hopefully make that require path easier to remember in the future :)"),(0,a.kt)("h2",{id:"misc-good-stuff"},"Misc good stuff"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The GoldenRetriever now detects a serviceWorker registration automatically\u2014it's no longer necessary to emit an ",(0,a.kt)("inlineCode",{parentName:"li"},"core:sw-file-ready")," event."),(0,a.kt)("li",{parentName:"ul"},"Request headers are now configurable in the AWS S3 plugin."),(0,a.kt)("li",{parentName:"ul"},"A new ",(0,a.kt)("inlineCode",{parentName:"li"},"setPluginState")," allows plugins to set state scoped to the plugin."),(0,a.kt)("li",{parentName:"ul"},"Some unused code was removed \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},"More tests were added! Thanks ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gavboulton"},"@gavboulton")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/richardwillars"},"@richardwillars")," \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},"Documentation for the ",(0,a.kt)("a",{parentName:"li",href:"/docs/statusbar"},"StatusBar"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/xhrupload"},"XHRUpload")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/tus"},"Tus")," plugins.")),(0,a.kt)("h2",{id:"full-changelog"},"Full Changelog"),(0,a.kt)("p",null,"Here is the full list of changes for version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.20.0")," (and patch ",(0,a.kt)("inlineCode",{parentName:"p"},"0.19.1"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"core: retry/error when upload can\u2019t start or fails (offline, connection lost, wrong endpoint); add error in file progress state, UI, question mark button (#307 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: support for retry in Tus plugin (#307 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: support for retry in XHRUpload plugin (#307 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: Add support for Redux DevTools via a plugin (#373 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: improve and merge the React PR (#170 / @goto-bus-stop, @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: improve core.log method, add timestamps (#372 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"dragdrop: redesign, add note, width/height options, arrow icon (#374 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"uploaders: upload resolution changes, followup to #323 (#347 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"uploaders: issue warning when no uploading plugins are used (#372 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"core: fix ",(0,a.kt)("inlineCode",{parentName:"li"},"replaceTargetContent")," and add tests for ",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin")," (#354 / @gavboulton)"),(0,a.kt)("li",{parentName:"ul"},"goldenretriever: Omit completed uploads from saved file state\u2014previously, when an upload was finished and the user refreshed the page, all the finished files would still be there because we saved the entire list of files. Changed this to only store files that are part of an in-progress upload, or that have yet to be uploaded (#358, #324 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"goldenretriever: Remove files from cache when upload finished\u2014this uses the deleteBlobs function when core:success fires (#358, #324 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"goldenretriever: add a timestamp to cached blobs, and to delete old blobs on boot (#358, #324 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"s3: have some way to configure content-disposition for uploads, see #243 (@goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"core: move ",(0,a.kt)("inlineCode",{parentName:"li"},"setPluginState")," and add ",(0,a.kt)("inlineCode",{parentName:"li"},"getPluginState")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Plugin")," class (#363 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"goldenretriever: fix restorefiles with id (#351 / @arturi)"),(0,a.kt)("li",{parentName:"ul"},"goldenretriever: Clean up blobs that are not related to a file in state (#349 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"core: set the newState before emiting ",(0,a.kt)("inlineCode",{parentName:"li"},"core:state-update")," (#341 / @sunil-shrestha, @arturi)"),(0,a.kt)("li",{parentName:"ul"},"docs: Document StatusBar plugin (#350 / @goto-bus-stop)")),(0,a.kt)("p",null,"The Uppy Team"))}d.isMDXComponent=!0}}]);