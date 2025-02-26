"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["5380"],{9589:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>t,assets:()=>l,toc:()=>h,contentTitle:()=>d});var t=JSON.parse('{"id":"fundamentals/lifecycle/activation","title":"Activation","description":"Whenever a service is resolved, the activation event is dispatched. An activation handler receives a context and a resolved value and returns the handled resolved value.","source":"@site/versioned_docs/version-6.x/fundamentals/lifecycle/activation.mdx","sourceDirName":"fundamentals/lifecycle","slug":"/fundamentals/lifecycle/activation","permalink":"/docs/6.x/fundamentals/lifecycle/activation","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Activation"},"sidebar":"tutorialSidebar","previous":{"title":"DI Hierarchy","permalink":"/docs/6.x/fundamentals/di-hierarchy"},"next":{"title":"Deactivation","permalink":"/docs/6.x/fundamentals/lifecycle/deactivation"}}'),i=a("8771"),r=a("3449"),s=a("1449"),o=a("8916");let c={sidebar_position:1,title:"Activation"},d=void 0,l={},h=[];function v(e){let n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Whenever a service is resolved, the activation event is dispatched. An activation handler receives a context and a resolved value and returns the handled resolved value."}),"\n",(0,i.jsx)(o.Z,{language:"ts",children:s}),"\n",(0,i.jsx)(n.p,{children:"There are multiple ways to provide an activation handler"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adding the handler to the ",(0,i.jsx)(n.a,{href:"/docs/6.x/api/container#onactivation",children:"container"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Adding the handler to the ",(0,i.jsx)(n.a,{href:"/docs/6.x/api/binding-syntax#onactivation",children:"binding"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Adding the handler to the class through the ",(0,i.jsx)(n.a,{href:"/docs/6.x/api/decorator#postconstruct",children:"postConstruct decorator"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When multiple activation handlers are binded to a service identifier, the ",(0,i.jsx)(n.code,{children:"postConstruct"})," handler is called before any others. After that, the binding handler is called. Then, container handlers are called, starting at the root container and descending the descendant containers stopping at the container with the binding."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},1449:function(e){e.exports="interface Weapon {\n  damage: number;\n}\n\nexport class Katana implements Weapon {\n  #damage: number = 10;\n\n  public get damage(): number {\n    return this.#damage;\n  }\n\n  public improve(): void {\n    this.#damage += 2;\n  }\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana);\ncontainer.onActivation(\n  'Weapon',\n  (_context: interfaces.Context, katana: Katana): Katana | Promise<Katana> => {\n    katana.improve();\n\n    return katana;\n  },\n);\n\n// Katana.damage is 12\nconst katana: Weapon = container.get<Weapon>('Weapon');"}}]);