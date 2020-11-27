import { readable } from '../../dist/index.js';

const countable = (initial = 0) => {
    const subscribe = readable(initial, set => {
        console.log('got my first count subscriber');
        let value = 100
        set(value)
        const interval = setInterval(() => {
            value--
            set(value)
        }, 1000)

        return () => {
            console.log('lost my last count subscriber')
            clearInterval(interval)
        }
    });

    return subscribe
}

const count = countable(null);
let unsub;

const setupCounter = (root) => {
    unsub = count(count => {
        root.innerText = count;
    });
}