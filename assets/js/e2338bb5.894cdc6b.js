"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["2370"],{188:function(e,i,s){s.r(i),s.d(i,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"faq/using-bundlers","title":"Using bundlers","description":"InversifyJS can be used with any bundler that supports transpiling TypeScript legacy decorators and emitting TypeScript class metadata.","source":"@site/versioned_docs/version-7.x/faq/using-bundlers.mdx","sourceDirName":"faq","slug":"/faq/using-bundlers","permalink":"/docs/faq/using-bundlers","draft":false,"unlisted":false,"tags":[],"version":"7.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Using bundlers"},"sidebar":"tutorialSidebar","previous":{"title":"Decorator","permalink":"/docs/api/decorator"},"next":{"title":"Migrating from v6","permalink":"/docs/guides/migrating-from-v6"}}'),t=s("8771"),r=s("3449");let l={sidebar_position:1,title:"Using bundlers"},o="Using bundlers",d={},a=[{value:"esbuild",id:"esbuild",level:2},{value:"Rollup",id:"rollup",level:2},{value:"Vite",id:"vite",level:2},{value:"Webpack",id:"webpack",level:2}];function c(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"using-bundlers",children:"Using bundlers"})}),"\n",(0,t.jsx)(i.p,{children:"InversifyJS can be used with any bundler that supports transpiling TypeScript legacy decorators and emitting TypeScript class metadata."}),"\n",(0,t.jsx)(i.p,{children:"If your bundler does not transpile TypeScript legacy decorators, you won't be able to use InversifyJS without a plugin that does it."}),"\n",(0,t.jsx)(i.p,{children:"If your bundler does not emit TypeScript class metadata, InversifyJS won't be able to provide the following features:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/docs/fundamentals/binding#autobinding",children:"Autobinding"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Class constructor parameters or properties without the need to include an ",(0,t.jsx)(i.code,{children:"@inject"})," decorator."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"esbuild",children:"esbuild"}),"\n",(0,t.jsxs)(i.p,{children:["esbuild does not support transpiling TypeScript legacy decorators as explained in ",(0,t.jsx)(i.a,{href:"https://github.com/evanw/esbuild/issues/257",children:"this issue"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"rollup",children:"Rollup"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the ",(0,t.jsx)(i.code,{children:"@rollup/plugin-typescript"})," plugin to successfully transpile TypeScript code with legacy decorators."]}),"\n",(0,t.jsx)(i.h2,{id:"vite",children:"Vite"}),"\n",(0,t.jsxs)(i.p,{children:["Vite uses esbuild under the hood, so it also does not support transpiling TypeScript legacy decorators. However, you can use the ",(0,t.jsx)(i.code,{children:"unplugin-swc"})," plugin to transpile TypeScript legacy decorators."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:'import swc from "unplugin-swc";\nimport { defineConfig } from "vite";\n\nexport default defineConfig({\n  plugins: [\n    // Vite plugin\n    swc.vite(),\n  ],\n});\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Refer to ",(0,t.jsx)(i.a,{href:"https://github.com/inversify/InversifyJS/issues/1710",children:"this issue"})," for more information."]}),"\n",(0,t.jsx)(i.h2,{id:"webpack",children:"Webpack"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the ",(0,t.jsx)(i.code,{children:"ts-loader"})," plugin to successfully transpile TypeScript code with legacy decorators."]})]})}function u(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);