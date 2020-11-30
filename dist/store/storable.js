import Writable from './store.js';
import serialize from 'serialize-javascript';
import { deserialize } from '../lib/helpers.js';
class Storable extends Writable {
    constructor(key, value, start) {
        super(value, start);
        this.detached = false;
        this.key = key;
        this.retrieve();
        this.detach = this.detach.bind(this);
        this.attach = this.attach.bind(this);
    }
    save(value) {
        if (!this.detached)
            localStorage.setItem(this.key, serialize(value));
    }
    retrieve() {
        const value = localStorage.getItem(this.key);
        if (!!value)
            this.set(deserialize(value));
    }
    set(newValue) {
        super.set(newValue);
        this.save(newValue);
    }
    update(mutator) {
        super.update(mutator);
    }
    detach() {
        this.detached = true;
        localStorage.removeItem(this.key);
    }
    attach() {
        this.detached = false;
        const unsubscribe = this.subscribe(value => this.save(value));
        unsubscribe();
    }
}
export default (key, value, start) => {
    return new Storable(key, value, start);
};
