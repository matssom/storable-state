import { serializable } from '../../../../index.js'

let expect = chai.expect;

const test = () => {
    describe('Seralizable', () => {
        describe('serialize/deserialize', () => {
            it('Map()', () => {
                localStorage.removeItem('test')

                const map = new Map()
                map.set('key', 'value')

                let store = serializable('test', map)
                    store = serializable('test')

                let deserialized
                store.subscribe(value => deserialized = value)()

                expect(deserialized.get('key')).to.eql('value')
            })
        })
    })
}

export default () => test();