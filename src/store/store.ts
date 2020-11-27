import PubSub from '../lib/pubsub.js';

export default class Store {
    protected state : any
    protected event : PubSub
    private start : Function
    private cleanup : Function

    /**
     * Creates a store that allows reading by subscription.
     * @param value initial value
     * @param start start and stop notifications for subscriptions
     */
    constructor(value : any, start : Function) {

        this.state = value;
        this.event = new PubSub();
        this.start = start;

        this.set = this.set.bind(this);
        this.update = this.update.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    set(newState : any):void {
        throw new Error("Setting value of store is not allowed. Use writable instead")
    }

    update(mutator : Function):void {
        throw new Error("Updating store is not allowed. Use writable instead")
    }

    subscribe(subscriber : Function):Function {

        this.event.subscribe('STATE_CHANGE', subscriber);
        if (this.event.events['STATE_CHANGE'].length === 1) this.cleanup = this.start();
        subscriber(this.state)

        return () => {
            if 
            (
                this.cleanup instanceof Function && 
                this.event.unsubscribe('STATE_CHANGE', subscriber) && 
                this.event.events['STATE_CHANGE'].length === 0
            ) {
                this.cleanup();
            }
        }
    }

}