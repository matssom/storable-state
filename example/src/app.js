import './readable.js';

document.querySelector('#increment').addEventListener('click',() => count.increment());
document.querySelector('#decrement').addEventListener('click',() => count.decrement());
document.querySelector('#unsubscribe').addEventListener('click',() => unsub());
document.querySelector('#subscribe').addEventListener('click',() => setupCounter(document.querySelector('#counter')));