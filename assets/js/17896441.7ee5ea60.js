"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7918],{8945:(e,t,s)=>{s.r(t),s.d(t,{default:()=>pe});var n=s(7294),i=s(1944),a=s(1013),o=s(5893);const r=n.createContext(null);function l(e){let{children:t,content:s}=e;const i=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(r.Provider,{value:i,children:t})}function d(){const e=(0,n.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:s}=d();return(0,o.jsx)(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(6010),m=s(7524),p=s(5999),h=s(2244);function v(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(h.Z,{...t,subLabel:(0,o.jsx)(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(h.Z,{...s,subLabel:(0,o.jsx)(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=d();return(0,o.jsx)(v,{previous:e.previous,next:e.next})}var b=s(2263),j=s(9960),f=s(143),g=s(5281),L=s(373),N=s(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=k[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function w(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,o.jsx)(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(j.Z,{to:s,onClick:n,children:(0,o.jsx)(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function y(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,b.Z)(),{pluginId:i}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,L.J)(i),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,f.Jo)(i),d=r??(c=l).docs.find((e=>e.id===c.mainDocId));var c;return(0,o.jsxs)("div",{className:(0,u.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:n,versionMetadata:s})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(w,{versionLabel:l.label,to:d.path,onClick:()=>a(l.name)})})]})}function _(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,o.jsx)(y,{className:t,versionMetadata:s}):null}function Z(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,o.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return(0,o.jsx)(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:s})})},children:" on {date}"})}function U(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:n}=e;return(0,o.jsxs)("span",{className:g.k.common.lastUpdated,children:[(0,o.jsx)(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?(0,o.jsx)(T,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:n?(0,o.jsx)(U,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var H=s(4881),V=s(1526);const M="lastUpdated_vwxv";function O(e){return(0,o.jsx)("div",{className:(0,u.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(V.Z,{...e})})})}function P(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,formattedLastUpdatedAt:i}=e;return(0,o.jsxs)("div",{className:(0,u.Z)(g.k.docs.docFooterEditMetaRow,"row"),children:[(0,o.jsx)("div",{className:"col",children:t&&(0,o.jsx)(H.Z,{editUrl:t})}),(0,o.jsx)("div",{className:(0,u.Z)("col",M),children:(s||n)&&(0,o.jsx)(A,{lastUpdatedAt:s,formattedLastUpdatedAt:i,lastUpdatedBy:n})})]})}function S(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:s,formattedLastUpdatedAt:n,lastUpdatedBy:i,tags:a}=e,r=a.length>0,l=!!(t||s||i);return r||l?(0,o.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,o.jsx)(O,{tags:a}),l&&(0,o.jsx)(P,{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:n})]}):null}var I=s(6043),B=s(3743);const E="tocCollapsibleButton_TO0P",W="tocCollapsibleButtonExpanded_MG3E";function D(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",E,!t&&W,s.className),children:(0,o.jsx)(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R="tocCollapsible_ETCw",$="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function F(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:r}=(0,I.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.Z)(R,!a&&z,s),children:[(0,o.jsx)(D,{collapsed:a,onClick:r}),(0,o.jsx)(I.z,{lazy:!0,className:$,collapsed:a,children:(0,o.jsx)(B.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i})})]})}const J="tocMobile_ITEo";function Y(){const{toc:e,frontMatter:t}=d();return(0,o.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,J)})}var q=s(9407);function G(){const{toc:e,frontMatter:t}=d();return(0,o.jsx)(q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var K=s(2503),Q=s(3140);function X(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=d();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(K.Z,{as:"h1",children:s})}),(0,o.jsx)(Q.Z,{children:t})]})}var ee=s(2802),te=s(8596),se=s(4996);function ne(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ie="breadcrumbHomeIcon_YNFT";function ae(){const e=(0,se.Z)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(j.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(ne,{className:ie})})})}const oe="breadcrumbsContainer_Z_bl";function re(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,o.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,o.jsx)(j.Z,{className:i,href:s,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:i,children:t})}function le(e){let{children:t,active:s,index:n,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function de(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?(0,o.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,oe),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(ae,{}),e.map(((t,s)=>{const n=s===e.length-1;return(0,o.jsx)(le,{active:n,index:s,addMicrodata:!!t.href,children:(0,o.jsx)(re,{href:t.href,isLast:n,children:t.label})},s)}))]})}):null}const ce="docItemContainer_Djhp",ue="docItemCol_VOVn";function me(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=d(),s=(0,m.i)(),n=e.hide_table_of_contents,i=!n&&t.length>0;return{hidden:n,mobile:i?(0,o.jsx)(Y,{}):void 0,desktop:!i||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(G,{})}}();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&ue),children:[(0,o.jsx)(_,{}),(0,o.jsxs)("div",{className:ce,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(de,{}),(0,o.jsx)(Z,{}),s.mobile,(0,o.jsx)(X,{children:t}),(0,o.jsx)(S,{})]}),(0,o.jsx)(x,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function pe(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,s=e.content;return(0,o.jsx)(l,{content:e.content,children:(0,o.jsxs)(i.FG,{className:t,children:[(0,o.jsx)(c,{}),(0,o.jsx)(me,{children:(0,o.jsx)(s,{})})]})})}},9407:(e,t,s)=>{s.d(t,{Z:()=>r});s(7294);var n=s(6010),i=s(3743);const a="tableOfContents_bqdL";var o=s(5893);function r(e){let{className:t,...s}=e;return(0,o.jsx)("div",{className:(0,n.Z)(a,"thin-scrollbar",t),children:(0,o.jsx)(i.Z,{...s,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},3743:(e,t,s)=>{s.d(t,{Z:()=>h});var n=s(7294),i=s(6668);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);t.forEach(((e,t)=>{const n=s.slice(2,e.level);e.parentIndex=Math.max(...n),s[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:s,...i}=e;s>=0?t[s].children.push(i):n.push(i)})),n}function o(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:s,maxHeadingLevel:n});return function(e){return e.level>=s&&e.level<=n}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:s}=t;const n=e.find((e=>r(e).top>=s));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,n.useRef)(void 0),s=d();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:s}=e;const n=[];for(let i=t;i<=s;i+=1)n.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),d=l(r,{anchorTopOffset:s.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,s])}var u=s(5893);function m(e){let{toc:t,className:s,linkClassName:n,isChild:i}=e;return t.length?(0,u.jsx)("ul",{className:i?void 0:s,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:s,linkClassName:n})]},e.id)))}):null}const p=n.memo(m);function h(e){let{toc:t,className:s="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:m,...h}=e;const v=(0,i.L)(),x=d??v.tableOfContents.minHeadingLevel,b=m??v.tableOfContents.maxHeadingLevel,j=function(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:i}=e;return(0,n.useMemo)((()=>o({toc:a(t),minHeadingLevel:s,maxHeadingLevel:i})),[t,s,i])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return c((0,n.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:b}}),[r,l,x,b])),(0,u.jsx)(p,{toc:j,className:s,linkClassName:r,...h})}},4477:(e,t,s)=>{s.d(t,{E:()=>l,q:()=>r});var n=s(7294),i=s(1013),a=s(5893);const o=n.createContext(null);function r(e){let{children:t,version:s}=e;return(0,a.jsx)(o.Provider,{value:s,children:t})}function l(){const e=(0,n.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}},7754:(e,t,s)=>{s.d(t,{Z:()=>v});var n=s(2949),i=s(7294),a=s(4184),o=s.n(a),r=s(2695);var l=s(2215),d=s(9604),c=s(5893);function u(e){let{code:t,onChange:s}=e;const a=(0,i.useRef)(null),o=(0,i.useCallback)((e=>{a.current=e}),[]);(0,i.useEffect)((()=>{const e=()=>{null!==a.current&&a.current.layout({})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const{colorMode:r}=(0,n.I)();return(0,c.jsx)(d.ZP,{defaultLanguage:"javascript",value:t,defaultPath:"inmemory://model//src/index.ts",onChange:s,options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:o,theme:"dark"===r?"vs-dark":"light"})}const m=e=>{let{code:t,isPixiWebWorkerVersion:s,isPixiDevVersion:n,pixiVersion:a}=e;const o=(e=>(0,i.useMemo)((()=>({".babelrc":{code:JSON.stringify({presets:[["@babel/preset-env",{useBuiltIns:"entry",corejs:"3.29",targets:"last 2 chrome versions"}]]},null,2)},"src/styles.css":"body { margin: 0; overflow: hidden; }","src/index.js":e,"index.html":'\n<!DOCTYPE html>\n  <html>\n  <head>\n  <title>PixiJS Playground</title>\n  <meta charset="UTF-8" />\n  <link rel="stylesheet" href="src/styles.css">\n</head>\n<body>\n  <script src="src/index.js"><\/script>\n</body>\n</html>',"package.json":{code:JSON.stringify({scripts:{start:"parcel index.html --open",build:"parcel build index.html"}},null,2)}})),[e]))(t),{dependenciesKey:r,dependencies:l}=(e=>{let{isPixiWebWorkerVersion:t,isPixiDevVersion:s,pixiVersion:n}=e;return(0,i.useMemo)((()=>{const e=t?"@pixi/webworker":"pixi.js",i=e=>s?`${n}/${e}`:n,a=[e,"@pixi/graphics-extras","@pixi/math-extras"].reduce(((e,t)=>({...e,[t]:i(t)})),{});return{dependenciesKey:`${e}-${n}`,dependencies:a}}),[s,t,n])})({isPixiWebWorkerVersion:s,isPixiDevVersion:n,pixiVersion:a});return{files:o,key:`${r}-${t}`,customSetup:{entry:"index.html",dependencies:l,devDependencies:{"@babel/core":"^7.21.3","parcel-bundler":"^1.6.1"}}}},p={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",tutorial:"tutorial_bUbR",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv"};function h(e){let{mode:t,onCodeChanged:s}=e;const{code:n,updateCode:a}=(0,r.m4)(),{sandpack:l}=(0,r.X3)(),[d,m]=(0,i.useState)(!1),{activeFile:h,bundlerState:v}=l,x=(0,i.useCallback)((e=>{const t=e??"";a(t),s?.(t)}),[s,a]),b=(0,i.useCallback)((()=>{m((e=>!e))}),[]);return(0,c.jsxs)(r.sp,{className:o()(p[t],d&&p.showOutput),children:[(0,c.jsx)("div",{className:p.editorWrapper,children:(0,c.jsx)(u,{code:n,onChange:x},h)}),(0,c.jsxs)("div",{className:p.previewWrapper,children:[(0,c.jsx)(r.Gj,{showOpenInCodeSandbox:!0}),!v&&(0,c.jsx)("div",{className:p.sandpackLoadingOverlay})]}),(0,c.jsx)("button",{onClick:b,children:d?"Show Code":"Show Output"})]})}function v(e){let{code:t,onCodeChanged:s,isPixiWebWorkerVersion:a=!1,isPixiDevVersion:o=!1,pixiVersion:d=l.$,mode:u="example"}=e;const{colorMode:v}=(0,n.I)(),{key:x,files:b,customSetup:j}=m({code:t,isPixiDevVersion:o,isPixiWebWorkerVersion:a,pixiVersion:d});var f,g;return f="example",void 0===(g="example"===u)&&(g=!0),(0,i.useEffect)((()=>{const e=document.querySelector("main > .container");if(null!==e&&g)return e.classList.add(f),()=>{e.classList.remove(f)}}),[f,g]),(0,c.jsx)(r.oT,{template:"vanilla",theme:v,files:b,customSetup:j,options:{classes:{"sp-wrapper":p.spWrapper,"sp-layout":p.spLayout}},children:(0,c.jsx)(h,{mode:u,onCodeChanged:s})},x)}},2215:(e,t,s)=>{s.d(t,{$:()=>r,_:()=>l});var n=s(7294),i=s(1825);const a=i.map((e=>{let{versionLabel:t,version:s}=e;return{label:t,value:s}})),o=(e,t)=>s=>s[e]===t,r=i.find(o("latest",!0)).version,l=e=>{let{selectedVersionId:t,setURLState:s}=e;const r=(0,n.useCallback)((e=>s({pixiVersion:e})),[s]);return{selectedVersion:(0,n.useMemo)((()=>i.find(o("version",t))),[t]),handleVersionChanged:r,versionOptions:a}}},5889:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(2389),i=s(814),a=s(7754);const o="playgroundCodeBlock_UB3Y";var r=s(5893);function l(e){let{children:t,playground:s=!1,usesWebWorkerLibrary:l=!1,...d}=e;const c=(0,n.Z)();return s&&c?(0,r.jsx)("div",{className:o,children:(0,r.jsx)(a.Z,{code:t,isPixiWebWorkerVersion:l})}):(0,r.jsx)(i.Z,{...d,children:t})}},1825:e=>{e.exports=JSON.parse('[{"versionLabel":"dev","version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"https://pixijs.download/release/docs","dev":true,"npm":"https://pkg.csb.dev/pixijs/pixijs/commit/5691829e"},{"versionLabel":"v7.2.x","version":"7.2.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.2.4","build":"https://pixijs.download/v7.2.4/pixi.min.js","docs":"https://pixijs.download/v7.2.4/docs/index.html","npm":"7.2.4","latest":true},{"versionLabel":"v7.1.x","version":"7.1.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.1.4","build":"https://pixijs.download/v7.1.4/pixi.min.js","docs":"https://pixijs.download/v7.1.4/docs/index.html","npm":"7.1.4"},{"versionLabel":"v7.0.x","version":"7.0.5","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html","npm":"7.0.5"},{"versionLabel":"v6.x","version":"6.5.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v6.5.9","build":"https://pixijs.download/v6.5.9/pixi.min.js","docs":"https://pixijs.download/v6.5.9/docs/index.html","npm":"6.5.9"},{"versionLabel":"v5.x","version":"5.3.12","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html","npm":"5.3.12"},{"versionLabel":"v4.x","version":"4.8.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html","npm":"4.8.9"}]')}}]);