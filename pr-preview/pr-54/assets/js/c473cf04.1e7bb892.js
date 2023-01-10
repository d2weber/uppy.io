"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8929],{5162:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),s=r(6010);const i="tabItem_Ymn6";function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,a),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),s=r(7294),i=r(6010),a=r(2389),l=r(7392),o=r(7094),u=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:r,defaultValue:a,values:c,groupId:m,className:f}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===a?a:a??y.find((e=>e.props.default))?.props.value??y[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,o.U)(),[w,x]=(0,s.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==w&&(N(t),x(n),null!=m&&v(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},h.map((e=>{let{value:t,label:r,attributes:a}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:T},a,{className:(0,i.Z)("tabs__item",d,a?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,s.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,a.Z)();return s.createElement(c,(0,n.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),s=r(814),i=r(3612);const a=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","autoprefixer":"^10.4.13","clsx":"^1.1.1","postcss":"^8.4.21","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1","tailwindcss":"^3.2.4"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","prettier-plugin-tailwindcss":"^0.2.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=a;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:a="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${a}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(s.Z,{language:"html"},d))}},6069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),s=(r(7294),r(3905)),i=r(5488),a=r(5162),l=r(3068);const o={sidebar_position:7},u="Supporting IE11",p={unversionedId:"guides/browser-support",id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.mdx",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/uppy.io/pr-preview/pr-54/docs/guides/browser-support",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Migrate to 2.0",permalink:"/uppy.io/pr-preview/pr-54/docs/guides/migrate-2.0"},next:{title:"Using custom stores",permalink:"/uppy.io/pr-preview/pr-54/docs/guides/custom-stores"}},d={},c=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}],m={toc:c};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"supporting-ie11"},"Supporting IE11"),(0,s.kt)("p",null,"We officially support recent versions of Chrome, Firefox, Safari and Edge."),(0,s.kt)("p",null,"Internet Explorer is not officially supported, as in we don\u2019t run tests for it,\nbut you can be mostly confident it works with the right polyfills.\nBut it does come with a risk of unexpected results in styling or functionality."),(0,s.kt)("h2",{id:"polyfills"},"Polyfills"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"))),(0,s.kt)(a.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js';\nimport 'whatwg-fetch';\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill';\nimport ResizeObserver from 'resize-observer-polyfill';\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from '@uppy/core';\nexport * from '@uppy/core';\n")),(0,s.kt)("h2",{id:"legacy-cdn-bundle"},"Legacy CDN bundle"),(0,s.kt)(l.Z,{uppyJsName:"uppy.legacy.min.js",mdxType:"UppyCdnExample"},"\n    import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n    const uppy = new Uppy()\n    uppy.use(DragDrop, { target: '#uppy' })\n    uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n  "))}f.isMDXComponent=!0}}]);