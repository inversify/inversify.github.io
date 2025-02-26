"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["3454"],{322:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"fundamentals/inheritance","title":"Inheritance","description":"Inheritance can be achieved as long as constructor parameters are properly decorated. There are two ways to ensure this:","source":"@site/versioned_docs/version-6.x/fundamentals/inheritance.mdx","sourceDirName":"fundamentals","slug":"/fundamentals/inheritance","permalink":"/docs/6.x/fundamentals/inheritance","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Inheritance"},"sidebar":"tutorialSidebar","previous":{"title":"Middleware","permalink":"/docs/6.x/fundamentals/lifecycle/middleware"},"next":{"title":"Snapshot","permalink":"/docs/6.x/fundamentals/snapshot"}}'),t=r("8771"),s=r("3449");let i={sidebar_position:4,title:"Inheritance"},c="Inheritance",o={},d=[{value:"Example of incorrect inheritance injection",id:"example-of-incorrect-inheritance-injection",level:2},{value:"Using the @unmanaged decorator",id:"using-the-unmanaged-decorator",level:2}];function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"inheritance",children:"Inheritance"})}),"\n",(0,t.jsx)(n.p,{children:"Inheritance can be achieved as long as constructor parameters are properly decorated. There are two ways to ensure this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The number of decorated constructor arguments in a derived class is greater than or equal to the number of constructor arguments in its base class."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/6.x/api/container#skipbaseclasschecks",children:"skipBaseClassChecks"})," option is enabled."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-of-incorrect-inheritance-injection",children:"Example of incorrect inheritance injection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'@injectable()\nclass Warrior {\n  public rank: string;\n  constructor(rank: string) { // args count = 1\n    this.rank = rank;\n  }\n}\n\n@injectable()\nclass SamuraiMaster extends Warrior {\n  constructor() { // args count = 0\n    super("master");\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When trying to get a ",(0,t.jsx)(n.code,{children:"SamuraiMaster"}),", the container throws an error indicating that the constructor parameters are not properly decorated."]}),"\n",(0,t.jsx)(n.h2,{id:"using-the-unmanaged-decorator",children:"Using the @unmanaged decorator"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/6.x/api/decorator#unmanaged",children:"unmanaged"})," decorator tells Inversify that a base type constructor parameter should not be managed. This is often the case when dealing with inheritance hierarchies where only leaf types are injected."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'@injectable()\nclass Warrior {\n  public rank: string;\n  constructor(@unmanaged() rank: string) { // args count = 0, unmanaged args are not included\n    this.rank = rank;\n  }\n}\n\n@injectable()\nclass SamuraiMaster extends Warrior {\n  constructor() { // args count = 0\n    super("master");\n  }\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);