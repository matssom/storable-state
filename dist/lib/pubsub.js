export default class PubSub {
    constructor() {
        this.events = {};
    }
    subscribe(event, callback) {
        let self = this;
        if (!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }
        self.events[event].push(callback);
        return () => self.events[event].push(callback);
    }
    unsubscribe(event, subscriber) {
        let self = this;
        return self.events[event].splice(subscriber, 1).length >= 1 ? true : false;
    }
    publish(event, data = {}) {
        let self = this;
        if (!self.events.hasOwnProperty(event)) {
            return [];
        }
        return self.events[event].map(callback => callback(data));
    }
}
