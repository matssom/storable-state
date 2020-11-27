import PubSub from '../lib/pubsub.js';

export default class Store {
    protected state : any
    protected event : PubSub
    protected cleanup : Array<Function> = [];
    private start : Function

    /**
     * Creates a store that allows reading by subscription.
     * @param value initial value
     * @param start start and stop notifications for subscriptions
     */
    constructor(value : any, start? : Function) {

        this.state = value;
        this.event = new PubSub();
        this.start = start;

        this.set = this.set.bind(this);
        this.update = this.update.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    set(newValue : any):void {
        this.state = newValue;
        this.event.publish('STATE_CHANGE', newValue);
    }

    update(mutator : Function):void {
        this.state = mutator(this.state);
        this.event.publish('STATE_CHANGE', this.state);
    }

    subscribe(subscriber : Function):Function {

        this.event.subscribe('STATE_CHANGE', subscriber);
        if (this.event.events['STATE_CHANGE'].length === 1) if (this.start) this.cleanup.push(this.start(this.set));
        subscriber(this.state)

        return () => {
            if 
            (
                this.event.unsubscribe('STATE_CHANGE', subscriber) && 
                this.event.events['STATE_CHANGE'].length === 0
            ) {
                for (let fn of this.cleanup) fn();
            }
        }
    }

}