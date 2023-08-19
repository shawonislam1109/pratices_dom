
const modalBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.close');
const modal = document.getElementById('modal');

modalBtn.addEventListener('click', ()=>{
    modal.style.display = 'block'
});
closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none'
});
modal.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

