"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["9656"],{41366:function(e,n,r){r.r(n),r.d(n,{frontMatter:()=>s,toc:()=>l,default:()=>p,metadata:()=>t,assets:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"internals/planning","title":"Planning phase","description":"The planning phase is a critical step that occurs every time you request a service from an InversifyJS container. Before any instances are created or values are resolved, InversifyJS builds a comprehensive plan tree that maps out exactly how to satisfy your dependency request.","source":"@site/docs/internals/planning.mdx","sourceDirName":"internals","slug":"/internals/planning","permalink":"/docs/next/internals/planning","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Planning phase"},"sidebar":"tutorialSidebar","previous":{"title":"Suites","permalink":"/docs/next/ecosystem/suites"}}'),i=r(3495),a=r(23840);r(4642);var o=r(6914);let s={sidebar_position:1,title:"Planning phase"},d="Planning Phase",c={},l=[{value:"What is a Plan Tree?",id:"what-is-a-plan-tree",level:2},{value:"How Planning Works",id:"how-planning-works",level:2},{value:"1. Cache Check",id:"1-cache-check",level:3},{value:"2. Building the Service Node",id:"2-building-the-service-node",level:3},{value:"3. Processing Each Binding",id:"3-processing-each-binding",level:3},{value:"4. Recursive Dependency Planning",id:"4-recursive-dependency-planning",level:3},{value:"5. Lazy Evaluation",id:"5-lazy-evaluation",level:3},{value:"6. Validation",id:"6-validation",level:3},{value:"7. Caching",id:"7-caching",level:3},{value:"Context-Free vs Context-Dependent Plans",id:"context-free-vs-context-dependent-plans",level:2},{value:"Plan Tree Structure",id:"plan-tree-structure",level:2},{value:"Visualizing Plan Trees",id:"visualizing-plan-trees",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}];function u(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"planning-phase",children:"Planning Phase"})}),"\n",(0,i.jsxs)(n.p,{children:["The planning phase is a critical step that occurs every time you request a service from an InversifyJS container. Before any instances are created or values are resolved, InversifyJS builds a comprehensive ",(0,i.jsx)(n.strong,{children:"plan tree"})," that maps out exactly how to satisfy your dependency request."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-plan-tree",children:"What is a Plan Tree?"}),"\n",(0,i.jsx)(n.p,{children:"A plan tree is a hierarchical data structure that describes the complete resolution strategy for a service. It captures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Which ",(0,i.jsx)(n.a,{href:"/docs/next/fundamentals/binding",children:"bindings"})," will be used to resolve each service"]}),"\n",(0,i.jsx)(n.li,{children:"What dependencies each service requires (constructor parameters and properties)"}),"\n",(0,i.jsx)(n.li,{children:"The order in which services must be resolved"}),"\n",(0,i.jsx)(n.li,{children:"Metadata about each binding and its resolution requirements"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Think of it as a blueprint that the container follows during the resolution phase to construct and wire together your dependency graph."}),"\n",(0,i.jsx)(n.h2,{id:"how-planning-works",children:"How Planning Works"}),"\n",(0,i.jsxs)(n.p,{children:["When you call ",(0,i.jsx)(n.code,{children:"container.get()"})," or ",(0,i.jsx)(n.code,{children:"container.getAll()"}),", InversifyJS performs the following steps:"]}),"\n",(0,i.jsx)(n.h3,{id:"1-cache-check",children:"1. Cache Check"}),"\n",(0,i.jsx)(n.p,{children:"First, the container checks if a plan already exists in its cache for the requested service identifier and constraints (name, tags, etc.). If a matching plan is found, it's reused immediately, avoiding redundant planning work."}),"\n",(0,i.jsx)(n.h3,{id:"2-building-the-service-node",children:"2. Building the Service Node"}),"\n",(0,i.jsxs)(n.p,{children:["If no cached plan exists, InversifyJS builds a ",(0,i.jsx)(n.strong,{children:"service node"})," for the requested service:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Constraint Building"}),": The container builds a constraint list from your request parameters (service identifier, name, tags, optional/multiple flags)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Binding Filtering"}),": All ",(0,i.jsx)(n.a,{href:"/docs/next/fundamentals/binding",children:"bindings"})," for the service identifier are filtered based on these constraints using each binding's ",(0,i.jsx)(n.code,{children:"isSatisfiedBy()"})," method"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Autobinding"}),": If no bindings are found and autobinding is enabled, a new instance binding is automatically created for the service"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-processing-each-binding",children:"3. Processing Each Binding"}),"\n",(0,i.jsxs)(n.p,{children:["For each matching binding, InversifyJS creates a ",(0,i.jsx)(n.strong,{children:"binding node"})," based on the binding type:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Instance Bindings"}),": Creates an ",(0,i.jsx)(n.code,{children:"InstanceBindingNode"})," that includes the class metadata and recursively plans all constructor parameters and property injections"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Resolved Value Bindings"}),": Creates a ",(0,i.jsx)(n.code,{children:"ResolvedValueBindingNode"})," that recursively plans all parameters required by the factory function"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Service Redirection Bindings"}),": Creates a ",(0,i.jsx)(n.code,{children:"PlanServiceRedirectionBindingNode"})," that redirects to another service identifier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Leaf Bindings"})," (Constant, Dynamic Value, Factory, Provider): Creates a ",(0,i.jsx)(n.code,{children:"LeafBindingNode"})," with no child dependencies"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-recursive-dependency-planning",children:"4. Recursive Dependency Planning"}),"\n",(0,i.jsx)(n.p,{children:"For bindings with dependencies (instance and resolved value bindings), InversifyJS recursively builds plan nodes for each dependency. This creates a tree structure where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each service node represents a service to be resolved"}),"\n",(0,i.jsx)(n.li,{children:"Each binding node represents how that service will be resolved"}),"\n",(0,i.jsx)(n.li,{children:"Child nodes represent the dependencies required by that resolution strategy"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-lazy-evaluation",children:"5. Lazy Evaluation"}),"\n",(0,i.jsxs)(n.p,{children:["To optimize performance, some parts of the plan tree use ",(0,i.jsx)(n.strong,{children:"lazy evaluation"}),". Child dependency nodes are wrapped in ",(0,i.jsx)(n.code,{children:"LazyPlanServiceNode"})," instances that defer their full planning until actually needed during resolution. This avoids planning unused branches in scenarios with optional dependencies or conditional logic."]}),"\n",(0,i.jsx)(n.h3,{id:"6-validation",children:"6. Validation"}),"\n",(0,i.jsx)(n.p,{children:"After building the tree, InversifyJS validates it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For single injections (",(0,i.jsx)(n.code,{children:"container.get()"}),"), ensures exactly one binding was found (or zero for optional injections)"]}),"\n",(0,i.jsx)(n.li,{children:"Detects circular dependencies by tracking the service branch during planning and throwing descriptive errors"}),"\n",(0,i.jsx)(n.li,{children:"Validates that all required constraints are satisfied"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"7-caching",children:"7. Caching"}),"\n",(0,i.jsx)(n.p,{children:"The completed plan tree is stored in the container's plan cache, indexed by the service identifier and constraint options. Subsequent requests for the same service with the same constraints will reuse this cached plan, making repeated resolutions much faster."}),"\n",(0,i.jsx)(n.h2,{id:"context-free-vs-context-dependent-plans",children:"Context-Free vs Context-Dependent Plans"}),"\n",(0,i.jsxs)(n.p,{children:["Plan trees track whether they are ",(0,i.jsx)(n.strong,{children:"context-free"})," or ",(0,i.jsx)(n.strong,{children:"context-dependent"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context-free plans"}),": Don't depend on ancestor services (no usage of ancestor-based constraints). These can be safely cached and reused across different resolution contexts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context-dependent plans"}),": Use ancestor-based constraints (e.g., filtering by parent service). These are still cached but marked as context-dependent."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"plan-tree-structure",children:"Plan Tree Structure"}),"\n",(0,i.jsx)(n.p,{children:"A complete plan result contains:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface PlanResult {\n  tree: {\n    root: PlanServiceNode\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"PlanServiceNode"})," includes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"serviceIdentifier"}),": The service being resolved"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bindings"}),": One or more binding nodes describing how to resolve it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isContextFree"}),": Whether this node depends on resolution context"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Each binding node contains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"binding"}),": The actual binding instance"]}),"\n",(0,i.jsx)(n.li,{children:"Type-specific metadata (class metadata, parameters, property injections, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Child service nodes for dependencies"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"visualizing-plan-trees",children:"Visualizing Plan Trees"}),"\n",(0,i.jsx)(n.p,{children:"Use the interactive code editor below to experiment with different binding configurations and see the generated plan trees. The editor allows you to write InversifyJS code and visualizes the resulting plan structure, helping you understand how the container resolves your dependencies."}),"\n",(0,i.jsx)(o.A,{style:{height:500}}),"\n",(0,i.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,i.jsx)(n.p,{children:"The planning phase is designed to be efficient:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Caching"}),": Plans are cached and reused for identical requests"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lazy evaluation"}),": Unnecessary branches aren't fully evaluated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Immutable data structures"}),": Uses immutable linked lists for efficient constraint list management"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Early validation"}),": Catches configuration errors during planning rather than during resolution"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Most of the computational cost happens during the first request for a service. Subsequent requests benefit from the cached plan, making them significantly faster."})]})}function p(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6914:function(e,n,r){let t;r.d(n,{A:()=>B});var i=r(3495),a=r(4642),o=r(70641),s=r(66751),d=r(11531);let c=`
self.addEventListener('message', async (ev) => {
  const { id, code, args } = ev.data || {};
  try {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    const mod = await import(url);
    URL.revokeObjectURL(url);

    const fn = mod.default;
    if (typeof fn !== 'function')
      throw new Error('Default export must be a function');

    const result = await fn(...args);
    self.postMessage({ id, kind: 'success', result });
  } catch (error) {
    self.postMessage({ id, kind: 'error', error });
  }
});
`,l=`declare type AbstractNewable<TInstance = unknown, TArgs extends unknown[] = any[]> = abstract new (...args: TArgs) => TInstance;\r
\r
declare interface BaseMultipleResolvedValueMetadataInjectOptions {\r
    chained?: boolean;\r
    isMultiple: true;\r
}\r
\r
declare interface BaseOptionalResolvedValueMetadataInjectOptions {\r
    optional: true;\r
}\r
\r
declare interface BaseResolvedValueMetadataInjectOptions<T> {\r
    name?: MetadataName;\r
    serviceIdentifier: ServiceIdentifier<T> | LazyServiceIdentifier<T>;\r
    tags?: ResolvedValueMetadataInjectTagOptions[];\r
}\r
\r
export declare type Bind = <T>(serviceIdentifier: ServiceIdentifier<T>) => BindToFluentSyntax<T>;\r
\r
export declare interface BindInFluentSyntax<T> extends BoundServiceSyntax {\r
    inSingletonScope(): BindWhenOnFluentSyntax<T>;\r
    inTransientScope(): BindWhenOnFluentSyntax<T>;\r
    inRequestScope(): BindWhenOnFluentSyntax<T>;\r
}\r
\r
export declare type BindingActivation<T = unknown> = (context: ResolutionContext, injectable: T) => Resolved<T>;\r
\r
export declare interface BindingConstraints {\r
    readonly name: MetadataName | undefined;\r
    readonly tags: Map<MetadataTag, unknown>;\r
    readonly serviceIdentifier: ServiceIdentifier;\r
    getAncestor(): BindingConstraints | undefined;\r
}\r
\r
export declare type BindingDeactivation<T = unknown> = (injectable: T) => void | Promise<void>;\r
\r
export declare interface BindingIdentifier {\r
    readonly id: number;\r
}\r
\r
export declare type BindingScope = 'Singleton' | 'Transient' | 'Request';\r
\r
export declare const bindingScopeValues: {\r
    [TKey in BindingScope]: TKey;\r
};\r
\r
declare type BindingType = 'ConstantValue' | 'DynamicValue' | 'Factory' | 'Instance' | 'Provider' | 'ResolvedValue' | 'ServiceRedirection';\r
\r
export declare const bindingTypeValues: {\r
    [TKey in BindingType]: TKey;\r
};\r
\r
export declare interface BindInWhenOnFluentSyntax<T> extends BindInFluentSyntax<T>, BindWhenOnFluentSyntax<T> {\r
}\r
\r
export declare interface BindOnFluentSyntax<T> extends BoundServiceSyntax {\r
    onActivation(activation: BindingActivation<T>): BindWhenFluentSyntax<T>;\r
    onDeactivation(deactivation: BindingDeactivation<T>): BindWhenFluentSyntax<T>;\r
}\r
\r
export declare interface BindToFluentSyntax<T> {\r
    to(type: Newable<T>): BindInWhenOnFluentSyntax<T>;\r
    toSelf(): BindInWhenOnFluentSyntax<T>;\r
    toConstantValue(value: T): BindWhenOnFluentSyntax<T>;\r
    toDynamicValue(builder: DynamicValueBuilder<T>): BindInWhenOnFluentSyntax<T>;\r
    toFactory(factory: T extends Factory<unknown, any> ? (context: ResolutionContext) => T | Promise<T> : never): BindWhenOnFluentSyntax<T>;\r
    /**\r
     * @deprecated Use \`toFactory()\` instead. Providers will be removed in v8.\r
     * Providers exist for historical reasons from v5 when async dependencies weren't supported.\r
     * Factories are more flexible and can handle both sync and async operations.\r
     */\r
    toProvider(provider: T extends Provider<unknown, any> ? (context: ResolutionContext) => T : never): BindWhenOnFluentSyntax<T>;\r
    toResolvedValue(factory: () => T | Promise<T>): BindInWhenOnFluentSyntax<T>;\r
    toResolvedValue<TArgs extends unknown[] = any[]>(factory: (...args: TArgs) => T | Promise<T>, injectOptions: MapToResolvedValueInjectOptions<TArgs>): BindInWhenOnFluentSyntax<T>;\r
    toService(service: ServiceIdentifier<T>): void;\r
}\r
\r
export declare interface BindWhenFluentSyntax<T> extends BoundServiceSyntax {\r
    when(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenAnyAncestor(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenAnyAncestorIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenAnyAncestorNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenAnyAncestorTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenDefault(): BindOnFluentSyntax<T>;\r
    whenNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoAncestor(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenNoAncestorIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenNoAncestorNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoAncestorTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenNoParent(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenNoParentIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenNoParentNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenNoParentTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenParent(constraint: (metadata: BindingConstraints) => boolean): BindOnFluentSyntax<T>;\r
    whenParentIs(serviceIdentifier: ServiceIdentifier): BindOnFluentSyntax<T>;\r
    whenParentNamed(name: MetadataName): BindOnFluentSyntax<T>;\r
    whenParentTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
    whenTagged(tag: MetadataTag, tagValue: unknown): BindOnFluentSyntax<T>;\r
}\r
\r
export declare interface BindWhenOnFluentSyntax<T> extends BindWhenFluentSyntax<T>, BindOnFluentSyntax<T> {\r
}\r
\r
export declare interface BoundServiceSyntax {\r
    getIdentifier(): BindingIdentifier;\r
}\r
\r
export declare class Container extends inversify.Container {\r
    constructor();\r
}\r
\r
declare class Container_2 {\r
    #private;\r
    constructor(options?: ContainerOptions);\r
    bind<T>(serviceIdentifier: ServiceIdentifier<T>): BindToFluentSyntax<T>;\r
    get<T>(serviceIdentifier: ServiceIdentifier<T>, options: OptionalGetOptions): T | undefined;\r
    get<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetOptions): T;\r
    getAll<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetAllOptions): T[];\r
    getAllAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetAllOptions): Promise<T[]>;\r
    getAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options: OptionalGetOptions): Promise<T | undefined>;\r
    getAsync<T>(serviceIdentifier: ServiceIdentifier<T>, options?: GetOptions): Promise<T>;\r
    isBound(serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions): boolean;\r
    isCurrentBound(serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions): boolean;\r
    load(...modules: ContainerModule[]): Promise<void>;\r
    loadSync(...modules: ContainerModule[]): void;\r
    onActivation<T>(serviceIdentifier: ServiceIdentifier<T>, activation: BindingActivation<T>): void;\r
    onDeactivation<T>(serviceIdentifier: ServiceIdentifier<T>, deactivation: BindingDeactivation<T>): void;\r
    register(pluginConstructor: Newable): void;\r
    restore(): void;\r
    rebind<T>(serviceIdentifier: ServiceIdentifier<T>): Promise<BindToFluentSyntax<T>>;\r
    rebindSync<T>(serviceIdentifier: ServiceIdentifier<T>): BindToFluentSyntax<T>;\r
    snapshot(): void;\r
    unbind(identifier: BindingIdentifier | ServiceIdentifier): Promise<void>;\r
    unbindAll(): Promise<void>;\r
    unbindSync(identifier: BindingIdentifier | ServiceIdentifier): void;\r
    unload(...modules: ContainerModule[]): Promise<void>;\r
    unloadSync(...modules: ContainerModule[]): void;\r
}\r
\r
export declare class ContainerModule {\r
    #private;\r
    constructor(load: (options: ContainerModuleLoadOptions) => void | Promise<void>);\r
    get id(): number;\r
    load(options: ContainerModuleLoadOptions): void | Promise<void>;\r
}\r
\r
export declare interface ContainerModuleLoadOptions {\r
    bind: Bind;\r
    isBound: IsBound;\r
    onActivation: OnActivation;\r
    onDeactivation: OnDeactivation;\r
    rebind: Rebind;\r
    rebindSync: RebindSync;\r
    unbind: Unbind;\r
    unbindSync: UnbindSync;\r
}\r
\r
export declare interface ContainerOptions {\r
    autobind?: true;\r
    defaultScope?: BindingScope | undefined;\r
    parent?: Container_2 | undefined;\r
}\r
\r
export declare function decorate(decorators: ClassDecorator | ClassDecorator[], target: Function): void;\r
\r
export declare function decorate(decorators: ParameterDecorator | ParameterDecorator[], target: Function, parameterIndex: number): void;\r
\r
export declare function decorate(decorators: ParameterDecorator | ParameterDecorator[], target: Function, methodName: string | symbol, parameterIndex: number): void;\r
\r
export declare function decorate(decorators: MethodDecorator | PropertyDecorator | MethodDecorator[] | PropertyDecorator[], target: Function, property: string | symbol): void;\r
\r
export declare type DynamicValueBuilder<T> = (context: ResolutionContext) => Resolved<T>;\r
\r
export declare type Factory<TActivated, in TArgs extends unknown[] = any[]> = (...args: TArgs) => TActivated | Promise<TActivated>;\r
\r
export declare interface GetAllOptions extends GetOptions {\r
    chained?: boolean;\r
}\r
\r
export declare interface GetOptions {\r
    autobind?: boolean;\r
    name?: MetadataName;\r
    optional?: boolean;\r
    tag?: GetOptionsTagConstraint;\r
}\r
\r
export declare interface GetOptionsTagConstraint {\r
    key: MetadataTag;\r
    value: unknown;\r
}\r
\r
export declare function inject(serviceIdentifier: ServiceIdentifier | LazyServiceIdentifier): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare function injectable(scope?: BindingScope): ClassDecorator;\r
\r
export declare function injectFromBase(options?: InjectFromBaseOptions): ClassDecorator;\r
\r
export declare interface InjectFromBaseOptions {\r
    extendConstructorArguments?: boolean | undefined;\r
    extendProperties?: boolean | undefined;\r
    lifecycle?: InjectFromBaseOptionsLifecycle | undefined;\r
}\r
\r
export declare interface InjectFromBaseOptionsLifecycle {\r
    extendPreDestroyMethods?: boolean | undefined;\r
    extendPostConstructMethods?: boolean | undefined;\r
}\r
\r
export declare function injectFromHierarchy(options?: InjectFromHierarchyOptions): ClassDecorator;\r
\r
export declare interface InjectFromHierarchyOptions {\r
    extendConstructorArguments?: boolean | undefined;\r
    extendProperties?: boolean | undefined;\r
    lifecycle?: InjectFromHierarchyOptionsLifecycle | undefined;\r
}\r
\r
export declare interface InjectFromHierarchyOptionsLifecycle {\r
    extendPreDestroyMethods?: boolean | undefined;\r
    extendPostConstructMethods?: boolean | undefined;\r
}\r
\r
declare namespace inversify {\r
    export {\r
        LazyServiceIdentifier,\r
        Newable,\r
        ServiceIdentifier,\r
        Bind,\r
        BindInFluentSyntax,\r
        BindInWhenOnFluentSyntax,\r
        BindOnFluentSyntax,\r
        BindToFluentSyntax,\r
        BindWhenFluentSyntax,\r
        BindWhenOnFluentSyntax,\r
        BindingIdentifier,\r
        BoundServiceSyntax,\r
        Container_2 as Container,\r
        ContainerModule,\r
        ContainerModuleLoadOptions,\r
        ContainerOptions,\r
        IsBound,\r
        IsBoundOptions,\r
        MapToResolvedValueInjectOptions,\r
        OnActivation,\r
        OnDeactivation,\r
        Rebind,\r
        RebindSync,\r
        ResolvedValueInjectOptions,\r
        ResolvedValueMetadataInjectOptions,\r
        ResolvedValueMetadataInjectTagOptions,\r
        Unbind,\r
        UnbindSync,\r
        BindingActivation,\r
        BindingConstraints,\r
        BindingDeactivation,\r
        BindingScope,\r
        DynamicValueBuilder,\r
        Factory,\r
        GetAllOptions,\r
        GetOptions,\r
        GetOptionsTagConstraint,\r
        InjectFromBaseOptions,\r
        InjectFromBaseOptionsLifecycle,\r
        InjectFromHierarchyOptions,\r
        InjectFromHierarchyOptionsLifecycle,\r
        MetadataName,\r
        MetadataTag,\r
        MultiInjectOptions,\r
        OptionalGetOptions,\r
        Provider,\r
        ResolutionContext,\r
        bindingScopeValues,\r
        bindingTypeValues,\r
        decorate,\r
        inject,\r
        injectFromBase,\r
        injectFromHierarchy,\r
        injectable,\r
        multiInject,\r
        named,\r
        optional,\r
        postConstruct,\r
        preDestroy,\r
        tagged,\r
        unmanaged\r
    }\r
}\r
\r
export declare type IsBound = (serviceIdentifier: ServiceIdentifier, options?: IsBoundOptions) => boolean;\r
\r
export declare interface IsBoundOptions {\r
    name?: MetadataName;\r
    tag?: GetOptionsTagConstraint;\r
}\r
\r
declare const islazyServiceIdentifierSymbol: unique symbol;\r
\r
export declare class LazyServiceIdentifier<TInstance = unknown> {\r
    #private;\r
    [islazyServiceIdentifierSymbol]: true;\r
    constructor(buildServiceId: () => ServiceIdentifier<TInstance>);\r
    static is<TInstance = unknown>(value: unknown): value is LazyServiceIdentifier<TInstance>;\r
    unwrap(): ServiceIdentifier<TInstance>;\r
}\r
\r
export declare type MapToResolvedValueInjectOptions<TArgs extends unknown[]> = {\r
    [K in keyof TArgs]-?: ResolvedValueInjectOptions<TArgs[K]>;\r
};\r
\r
export declare type MetadataName = number | string | symbol;\r
\r
export declare type MetadataTag = number | string | symbol;\r
\r
export declare function multiInject(serviceIdentifier: ServiceIdentifier | LazyServiceIdentifier, options?: MultiInjectOptions): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare interface MultiInjectOptions {\r
    chained?: boolean;\r
}\r
\r
declare interface MultipleOptionalResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseMultipleResolvedValueMetadataInjectOptions, BaseOptionalResolvedValueMetadataInjectOptions {\r
}\r
\r
declare interface MultipleResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseMultipleResolvedValueMetadataInjectOptions {\r
}\r
\r
export declare function named(name: MetadataName): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare type Newable<TInstance = unknown, TArgs extends unknown[] = any[]> = new (...args: TArgs) => TInstance;\r
\r
export declare type OnActivation = <T>(serviceIdentifier: ServiceIdentifier<T>, activation: BindingActivation<T>) => void;\r
\r
export declare type OnDeactivation = <T>(serviceIdentifier: ServiceIdentifier<T>, deactivation: BindingDeactivation<T>) => void;\r
\r
export declare function optional(): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare interface OptionalGetOptions extends GetOptions {\r
    optional: true;\r
}\r
\r
declare interface OptionalResolvedValueMetadataInjectOptions<T> extends BaseResolvedValueMetadataInjectOptions<T>, BaseOptionalResolvedValueMetadataInjectOptions {\r
}\r
\r
export declare function postConstruct(): MethodDecorator;\r
\r
export declare function preDestroy(): MethodDecorator;\r
\r
/**\r
 * @deprecated Use \`Factory\` instead. Provider will be removed in v8.\r
 * Providers exist for historical reasons from v5 when async dependencies weren't supported.\r
 * Factories are more flexible and can handle both sync and async operations.\r
 */\r
