"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6990],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7462),a=r(7294),s=r(6010),i=r(2389),o=r(7392),l=r(7094),p=r(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:i,values:d,groupId:c,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,l.U)(),[w,N]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==w&&(C(t),N(n),null!=c&&b(c,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]??x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onClick:T},i,{className:(0,s.Z)("tabs__item",m,i?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(814),s=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check","prepare":"husky install","format:check":"prettier -c .","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=i;function l(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,l=[];n.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${i}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(s.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(a.Z,{language:"html"},m))}},9408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),s=r(5488),i=r(5162),o=r(3068);const l={sidebar_position:11},p="Compressor",u={unversionedId:"compressor",id:"compressor",title:"Compressor",description:"The @uppy/compressor plugin optimizes images (JPEG, PNG, and any other format",source:"@site/docs/compressor.mdx",sourceDirName:".",slug:"/compressor",permalink:"/uppy.io/pr-preview/pr-40/docs/compressor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/compressor.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Golden Retriever",permalink:"/uppy.io/pr-preview/pr-40/docs/golden-retriever"},next:{title:"Form",permalink:"/uppy.io/pr-preview/pr-40/docs/form"}},m={},d=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"Events",id:"events",level:2},{value:"<code>compressor:complete</code>",id:"compressorcomplete",level:4}],c={toc:d};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compressor"},"Compressor"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/compressor")," plugin optimizes images (JPEG, PNG, and any other format\nsupported by the client\u2019s browser) before upload, saving up to 60% in size\n(roughly 18 MB for 10 images). It uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," library under the hood."),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When your users are likely to upload images, potentially on mobile devices, and\nsaving data and faster uploads are important."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/compressor\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/compressor\n"))),(0,a.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Compressor } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Compressor, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7} showLineNumbers","{7}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Compressor from '@uppy/compressor';\n\nnew Uppy()\n  .use(Dashboard, {inline:true, target: '#dashboard')\n  .use(Compressor);\n")),(0,a.kt)("p",null,"No action is needed from the user \u2014 Uppy will automatically optimize images,\nshow an ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-interfaces/elements/informer"},"Informer")," message with saved\nbytes, and then begin the upload as usual."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also pass any of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs#options"},"Compressor.js options")," here as well.")),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Compressor'"),")."),(0,a.kt)("h4",{id:"quality"},(0,a.kt)("inlineCode",{parentName:"h4"},"quality")),(0,a.kt)("p",null,"The quality of the output image passed to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"0.6"),")."),(0,a.kt)("p",null,"It must be a number between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". Be careful to use ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," as it may make\nthe size of the output image become larger. In most cases, going with the\ndefault value is best."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This option is only available for ",(0,a.kt)("inlineCode",{parentName:"p"},"image/jpeg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image/webp")," images.")),(0,a.kt)("h4",{id:"limit"},(0,a.kt)("inlineCode",{parentName:"h4"},"limit")),(0,a.kt)("p",null,"Number of images that will be compressed in parallel (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),")."),(0,a.kt)("p",null,"You likely don\u2019t need to change this, unless you are experiencing performance\nissues."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the Status Bar\n        compressingImages: 'Compressing images...',\n        compressedX: 'Saved %{size} by compressing images',\n    },\n};\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h4",{id:"compressorcomplete"},(0,a.kt)("inlineCode",{parentName:"h4"},"compressor:complete")),(0,a.kt)("p",null,"The event is emitted when all files are compressed. You can use it for side\neffects or custom UI notifications."))}h.isMDXComponent=!0}}]);