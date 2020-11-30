import { storable } from '../../../../index.js'

let expect = chai.expect;

const test = () => {
    describe('Storable', () => {
        describe('serialize/deserialize', () => {
            it('Map()', () => {
                const map = new Map()
                map.set('key', 'value')
                const store = storable('map-test', map)
                let deserializedMap;
                store.subscribe(value => deserializedMap = value)();
                expect(deserializedMap.get('key')).to.equal('value');
            })
        })
    })
}

export default () => test();