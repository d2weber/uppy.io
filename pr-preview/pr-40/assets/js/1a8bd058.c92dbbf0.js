"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=o,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={title:"Uppy 0.27: First Swing at React Native Support",date:new Date("2018-08-23T00:00:00.000Z"),author:"ife",image:"https://uppy.io/img/blog/0.27/uppy-add-initial.jpg",slug:"2018/08/0.27"},r=void 0,p={permalink:"/uppy.io/pr-preview/pr-40/blog/2018/08/0.27",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2018-08-0.27.md",source:"@site/blog/2018-08-0.27.md",title:"Uppy 0.27: First Swing at React Native Support",description:"In 0.27, we have some more iterations on the Dashboard UI for you in store again. We are getting rid of the permanent tab bar and made tons of other improvements!",date:"2018-08-23T00:00:00.000Z",formattedDate:"August 23, 2018",tags:[],readingTime:4.635,hasTruncateMarker:!0,authors:[{name:"ife"}],frontMatter:{title:"Uppy 0.27: First Swing at React Native Support",date:"2018-08-23T00:00:00.000Z",author:"ife",image:"https://uppy.io/img/blog/0.27/uppy-add-initial.jpg",slug:"2018/08/0.27"},prevItem:{title:"Uppy 0.28: A look behind the scenes",permalink:"/uppy.io/pr-preview/pr-40/blog/2018/10/0.28"},nextItem:{title:"Uppy 0.26: Lerna",permalink:"/uppy.io/pr-preview/pr-40/blog/2018/07/0.26"}},l={authorsImageUrls:[void 0]},s=[{value:"Dashboard UI without tabs",id:"dashboard-ui-without-tabs",level:2},{value:"<code>autoProceed: false</code> by default",id:"autoproceed-false-by-default",level:2},{value:"Progress on React Native",id:"progress-on-react-native",level:2},{value:"Package sizes",id:"package-sizes",level:2},{value:"&quot;Uppy Server&quot; is now &quot;Companion&quot;",id:"uppy-server-is-now-companion",level:2},{value:"Other Cool Changes",id:"other-cool-changes",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-add-initial.jpg"}),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"0.27"),", we have some more iterations on the Dashboard UI for you in store again. We are getting rid of the permanent tab bar and made tons of other improvements!"),(0,o.kt)("h2",{id:"dashboard-ui-without-tabs"},"Dashboard UI without tabs"),(0,o.kt)("p",null,"Uppy used to always display the tab bar (the one you use to select between importing files from Instagram, Webcam, local disk, etc.). This ended up not working well with the growing list of supported sources, especially on mobile."),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-with-tabs.jpg"}),(0,o.kt)("p",null,"So in ",(0,o.kt)("inlineCode",{parentName:"p"},"0.27"),", we are iterating on the UI again:"),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-add-initial.jpg"}),(0,o.kt)("p",null,"The providers are now visible as a list of icons on the initial screen (plus, we\u2019ve added colors!), but when you complete the inital selection, it is hidden behind the \u201cplus\u201d button:"),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-files-selected.jpg"}),(0,o.kt)("p",null,"You can always add more:"),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-add-more.jpg"}),(0,o.kt)("p",null,"The StatusBar that shows progress has been \u201clightened\u201d:"),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-upload-in-progress.jpg"}),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-upload-complete.jpg"}),(0,o.kt)("p",null,"We have decided to drop multiple-color support, so Informer messages will now always appear in a gray, round bubble. Apart from that, we have made tons of small fixes, such as better animations, colors, font sizes, and more. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/942"},"Check out the PR #942")," for details."),(0,o.kt)("p",null,"We are aiming to make the UI less heavy, so that Uppy can easier fit within your existing site or app design."),(0,o.kt)("p",null,"The mobile version is now much more refined as well:"),(0,o.kt)("img",{src:"/img/blog/0.27/uppy-mobile.jpg"}),(0,o.kt)("p",null,"As always, feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"try Uppy live on the Dashboard example"),"."),(0,o.kt)("h2",{id:"autoproceed-false-by-default"},(0,o.kt)("inlineCode",{parentName:"h2"},"autoProceed: false")," by default"),(0,o.kt)("p",null,"\u26a0\ufe0f ",(0,o.kt)("strong",{parentName:"p"},"breaking")),(0,o.kt)("p",null,"By default, Uppy used to begin uploading right after you selected a file. If you wanted to let users edit some file metadata or pick and choose from multiple sources first, you had to set ",(0,o.kt)("inlineCode",{parentName:"p"},"autoProceed: false"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// this line could be seen in many of the Uppy examples\nconst uppy = Uppy({ autoProceed: false })\n")),(0,o.kt)("p",null,"Since in most cases we actually wanted ",(0,o.kt)("inlineCode",{parentName:"p"},"autoProceed: false"),", this is now the new default. While it makes Uppy's UI less magical and harder to make irreversible mistakes with, right out of the box, we feel this is the way to go. Make sure you change this in your project if needed. If you weren't setting an ",(0,o.kt)("inlineCode",{parentName:"p"},"autoProceed")," option at all, you will now have to add ",(0,o.kt)("inlineCode",{parentName:"p"},"autoProceed: true"),"."),(0,o.kt)("h2",{id:"progress-on-react-native"},"Progress on React Native"),(0,o.kt)("p",null,"We\u2019ve begun working on supporting React Native in Uppy. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"0.27"),", it should run in a React Native environment \u2014 meaning you can use Uppy API (",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.addFile()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.upload()"),") for adding files and uploading, without the UI. ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/xhr-upload")," uploader is already supported, and we are working on making ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/tus")," (and ",(0,o.kt)("inlineCode",{parentName:"p"},"tus-js-client")," itself) run in React Native as well."),(0,o.kt)("p",null,"We plan to make sure all non-UI Uppy plugins work in RN, and then provide a few useful components for adding Uppy to your RN apps."),(0,o.kt)("p",null,"Please head to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/988"},"React Native PR #988")," for details. We'd love to hear what you think and your suggestions for improving the Uppy React Native experience."),(0,o.kt)("p",null,"Built-in React Native support has been a 1.0 goal from the start. We have had many requests about Angular.js and Vue support. There are already community-built solutions for these platforms that seem to work well, but unfortunately we won't be officially supporting them before our 1.0 milestone. Depending on community input, we might add that later."),(0,o.kt)("h2",{id:"package-sizes"},"Package sizes"),(0,o.kt)("p",null,"We now have a cool table showing mingzipped bundle sizes for each individual Uppy package, ",(0,o.kt)("a",{parentName:"p",href:"https://uppy.io/docs/stats/#bundle-sizes"},"check it out"),":"),(0,o.kt)("img",{width:"400",src:"/img/blog/0.27/uppy-sizes.png"}),(0,o.kt)("h2",{id:"uppy-server-is-now-companion"},'"Uppy Server" is now "Companion"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @uppy/companion\n")),(0,o.kt)("p",null,'Uppy Server is an optional service that Uppy can use to import files from sources like Instagram or Dropbox. However, simply naming it "Server" was quite unclear and has caused some confusion. Many people thought you could upload files to Uppy Server as well, but that is not the case. We recommend uploading to a ',(0,o.kt)("a",{parentName:"p",href:"https://tus.io"},"tus.io")," server, or \u2014 if that's too much for your simple usecase \u2014 using your existing webserver to handle the upload. "),(0,o.kt)("p",null,"So, to hopefully end this confusion once and for all, we are renaming Uppy Server to Companion: an optional tool in the datacenter, which you can use to add more functionality to your Uppy.js client. If nothing else, maybe it will net us some points for having yet another dog-themed name!"),(0,o.kt)("p",null,"Simultaneously, we moved Companion into the main ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy"},"transloadit/uppy")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/master/doc/design/monorepo.md"},"monorepo"),". This centralizes Uppy issue reporting and makes it easier to do updates and simultaneous releases of the client and Companion parts."),(0,o.kt)("p",null,"The first release of ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/companion")," is 0.14, and the last ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy-server")," release is 0.13.4. ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy-server")," will be deprecated on npm soon."),(0,o.kt)("p",null,"Note that despite the rename, configuration for standalone Companion still uses ",(0,o.kt)("inlineCode",{parentName:"p"},"UPPYSERVER_")," environment variables. This should ease the transition, since you will only have to update the package name for now. Once we add ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPANION_")," variable support, we will continue to support ",(0,o.kt)("inlineCode",{parentName:"p"},"UPPYSERVER_")," environment variables to smoothen the transition. And of course, we will notify you here when that time comes!"),(0,o.kt)("h2",{id:"other-cool-changes"},"Other Cool Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@uppy/core: allow editing plugin titles (names) so that, for instance, \u201cCamera\u201d can be translated into different languages, fixes #920 (#942 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/dashboard: fix animation \u2014 wait for closing animation to finish before opening modal (#942 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/url: fix Url plugin reacting to wrong drop/paste events, add ignoreEvent (#942 / @arturi)"),(0,o.kt)("li",{parentName:"ul"},"build: build: Split integration tests and add one using create-react-app (#952 / @goto-bus-stop)"),(0,o.kt)("li",{parentName:"ul"},"@uppy/companion: google Drive \u2014 move to v3 API (#977 / @pauln)")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#0270"},"full changelog (0.27 and 0.26.x patches) for more")),(0,o.kt)("p",null,"See you in the next release!"),(0,o.kt)("p",null,"The Uppy Team"))}d.isMDXComponent=!0}}]);