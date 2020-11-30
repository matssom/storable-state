import { storable } from '../../../../index.js'

let expect = chai.expect;

const test = () => {
    describe('Storable', () => {
        describe('stores', () => {
            it('objects', () => {
                localStorage.removeItem('test')

                const store = storable('test',{object:10})

                let deserialized
                store.subscribe(value => deserialized = value)()

                expect(deserialized).to.eql({object:10})
            })
            it('strings', () => {
                localStorage.removeItem('test')

                const store = storable('test','a string')

                let deserialized
                store.subscribe(value => deserialized = value)()

                expect(deserialized).to.eql('a string')
            })
            it('numbers', () => {
                localStorage.removeItem('test')

                const store = storable('test',12345)

                let deserialized
                store.subscribe(value => deserialized = value)()

                expect(deserialized).to.eql(12345)
            })
        })
        describe('does not store', () => {
            it('Map()', () => {
                localStorage.removeItem('test')

                const map = new Map()
                map.set('key', 'value')

                let store = storable('test', map)
                    store = storable('test')

                let deserialized
                store.subscribe(value => deserialized = value)()

                expect(deserialized).to.not.be.instanceOf(Map)
            })
        })
    })
}

export default () => test();