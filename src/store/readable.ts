import Store from './store.js';

export default (value : any, start : Function) => {
    return { subscribe : new Store(value, start).subscribe };
}