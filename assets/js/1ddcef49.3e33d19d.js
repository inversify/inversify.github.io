"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["616"],{3617:function(n,e,a){a.r(e),a.d(e,{default:()=>g,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>d});var i=JSON.parse('{"id":"api/binding-syntax","title":"Binding Syntax","description":"Binding syntax is provided as a fluent interface resulting from using the container API or the container module API.","source":"@site/versioned_docs/version-6.x/api/binding-syntax.mdx","sourceDirName":"api","slug":"/api/binding-syntax","permalink":"/docs/6.x/api/binding-syntax","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Binding Syntax"},"sidebar":"tutorialSidebar","previous":{"title":"Snapshot","permalink":"/docs/6.x/fundamentals/snapshot"},"next":{"title":"Container","permalink":"/docs/6.x/api/container"}}'),t=a("3112"),r=a("4300"),s=a("6531");let o={sidebar_position:1,title:"Binding Syntax"},d="Binding Syntax",c={},l=[{value:"BindingToSyntax",id:"bindingtosyntax",level:2},{value:"to",id:"to",level:3},{value:"toSelf",id:"toself",level:3},{value:"toConstantValue",id:"toconstantvalue",level:3},{value:"toDynamicValue",id:"todynamicvalue",level:3},{value:"toConstructor",id:"toconstructor",level:3},{value:"toFactory",id:"tofactory",level:3},{value:"toFunction",id:"tofunction",level:3},{value:"toAutoFactory",id:"toautofactory",level:3},{value:"toAutoNamedFactory",id:"toautonamedfactory",level:3},{value:"toProvider",id:"toprovider",level:3},{value:"toService",id:"toservice",level:3},{value:"BindingInSyntax",id:"bindinginsyntax",level:2},{value:"inSingletonScope",id:"insingletonscope",level:3},{value:"inTransientScope",id:"intransientscope",level:3},{value:"inRequestScope",id:"inrequestscope",level:3},{value:"BindingOnSyntax",id:"bindingonsyntax",level:2},{value:"onActivation",id:"onactivation",level:3},{value:"onDeactivation",id:"ondeactivation",level:3},{value:"BindingWhenSyntax",id:"bindingwhensyntax",level:2},{value:"when",id:"when",level:3},{value:"whenTargetNamed",id:"whentargetnamed",level:3},{value:"whenTargetIsDefault",id:"whentargetisdefault",level:3},{value:"whenTargetTagged",id:"whentargettagged",level:3},{value:"whenInjectedInto",id:"wheninjectedinto",level:3},{value:"whenParentNamed",id:"whenparentnamed",level:3},{value:"whenParentTagged",id:"whenparenttagged",level:3},{value:"whenAnyAncestorIs",id:"whenanyancestoris",level:3},{value:"whenNoAncestorIs",id:"whennoancestoris",level:3},{value:"whenAnyAncestorNamed",id:"whenanyancestornamed",level:3},{value:"whenAnyAncestorTagged",id:"whenanyancestortagged",level:3},{value:"whenNoAncestorNamed",id:"whennoancestornamed",level:3},{value:"whenNoAncestorTagged",id:"whennoancestortagged",level:3},{value:"whenAnyAncestorMatches",id:"whenanyancestormatches",level:3},{value:"whenNoAncestorMatches",id:"whennoancestormatches",level:3},{value:"BindingWhenOnSyntax",id:"bindingwhenonsyntax",level:2},{value:"BindingInWhenOnSyntax",id:"bindinginwhenonsyntax",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"binding-syntax",children:"Binding Syntax"})}),"\n",(0,t.jsxs)(e.p,{children:["Binding syntax is provided as a fluent interface resulting from using the ",(0,t.jsx)(e.a,{href:"/docs/6.x/api/container#bind",children:"container API"})," or the ",(0,t.jsx)(e.a,{href:"/docs/6.x/api/container-module#bind",children:"container module API"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"bindingtosyntax",children:"BindingToSyntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface BindingToSyntax<T> {\n  // ...\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Represents a service binding given a service identifier."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"const bindingToSyntax = container.bind('service-id');\n"})}),"\n",(0,t.jsx)(e.p,{children:'Further documentation refers to this service identifier as the "given service identifier".'}),"\n",(0,t.jsx)(e.h3,{id:"to",children:"to"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"to(constructor: interfaces.Newable<T>): interfaces.BindingInWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a class instantiation to the given service binding. Whenever the service is resolved, the class constructor will be invoked to build the resolved value."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana);\n\nconst katana: Weapon = container.get<Weapon>('Weapon');"}),"\n",(0,t.jsx)(e.h3,{id:"toself",children:"toSelf"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toSelf(): interfaces.BindingInWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"If the given service identifier is a class, establish a type binding to that class."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>(Katana).toSelf();\n\nconst katana: Weapon = container.get<Weapon>(Katana);"}),"\n",(0,t.jsx)(e.h3,{id:"toconstantvalue",children:"toConstantValue"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toConstantValue(value: T): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a value in singleton scope to the given service identifier."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').toConstantValue(new Katana());\n\nconst katana: Weapon = container.get<Weapon>('Weapon');"}),"\n",(0,t.jsx)(e.h3,{id:"todynamicvalue",children:"toDynamicValue"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toDynamicValue(func: interfaces.DynamicValue<T>): interfaces.BindingInWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a function to the given service id. Whenever the service is resolved, the function passed will be invoked to build the resolved value."}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"Keep in mind a service is not resolved if it's cached in the current scope."})}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').toDynamicValue((): Weapon => new Katana());\n\nconst katana: Weapon = container.get<Weapon>('Weapon');"}),"\n",(0,t.jsx)(e.h3,{id:"toconstructor",children:"toConstructor"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toConstructor<T2>(constructor: interfaces.Newable<T2>): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a class to the given service id. Whenever the service is resolved, the class constructor will be passed as the resolved value."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\ncontainer.bind<Weapon>('WeaponConstructor').toConstructor(Katana);\n\nconst katanaConstructor: interfaces.Newable<Weapon> =\n  container.get<interfaces.Newable<Weapon>>('WeaponConstructor');"}),"\n",(0,t.jsx)(e.h3,{id:"tofactory",children:"toFactory"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toFactory<T2>(factory: interfaces.FactoryCreator<T2>): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a factory to the given service identifier. Whenever the service is resolved, the factory will be passed as the resolved value."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"container.bind<Engine>('Engine').to(PetrolEngine).whenTargetNamed('petrol');\ncontainer.bind<Engine>('Engine').to(DieselEngine).whenTargetNamed('diesel');\n\ncontainer\n  .bind<interfaces.Factory<Engine>>('Factory<Engine>')\n  .toFactory<Engine, [string], [number]>((context: interfaces.Context) => {\n    return (named: string) => (displacement: number) => {\n      const engine: Engine = context.container.getNamed<Engine>(\n        'Engine',\n        named,\n      );\n      engine.displacement = displacement;\n      return engine;\n    };\n  });\n\n@injectable()\nclass DieselCarFactory implements CarFactory {\n  readonly #dieselFactory: (displacement: number) => Engine;\n\n  constructor(\n    @inject('Factory<Engine>')\n    factory: (category: string) => (displacement: number) => Engine, // Injecting an engine factory\n  ) {\n    // Creating a diesel engine factory\n    this.#dieselFactory = factory('diesel');\n  }\n\n  public createEngine(displacement: number): Engine {\n    // Creating a concrete diesel engine\n    return this.#dieselFactory(displacement);\n  }\n}"}),"\n",(0,t.jsx)(e.h3,{id:"tofunction",children:"toFunction"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toFunction(func: T): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["An alias of ",(0,t.jsx)(e.code,{children:"BindingToSyntax.toConstantValue"})," restricted to functions."]}),"\n",(0,t.jsx)(e.h3,{id:"toautofactory",children:"toAutoFactory"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toAutoFactory<T2>(serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a factory of services associated with a target service identifier to the given service identifier."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"@injectable()\nclass Ninja implements Ninja {\n  readonly #katana: Katana;\n  readonly #shuriken: Shuriken;\n\n  constructor(\n    @inject('Factory<Katana>') katanaFactory: interfaces.AutoFactory<Katana>,\n    @inject('Shuriken') shuriken: Shuriken,\n  ) {\n    this.#katana = katanaFactory();\n    this.#shuriken = shuriken;\n  }\n\n  public fight() {\n    return this.#katana.hit();\n  }\n\n  public sneak() {\n    return this.#shuriken.throw();\n  }\n}\n\ncontainer.bind('Katana').to(Katana);\ncontainer.bind('Shuriken').to(Shuriken);\n\ncontainer\n  .bind<interfaces.Factory<Katana>>('Factory<Katana>')\n  .toAutoFactory<Katana>('Katana');\n\ncontainer.bind(Ninja).toSelf();"}),"\n",(0,t.jsx)(e.h3,{id:"toautonamedfactory",children:"toAutoNamedFactory"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toAutoNamedFactory<T2>(serviceIdentifier: interfaces.ServiceIdentifier<T2>): BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a factory of services associated with a target service identifier and a name to the given service identifier."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"@injectable()\nclass Ninja implements Ninja {\n  readonly #katana: Katana;\n  readonly #shuriken: Shuriken;\n\n  constructor(\n    @inject('Factory<Weapon>')\n    katanaFactory: interfaces.AutoNamedFactory<Weapon>,\n  ) {\n    this.#katana = katanaFactory('katana') as Katana;\n    this.#shuriken = katanaFactory('shuriken') as Shuriken;\n  }\n\n  public fight() {\n    return this.#katana.hit();\n  }\n\n  public sneak() {\n    return this.#shuriken.throw();\n  }\n}\n\ncontainer.bind<Weapon>('Weapon').to(Katana).whenTargetNamed('katana');\ncontainer.bind<Weapon>('Weapon').to(Shuriken).whenTargetNamed('shuriken');\ncontainer\n  .bind<interfaces.AutoNamedFactory<Weapon>>('Factory<Weapon>')\n  .toAutoNamedFactory<Weapon>('Weapon');\n\ncontainer.bind(Ninja).toSelf();"}),"\n",(0,t.jsx)(e.h3,{id:"toprovider",children:"toProvider"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toProvider<T2>(provider: interfaces.ProviderCreator<T2>): interfaces.BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds a provider of services associated with a target service identifier to the given service identifier. A provider is just an asynchronous factory."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\n\ninterface Sword {\n  material: string;\n  damage: number;\n}\n\n@injectable()\nclass Katana implements Sword {\n  public material!: string;\n  public damage!: number;\n}\n\ntype SwordProvider = (material: string, damage: number) => Promise<Sword>;\n\ncontainer.bind<Sword>('Sword').to(Katana);\n\ncontainer\n  .bind<SwordProvider>('SwordProvider')\n  .toProvider<Sword>((context: interfaces.Context) => {\n    return async (material: string, damage: number): Promise<Sword> => {\n      // Custom args!\n      return new Promise<Sword>(\n        (resolve: (value: Sword | PromiseLike<Sword>) => void) => {\n          setTimeout(() => {\n            const katana: Sword = context.container.get<Sword>('Sword');\n            katana.material = material;\n            katana.damage = damage;\n            resolve(katana);\n          }, 10);\n        },\n      );\n    };\n  });\n\nconst katanaProvider: SwordProvider =\n  container.get<SwordProvider>('SwordProvider');\n\nconst powerfulGoldKatana: Promise<Sword> = katanaProvider('gold', 100);\n\nconst notSoPowerfulGoldKatana: Promise<Sword> = katanaProvider('gold', 10);"}),"\n",(0,t.jsx)(e.h3,{id:"toservice",children:"toService"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"toService(service: interfaces.ServiceIdentifier<T>): void;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Binds the services bound to a target service identifier to the given service identifier."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const container: Container = new Container();\n\ncontainer.bind(lorcanaCardCatalogProviderSymbol).to(LorcanaCardCatalogProvider);\ncontainer.bind(mtgCardCatalogProviderSymbol).to(MtgCardCatalogProvider);\n\ncontainer\n  .bind(cardCatalogProviderSymbol)\n  .toService(lorcanaCardCatalogProviderSymbol);\ncontainer\n  .bind(cardCatalogProviderSymbol)\n  .toService(mtgCardCatalogProviderSymbol);\n\nconst cardCatalogProviders: CardCatalogProvider<unknown>[] = container.getAll(\n  cardCatalogProviderSymbol,\n);"}),"\n",(0,t.jsx)(e.h2,{id:"bindinginsyntax",children:"BindingInSyntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface BindingInSyntax<T> {\n  // ...\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Represents a service binding given a service identifier and a service resolution such as a constructor, a factory, or a provider."}),"\n",(0,t.jsx)(e.h3,{id:"insingletonscope",children:"inSingletonScope"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"inSingletonScope(): BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Sets the binding scope to singleton. Refer to the ",(0,t.jsx)(e.a,{href:"/docs/6.x/fundamentals/binding#singleton",children:"docs"})," for more information."]}),"\n",(0,t.jsx)(e.h3,{id:"intransientscope",children:"inTransientScope"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"inTransientScope(): BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Sets the binding scope to transient. Refer to the ",(0,t.jsx)(e.a,{href:"/docs/6.x/fundamentals/binding#transient",children:"docs"})," for more information."]}),"\n",(0,t.jsx)(e.h3,{id:"inrequestscope",children:"inRequestScope"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"inRequestScope(): BindingWhenOnSyntax<T>;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Sets the binding scope to request. Refer to the ",(0,t.jsx)(e.a,{href:"/docs/6.x/fundamentals/binding#request",children:"docs"})," for more information."]}),"\n",(0,t.jsx)(e.h2,{id:"bindingonsyntax",children:"BindingOnSyntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface BindingOnSyntax<T> {\n  // ...\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Allows setting binding activation and deactivation handlers."}),"\n",(0,t.jsx)(e.h3,{id:"onactivation",children:"onActivation"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"onActivation(fn: (context: Context, injectable: T) => T | Promise<T>): BindingWhenSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Sets a binding activation handler. The activation handler is invoked after a dependency has been resolved and before it is added to a scope cache. The activation handler will not be invoked if the dependency is taken from a scope cache."}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"@injectable()\nclass Katana {\n  public use(): string {\n    return 'hit!';\n  }\n}\n\ncontainer\n  .bind<Katana>('Katana')\n  .to(Katana)\n  .onActivation((_context: interfaces.Context, katana: Katana) => {\n    const handler: ProxyHandler<() => string> = {\n      apply: function (\n        target: () => string,\n        thisArgument: unknown,\n        argumentsList: [],\n      ) {\n        console.log(`Starting: ${new Date().getTime().toString()}`);\n        const result: string = target.apply(thisArgument, argumentsList);\n        console.log(`Finished: ${new Date().getTime().toString()}`);\n        return result;\n      },\n    };\n\n    katana.use = new Proxy(katana.use.bind(katana), handler);\n\n    return katana;\n  });"}),"\n",(0,t.jsx)(e.h3,{id:"ondeactivation",children:"onDeactivation"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"onDeactivation(fn: (injectable: T) => void | Promise<void>): BindingWhenSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Sets a binding deactivation handler on a singleton scope binding. The deactivation handler is called when the binding is unbound from a container."}),"\n",(0,t.jsx)(e.h2,{id:"bindingwhensyntax",children:"BindingWhenSyntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"interface BindingWhenSyntax<T> {\n  // ...\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Allows setting binding constraints."}),"\n",(0,t.jsx)(e.h3,{id:"when",children:"when"}),"\n",(0,t.jsx)(e.p,{children:"Sets a constraint for the current binding."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"when(constraint: (request: Request) => boolean): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(s.Z,{language:"ts",children:"const ninjaId: symbol = Symbol.for('Ninja');\nconst weaponId: symbol = Symbol.for('Weapon');\n\n@injectable()\nclass Ninja {\n  constructor(\n    @inject(weaponId)\n    @named('shuriken')\n    public readonly weapon: Weapon,\n  ) {}\n}\n\ncontainer.bind<Ninja>(ninjaId).to(Ninja);\n\nconst whenTargetNamedConstraint: (\n  name: string,\n) => (request: interfaces.Request) => boolean =\n  (name: string) =>\n  (request: interfaces.Request): boolean =>\n    request.target.matchesNamedTag(name);\n\ncontainer\n  .bind<Weapon>(weaponId)\n  .to(Katana)\n  .when(whenTargetNamedConstraint('katana'));\n\ncontainer\n  .bind<Weapon>(weaponId)\n  .to(Shuriken)\n  .when(whenTargetNamedConstraint('shuriken'));\n\nconst ninja: Ninja = container.get(ninjaId);\n\n// Returns 5\nconst ninjaDamage: number = ninja.weapon.damage;"}),"\n",(0,t.jsx)(e.p,{children:"In the previous example, a custom constraint is implemented to use the binding if and only if the target name is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whentargetnamed",children:"whenTargetNamed"}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the target name is a certain one."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenTargetNamed(name: string | number | symbol): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"whentargetisdefault",children:"whenTargetIsDefault"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenTargetIsDefault(): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the target has no name nor tags."}),"\n",(0,t.jsx)(e.h3,{id:"whentargettagged",children:"whenTargetTagged"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenTargetTagged(tag: string | number | symbol, value: unknown): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the target tag is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"wheninjectedinto",children:"whenInjectedInto"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenInjectedInto(parent: NewableFunction | string): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the parent target service identifier is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenparentnamed",children:"whenParentNamed"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenParentNamed(name: string | number | symbol): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the parent target name is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenparenttagged",children:"whenParentTagged"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenParentTagged(tag: string | number | symbol, value: unknown): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if the parent target tag is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenanyancestoris",children:"whenAnyAncestorIs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenAnyAncestorIs(ancestor: NewableFunction | string): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if any ancestor target service identifier is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whennoancestoris",children:"whenNoAncestorIs"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenNoAncestorIs(ancestor: NewableFunction | string): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if no ancestor target service identifier is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenanyancestornamed",children:"whenAnyAncestorNamed"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenAnyAncestorNamed(name: string | number | symbol): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if any ancestor target name is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenanyancestortagged",children:"whenAnyAncestorTagged"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenAnyAncestorTagged(tag: string | number | symbol, value: unknown): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if any ancestor target tag is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whennoancestornamed",children:"whenNoAncestorNamed"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenNoAncestorNamed(name: string | number | symbol): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if no ancestor target name is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whennoancestortagged",children:"whenNoAncestorTagged"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenNoAncestorTagged(tag: string | number | symbol, value: unknown): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if no ancestor target tag is a certain one."}),"\n",(0,t.jsx)(e.h3,{id:"whenanyancestormatches",children:"whenAnyAncestorMatches"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenAnyAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if any ancestor matches a certain constraint."}),"\n",(0,t.jsx)(e.h3,{id:"whennoancestormatches",children:"whenNoAncestorMatches"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"whenNoAncestorMatches(constraint: (request: Request) => boolean): BindingOnSyntax<T>;\n"})}),"\n",(0,t.jsx)(e.p,{children:"Constrains the binding to be used if and only if no ancestor matches a certain constraint."}),"\n",(0,t.jsx)(e.h2,{id:"bindingwhenonsyntax",children:"BindingWhenOnSyntax"}),"\n",(0,t.jsxs)(e.p,{children:["The union of ",(0,t.jsx)(e.a,{href:"#bindingwhensyntax",children:"BindingWhenSyntax"})," and ",(0,t.jsx)(e.a,{href:"#bindingonsyntax",children:"BindingOnSyntax"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface BindingWhenOnSyntax<T>\n  extends BindingWhenSyntax<T>,\n    BindingOnSyntax<T> {}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"bindinginwhenonsyntax",children:"BindingInWhenOnSyntax"}),"\n",(0,t.jsxs)(e.p,{children:["The union of ",(0,t.jsx)(e.a,{href:"#bindinginsyntax",children:"BindingInSyntax"})," and ",(0,t.jsx)(e.a,{href:"#bindingwhenonsyntax",children:"BindingWhenOnSyntax"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export interface BindingInWhenOnSyntax<T>\n  extends BindingInSyntax<T>,\n    BindingWhenOnSyntax<T> {}\n"})})]})}function g(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}}}]);