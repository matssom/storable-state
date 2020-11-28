import { readable } from '../../dist/index.js';

const countable = (initial = 0) => {
    const { subscribe } = readable(initial, async set => {
        
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));

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

    return { subscribe }
}

const count = countable(null);
let unsub;

const setupCounter = (root) => {
    unsub = count.subscribe(count => {
        root.innerText = count;
    });
}

document.querySelector('#increment').addEventListener('click',() => count.increment());
document.querySelector('#decrement').addEventListener('click',() => count.decrement());
document.querySelector('#unsubscribe').addEventListener('click',() => unsub());
document.querySelector('#subscribe').addEventListener('click',() => setupCounter(document.querySelector('#counter')));

setupCounter(document.querySelector('#counter'));