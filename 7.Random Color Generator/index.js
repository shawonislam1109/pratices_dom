//Define UI Elements
const btn = document.querySelector('.btn-primary');
const randColor = document.getElementById('randColor');
btn.addEventListener('click', ()=>{
    const randomColor = Math.random().toString(8).slice(2,8);
    randColor.innerText = `#${randomColor}`
    document.querySelector('body').style.backgroundColor = `#${randomColor}`
})
