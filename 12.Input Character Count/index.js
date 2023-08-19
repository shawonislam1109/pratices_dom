const input = document.getElementById('input');
const displayCharacter = document.getElementById('displayCharacter');

input.addEventListener('keypress', (e)=> {
     let count = (e.target.value).length;
    displayCharacter.innerText = count;
});
