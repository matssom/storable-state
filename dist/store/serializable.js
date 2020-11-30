import { Storable } from './storable.js';
import serialize from 'serialize-javascript';
import { deserialize } from '../lib/helpers.js';
class Serializable extends Storable {
    constructor(key, value, start) {
        super(key, value, start);
    }
    serialize(value) {
        return serialize(value);
    }
    deserialize(data) {
        return deserialize(data);
    }
}
export default (key, value, start) => {
    return new Serializable(key, value, start);
};
