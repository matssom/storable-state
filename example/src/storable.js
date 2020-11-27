import { storable } from '../../dist/index.js';

const countable = (key) => {
    const { update, subscribe} = storable(key, 0, () => {
        console.log("sub")
        return () => console.log("unsub")
    });

    return {
        increment: () => update(value => value += 1),
        decrement: () => update(value => value -= 1),
        subscribe
    }
}

const count = countable();
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