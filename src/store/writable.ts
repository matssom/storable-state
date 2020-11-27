import Store from './store.js';

export default (value : any, start? : Function):Store => {
    return new Store(value, start);
}