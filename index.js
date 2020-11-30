// Author: Mats Sommervold - https://github.com/matssom/svelte-storable.git - MIT license
import Writable from './dist/store/writable.js';
import Readable from './dist/store/readable.js';
import Storable from './dist/store/storable.js';
import Serializable from './dist/store/serializable.js';
import Derived from './dist/store/derived.js';
export const writable = (value, start) => Writable(value, start);
export const readable = (value, start) => Readable(value, start);
export const storable = (key, value, start) => Storable(key, value, start);
export const serializable = (key, value, start) => Serializable(key, value, start);
export const derived = (dependencies, update) => Derived(dependencies, update);
