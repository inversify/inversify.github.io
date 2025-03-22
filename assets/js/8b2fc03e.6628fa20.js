"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["1071"],{88:function(n,e,a){a.r(e),a.d(e,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"api/decorator","title":"Decorator","description":"This section covers Inversify decorators used to provide class metadata.","source":"@site/versioned_docs/version-6.x/api/decorator.mdx","sourceDirName":"api","slug":"/api/decorator","permalink":"/docs/6.x/api/decorator","draft":false,"unlisted":false,"tags":[],"version":"6.x","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Decorator"},"sidebar":"tutorialSidebar","previous":{"title":"Container Module","permalink":"/docs/6.x/api/container-module"}}'),r=a("8771"),i=a("6986"),o=a("3965");let s={sidebar_position:4,title:"Decorator"},c="Decorators",l={},d=[{value:"injectable",id:"injectable",level:2},{value:"When is injectable mandatory?",id:"when-is-injectable-mandatory",level:3},{value:"inject",id:"inject",level:2},{value:"Example: decorating a class constructor argument",id:"example-decorating-a-class-constructor-argument",level:3},{value:"Example: decorating a property",id:"example-decorating-a-property",level:3},{value:"multiInject",id:"multiinject",level:2},{value:"Example: decorating a property",id:"example-decorating-a-property-1",level:3},{value:"named",id:"named",level:2},{value:"optional",id:"optional",level:2},{value:"postConstruct",id:"postconstruct",level:2},{value:"preDestroy",id:"predestroy",level:2},{value:"tagged",id:"tagged",level:2},{value:"targetName",id:"targetname",level:2},{value:"unmanaged",id:"unmanaged",level:2}];function p(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"decorators",children:"Decorators"})}),"\n",(0,r.jsx)(e.p,{children:"This section covers Inversify decorators used to provide class metadata."}),"\n",(0,r.jsx)(e.h2,{id:"injectable",children:"injectable"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to set class metadata so containers can receive class-emitted metadata."}),"\n",(0,r.jsxs)(e.p,{children:["It's highly recommended to annotate every class provided as a service with the ",(0,r.jsx)(e.code,{children:"@injectable"})," decorator. However, it's not mandatory in every single case."]}),"\n",(0,r.jsx)(e.h3,{id:"when-is-injectable-mandatory",children:"When is injectable mandatory?"}),"\n",(0,r.jsx)(e.p,{children:"Whenever class-emitted metadata is expected."}),"\n",(0,r.jsx)(e.p,{children:"Consider the following sample code:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import 'reflect-metadata';\nimport { injectable } from 'inversify';\n\n@injectable()\nclass B {\n  readonly foo: string = 'foo';\n}\n\n@injectable()\nclass A {\n  constructor(public readonly b: B) {}\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["A CommonJS transpilation with the ",(0,r.jsx)(e.a,{href:"https://www.typescriptlang.org/tsconfig/#emitDecoratorMetadata",children:"emitDecoratorMetadata"})," option enabled might look like this:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'Object.defineProperty(exports, "__esModule", { value: true });\nrequire("reflect-metadata");\nconst inversify_1 = require("inversify");\nlet B = class B {\n    foo = \'foo\';\n};\nB = __decorate([\n    (0, inversify_1.injectable)()\n], B);\nlet A = class A {\n    b;\n    constructor(b) {\n        this.b = b;\n    }\n};\nA = __decorate([\n    (0, inversify_1.injectable)(),\n    __metadata("design:paramtypes", [B])\n], A);\n'})}),"\n",(0,r.jsxs)(e.p,{children:["TypeScript emits class metadata if and only if there are any class decorators applied to the target class. If we remove the ",(0,r.jsx)(e.code,{children:"@injectable"})," from ",(0,r.jsx)(e.code,{children:"A"}),", the transpiled code looks very different:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'Object.defineProperty(exports, "__esModule", { value: true });\nrequire("reflect-metadata");\nclass B {\n    foo = \'foo\';\n}\nclass A {\n    b;\n    constructor(b) {\n        this.b = b;\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["This time, no class metadata is emitted even if the ",(0,r.jsx)(e.code,{children:"emitDecoratorMetadata"})," TypeScript option is enabled, causing trouble at execution time."]}),"\n",(0,r.jsx)(e.h2,{id:"inject",children:"inject"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish a relation between a constructor argument or a class property and a service ID."}),"\n",(0,r.jsxs)(e.p,{children:["When resolving an instance of the class, the target constructor argument or property will be resolved in the same way ",(0,r.jsx)(e.a,{href:"/docs/6.x/api/container#get",children:"container.get"})," behaves."]}),"\n",(0,r.jsx)(e.h3,{id:"example-decorating-a-class-constructor-argument",children:"Example: decorating a class constructor argument"}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  constructor(\n    @inject(weaponServiceId)\n    public readonly weapon: Weapon,\n  ) {}\n}\n\nconst container: Container = new Container();\n\ncontainer.bind(Ninja).toSelf();\ncontainer.bind(weaponServiceId).to(Katana);\n\nconst ninja: Ninja = container.get(Ninja);\n\n// Returns 10\nconst ninjaWeaponDamage: number = ninja.weapon.damage;"}),"\n",(0,r.jsx)(e.h3,{id:"example-decorating-a-property",children:"Example: decorating a property"}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  @inject(weaponServiceId)\n  public readonly weapon!: Weapon;\n}\n\nconst container: Container = new Container();\n\ncontainer.bind(Ninja).toSelf();\ncontainer.bind(weaponServiceId).to(Katana);\n\nconst ninja: Ninja = container.get(Ninja);\n\n// Returns 10\nconst ninjaWeaponDamage: number = ninja.weapon.damage;"}),"\n",(0,r.jsx)(e.h2,{id:"multiinject",children:"multiInject"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish a relation between a constructor argument or a class property and a service ID."}),"\n",(0,r.jsxs)(e.p,{children:["When resolving an instance of the class, the target constructor argument or property will be resolved in the same way ",(0,r.jsx)(e.a,{href:"/docs/6.x/api/container#getall",children:"container.getAll"})," behaves with the ",(0,r.jsx)(e.code,{children:"enforceBindingConstraints"})," flag enabled."]}),"\n",(0,r.jsx)(e.h3,{id:"example-decorating-a-property-1",children:"Example: decorating a property"}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  @multiInject(weaponServiceId)\n  public readonly weapon!: Weapon[];\n}\n\nconst container: Container = new Container();\n\ncontainer.bind(Ninja).toSelf();\ncontainer.bind(weaponServiceId).to(Katana);\n\nconst ninja: Ninja = container.get(Ninja);\n\n// Returns 10\nconst ninjaWeaponDamage: number | undefined = ninja.weapon[0]?.damage;"}),"\n",(0,r.jsx)(e.h2,{id:"named",children:"named"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish a relation between a constructor argument or a class property and a metadata name."}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  public katana: Weapon;\n  public shuriken: Weapon;\n  constructor(\n    @inject('Weapon') @named('melee') katana: Weapon,\n    @inject('Weapon') @named('ranged') shuriken: Weapon,\n  ) {\n    this.katana = katana;\n    this.shuriken = shuriken;\n  }\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana).whenTargetNamed('melee');\ncontainer.bind<Weapon>('Weapon').to(Shuriken).whenTargetNamed('ranged');\ncontainer.bind(Ninja).toSelf();\n\nconst ninja: Ninja = container.get(Ninja);"}),"\n",(0,r.jsx)(e.h2,{id:"optional",children:"optional"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish that a target constructor argument or property is optional and, therefore, it shall not be resolved if no bindings are found for the associated service ID."}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  public katana: Weapon;\n  public shuriken: Weapon | undefined;\n  constructor(\n    @inject('Katana') katana: Weapon,\n    @inject('Shuriken') @optional() shuriken: Weapon | undefined,\n  ) {\n    this.katana = katana;\n    this.shuriken = shuriken;\n  }\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Katana').to(Katana);\n\ncontainer.bind(Ninja).toSelf();\n\n// Returns a \"Ninja\" instance with a \"Katana\" katana property and undefined shuriken property.\nconst ninja: Ninja = container.get(Ninja);"}),"\n",(0,r.jsx)(e.h2,{id:"postconstruct",children:"postConstruct"}),"\n",(0,r.jsxs)(e.p,{children:["Decorator used to establish an activation handler for the target class. Refer to the ",(0,r.jsx)(e.a,{href:"/docs/6.x/fundamentals/lifecycle/activation",children:"docs"})," for more information."]}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"interface Weapon {\n  damage: number;\n}\n\nexport class Katana implements Weapon {\n  #damage: number = 10;\n\n  public get damage(): number {\n    return this.#damage;\n  }\n\n  @postConstruct()\n  public improve(): void {\n    this.#damage += 2;\n  }\n}\n\nconst container: Container = new Container();\ncontainer.bind<Weapon>('Weapon').to(Katana);\n\n// Katana.damage is 12\nconst katana: Weapon = container.get<Weapon>('Weapon');"}),"\n",(0,r.jsx)(e.h2,{id:"predestroy",children:"preDestroy"}),"\n",(0,r.jsxs)(e.p,{children:["Decorator used to establish a deactivation handler for the target class. Refer to the ",(0,r.jsx)(e.a,{href:"/docs/6.x/fundamentals/lifecycle/deactivation",children:"docs"})," for more information."]}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"interface Weapon {\n  damage: number;\n}\n\nexport class Katana implements Weapon {\n  readonly #damage: number = 10;\n\n  public get damage(): number {\n    return this.#damage;\n  }\n\n  @preDestroy()\n  public onDeactivation(): void {\n    console.log(`Deactivating weapon with damage ${this.damage.toString()}`);\n  }\n}\n\nconst container: Container = new Container();\n\ncontainer.bind<Weapon>('Weapon').to(Katana).inSingletonScope();\n\ncontainer.get('Weapon');\n\ncontainer.unbind('Weapon');"}),"\n",(0,r.jsx)(e.h2,{id:"tagged",children:"tagged"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish a relation between a constructor argument or a class property and a metadata tag."}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"@injectable()\nclass Ninja {\n  public katana: Weapon;\n  public shuriken: Weapon;\n  constructor(\n    @inject('Weapon') @tagged('weaponKind', 'melee') katana: Weapon,\n    @inject('Weapon') @tagged('weaponKind', 'ranged') shuriken: Weapon,\n  ) {\n    this.katana = katana;\n    this.shuriken = shuriken;\n  }\n}\n\nconst container: Container = new Container();\ncontainer\n  .bind<Weapon>('Weapon')\n  .to(Katana)\n  .whenTargetTagged('weaponKind', 'melee');\ncontainer\n  .bind<Weapon>('Weapon')\n  .to(Shuriken)\n  .whenTargetTagged('weaponKind', 'ranged');\ncontainer.bind(Ninja).toSelf();\n\nconst ninja: Ninja = container.get(Ninja);"}),"\n",(0,r.jsx)(e.h2,{id:"targetname",children:"targetName"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish a relation between a constructor argument or a class property name at design time."}),"\n",(0,r.jsx)(e.p,{children:"Bundlers might minify code, altering class property names. This decorator keeps track of the original name."}),"\n",(0,r.jsxs)(e.p,{children:["This property is kept in the ",(0,r.jsx)(e.code,{children:"name"})," property of the ",(0,r.jsx)(e.code,{children:"target"})," request in a binding constraint."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'@injectable()\nclass Ninja implements Ninja {\n  public katana: Weapon;\n  public shuriken: Weapon;\n  constructor(\n      @inject("Weapon") @targetName("katana") katana: Weapon,\n      @inject("Weapon") @targetName("shuriken") shuriken: Weapon\n  ) {\n      this.katana = katana;\n      this.shuriken = shuriken;\n  }\n}\n\ncontainer.bind<Weapon>("Weapon").to(Katana).when((request: interfaces.Request) => {\n  return request.target.name.equals("katana");\n});\n'})}),"\n",(0,r.jsx)(e.h2,{id:"unmanaged",children:"unmanaged"}),"\n",(0,r.jsx)(e.p,{children:"Decorator used to establish that Inversify should not inject the target constructor argument or property whatsoever."}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:"import { Container, injectable, unmanaged } from 'inversify';\n\n@injectable()\nclass Base {\n  public prop: string;\n  constructor(@unmanaged() arg: string) {\n    this.prop = arg;\n  }\n}\n\n@injectable()\nclass Derived extends Base {\n  constructor() {\n    super('inherited-value');\n  }\n}\n\nconst container: Container = new Container();\n\nconst derived: Derived = container.resolve(Derived);\n\n// Returns 'inherited-value'\nconst derivedProp: string = derived.prop;"})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}}}]);