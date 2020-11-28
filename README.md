# Storable State

There are lot's of state management libraries. This one takes inspiration from the state management system that comes with svelte. It is simple, intuitive and powerful at the same time.

## Stores

The library is comprised of 4 store types. These 4 types are `writable`, `readable`, `storable` and `derived`. Writable can be written to, readable can be read only, storable uses the localStorage api to preserve data between site refresh and derived depends on one or more stores to calculate it's value. All stores can be subscribed to.

## Documentation

### Writable

A writable store can be created with an initial value and optionally passed a callback function that will be invoked when the first subscriber for that store is register. The return value is another function that will be invoked when the last subscriber is lost.

```js
import { writable } from 'storable-state';

const store = writable(0, () => {

    console.log("Got my first subscriber");

    return () => console.log("Lost my last subscriber");
});
```

<br>

`set` is a method that will update the store with a new value.

```js
store.set(10);
```

<br>

`update` is a method that takes a callback function. It passes the current value to the callback. The return value of the callback is the new store value.

```js
store.update(value => value +1);
```

<br>

`subscribe` is a method that accepts a callback that will be called with the new value every time the store value changes. The return of this method is a function you can invoke to unsubscribe.

```js
const unsubscribe = store.subscribe(value => console.log(value));

unsubscribe(); // <-- Call to unsubscribe
```

<br>

### Readable

A readable store does the exact same as a writable store, exept that you cannot use the `set` or `update` method. The parameter for the readable store are exactly the same as writable, except that the second parameter is now required. This is the only way to update the store value.

To update the store value you can use the `set` method provided to the callback. An async method works great here.

```js
import { readable } from 'storable-state';

const store = readable(0, async (set) => {
    const count = await fetch('https://api.somewhere.com/count');

    set(count);

    return () => cleanup();
});
```

**NB:** the `set` method is also passed to the writable store if you want to use async there as well.

<br>

## Storable

The storable store is essentially the writable store with and extra 2 methods and integration with the localStorage api to preserve state between page refershes. To get this to work you need to provide a key to the storable store. This key will be used to save and retrieve the stored state from localStorage.

```js
import { storable } from 'storable-state';

                         ||
                         \/
const store = storable('count', 0);
```

**NB:** Also here you can add the setup/teardown callback as the third parameter.

<br>

`detach` is a method that takes no arguments. It's purpose is to remove the value from local storage so that it won't be preserved on refres. When detach is invoked, the store essentially behaves like a writable store.

```js
store.detach();
```

<br>

`attach` is a method that does the opposite of detach. It saves the store value back to local storage.

```js
store.attach();
```

<br>

## Derived

The derived store takes one store OR an array of stores as first parameter and a callback that will be called with all the respective store values every time one of them changes. The return of this callback will be the new state of the store.

```js
import { derived, writable } from 'storable-state';

const dividend = writable(10);
const divisor = writable(2);

const store = derived(
    [dividend, divisor],
    (dividend, divisor) => {
        return dividend / divisor;
    }
)
```

<br>

## Custom Stores

You can extend the stores with your own buildt in methods if you would like. The basic idea is to destructure any of the stores into their methods and use them in other configurations. Here is an example of how you could achieve this:

```js
import { storable } from 'storable';

const createCountStore = (key = 'count') => {
    const { subscribe, set, update, detach, attach } = storable(key, 0);

    return {
        increase:   () => update((value) => value + 1),
        decrease:   () => update((value) => value - 1),
        reset:      () => set(0),
        subscribe,
        detach,
        attach
    }
}

export const store = createCountStore('count');
```
