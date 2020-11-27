// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license

import Store from './store/store.js';
import Writable from './store/writable.js';

export const store = (value : any, start : Function) => new Store(value, start);
export const writable = (value : any, start : Function) => new Writable(value, start);
