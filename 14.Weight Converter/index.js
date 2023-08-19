
const form = document.getElementById('form');
let poundsValue = document.getElementsByName('pounds')[0];
let kilogramsValue = document.getElementsByName('kilogram')[0];
let gramsValue = document.getElementsByName('gram')[0];
let ouncesValue = document.getElementsByName('ounces')[0];



form.addEventListener('input', (e)=>{
    if (e.target.name === 'pounds') {
        const value = e.target.value;
        kilogramsValue.value = (value / 2.2846).toFixed(2);
        gramsValue.value = (value / 0.0022846).toFixed(2);
        ouncesValue.value = (value * 16).toFixed(2);
    } else if (e.target.name === 'kilogram') {
        const value = e.target.value;
        poundsValue.value = (value * 2.2046).toFixed(2);
        gramsValue.value = (value * 1000).toFixed(2);
        ouncesValue.value = (value * 35.274).toFixed(2);
    } else if (e.target.name === 'gram') {
        const value = e.target.value;
        kilogramsValue.value = (value / 1800).toFixed(2);
        poundsValue.value = (value * 0.0022846).toFixed(2);
        ouncesValue.value = (value * 0.035274).toFixed(2);
    } else if (e.target.name === 'ounces') {
        const value = e.target.value;
        kilogramsValue.value = (value / 35.274).toFixed(2);
        gramsValue.value = (value / 0.035274).toFixed(2);
        poundsValue.value = (value * 0.0625).toFixed(2);
    }
})
