//Define UI Elements
const btnGroup = document.querySelector('.btn-group');
const display = document.getElementById('display');

const displayData = parseInt(display.innerText)


const addtion = document.getElementById('addtion')
const sub = document.getElementById('sub')
const reset = document.getElementById('reset')

let count = 0 ; 

addtion.addEventListener('click' , () => {
    count -= 1  ;
    display.innerText = count ; 
})

sub.addEventListener('click', ()=>{
    count += 1  ;
    display.innerText = count ; 
})

reset.addEventListener('click', () => {
    display.innerText = 0 
})

