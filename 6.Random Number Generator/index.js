
const btn = document.querySelector('.btn-primary');
const randdom = document.getElementById('randomn')

btn.addEventListener('click', function generarateNumber() {
    const rand = Math.floor(Math.random() * 10) + 1;
    randdom.innerText = rand;
});
