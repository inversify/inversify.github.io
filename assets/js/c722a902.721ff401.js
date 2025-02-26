"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["3006"],{7959:function(n,e,i){i.r(e),i.d(e,{default:()=>u,frontMatter:()=>d,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"api/container-module","title":"Container Module","description":"Container modules help manage the complexity of bindings in large applications.","source":"@site/versioned_docs/version-6.x/api/container-module.mdx","sourceDirName":"api","slug":"/api/container-module","permalink":"/docs/6.x/api/container-module","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Container Module"},"sidebar":"tutorialSidebar","previous":{"title":"Container","permalink":"/docs/6.x/api/container"},"next":{"title":"Decorator","permalink":"/docs/6.x/api/decorator"}}'),a=i("8771"),r=i("3449"),t=i("8916");let d={sidebar_position:3,title:"Container Module"},s="ContainerModule",c={},l=[{value:"Constructor",id:"constructor",level:2},{value:"bind",id:"bind",level:3},{value:"unbind",id:"unbind",level:3},{value:"isBound",id:"isbound",level:3},{value:"rebind",id:"rebind",level:3},{value:"unbindAsync",id:"unbindasync",level:3},{value:"onActivation",id:"onactivation",level:3},{value:"onDeactivation",id:"ondeactivation",level:3},{value:"Example: binding services through ContainerModule API",id:"example-binding-services-through-containermodule-api",level:2}];function h(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"containermodule",children:"ContainerModule"})}),"\n",(0,a.jsx)(e.p,{children:"Container modules help manage the complexity of bindings in large applications."}),"\n",(0,a.jsx)(e.h2,{id:"constructor",children:"Constructor"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"constructor(registry: interfaces.ContainerModuleCallBack)\n"})}),"\n",(0,a.jsxs)(e.p,{children:["The constructor argument for ",(0,a.jsx)(e.code,{children:"ContainerModule"})," is a registration callback with function parameters to manage bindings within the scope of the container module."]}),"\n",(0,a.jsx)(e.h3,{id:"bind",children:"bind"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"bind: interfaces.Bind\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#bind",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"unbind",children:"unbind"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"unbind: interfaces.Unbind\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#unbind",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"isbound",children:"isBound"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"isBound: interfaces.IsBound\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#isbound",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"rebind",children:"rebind"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"rebind: interfaces.Rebind\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#rebind",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"unbindasync",children:"unbindAsync"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"unbindAsync: interfaces.UnbindAsync\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#unbindasync",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"onactivation",children:"onActivation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"onActivation: interfaces.Container['onActivation']\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#onactivation",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h3,{id:"ondeactivation",children:"onDeactivation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"onDeactivation: interfaces.Container['onDeactivation']\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Refer to the ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/container#ondeactivation",children:"docs"})," for more information."]}),"\n",(0,a.jsx)(e.h2,{id:"example-binding-services-through-containermodule-api",children:"Example: binding services through ContainerModule API"}),"\n",(0,a.jsxs)(e.p,{children:["When a container module is loaded into a Container, the registration callback is invoked. This is the opportunity for the container module to register bindings and handlers. Use the Container ",(0,a.jsx)(e.code,{children:"load"})," method for ",(0,a.jsx)(e.code,{children:"ContainerModule"})," instances and the Container ",(0,a.jsx)(e.code,{children:"loadAsync"})," method for ",(0,a.jsx)(e.code,{children:"AsyncContainerModule"})," instances."]}),"\n",(0,a.jsxs)(e.p,{children:["When a container module is unloaded from a Container, the bindings added by that container will be removed, and the ",(0,a.jsx)(e.a,{href:"/docs/6.x/fundamentals/lifecycle/deactivation",children:"deactivation process"})," will occur for each of them. Container deactivation and ",(0,a.jsx)(e.a,{href:"/docs/6.x/fundamentals/lifecycle/activation",children:"activation handlers"})," will also be removed. Use the ",(0,a.jsx)(e.code,{children:"unloadAsync"})," method to unload when there will be an async deactivation handler or async ",(0,a.jsx)(e.a,{href:"/docs/6.x/api/decorator#predestroy",children:"preDestroy"}),"."]}),"\n",(0,a.jsx)(t.Z,{language:"ts",children:"const warriorsModule: ContainerModule = new ContainerModule(\n  (bind: interfaces.Bind) => {\n    bind<Ninja>('Ninja').to(Ninja);\n  },\n);\n\nconst weaponsModule: ContainerModule = new ContainerModule(\n  (\n    bind: interfaces.Bind,\n    _unbind: interfaces.Unbind,\n    _isBound: interfaces.IsBound,\n    _rebind: interfaces.Rebind,\n    _unbindAsync: interfaces.UnbindAsync,\n    _onActivation: interfaces.Container['onActivation'],\n    _onDeactivation: interfaces.Container['onDeactivation'],\n  ) => {\n    bind<Katana>('Weapon').to(Katana).whenTargetNamed('Melee');\n    bind<Shuriken>('Weapon').to(Shuriken).whenTargetNamed('Ranged');\n  },\n);\n\nconst container: Container = new Container();\ncontainer.load(warriorsModule, weaponsModule);\n\nconst ninja: Ninja = container.get('Ninja');"})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}}}]);