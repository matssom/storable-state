import Writable from './store.js';

class Storable extends Writable {
    private key
    private detached = false

    constructor(key : string, value? : any, start? : Function) {
        super(value, start);
        this.key = key;
        this.retrieve();
        this.detach = this.detach.bind(this);
        this.attach = this.attach.bind(this);
    }

    private save(value : any):void {
        if (!this.detached) localStorage.setItem(this.key, JSON.stringify(value));
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

    detach():void {
        this.detached = true;
        localStorage.removeItem(this.key);
    }

    attach():void {
        this.detached = false;
        const unsubscribe = this.subscribe(value => this.save(value));
        unsubscribe();
    }

}

export default (key : string, value : any, start? : Function) => {
    return new Storable(key, value, start);
}