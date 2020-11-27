import { writable } from '../../dist/index.js';

const countable = (initial = 0) => {
    const { set, update, subscribe } = writable(initial, () => {
        console.log('got my first count subscriber');
        return () => console.log('lost my last count subscriber');
    });

    return {
        increment: value => {
            value = typeof value === 'number' ? value : 1;
            update(count => count += value);
        },
        decrement: value =>  {
            value = typeof value === 'number' ? value : 1;
            update(count => count -= value);
        },
        subscribe,
        set
    }
}

const count = countable(1);
let unsub;

const setupCounter = (root) => {
    unsub = count.subscribe(count => {
        console.log(count);
        root.innerText = count;
    });
}

document.querySelector('#increment').addEventListener('click',() => count.increment());
document.querySelector('#decrement').addEventListener('click',() => count.decrement());
document.querySelector('#unsubscribe').addEventListener('click',() => unsub());

setupCounter(document.querySelector('#counter'));