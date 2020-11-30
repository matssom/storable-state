var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PubSub from '../lib/pubsub.js';
export default class Store {
    /**
     * Creates a store that allows reading by subscription.
     * @param value initial value
     * @param start start and stop notifications for subscriptions
     */
    constructor(value, start) {
        this.state = value;
        this.event = new PubSub();
        this.start = start;
        this.set = this.set.bind(this);
        this.update = this.update.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    set(newValue) {
        this.state = newValue;
        this.event.publish('STATE_CHANGE', newValue);
    }
    update(mutator) {
        this.set(mutator(this.state));
    }
    subscribe(subscriber) {
        this.event.subscribe('STATE_CHANGE', subscriber);
        if (this.event.events['STATE_CHANGE'].length === 1 && this.start)
            this.cleanup = this.start(this.set);
        subscriber(this.state);
        return () => __awaiter(this, void 0, void 0, function* () {
            if (this.event.unsubscribe('STATE_CHANGE', subscriber) &&
                this.event.events['STATE_CHANGE'].length === 0 &&
                this.cleanup) {
                try {
                    const cleanup = yield this.cleanup;
                    cleanup();
                }
                catch (err) {
                    throw new Error("Could not run cleanup function, promise rejected. Please make sure your async setter can resolve.");
                }
            }
        });
    }
}
