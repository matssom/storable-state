import PubSub from '../lib/pubsub.js';

export default class Store {

    constructor(initialState, init) {
        this.self = this;

        self.state = initialState;
        self.event = new PubSub();
        self.init = init instanceof Function ? init : () => {};
    }

    set(newState) {
        self.state = newState;
        self.event.publish('STATE_CHANGE', newState);
    }

    update(mutator) {
        if (mutator instanceof Function) self.state = mutator(self.state);
        self.event.publish('STATE_CHANGE', self.state);
    }

    subscribe(subscriber) {

        subscriber(self.state);

        self.event.subscribe('STATE_CHANGE', subscriber);
        if (self.event.events['STATE_CHANGE'].length === 1) self.cleanup = init();

        return () => {
            if (
                    self.cleanup instanceof Function && 
                    self.event.unsubscribe('STATE_CHANGE', subscriber) && 
                    self.event.events['STATE_CHANGE'].length === 0
                ) cleanup();
        }
    }

}