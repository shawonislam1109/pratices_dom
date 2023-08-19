
const form = document.getElementById('form');


form.addEventListener('input', (e)=> {
    const inputValue = e.target.value;
    if ( inputValue.length > 6) {
        e.target.parentElement.classList.add('success');
        e.target.parentElement.classList.remove('fail');
    } else {
        e.target.parentElement.classList.add('fail');
        e.target.parentElement.classList.remove('success');
    }
})
