// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license

import Store from './src/store/store.js';
import Storable from './src/store/storable.js';

export const writable = (initialState, event) => new Store(initialState, event);
export const storable = (initialState, event) => new Storable(initialState, event);
