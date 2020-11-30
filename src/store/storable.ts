import Writable from './store.js';

export class Storable extends Writable {
    private key
    private detached = false

    constructor(key : string, value? : any, start? : Function) {
        super(value, start);
        this.key = key;
        this.retrieve(value);
        this.detach = this.detach.bind(this);
        this.attach = this.attach.bind(this);
    }

    protected serialize(value) {
        return JSON.stringify(value)
    }

    protected deserialize(data) {
        return JSON.parse(data)
    }

    private save(value : any):void {
        if (!this.detached) localStorage.setItem(this.key, this.serialize(value));
    }

    private retrieve(value : any):void {
        const saved = localStorage.getItem(this.key);
        if (!!saved) this.set(this.deserialize(saved));
        else this.save(value)
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