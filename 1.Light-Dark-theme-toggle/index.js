const toggle = document.getElementById('toggleDark')

const EnableTheme = () => {
     document.body.classList.add('dark-theme')
     localStorage.setItem('DrakMode', 'enable')
}

const DisableTheme = () => {
    document.body.classList.remove('dark-theme')
    localStorage.setItem('DrakMode', 'disable')
}

toggle.addEventListener('click' , function(){
    const theme = localStorage.getItem('DrakMode')
    if(theme !== 'enable'){
        toggle.classList.add('bi-moon')
        EnableTheme()
    }else{
        toggle.classList.remove('bi-moon')
        DisableTheme() ; 
    }
})