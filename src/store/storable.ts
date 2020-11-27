import Writable from './store.js';

class Storable extends Writable {
    private key

    constructor(key : string, value : any, start? : Function) {
        super(value, start);
        this.key = key;
        this.retrieve();
    }

    private save(value : any):void {
        localStorage.setItem(this.key, JSON.stringify(value));
    }

    private retrieve():void {
        const value = localStorage.getItem(this.key);
        if (!!value) this.set(JSON.parse(value));
    }

    set(newValue : any):void {
        super.set(newValue);
        this.save(newValue);
    }

    update(mutator : Function):void {
        super.update(mutator);
    }

}

export default (key : string, value : any, start? : Function) => {
    return new Storable(key, value, start);
}