import { reviews } from './reviews.js';

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentReview = 0;



const showData = (e) => {
    const personItem = reviews[currentReview];
    img.src = personItem.img;
    author.textContent = personItem.name;
    job.textContent = personItem.job;
    info.textContent = personItem.text;
}


prevBtn.addEventListener('click', (e)=>{
    if(currentReview > 0){
        nextBtn.disabled = false; 
        currentReview--
        showData(currentReview)
    }
    else{
       e.currentTarget.disabled = true ; 

    }
})


nextBtn.addEventListener('click', (e)=>{
    if(currentReview < reviews.length - 1){
        prevBtn.disabled = false;
        currentReview++;
        showData(currentReview);
    }
    else if (currentReview > reviews.length -2){
        e.currentTarget.disabled = true;
    }
})

randomBtn.addEventListener('click', ()=> {
    currentReview = Math.floor(Math.random() * reviews.length)
    showData(currentReview)
})