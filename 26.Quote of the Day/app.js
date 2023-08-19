const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author');
const speechBtn = document.querySelector('.speech');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');
const quoteBtn = document.querySelector('.button');
const synth = speechSynthesis;

const  currentQuestion = async () => {
    quoteBtn.innerText = 'loading' ; 
    quoteBtn.classList.add('loading')
    const res = await fetch('https://api.quotable.io/random');
    const quotes = await res.json();
    nextQuestion(quotes)
}
const nextQuestion =(data) => {
    const {author, content} = data ; 
    authorName.innerText= author;
    quoteText.innerText = content ; 
    quoteBtn.innerText = 'Next Quote' ;
    quoteBtn.classList.remove('loading')
}
quoteBtn.addEventListener('click', currentQuestion)


speechBtn.addEventListener('click', ()=> {
    const voice = new SpeechSynthesisUtterance (`${quoteText.innerText} by ${authorName.innerText}`)
    synth.speak(voice)
})

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(quoteText.innerText)
})
