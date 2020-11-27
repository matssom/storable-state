// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license

import Writable from './store/writable.js';
import Readable from './store/readable.js';

export const writable = (value : any, start? : Function) => Writable(value, start);
export const readable = (value : any, start : Function) => Readable(value, start);
