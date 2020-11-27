import Writable from './store.js';
class Storable extends Writable {
    constructor(key, value, start) {
        super(value, start);
        this.key = key;
        this.retrieve();
    }
    save(value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
    retrieve() {
        const value = localStorage.getItem(this.key);
        if (!!value)
            this.set(JSON.parse(value));
    }
    set(newValue) {
        super.set(newValue);
        this.save(newValue);
    }
    update(mutator) {
        super.update(mutator);
    }
}
export default (key, value, start) => {
    return new Storable(key, value, start);
};
//# sourceMappingURL=storable.js.map