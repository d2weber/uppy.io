"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3089],{9058:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),n=a(6010),r=a(4934),o=a(7524),s=a(9960),i=a(5999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(3102);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,i=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},3269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(7294),n=a(6010),r=a(2263),o=a(833),s=a(5281),i=a(9058),m=a(5999),c=a(2244);function u(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(c.Z,{permalink:a,title:l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),n&&l.createElement(c.Z,{permalink:n,title:l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var d=a(197),g=a(9460),p=a(3022);function h(e){let{items:t,component:a=p.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(g.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}function E(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:s,permalink:i}=t,m="/"===i?a:s;return l.createElement(l.Fragment,null,l.createElement(o.d,{title:m,description:n}),l.createElement(d.Z,{tag:"blog_posts_list"}))}function b(e){const{metadata:t,items:a,sidebar:n}=e;return l.createElement(i.Z,{sidebar:n},l.createElement(h,{items:a}),l.createElement(u,{metadata:t}))}function f(e){return l.createElement(o.FG,{className:(0,n.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},l.createElement(E,e),l.createElement(b,e))}},3022:(e,t,a)=>{a.d(t,{Z:()=>A});var l=a(7294),n=a(6010),r=a(9460),o=a(4996);function s(e){let{children:t,className:a}=e;const{frontMatter:n,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),m=s.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),t)}var i=a(9960);const m={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:c}=a,u=o?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(m.title,t),itemProp:"headline"},o?c:l.createElement(i.Z,{itemProp:"url",to:s},c))}var u=a(5999),d=a(8824);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:o,formattedDate:s,readingTime:i}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(h,{date:o,formattedDate:s}),void 0!==i&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:i})))}function f(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:o,url:s,imageURL:i,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},i&&l.createElement(f,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function P(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(c,null),l.createElement(b,null),l.createElement(P,null))}var Z=a(8780),k=a(2762);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.C)();return l.createElement("div",{id:o?Z.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(k.Z,null,t))}a(4881);var y=a(6233),I=a(7462);function T(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function C(e){const{blogPostTitle:t,...a}=e;return l.createElement(i.Z,(0,I.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(T,null))}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function L(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:s,hasTruncateMarker:i}=e,m=!t&&i,c=a.length>0;return c||m||s?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},l.createElement(y.Z,{tags:a})),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement("ul",{className:"blog__post-footer__follow"},l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/uppy_io"},"Follow us on Twitter")," or grab the ",l.createElement("a",{href:"https://uppy.io/blog/atom.xml"},"RSS feed")),l.createElement("li",null,l.createElement("a",{className:"github-button",href:"https://github.com/transloadit/uppy","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star transloadit/uppy on GitHub"},"Star")))),m&&l.createElement("div",{className:(0,n.Z)("col text--left",{"col--3":c})},l.createElement(C,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:a}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s,{className:(0,n.Z)(o,a)},l.createElement(_,null),l.createElement(w,null,t),l.createElement(L,null))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>o});var l=a(7294),n=a(902);const r=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),n=a(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);