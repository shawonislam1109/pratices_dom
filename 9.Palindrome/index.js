const input = document.getElementById('input');
const button = document.getElementById('check');
const displayPalindrome = document.getElementById('displayPalindrome');

button.addEventListener('click', ()=>{
    const InputValue = input.value.toLowerCase(); 
    const result = [...InputValue].reverse().join('') ; 

    if(InputValue == result){
        displayPalindrome.innerHTML = `${InputValue.toUpperCase()} is a Palindrome.`;
        displayPalindrome.style.color = `tomato`;
    }
    else{
        displayPalindrome.innerHTML = `${InputValue.toUpperCase()} is not Palindrome.`;
        displayPalindrome.style.color = `red`
    }

    input.value= " " ; 
});

