import Store from './store.js';

export default class Writable extends Store {

    /**
     * Creates a `Writable` store that allows reading and writing.
     * @param value initial value
     * @param start start and stop notifications for subscriptions
     */
    constructor(value : any, start : Function) {
        super(value, start)
    }

    set(newState : any):void {
        this.state = newState;
        this.event.publish('STATE_CHANGE', newState);
    }

    update(mutator : Function):void {
        this.state = mutator(this.state);
        this.event.publish('STATE_CHANGE', this.state);
    }

}