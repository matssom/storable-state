import { storable, derived, writable, readable } from '../../dist/index.js';

const base = storable('number', 3);
const adder = storable('number1', 5);

const sum = derived(
    [base, adder],
    (base, adder) => {
        return base + adder;
    }
)

let unsub;

const setupCounter = (root) => {
    unsub = sum.subscribe(count => {
        root.innerText = count;
    });
}

document.querySelector('#increment').addEventListener('click',() => base.update(value => value + 1));
document.querySelector('#decrement').addEventListener('click',() => adder.update(value => value - 2));
document.querySelector('#unsubscribe').addEventListener('click',() => unsub());
document.querySelector('#subscribe').addEventListener('click',() => setupCounter(document.querySelector('#counter')));

setupCounter(document.querySelector('#counter'));