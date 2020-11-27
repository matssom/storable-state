import Store from './store.js';

export default (value : any, start : Function) => {
    return new Store(value, start).subscribe;
}