
const tablinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");


tablinks.forEach(tabData => {
      tabData.addEventListener('click', (e)=>{
        const current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(' active', " ")
        e.target.className += ' active'


        tabContents.forEach(contactData => {
            const findData = e.target.dataset.filter ; 
            console.log(findData)
            if(contactData.classList.contains(findData)){
                contactData.style.display = 'block'
            }
            else{
                contactData.style.display= 'none'
            }
        })
      })
})