export declare type Provider<TActivated, in TArgs extends unknown[] = any[]> = (...args: TArgs) => Promise<TActivated>;\r
\r
export declare type Rebind = <T>(serviceIdentifier: ServiceIdentifier<T>) => Promise<BindToFluentSyntax<T>>;\r
\r
export declare type RebindSync = <T>(serviceIdentifier: ServiceIdentifier<T>) => BindToFluentSyntax<T>;\r
\r
export declare interface ResolutionContext {\r
    get<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options: OptionalGetOptions): TActivated | undefined;\r
    get<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): TActivated;\r
    getAll<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): TActivated[];\r
    getAllAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): Promise<TActivated[]>;\r
    getAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options: OptionalGetOptions): Promise<TActivated | undefined>;\r
    getAsync<TActivated>(serviceIdentifier: ServiceIdentifier<TActivated>, options?: GetOptions): Promise<TActivated>;\r
}\r
\r
declare type Resolved<TActivated> = SyncResolved<TActivated> | Promise<SyncResolved<TActivated>>;\r
\r
export declare type ResolvedValueInjectOptions<T> = LazyServiceIdentifier<T> | ResolvedValueMetadataInjectOptions<T> | ServiceIdentifier<T>;\r
\r
export declare type ResolvedValueMetadataInjectOptions<T> = [T] extends [\r
(infer U)[] | undefined\r
] ? [T] extends [U[]] ? MultipleResolvedValueMetadataInjectOptions<U> : MultipleOptionalResolvedValueMetadataInjectOptions<U> : T extends undefined ? OptionalResolvedValueMetadataInjectOptions<T> : BaseResolvedValueMetadataInjectOptions<T>;\r
\r
export declare interface ResolvedValueMetadataInjectTagOptions {\r
    key: MetadataTag;\r
    value: unknown;\r
}\r
\r
export declare type ServiceIdentifier<TInstance = unknown> = string | symbol | Newable<TInstance> | AbstractNewable<TInstance> | Function;\r
\r
declare type SyncResolved<TActivated> = TActivated;\r
\r
export declare function tagged(key: MetadataTag, value: unknown): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export declare type Unbind = (identifier: BindingIdentifier | ServiceIdentifier) => Promise<void>;\r
\r
export declare type UnbindSync = (identifier: BindingIdentifier | ServiceIdentifier) => void;\r
\r
export declare function unmanaged(): MethodDecorator & ParameterDecorator & PropertyDecorator;\r
\r
export { }\r
`;async function u(){return void 0===t&&((t=await Promise.all([r.e("4014"),r.e("3063"),r.e("892")]).then(r.bind(r,9655))).typescript.typescriptDefaults.addExtraLib(l,"file:///node_modules/@types/inversify.d.ts"),t.typescript.typescriptDefaults.setCompilerOptions({allowSyntheticDefaultImports:!0,experimentalDecorators:!0,moduleResolution:t.typescript.ModuleResolutionKind.NodeJs,target:t.typescript.ScriptTarget.ES2020})),t}function p({beforeCodeRun:e,Button:n,onPlan:r,style:t}){let a=function(){let[e,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{!async function(){await (0,o.Ay)(),n(!0)}()},[]),e}(),l=(0,s.useRef)(r);(0,s.useEffect)(()=>{l.current=r},[r]);let p=(0,s.useRef)(function(e){let n=new Blob([c],{type:"text/javascript"}),r=URL.createObjectURL(n),t=new Worker(r,{type:"module"});URL.revokeObjectURL(r);let i=1,a=new Map;function o(e){let n=a.get(e);if(void 0!==n)return a.delete(e),n}return t.addEventListener("error",e=>{let n=Error(`Worker error: ${e.message}`,{cause:e.error});for(let e of a.values())e.reject(n);a.clear()}),t.addEventListener("message",n=>{switch(n.data.kind){case"error":{let e=o(n.data.id);if(void 0===e)return;e.reject(n.data.error)}break;case"plan":e?.onPlan?.(n.data.options,n.data.result);break;case"success":{let e=o(n.data.id);if(void 0===e)return;e.resolve(n.data.result)}}}),t.addEventListener("messageerror",()=>{let e=Error("Worker message serialization error");for(let n of a.values())n.reject(e);a.clear()}),{rpc:async function(e,n){let r=i++;return new Promise((i,o)=>{a.set(r,{reject:o,resolve:i}),t.postMessage({args:e,code:n,id:r})})},terminate:()=>{t.terminate()}}}({onPlan:(e,n)=>l.current?.(e,n)})),v=(0,s.useRef)(null),h=(0,s.useRef)(null),[f,g]=s.useState(!0);(0,s.useEffect)(()=>(v.current&&(async()=>{let e,n=await u(),r=(e=n.Uri.parse("file:///main.ts"),n.editor.getModel(e)??n.editor.createModel(`
import { Container, inject, injectable } from 'inversify';

