//Define UI Elements
const password = document.getElementsByName('password')[0];
const eye = document.getElementById('eye');

//Define Functions
eye.addEventListener('click', ()=>{
    if(!eye.src.includes('eye-pass')){
        password.setAttribute('type', 'password');
        eye.src = './eye-pass.png'
    }
    else{
        password.setAttribute('type', 'text');
        eye.src = './eye-text.png'
    }
})
