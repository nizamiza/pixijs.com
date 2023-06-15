"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3181],{2503:(e,s,i)=>{i.d(s,{Z:()=>c});i(7294);var n=i(6010),r=i(5999),t=i(6668),d=i(9960);const o="anchorWithStickyNavbar_LWe7",l="anchorWithHideOnScrollNavbar_WYt5";var a=i(5893);function c(e){let{as:s,id:i,...c}=e;const{navbar:{hideOnScroll:h}}=(0,t.L)();if("h1"===s||!i)return(0,a.jsx)(s,{...c,id:void 0});const x=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:i});return(0,a.jsxs)(s,{...c,className:(0,n.Z)("anchor",h?l:o,c.className),id:i,children:[c.children,(0,a.jsx)(d.Z,{className:"hash-link",to:`#${i}`,"aria-label":x,title:x,children:"\u200b"})]})}},5111:(e,s,i)=>{i.r(s),i.d(s,{default:()=>x});var n=i(9960),r=i(5999),t=i(1825),d=i(2503),o=i(902),l=i(5893);function a(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.link",children:"Documentation"})}function c(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.build",children:"Build"})}function h(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.releaseNotes",children:"Release Notes"})}function x(){const e=t,s=e[0],i=e[1].prerelease?e[2]:e[1],x=e.find((e=>e.prerelease)),j=e.slice(2);return(0,l.jsx)(o.Z,{title:"Versions",description:"PixiJS Versions page listing all API documentation versions",children:(0,l.jsxs)("main",{className:"container margin-vert--lg",children:[(0,l.jsx)(d.Z,{as:"h1",children:(0,l.jsx)(r.Z,{id:"versionsPage.title",children:"PixiJS API documentation versions"})}),(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"next",children:(0,l.jsx)(r.Z,{id:"versionsPage.current.title",children:"Current version (Stable)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.current.description",children:"Here you can find the documentation for current released version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:i.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.docs,children:(0,l.jsx)(a,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.build,children:(0,l.jsx)(c,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.releaseNotes,children:(0,l.jsx)(h,{})})})]})})})]}),(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"latest",children:(0,l.jsx)(r.Z,{id:"versionsPage.next.title",children:"Next version (Unreleased)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for work-in-process unreleased version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:s.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:s.docs,children:(0,l.jsx)(a,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:s.build,children:(0,l.jsx)(c,{})})})]})})})]}),x&&(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"latest",children:(0,l.jsx)(r.Z,{id:"versionsPage.next.title",children:"Prerelease version"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for the prerelease version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:x.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:x.docs,children:(0,l.jsx)(a,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:x.build,children:(0,l.jsx)(c,{})})})]})})})]}),j.length>0&&(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"archive",children:(0,l.jsx)(r.Z,{id:"versionsPage.archived.title",children:"Past versions (Not maintained anymore)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.archived.description",children:"Here you can find documentation for previous versions of PixiJS."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:j.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:e.docs,children:(0,l.jsx)(a,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{href:e.releaseNotes,children:(0,l.jsx)(h,{})})})]},e.version)))})})]})]})})}},1825:e=>{e.exports=JSON.parse('[{"versionLabel":"dev","version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"https://pixijs.download/release/docs","dev":true,"npm":"https://pkg.csb.dev/pixijs/pixijs/commit/5691829e"},{"versionLabel":"v7.2.x","version":"7.2.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.2.4","build":"https://pixijs.download/v7.2.4/pixi.min.js","docs":"https://pixijs.download/v7.2.4/docs/index.html","npm":"7.2.4","latest":true},{"versionLabel":"v7.1.x","version":"7.1.4","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.1.4","build":"https://pixijs.download/v7.1.4/pixi.min.js","docs":"https://pixijs.download/v7.1.4/docs/index.html","npm":"7.1.4"},{"versionLabel":"v7.0.x","version":"7.0.5","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html","npm":"7.0.5"},{"versionLabel":"v6.x","version":"6.5.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v6.5.9","build":"https://pixijs.download/v6.5.9/pixi.min.js","docs":"https://pixijs.download/v6.5.9/docs/index.html","npm":"6.5.9"},{"versionLabel":"v5.x","version":"5.3.12","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html","npm":"5.3.12"},{"versionLabel":"v4.x","version":"4.8.9","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html","npm":"4.8.9"}]')}}]);