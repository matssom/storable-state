import Store from './store.js';
export default class Writable extends Store {
    /**
     * Creates a `Writable` store that allows reading and writing.
     * @param value initial value
     * @param start start and stop notifications for subscriptions
     */
    constructor(value, start) {
        super(value, start);
    }
    set(newState) {
        this.state = newState;
        this.event.publish('STATE_CHANGE', newState);
    }
    update(mutator) {
        this.state = mutator(this.state);
        this.event.publish('STATE_CHANGE', this.state);
    }
}
//# sourceMappingURL=writable.js.map