import store from './src/store/store.js';

export const storable = (initialState, event) => new Store(initialState, event);
