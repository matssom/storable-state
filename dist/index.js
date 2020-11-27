// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license
import Store from './store/store.js';
import Writable from './store/writable.js';
import Readable from './store/readable.js';
export const store = (value, start) => new Store(value, start);
export const writable = (value, start) => Writable(value, start);
export const readable = (value, start) => Readable(value, start);
//# sourceMappingURL=index.js.map