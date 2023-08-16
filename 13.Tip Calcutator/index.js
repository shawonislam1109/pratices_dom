//Define UI Elements
const form = document.getElementById('form');
const tipAmount = document.getElementById('tipAmount');
const totalBil = document.getElementById('totalBil');
const error = document.querySelector('.error');

//Define Functions

const hideError = () => {
    setTimeout(() => {
        error.style.display = 'none';
    }, 3000)
};

const calculate = (e) => {
    e.preventDefault() ; 

    const rateService = document.getElementsByName('rate-service')[0].value;
    const inputBalance = document.getElementsByClassName('input-balance')[0].value;
   
    const rateServiceNumer = Number(rateService)
    const inputBalanceData = Number(inputBalance)

    const tipAmount = Math.round(rateServiceNumer * inputBalanceData) ; 
   const totalBill = inputBalanceData + tipAmount

   const tip = document.getElementById('tipAmount')
   tip.innerText = `Tip Amount: $${tipAmount}`

   const total = document.getElementById('totalBil')
   total.innerText = `Total Bill: $${totalBill}`
}

















// const tipCalculator = (e) => {
//     e.preventDefault();
//     const bil = document.getElementsByName('bil')[0].value;
//     const rateService = document.getElementsByName('rate-service')[0].value;

//     if (bil == '' || rateService == '') {
//         error.innerHTML = 'Please fillup Bil and Rate Service field';
//         const errStyle = {
//             display: 'block',
//             color: 'red',
//         }
//         Object.assign(error.style, errStyle)
//         hideError();
//     } else if (isNaN(bil)) {
//         error.innerHTML = 'Please add a Number';
//         const errStyle = {
//             display: 'block',
//             color: 'red',
//         }
//         Object.assign(error.style, errStyle)
//         hideError();
//     } else {
//         let tip = Number(bil) * rateService;
//         tip = Math.round(tip);
//         tipAmount.innerHTML = `Tip Amount: $${tip}`
//         totalBil.innerHTML = `Total Bil  : $${tip + Number(bil)}`
//         error.innerHTML = 'Tip Calculator Successfully';
//         const errStyle = {
//             display: 'block',
//             color: 'var(--btn-bg-color)',
//         }
//         Object.assign(error.style, errStyle)

//         document.getElementsByName('bil')[0].value = '';
//         document.getElementsByName('rate-service')[0].value = ''

//     }
// };


//Define Event listener
form.addEventListener('submit', calculate);