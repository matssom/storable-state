export {};
// import Writable from './store.js';
// export default class Store {
//     constructor(key, initialValue, cleanup) {
//         if(typeof key === 'undefined') throw new Error('Storables require a key to interact with local storage')
//         this.key = key
//         this.store = this._exists() ? new Writable(this._getData(), cleanup) : new Writable(initialValue, cleanup)
//         this.set = this.set.bind(this);
//         this.update = this.update.bind(this);
//         this.subscribe = this.subscribe.bind(this);
//         this.detatch = this.detatch.bind(this);
//     }
//     _exists () { return !!localStorage.getItem(this.key) }
//     _getData() {
//         const DATA = localStorage.getItem(this.key)
//         return JSON.parse(DATA)
//     }
//     _setData(data) {
//         const DATA = JSON.stringify(data)
//         localStorage.setItem(this.key, DATA)
//     }
//     set(data) {
//         this._setData(data)
//         this.store.set(data)
//     }
//     update(callback) {
//         const update = (data) => {
//             const newData = callback(data)
//             this._setData(newData)
//             return newData
//         }
//         this.store.update(update);
//     }
//     subscribe(callback) {
//         return this.store.subscribe(callback)
//     }
//     detatch() {
//         localStorage.removeItem(this.key)
//         return true
//     }
// }
//# sourceMappingURL=storable.js.map