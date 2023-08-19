const input = document.getElementById('input');
const button = document.getElementById('copy');

button.addEventListener('click', ()=> {
    input.focus();
    input.select();
    e.target.innerHTML = 'Copy..!'
    setTimeout(() => {
        e.target.innerHTML = 'Copy'
    }, 1000);
})