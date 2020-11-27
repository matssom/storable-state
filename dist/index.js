// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license
import Writable from './store/writable.js';
import Readable from './store/readable.js';
export const writable = (value, start) => Writable(value, start);
export const readable = (value, start) => Readable(value, start);
//# sourceMappingURL=index.js.map