@injectable()
class Weapon {
  damage = 10;
}

@injectable()
class Ninja {
  public readonly weapon: Weapon;

  constructor(@inject(Weapon) weapon: Weapon) {
    this.weapon = weapon;
  }
}

export default async () => {
  const container = new Container();

  container.bind(Ninja).toSelf().inSingletonScope();
  container.bind(Weapon).toSelf().inSingletonScope();

  const ninja = container.get(Ninja);

  console.log(JSON.stringify(ninja));
}
`.trim(),"typescript",e));h.current=n.editor.create(v.current,{model:r}),g(!1)})(),()=>{null!==h.current&&h.current.dispose(),p.current.terminate()}),[]);let y={...t,position:"relative"};return(0,i.jsxs)("div",{style:y,children:[(0,i.jsx)("div",{className:"_spinnerOverlay_1ifuj_24",style:{display:f?"flex":"none"},children:(0,i.jsx)("div",{className:"_spinnerDot_1ifuj_15"})}),(0,i.jsx)("div",{style:{height:"calc(100% - 40px)",width:"100%"},children:(0,i.jsx)("div",{ref:v,className:"_reactMonacoEditorContainer_1ifuj_10"})}),(0,i.jsx)("div",{children:(0,i.jsx)(n,{onClick:()=>{if(null!==h.current&&a){var n;e?.();let r=function(e,n){for(let[e,r]of n)void 0===d.availablePlugins[e]&&(0,d.registerPlugin)(e,r);return(0,d.transform)(e,{filename:"main.ts",plugins:[...n.map(([e])=>[e])],sourceType:"module"}).code??""}((0,o.Uz)(h.current.getValue(),{jsc:{parser:{decorators:!0,syntax:"typescript"},target:"es2022",transform:{decoratorMetadata:!0,legacyDecorator:!0}},module:{type:"es6"}}).code,[["customMapImports",(n={inversify:`${window.location.origin}/inversify.js`},()=>({visitor:{ImportDeclaration(e){let r=n[e.node.source.value];void 0!==r&&(e.node.source=d.packages.types.stringLiteral(r))}}}))]]);p.current.rpc([],r)}},label:"Run"})})]})}var v=r(80363),h=r(93616),f=r(71074),g=r(60929);function y({block:e=!1,className:n,disabled:r=!1,onClick:t,outline:a=!1,label:o,link:s,size:d,style:c,variant:l="primary"}){let u="lg"===d||"sm"===d?`button--${d}`:"",p=`button--${l}`,v=r?null:s??null;return(0,i.jsx)(f.A,{...null===v?{}:{to:v},children:(0,i.jsx)("button",{"aria-disabled":r,className:(0,g.A)("button",u,a?"button--outline":"",p,e?"button--block":"",r?"disabled":"",n),onClick:t,role:"button",style:c,children:o})})}var x=r(82837);x.A.initialize({});let m=({source:e,id:n})=>{let r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{void 0!==e&&(async()=>{if(null!==r.current){r.current.innerHTML=e;let{svg:t,bindFunctions:i}=await x.A.render(`mermaid-diagram-${n}`,e);r.current.innerHTML=t,i?.(r.current)}})()},[n,e]),(0,i.jsx)("div",{id:n,ref:r})};function T(e){return e.replace(/\n/g,"<br />").replace(/\r/g,"").replace(/\t/g,"  ").replace(/([[\]{}\\"<>])/g,"\\$1")}function b(e){return"string"==typeof e?e:"symbol"==typeof e?e.toString():"function"==typeof e||"object"==typeof e?""===e.name?"AnonymousFunction":e.name:"Unknown"}function j(e){return"classMetadata"in e&&"constructorParams"in e}function S(e){return"params"in e&&!("classMetadata"in e)}function I(e){return"redirections"in e}function B({style:e}){let[n,r]=(0,s.useState)([]),[t,o]=(0,s.useState)(void 0),d=void 0!==t?n[t]:void 0;return(0,i.jsx)(a.A,{children:()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(h.A,{children:[(0,i.jsx)(v.A,{value:"editor",label:"Editor",children:(0,i.jsx)(p,{beforeCodeRun:()=>{r([]),o(void 0)},Button:y,onPlan:(e,t)=>{var i;let a=function(e,n){let r=["flowchart TD"],t=0,i=new Map;function a(e,n){let r=i.get(e);if(void 0===r){var a;let r=(a=t++,`${n}_${String(a)}`);return i.set(e,r),r}return r}function o(e){let n=a(e,"service"),t=T(b(e.serviceIdentifier));if(r.push(`${n}["ServiceNode<br/>Service identifier: ${t}<br/>Is context free: ${String(e.isContextFree)}"]`),void 0!==e.bindings)if(Array.isArray(e.bindings))for(let r of e.bindings)s(r,n);else s(e.bindings,n);return n}function s(e,n){if(j(e))!function(e,n){let t=a(e,"instance"),i=e.binding.type,s=T(e.binding.implementationType.name);r.push(`${t}["${i}: ${s}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`);for(let n=0;n<e.constructorParams.length;n++){let i=e.constructorParams[n];if(void 0!==i){let e=o(i);r.push(`${t} -.->|param ${String(n)}| ${e}`)}}if(e.propertyParams.length>0)for(let[n,i]of e.propertyParams){let e=T(String(n)),a=o(i);r.push(`${t} -.->|prop: ${e}| ${a}`)}}(e,n);else if(S(e))!function(e,n){let t=a(e,"resolved"),i=e.binding.type;r.push(`${t}["${i}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`);for(let n=0;n<e.params.length;n++){let i=e.params[n];if(void 0!==i){let e=o(i);r.push(`${t} -.->|param ${String(n)}| ${e}`)}}}(e,n);else if(I(e)){var t=e,i=n;let o=a(t,"redirect"),d=T(b(t.binding.targetServiceIdentifier));for(let e of(r.push(`${o}["ServiceRedirection \u{2192} ${d}"]`),r.push(`${i} --> ${o}`),t.redirections))s(e,o)}else j(e)||S(e)||I(e)||function(e,n){let t=a(e,"leaf"),i=e.binding.type,o=i;if("ConstantValue"===i&&"value"in e.binding){let n,r=e.binding.value;n=null===r?"null":void 0===r?"undefined":"object"==typeof r?T("{...}"):"string"==typeof r?T(r.slice(0,30)):"number"==typeof r||"boolean"==typeof r?T(String(r)):"symbol"==typeof r?T(r.toString()):typeof r,o=`${i}: ${n}`}r.push(`${t}["${o}<br/>Binding scope: ${e.binding.scope}"]`),r.push(`${n} --> ${t}`)}(e,n)}let d="root",c=T(b(e.serviceIdentifier)),l=e.optional?" (optional)<br/>":"",u="isMultiple"in e&&e.isMultiple?" (multiple)<br/>":"",p=void 0!==e.name?`Name: "${String(e.name)}"<br/>`:"";return r.push(`${d}["Request:<br/>Service identifier: ${c}<br/>${p}${l}${u}"]`),r.push(`style ${d} fill:#e1f5ff,stroke:#0288d1,stroke-width:3px`),o(n.tree.root),r.push(`${d} --> ${a(n.tree.root,"service")}`),r.join("\n")}(e,t),s="string"==typeof(i=e.serviceIdentifier)?i:"symbol"==typeof i?i.toString():"function"==typeof i||"object"==typeof i?""===i.name?"AnonymousFunction":i.name:"Unknown";r(n=>[...n,{displayName:s,serviceIdentifier:e.serviceIdentifier,source:a}]),o(e=>void 0===e?0:n.length)},style:e})}),(0,i.jsxs)(v.A,{value:"graph",label:"Graph",children:[0===n.length?(0,i.jsx)("p",{children:"Run the code to generate a dependency graph."}):(0,i.jsxs)("div",{style:{marginBottom:"1rem",marginTop:"1rem"},children:[(0,i.jsx)("label",{htmlFor:"graph-selector",style:{marginRight:"0.5rem"},children:"Select Graph:"}),(0,i.jsx)("select",{id:"graph-selector",value:t??"",onChange:e=>{o(Number(e.target.value))},style:{border:"1px solid var(--ifm-color-emphasis-300)",borderRadius:"4px",padding:"0.5rem"},children:n.map((e,n)=>(0,i.jsx)("option",{value:n,children:e.displayName},n))})]}),(0,i.jsx)(m,{source:d?.source,id:"mermaid-graph"})]})]})})})}}}]);