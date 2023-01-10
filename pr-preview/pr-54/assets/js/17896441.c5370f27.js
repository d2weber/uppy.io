"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7918],{9055:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(7294),l=n(1944),r=n(902);const s=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function o(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(6010),m=n(7524),u=n(7462),p=n(5999),h=n(2244);function v(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h.Z,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h.Z,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=c();return a.createElement(v,{previous:e.previous,next:e.next})}var E=n(2263),f=n(9960),g=n(143),Z=n(5281),N=n(373),L=n(4477);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=_[e.versionMetadata.banner];return a.createElement(t,e)}function y(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function C(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,N.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,g.Jo)(r),o=i??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(y,{versionLabel:c.label,to:o.path,onClick:()=>s(c.name)})))}function T(e){let{className:t}=e;const n=(0,L.E)();return n.banner?a.createElement(C,{className:t,versionMetadata:n}):null}function x(e){let{className:t}=e;const n=(0,L.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function H(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function U(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:Z.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(H,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(U,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(4881),M=n(1526);const I="lastUpdated_vwxv";function S(e){return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I)},(n||l)&&a.createElement(w,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,i=s.length>0,o=!!(t||n||r);return i||o?a.createElement("footer",{className:(0,d.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(S,{tags:s}),o&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var O=n(6043),D=n(3743);const P="tocCollapsibleButton_TO0P",R="tocCollapsibleButtonExpanded_MG3E";function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",P,!t&&R,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",j="tocCollapsibleExpanded_sAul";function W(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:i}=(0,O.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(q,!s&&j,n)},a.createElement(z,{collapsed:s,onClick:i}),a.createElement(O.z,{lazy:!0,className:F,collapsed:s},a.createElement(D.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const $="tocMobile_ITEo";function G(){const{toc:e,frontMatter:t}=c();return a.createElement(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(Z.k.docs.docTocMobile,$)})}var J=n(9407);function Y(){const{toc:e,frontMatter:t}=c();return a.createElement(J.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var Q=n(2503),X=n(76);function K(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Q.Z,{as:"h1"},n)),a.createElement(X.Z,null,t))}var ee=n(3438),te=n(8596),ne=n(4996);function ae(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function re(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(f.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function se(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ie(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},a.createElement(ae,{className:le.breadcrumbHomeIcon})))}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(Z.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ie,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(se,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const oe="docItemContainer_Djhp",de="docItemCol_VOVn";function me(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(G,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Y,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&de)},a.createElement(T,null),a.createElement("div",{className:oe},a.createElement("article",null,a.createElement(ce,null),a.createElement(x,null),n.mobile,a.createElement(K,null,t),a.createElement(V,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ue(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(o,null),a.createElement(me,null,a.createElement(n,null))))}},4881:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),l=n(5999),r=n(5281),s=n(7462),i=n(6010);const c="iconEdit_Z9Sw";function o(e){let{className:t,...n}=e;return a.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(o,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),s=n(5999),i=n(6668);const c="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",m?o:c),id:n}),d.children,l.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},d,{id:void 0}))}},76:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7294),l=n(3905),r=n(7462),s=n(5742);var i=n(814);var c=n(9960);var o=n(6010),d=n(2389),m=n(6043);const u="details_lb9f",p="isBrowser_bmU9",h="collapsibleContent_i85q";function v(e){return!!e&&("SUMMARY"===e.tagName||v(e.parentElement))}function b(e,t){return!!e&&(e===t||b(e.parentElement,t))}function E(e){let{summary:t,children:n,...l}=e;const s=(0,d.Z)(),i=(0,a.useRef)(null),{collapsed:c,setCollapsed:E}=(0,m.u)({initialState:!l.open}),[f,g]=(0,a.useState)(l.open);return a.createElement("details",(0,r.Z)({},l,{ref:i,open:f,"data-collapsed":c,className:(0,o.Z)(u,s&&p,l.className),onMouseDown:e=>{v(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;v(t)&&b(t,i.current)&&(e.preventDefault(),c?(E(!1),g(!0)):E(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(m.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{E(e),g(!e)}},a.createElement("div",{className:h},n)))}const f="details_b_Ee";function g(e){let{...t}=e;return a.createElement(E,(0,r.Z)({},t,{className:(0,o.Z)("alert alert--info",f,t.className)}))}var Z=n(2503);function N(e){return a.createElement(Z.Z,e)}const L="containsTaskList_mC6p";const _="img_ev3q";var k=n(3612),y=n(1875);const C={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(s.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(i.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(i.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(g,(0,r.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,o.Z)(t,t?.includes("contains-task-list")&&L))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,o.Z)(t,_))}));var t},h1:e=>a.createElement(N,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(N,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(N,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(N,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(N,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(N,(0,r.Z)({as:"h6"},e)),admonition:k.Z,mermaid:y.Z};function T(e){let{children:t}=e;return a.createElement(l.Zo,{components:C},t)}},2244:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(9960);function s(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&a.createElement("div",{className:"pagination-nav__sublabel"},s),a.createElement("div",{className:"pagination-nav__label"},n))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),r=n(6010),s=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),l=n(7294),r=n(6668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=o(i,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const v=(0,r.L)(),b=d??v.tableOfContents.minHeadingLevel,E=u??v.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:E});return m((0,l.useMemo)((()=>{if(c&&o)return{linkClassName:c,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:E}}),[c,o,b,E])),l.createElement(p,(0,a.Z)({toc:f,className:n,linkClassName:c},h))}},3008:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(9960);const s="tag_zVej",i="tagRegular_sFm0",c="tagWithCount_h2kH";function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(s,o?c:i)},n,o&&a.createElement("span",null,o))}},1526:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(5999),s=n(3008);const i="tags_jXut",c="tag_QGVx";function o(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:c},a.createElement(s.Z,{label:t,permalink:n}))}))))}},4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>s});var a=n(7294),l=n(902);const r=a.createContext(null);function s(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);