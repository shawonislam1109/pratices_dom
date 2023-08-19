
const search = document.getElementById('filterInput');
const matchList = document.getElementById('matchList');

search.addEventListener('input', async (e)=>{
        const searchValue = e.target.value;
        const res = await fetch('./data.json')
        const data = await res.json(); 

        let searchOUtput ; 

        searchOUtput = data.filter(data => {
           const searchData =  data.name.toLowerCase().startsWith(searchValue.toLowerCase()) ;
           return searchData ; 
        })
        if(searchValue.length == 0){
            matchList.innerHTML  = ' ';
        } else if(searchValue.length > 0){
             searchOUtput = searchOUtput.map(data => {
                return `<div class="card card-body bg-dark my-3 text-light">
            <h5> ${data.name} (${data.abbr}) <span class="text-primary">${data.capital}</span></h5>
            <span>${data.lat}${data.long}</span>
             </div>`

            }).join(' ')
            matchList.innerHTML = searchOUtput ; 
        }
    })