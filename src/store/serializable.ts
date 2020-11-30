import { Storable } from './storable.js';
import serialize from 'serialize-javascript';
import { deserialize } from '../lib/helpers.js';

class Serializable extends Storable {

    constructor(key : string, value : any, start? : Function) {
        super(key, value, start)
    }

    protected serialize(value) {
        return serialize(value)
    }

    protected deserialize(data) {
        return deserialize(data)
    }

}

export default (key : string, value : any, start? : Function) => {
    return new Serializable(key, value, start)
}