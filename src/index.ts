// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license

import Writable from './store/writable.js';
import Readable from './store/readable.js';
import Storable from './store/storable.js';
import Derived  from './store/derived.js';

export const writable = (value : any, start? : Function) => Writable(value, start);
export const readable = (value : any, start : Function) => Readable(value, start);
export const storable = (key : string, value : any, start : Function) => Storable(key, value, start);
export const derived  = (dependencies : Array<any>, update : Function) => Derived(dependencies, update);
