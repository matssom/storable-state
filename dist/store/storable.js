import Writable from './store.js';
export class Storable extends Writable {
    constructor(key, value, start) {
        super(value, start);
        this.detached = false;
        this.key = key;
        this.retrieve(value);
        this.detach = this.detach.bind(this);
        this.attach = this.attach.bind(this);
    }
    serialize(value) {
        return JSON.stringify(value);
    }
    deserialize(data) {
        return JSON.parse(data);
    }
    save(value) {
        if (!this.detached)
            localStorage.setItem(this.key, this.serialize(value));
    }
    retrieve(value) {
        const saved = localStorage.getItem(this.key);
        if (!!saved)
            this.set(this.deserialize(saved));
        else
            this.save(value);
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
