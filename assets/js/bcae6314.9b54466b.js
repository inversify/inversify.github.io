"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["2367"],{7853:function(e,r,i){i.r(r),i.d(r,{default:()=>d,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>p,contentTitle:()=>c});var n=JSON.parse('{"id":"faq/requirements","title":"TypeScript Requirements","description":"This page outlines the TypeScript configuration requirements for using InversifyJS.","source":"@site/docs/faq/requirements.mdx","sourceDirName":"faq","slug":"/faq/requirements","permalink":"/docs/next/faq/requirements","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"TypeScript Requirements"},"sidebar":"tutorialSidebar","previous":{"title":"Decorator","permalink":"/docs/next/api/decorator"},"next":{"title":"Using bundlers","permalink":"/docs/next/faq/using-bundlers"}}'),t=i("3112"),s=i("9045");let o={sidebar_position:1,title:"TypeScript Requirements"},c="TypeScript Requirements",a={},p=[{value:"Required TypeScript Configuration",id:"required-typescript-configuration",level:2},{value:"Decorator Support",id:"decorator-support",level:3},{value:"ES2022 Error Support",id:"es2022-error-support",level:3},{value:"Strict Mode Considerations",id:"strict-mode-considerations",level:2}];function l(e){let r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"typescript-requirements",children:"TypeScript Requirements"})}),"\n",(0,t.jsx)(r.p,{children:"This page outlines the TypeScript configuration requirements for using InversifyJS."}),"\n",(0,t.jsx)(r.h2,{id:"required-typescript-configuration",children:"Required TypeScript Configuration"}),"\n",(0,t.jsx)(r.p,{children:"InversifyJS relies on TypeScript's reflection metadata capabilities. You need to configure your TypeScript compiler with the following options:"}),"\n",(0,t.jsx)(r.h3,{id:"decorator-support",children:"Decorator Support"}),"\n",(0,t.jsxs)(r.p,{children:["Enable experimental decorators and metadata emission in your ",(0,t.jsx)(r.code,{children:"tsconfig.json"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "experimentalDecorators": true,\n    "emitDecoratorMetadata": true,\n    // other options...\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"es2022-error-support",children:"ES2022 Error Support"}),"\n",(0,t.jsxs)(r.p,{children:["InversifyJS uses the ",(0,t.jsx)(r.code,{children:"ErrorOptions"})," type which requires ES2022 support. You have two options:"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Set your TypeScript target to ES2022 or later:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "ES2022",\n    // other options...\n  }\n}\n'})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsx)(r.li,{children:"Or alternatively, include the ES2022.Error library in your TypeScript configuration:"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "lib": ["ES2022.Error", /* other libs... */],\n    // other options...\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"strict-mode-considerations",children:"Strict Mode Considerations"}),"\n",(0,t.jsx)(r.p,{children:"While not required, InversifyJS works well with TypeScript's strict mode. If you're using strict mode, you might need to provide more explicit type annotations in some cases."})]})}function d(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);