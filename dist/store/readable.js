import Store from './store.js';
export default (value, start) => {
    return { subscribe: new Store(value, start).subscribe };
};
