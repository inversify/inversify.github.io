"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["4467"],{9989:function(e){e.exports=JSON.parse('{"version":{"pluginId":"default","version":"7.x","label":"7.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-7.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting started","href":"/docs/introduction/getting-started","docId":"introduction/getting-started","unlisted":false},{"type":"link","label":"Dependency inversion","href":"/docs/introduction/dependency-inversion","docId":"introduction/dependency-inversion","unlisted":false}]},{"type":"category","label":"Fundamentals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Binding","href":"/docs/fundamentals/binding","docId":"fundamentals/binding","unlisted":false},{"type":"link","label":"DI Hierarchy","href":"/docs/fundamentals/di-hierarchy","docId":"fundamentals/di-hierarchy","unlisted":false},{"type":"category","label":"Lifecycle","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Activation","href":"/docs/fundamentals/lifecycle/activation","docId":"fundamentals/lifecycle/activation","unlisted":false},{"type":"link","label":"Deactivation","href":"/docs/fundamentals/lifecycle/deactivation","docId":"fundamentals/lifecycle/deactivation","unlisted":false}]},{"type":"link","label":"Inheritance","href":"/docs/fundamentals/inheritance","docId":"fundamentals/inheritance","unlisted":false},{"type":"link","label":"Snapshot","href":"/docs/fundamentals/snapshot","docId":"fundamentals/snapshot","unlisted":false}]},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Binding Syntax","href":"/docs/api/binding-syntax","docId":"api/binding-syntax","unlisted":false},{"type":"link","label":"Container","href":"/docs/api/container","docId":"api/container","unlisted":false},{"type":"link","label":"Container Module","href":"/docs/api/container-module","docId":"api/container-module","unlisted":false},{"type":"link","label":"Decorator","href":"/docs/api/decorator","docId":"api/decorator","unlisted":false}]},{"type":"category","label":"FAQ","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"TypeScript Requirements","href":"/docs/faq/requirements","docId":"faq/requirements","unlisted":false},{"type":"link","label":"Using bundlers","href":"/docs/faq/using-bundlers","docId":"faq/using-bundlers","unlisted":false}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Migrating from v6","href":"/docs/guides/migrating-from-v6","docId":"guides/migrating-from-v6","unlisted":false}]}]},"docs":{"api/binding-syntax":{"id":"api/binding-syntax","title":"Binding Syntax","description":"Binding syntax is provided as a fluent interface resulting from using the container API or the container module API.","sidebar":"tutorialSidebar"},"api/container":{"id":"api/container","title":"Container","description":"The InversifyJS container is where dependencies are first configured through binding and, possibly later, reconfigured and removed. The container can be worked on directly in this regard or container modules can be utilized.","sidebar":"tutorialSidebar"},"api/container-module":{"id":"api/container-module","title":"Container Module","description":"Container modules help manage the complexity of bindings in large applications.","sidebar":"tutorialSidebar"},"api/decorator":{"id":"api/decorator","title":"Decorator","description":"This section covers Inversify decorators used to provide class metadata.","sidebar":"tutorialSidebar"},"faq/requirements":{"id":"faq/requirements","title":"TypeScript Requirements","description":"This page outlines the TypeScript configuration requirements for using InversifyJS.","sidebar":"tutorialSidebar"},"faq/using-bundlers":{"id":"faq/using-bundlers","title":"Using bundlers","description":"InversifyJS can be used with any bundler that supports transpiling TypeScript legacy decorators and emitting TypeScript class metadata.","sidebar":"tutorialSidebar"},"fundamentals/binding":{"id":"fundamentals/binding","title":"Binding","description":"A binding represents the relationship between a service identifier and its resolution. Bindings are added to a container to configure it to provide services.","sidebar":"tutorialSidebar"},"fundamentals/di-hierarchy":{"id":"fundamentals/di-hierarchy","title":"DI Hierarchy","description":"InversifyJS is a popular library for implementing inversion of control (IoC) and dependency injection (DI) in TypeScript applications. It supports hierarchical dependency injection, which can be a powerful tool in complex applications.","sidebar":"tutorialSidebar"},"fundamentals/inheritance":{"id":"fundamentals/inheritance","title":"Inheritance","description":"Inheritance can be achieved relying on the @injectFromBase decorator. This decorator allows you to inject dependencies from the base class. Refer to the API documentation for more information.","sidebar":"tutorialSidebar"},"fundamentals/lifecycle/activation":{"id":"fundamentals/lifecycle/activation","title":"Activation","description":"Whenever a service is resolved, the activation event is dispatched. An activation handler receives a context and a resolved value and returns the handled resolved value.","sidebar":"tutorialSidebar"},"fundamentals/lifecycle/deactivation":{"id":"fundamentals/lifecycle/deactivation","title":"Deactivation","description":"Whenever a singleton scoped service is unbound, the deactivation event is dispatched. A deactivation handler receives a resolved value and returns nothing.","sidebar":"tutorialSidebar"},"fundamentals/snapshot":{"id":"fundamentals/snapshot","title":"Snapshot","description":"Snapshots allow you to save the state of your Inversify container at a specific moment in time. These snapshots capture the container\'s state, enabling you to revert back to that state if needed.","sidebar":"tutorialSidebar"},"guides/migrating-from-v6":{"id":"guides/migrating-from-v6","title":"Migrating from v6","description":"InversifyJS v7 introduces several breaking changes. This guide will help you migrate your existing InversifyJS v6 code to v7.","sidebar":"tutorialSidebar"},"introduction/dependency-inversion":{"id":"introduction/dependency-inversion","title":"Dependency inversion","description":"To apply the dependency inversion principle, you can use injection symbols:","sidebar":"tutorialSidebar"},"introduction/getting-started":{"id":"introduction/getting-started","title":"Getting started","description":"Start by installing inversify and reflect-metadata:","sidebar":"tutorialSidebar"}}}}')}}]);