// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license
import Writable from './store/writable.js';
import Readable from './store/readable.js';
import Storable from './store/storable.js';
export const writable = (value, start) => Writable(value, start);
export const readable = (value, start) => Readable(value, start);
export const storable = (key, value, start) => Storable(key, value, start);
//# sourceMappingURL=index.js.map