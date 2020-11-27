import Readable from './readable.js';
import Store from './store.js';

export default (dependencies : Array<any>, update : Function) => {
    const store = new Store();

    const values = [];

    const subMap: Map<number, Function> = new Map();

    if (dependencies instanceof Array) {
        dependencies.forEach((dependency, i) => {
            subMap.set(i, value => {
                values[i] = value;
                if (values.length === dependencies.length) store.set(update(...values))
            })
            dependency.subscribe(subMap.get(i));
        });
    }

    return { subscribe : store.subscribe };
}