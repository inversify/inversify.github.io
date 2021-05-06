# Getting Started

## Installation

You can get the latest release and the type definitions using npm:

```sh
npm install inversify@5.1.1 reflect-metadata --save
```

Or using yarn:

```sh
yarn add inversify@5.1.1 reflect-metadata
```

The InversifyJS type definitions are included in the inversify npm package. InversifyJS requires the `experimentalDecorators`, `emitDecoratorMetadata`and `lib` compilation options in your `tsconfig.json` file.

```js
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["es6"],
        "types": ["reflect-metadata"],
        "module": "commonjs",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

InversifyJS requires a modern JavaScript engine with support for:

-   [Reflect metadata](https://github.com/rbuckton/ReflectDecorators/blob/master/spec/metadata.md)
-   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Only required if using [provider injection](../features-and-api/10_provider_injection))
-   [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (Only required if using [activation handlers](../features-and-api/11_activation_handler))

If your environment don't support one of these you will need to import a shim or polyfill.

**Check out the [Environment support and polyfills](https://github.com/inversify/InversifyJS/blob/master/wiki/environment.md)
page in the wiki to learn more.**

## Declaring Interfaces

Our goal is to write code that adheres to the [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle). This means that we should "depend upon Abstractions and do not depend upon concretions". Let's start by declaring some interfaces (abstractions).

```ts
interface Warrior {
	fight(): string;
	sneak(): string;
}

interface Weapon {
	hit(): string;
}

interface ThrowableWeapon {
	throw(): string;
}
```

InversifyJS need to use the type as identifiers at runtime. We use symbols as identifiers but you can also use classes and or string literals.

```ts
let TYPES = {
	Warrior: Symbol('Warrior'),
	Weapon: Symbol('Weapon'),
	ThrowableWeapon: Symbol('ThrowableWeapon')
};

export default TYPES;
```

::: tip
**Note:** It is recommended to use Symbols but InversifyJS also support the usage of Classes and string literals (please refer to the features section to learn more).
:::

## Declaring Classes and Dependencies

Let's continue by declaring some classes (concretions). The classes are implementations of the interfaces that we just declared. All the classes must be annotated with the `@injectable` decorator.

When a class has a dependency on an interface we also need to use the @inject decorator to define an identifier for the interface that will be available at runtime. In this case we will use the Symbols `Symbol("Weapon")` and `Symbol("ThrowableWeapon")` as runtime identifiers.

```ts
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import TYPES from './types';

@injectable()
class Katana implements Weapon {
	public hit() {
		return 'cut!';
	}
}

@injectable()
class Shuriken implements ThrowableWeapon {
	public throw() {
		return 'hit!';
	}
}

@injectable()
class Ninja implements Warrior {
	private _katana: Weapon;
	private _shuriken: ThrowableWeapon;

	public constructor(@inject(TYPES.Weapon) katana: Weapon, @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon) {
		this._katana = katana;
		this._shuriken = shuriken;
	}

	public fight() {
		return this._katana.hit();
	}

	public sneak() {
		return this._shuriken.throw();
	}
}

export { Ninja, Katana, Shuriken };
```

If you prefer it you can use property injection instead of constructor injection so you don't have to declare the class constructor:

```ts
@injectable()
class Ninja implements Warrior {
	@inject(TYPES.Weapon) private _katana: Weapon;
	@inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;

	public fight() {
		return this._katana.hit();
	}

	public sneak() {
		return this._shuriken.throw();
	}
}
```
