const counterElem = document.querySelector('.counter');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let counter = 0;
let timerId;

startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
        counter++
        counterElem.textContent = counter
    }, 1000);
});
pauseButton.addEventListener('click', () => {
    clearInterval(timerId);
});
resetButton.addEventListener('click', () => {
    counter = 0;
    counterElem.textContent = counter
    clearInterval(timerId);
})