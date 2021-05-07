# Declaring container modules

Container modules can help you to manage the complexity of your bindings in very large applications.

The constructor argument for ContainerModule and AsyncContainerModule is a registration callback that is passed functions that behave the same as the methods of the Container class. The registration callback for the AsyncContainerModule is asynchronous.

When a container module is loaded into a Container the registration callback is invoked. This is the opportunity for the container module to register bindings and handlers. Use the Container load method for ContainerModule instances and the Container loadAsync method for AsyncContainerModule instances.

When a container module is unloaded from a Container the bindings added by that container will be removed and the [deactivation process](../features-and-api/12_deactivation_handler.html) will occur for each of them. Container deactivation and [activation handlers](../features-and-api/11_activation_handler.html) will also be removed.
Use the unloadAsync method to unload when there will be an async deactivation handler or async [pre destroy](../features-and-api/26_pre_destroy.html)

## Synchronous container modules

```ts
let warriors = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
	bind<Ninja>('Ninja').to(Ninja);
});

let weapons = new ContainerModule(
	(
		bind: interfaces.Bind,
		unbind: interfaces.Unbind,
		isBound: interfaces.IsBound,
		rebind: interfaces.Rebind,
		unbindAsync: interfaces.UnbindAsync,
		onActivation: interfaces.Container['onActivation'],
		onDeactivation: interfaces.Container['onDeactivation']
	) => {
		bind<Katana>('Katana').to(Katana);
		bind<Shuriken>('Shuriken').to(Shuriken);
	}
);

let container = new Container();
container.load(warriors, weapons);
container.unload(warriors);
```

## Asynchronous container modules

```ts
let warriors = new AsyncContainerModule(async (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
	const ninja = await getNinja();
	bind<Ninja>('Ninja').toConstantValue(ninja);
});

let weapons = new AsyncContainerModule(
	(
		bind: interfaces.Bind,
		unbind: interfaces.Unbind,
		isBound: interfaces.IsBound,
		rebind: interfaces.Rebind,
		unbindAsync: interfaces.UnbindAsync,
		onActivation: interfaces.Container['onActivation'],
		onDeactivation: interfaces.Container['onDeactivation']
	) => {
		bind<Katana>('Katana').to(Katana);
		bind<Shuriken>('Shuriken').to(Shuriken);
	}
);

let container = new Container();
await container.loadAsync(warriors, weapons);
container.unload(warriors);
```
