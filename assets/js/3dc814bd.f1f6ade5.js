"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["6158"],{5059:function(n,e,i){i.r(e),i.d(e,{default:()=>y,frontMatter:()=>b,metadata:()=>a,assets:()=>g,toc:()=>f,contentTitle:()=>v});var a=JSON.parse('{"id":"fundamentals/binding","title":"Binding","description":"A binding represents the relationship between a service identifier and its resolution. Bindings are added to a container to configure it to provide services.","source":"@site/docs/fundamentals/binding.mdx","sourceDirName":"fundamentals","slug":"/fundamentals/binding","permalink":"/docs/next/fundamentals/binding","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Binding"},"sidebar":"tutorialSidebar","previous":{"title":"Dependency inversion","permalink":"/docs/next/introduction/dependency-inversion"},"next":{"title":"DI Hierarchy","permalink":"/docs/next/fundamentals/di-hierarchy"}}'),t=i("3112"),o=i("9045"),r=i("2239"),s=i("6321"),d=i("1898"),c=i("4163"),l=i("3768"),h=i("1077"),p=i("116"),u=i("7976");let b={sidebar_position:1,title:"Binding"},v="Binding",g={},f=[{value:"Relying on emitted class metadata",id:"relying-on-emitted-class-metadata",level:2},{value:"Autobinding",id:"autobinding",level:2},{value:"Asynchronously resolved bindings",id:"asynchronously-resolved-bindings",level:2},{value:"Binding properties",id:"binding-properties",level:2},{value:"Service identifier",id:"service-identifier",level:3},{value:"Scope",id:"scope",level:3},{value:"Request",id:"request",level:4},{value:"Singleton",id:"singleton",level:4},{value:"Transient",id:"transient",level:4},{value:"Constraint",id:"constraint",level:3},{value:"Lifecycle handlers",id:"lifecycle-handlers",level:3}];function m(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"binding",children:"Binding"})}),"\n",(0,t.jsx)(e.p,{children:"A binding represents the relationship between a service identifier and its resolution. Bindings are added to a container to configure it to provide services."}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:l}),"\n",(0,t.jsxs)(e.p,{children:["When the binding is added to the container, the container is configured to provide a resolved value for the service identifier ",(0,t.jsx)(e.code,{children:"Weapon"})," by resolving the ",(0,t.jsx)(e.code,{children:"Katana"})," class. ",(0,t.jsx)(e.code,{children:"container.bind"})," creates a new binding with certain properties, which are explained below."]}),"\n",(0,t.jsx)(e.h2,{id:"relying-on-emitted-class-metadata",children:"Relying on emitted class metadata"}),"\n",(0,t.jsxs)(e.p,{children:["When using TypeScript, you can rely on the emitted class metadata to avoid having to manually specify the service identifier. This is done by using the ",(0,t.jsx)(e.code,{children:"@injectable"})," decorator from ",(0,t.jsx)(e.code,{children:"inversify"})," on the class you want to bind. You need to enable the ",(0,t.jsx)(e.code,{children:"emitDecoratorMetadata"})," TypeScript compiler option."]}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:h}),"\n",(0,t.jsx)(e.h2,{id:"autobinding",children:"Autobinding"}),"\n",(0,t.jsxs)(e.p,{children:["InversifyJS provides a feature called autobinding that allows you to automatically bind classes. Whenever a class service is being resolved and no bindings are found in the planning phase, the container adds a type binding to the requested class before proceeding with the planning phase. This feature is disabled by default. To enable it, you need to pass the ",(0,t.jsx)(e.code,{children:"autoBind"})," option to the container or pass an ",(0,t.jsx)(e.code,{children:"autobind"})," option when calling ",(0,t.jsx)(e.code,{children:"container.get"}),"."]}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:p}),"\n",(0,t.jsx)(e.h2,{id:"asynchronously-resolved-bindings",children:"Asynchronously resolved bindings"}),"\n",(0,t.jsx)(e.p,{children:"Whenever a promise-like value is resolved from a binding, the container will wait for the promise to resolve before returning the resolved value to their dependent services:"}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:c}),"\n",(0,t.jsxs)(e.p,{children:["In the example, the ",(0,t.jsx)(e.code,{children:"dbConnectionSymbol"})," database connection is resolved asynchronously. The container waits for promises to be resolved, passing an ",(0,t.jsx)(e.code,{children:"AwesomeDbDriverConnection"})," instance to the resolve value factory instead of a ",(0,t.jsx)(e.code,{children:"Promise<AwesomeDbDriverConnection>"})," one."]}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsxs)(e.p,{children:["Keep in mind async bindings require the use of ",(0,t.jsx)(e.code,{children:"Container.getAsync"})," or ",(0,t.jsx)(e.code,{children:"Container.getAllAsync"})," to resolve any related service."]})}),"\n",(0,t.jsx)(e.h2,{id:"binding-properties",children:"Binding properties"}),"\n",(0,t.jsx)(e.p,{children:"A binding has the following properties:"}),"\n",(0,t.jsx)(e.h3,{id:"service-identifier",children:"Service identifier"}),"\n",(0,t.jsx)(e.p,{children:"The identifier of the service for which a resolution is provided."}),"\n",(0,t.jsx)(e.h3,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(e.p,{children:"The scope determines the caching strategy used to decide whether the service should be resolved or a cached value should be provided."}),"\n",(0,t.jsx)(e.h4,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(e.p,{children:["When the service is resolved within the same ",(0,t.jsx)(e.code,{children:"container.get"})," request, the same resolved value will be used."]}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:r}),"\n",(0,t.jsx)(e.h4,{id:"singleton",children:"Singleton"}),"\n",(0,t.jsx)(e.p,{children:"When the service is resolved, the same cached resolved value will be used."}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:s}),"\n",(0,t.jsx)(e.h4,{id:"transient",children:"Transient"}),"\n",(0,t.jsx)(e.p,{children:"When the service is resolved, a new resolved value will be used each time."}),"\n",(0,t.jsx)(u.Z,{language:"ts",children:d}),"\n",(0,t.jsx)(e.h3,{id:"constraint",children:"Constraint"}),"\n",(0,t.jsxs)(e.p,{children:["Specifies whether the binding is used to provide a resolved value for the given service identifier. Refer to the ",(0,t.jsx)(e.a,{href:"/docs/next/api/binding-syntax#bindwhenfluentsyntax",children:"API docs"})," for more information."]}),"\n",(0,t.jsx)(e.h3,{id:"lifecycle-handlers",children:"Lifecycle handlers"}),"\n",(0,t.jsxs)(e.p,{children:["Handlers that are called after a resolved value is provided or a singleton-scoped binding is deactivated. Refer to the ",(0,t.jsx)(e.a,{href:"/docs/next/api/binding-syntax#bindonfluentsyntax",children:"API docs"})," for more information."]})]})}function y(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},2239:function(n){n.exports="export class LegendaryWarrior {\n  constructor(\n    @inject('Weapon') public readonly firstWeapon: Weapon,\n    @inject('Weapon') public readonly secondWeapon: Weapon,\n    @inject('Weapon') public readonly thirdWeapon: Weapon,\n  ) {}\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inRequestScope();\ncontainer.bind(LegendaryWarrior).toSelf();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\nconst legendaryWarrior: LegendaryWarrior = container.get(LegendaryWarrior);\n\n// Returns false\nconst isSameKatana: boolean = firstKatana === secondKatana;\n\n// Returns true\nconst warriorHasSameKatana: boolean =\n  legendaryWarrior.firstWeapon === legendaryWarrior.secondWeapon &&\n  legendaryWarrior.secondWeapon === legendaryWarrior.thirdWeapon;"},6321:function(n){n.exports="const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inSingletonScope();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\n// Returns true\nconst isSameKatana: boolean = firstKatana === secondKatana;"},1898:function(n){n.exports="const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inTransientScope();\n\nconst firstKatana: Weapon = container.get<Weapon>('Weapon');\nconst secondKatana: Weapon = container.get<Weapon>('Weapon');\n\n// Returns false\nconst isSameKatana: boolean = firstKatana === secondKatana;"},4163:function(n){n.exports="class Katana {\n  public material!: string;\n  public damage!: number;\n}\n\nconst dbConnectionSymbol: symbol = Symbol.for('DbConnection');\nconst katanaDbCollectionSymbol: symbol = Symbol.for('KatanaRepository');\n\nconst container: Container = new Container();\n\n@injectable()\nclass KatanaRepository {\n  readonly #dbCollection: AwesomeDbDriverCollection<Katana>;\n\n  constructor(\n    @inject(katanaDbCollectionSymbol)\n    dbCollection: AwesomeDbDriverCollection<Katana>,\n  ) {\n    this.#dbCollection = dbCollection;\n  }\n\n  public async find(query: unknown): Promise<Katana[]> {\n    return this.#dbCollection.find(query);\n  }\n}\n\ncontainer.bind(MyAwesomeEnvService).toSelf();\ncontainer\n  .bind(dbConnectionSymbol)\n  .toResolvedValue(\n    async (\n      envService: MyAwesomeEnvService,\n    ): Promise<AwesomeDbDriverConnection> => {\n      const databaseUrl: string = envService.getEnvironment().dbUrl;\n\n      return AwesomeDbDriverImplementation.connect(databaseUrl);\n    },\n    [MyAwesomeEnvService],\n  )\n  .inSingletonScope();\n\ncontainer\n  .bind(katanaDbCollectionSymbol)\n  .toResolvedValue(\n    (\n      connection: AwesomeDbDriverConnection,\n    ): AwesomeDbDriverCollection<Katana> => {\n      return connection.getCollection(Katana);\n    },\n    [dbConnectionSymbol],\n  )\n  .inSingletonScope();\n\ncontainer.bind(KatanaRepository).toSelf();"},116:function(n){n.exports="export class Katana {\n  public readonly damage: number = 10;\n}\n\n@injectable()\nexport class Samurai {\n  public readonly katana: Katana;\n\n  constructor(katana: Katana) {\n    this.katana = katana;\n  }\n}\n\nconst container: Container = new Container();\n\nconst samurai: Samurai = container.get(Samurai, { autobind: true });"},3768:function(n){n.exports="const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).inSingletonScope();"},1077:function(n){n.exports="export class Katana {\n  public readonly damage: number = 10;\n}\n\n@injectable()\nexport class Samurai {\n  public readonly katana: Katana;\n\n  constructor(katana: Katana) {\n    this.katana = katana;\n  }\n}\n\nconst container: Container = new Container();\n\ncontainer.bind(Katana).toSelf().inSingletonScope();\ncontainer.bind(Samurai).toSelf().inSingletonScope();\n\nconst samurai: Samurai = container.get(Samurai);"}}]);