const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}
let counterValue = 0;

refs.decrementBtn.addEventListener('click', setCounterDecrement);
refs.incrementBtn.addEventListener('click', setCounterIncrement);

function setCounterDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}
function setCounterIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}
