"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["7293"],{7109:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var i=r(8771);r(9535);var n=r(7380),a=r(6219),s=r(4213),l=r(6868),c=r(5837),d=r(3311);function o(e){let{year:t,posts:r}=e,a=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>a.format(new Date(e));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{as:"h3",id:t,children:t}),(0,i.jsx)("ul",{children:r.map(e=>(0,i.jsx)("li",{children:(0,i.jsxs)(n.Z,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function h(e){let{years:t}=e;return(0,i.jsx)("section",{className:"margin-vert--lg",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:t.map((e,t)=>(0,i.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,i.jsx)(o,{...e})},t))})})})}function m(e){let{archive:t}=e,r=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let r=t.metadata.date.split("-")[0],i=e.get(r)??[];return e.set(r,[t,...i])},new Map),e=>{let[t,r]=e;return{year:t,posts:r}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.d,{title:r,description:n}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("header",{className:"hero hero--primary",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(d.Z,{as:"h1",className:"hero__title",children:r}),(0,i.jsx)("p",{className:"hero__subtitle",children:n})]})}),(0,i.jsx)("main",{children:l.length>0&&(0,i.jsx)(h,{years:l})})]})]})}},6868:function(e,t,r){r.d(t,{P:function(){return n}});var i=r(1310);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,i.Z)(),r=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,i.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);