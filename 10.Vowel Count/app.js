const input_volwel = document.getElementById('input')
const checkBtn = document.getElementById('check')

const watchCount = document.getElementById('displayVowel')


checkBtn.addEventListener('click', (e) => {
    let inputData = input_volwel.value;

     inputData = inputData.toLowerCase();
   
     let count = 0 ; 

     for(var i = 0 ; i <= inputData.length; i++){
        if(inputData[i] === 'a'  || inputData[i] === 'e' || inputData[i] === 'i' || inputData[i] === 'o' || inputData[i] === 'u'){
            count += 1 ; 
          }
    }
    if(count){
        watchCount.innerText = `volwel find out :  ${count}`
    }else{
        watchCount.innerText = `there was no volwel`
    }
      
    inputData = ' ' ; 
})