"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[62],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),y=n,f=d["".concat(l,".").concat(y)]||d[y]||h[y]||r;return a?o.createElement(f,i(i({ref:t},u),{},{components:a})):o.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},33:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={title:"Day 1",authors:["kvz","aj"],date:new Date("2019-03-26T00:00:00.000Z"),image:"https://uppy.io/img/blog/30daystoliftoff/day1.jpg",series:"30 Days to Liftoff",seriesSuffix:"of 30",alias:"/blog/2019/03/26-30daystoliftoff-day1/",slug:"2019/03/liftoff/01"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-76/blog/2019/03/liftoff/01",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-03-liftoff-01.md",source:"@site/blog/2019-03-liftoff-01.md",title:"Day 1",description:"When we started working on Uppy back in early",date:"2019-03-26T00:00:00.000Z",formattedDate:"March 26, 2019",tags:[],readingTime:3.08,hasTruncateMarker:!0,authors:[{email:"kevin@transloadit.com",name:"Kevin van Zonneveld",id:"kvz",tagline:"Transloadit co-founder",imageURL:"https://github.com/kvz.png",key:"kvz"},{email:"aj@transloadit.com",name:"A.J. van Loon",id:"aj",tagline:"Writer & Editor",imageURL:"https://github.com/AJvanLoon.png",key:"aj"}],frontMatter:{title:"Day 1",authors:["kvz","aj"],date:"2019-03-26T00:00:00.000Z",image:"https://uppy.io/img/blog/30daystoliftoff/day1.jpg",series:"30 Days to Liftoff",seriesSuffix:"of 30",alias:"/blog/2019/03/26-30daystoliftoff-day1/",slug:"2019/03/liftoff/01"},prevItem:{title:"Day 2",permalink:"/uppy.io/pr-preview/pr-76/blog/2019/03/liftoff/02"},nextItem:{title:"Uppy 0.30: Introducing Robodog",permalink:"/uppy.io/pr-preview/pr-76/blog/2019/03/0.30"}},l={authorsImageUrls:[void 0,void 0]},s=[{value:"A new post every day",id:"a-new-post-every-day",level:2},{value:"What&#39;s Uppy with you?",id:"whats-uppy-with-you",level:2}],u={toc:s},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When we ",(0,n.kt)("a",{parentName:"p",href:"/blog/2016/07/uppy-begins/"},"started working on Uppy")," back in early\n2016, all we had was an idea and the shared desire to launch file uploading into\na new age. We had already been laying the groundwork with the development of\n",(0,n.kt)("a",{parentName:"p",href:"https://tus.io/"},"tus.io")," and felt that its robust back-end deserved a front-end\njust as robust, modern and user-friendly."),(0,n.kt)("p",null,"But what about open? We initially thought about building a proprietary uploader\nthat would work exclusively with Transloadit's commercial service, but we\nquickly turned around on it. We knew this could have a real impact. So, just\nlike we did with Tus, we decided to make our new project open source. Three\nyears, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/stargazers"},"16.000 stargazers")," and a\nthriving community later \u2014 and we could not be happier. Well, apart from one\nthing: ",(0,n.kt)("strong",{parentName:"p"},"getting Uppy 1.0 out the door")," has proven harder than expected. Issues\nkeep piling up, which led us down countless sidetracks and hurt our capacity to\nhammer out those final design goals."),(0,n.kt)("p",null,"But now it's time for all that to change. That's why, starting today, we are\nallocating all of Transloadit's resources into making a big final push and\ngetting Uppy ready for liftoff. Our goal is to launch on ",(0,n.kt)("strong",{parentName:"p"},"April 25"),", exactly\nthirty days from now."),(0,n.kt)("center",null,(0,n.kt)("img",{width:"400",src:"https://media.giphy.com/media/kvw01ozJ06TxS/giphy.gif"}),(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("p",null,"We'll need all the help we can get, so for the next thirty days, everyone here\nat Transloadit is going to be working exclusively on tasks related to Uppy 1.0.\nThat means the Uppy core team (obviously) and tus core team, our SDK teams, as\nwell as our infra & API engineers, designers, content writers, and the founders\nthemselves \u2014 we'll all be chipping in and doing our part to ensure liftoff in\nthirty days. We're even adding someone new to the Uppy team in April. A warm\nwelcome to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lakesare"},"Evgenia Karunus")," :)"),(0,n.kt)("h2",{id:"a-new-post-every-day"},"A new post every day"),(0,n.kt)("p",null,"We have added all tasks to a project board and thought it might be a fun idea to\nkeep you updated on our day-to-day progress. So, we set ourselves an additional\nchallenge: apart from getting Uppy ready for 1.0, we're also going to ",(0,n.kt)("strong",{parentName:"p"},"write a\nblog post about it every day"),", for thirty days. Starting with this one."),(0,n.kt)("p",null,"A post each day may prove hard to do, but we think it's worth a try. It really\nfits with the open way in which we have been developing Uppy for the past few\nyears, and gives you a look behind the scenes as we're getting ready for the\nhome stretch. And hopefully, we also succeed in spreading the word even further,\nreaching people that don't yet know about Uppy, but would be happy to!"),(0,n.kt)("h2",{id:"whats-uppy-with-you"},"What's Uppy with you?"),(0,n.kt)("p",null,"We'd love to hear what you think. Whether it is about Uppy in general, or\nspecific issues you feel cannot be forgotten before 1.0, or maybe even about\nthis blog post challenge itself \u2014 leave a comment here, use our\n",(0,n.kt)("a",{parentName:"p",href:"https://community.transloadit.com/c/uppy"},"forum")," directly (it also hosts the\ncomments), or let us know on Twitter via ",(0,n.kt)("a",{parentName:"p",href:"http://twitter.com/uppy_io/"},"@uppy_io"),"\nor ",(0,n.kt)("a",{parentName:"p",href:"http://twitter.com/transloadit/"},"@transloadit"),"."),(0,n.kt)("center",null,(0,n.kt)("img",{width:"400",class:"dropshadow",src:"https://media.giphy.com/media/SjInxhAJTzU7S/giphy.gif"}),(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("p",null,"We can use your help! As we've said, we're looking to spread the word so any\nretweet, blog post, star, you name it, is gonna be double extra appreciated.\nAlso, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues"},"issue busting")," is going to\nslow down as we're about to head deep into the remaining design goals (e.g.\nReact Native). So, if you want to lend a hand with that, we'd owe you big time!"),(0,n.kt)("p",null,"See you tomorrow for the first progress update on\n",(0,n.kt)("a",{parentName:"p",href:"/blog/2019/03/liftoff-02/"},"Day 2")," of our 30 Days to Liftoff!"),(0,n.kt)("p",null,"PS If you don't want to miss an update, consider\n",(0,n.kt)("a",{parentName:"p",href:"https://uppy.io/atom.xml"},"good ol' RSS")," :)"))}h.isMDXComponent=!0}}]);