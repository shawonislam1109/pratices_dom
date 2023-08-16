

const myClock = () =>
    {
        const date = new Date()
        const houre = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        const findoutHoure = houre > 12 ? houre - 12 : houre

        const session = houre > 12 ? "pm" : 'am'
        document.getElementById('houre').innerText = `${ findoutHoure }:`
        document.getElementById('minutes').innerText = `${ minutes }:`
        document.getElementById('second').innerText = `${ seconds }`
        document.getElementById('session').innerText = `${ session }`
        
        setTimeout(myClock , 1000)
    }
    myClock()
