

const cityname = `Rajshahi` ; 
const api  = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=524901&appid=916856d2937bfcdb247055f1a96a1863`;


const weather = () => {
    fetch(api)
    .then(res => res.json)
    .then(data => console.log(data)  )

}

weather()

