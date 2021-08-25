let total_questions;
let correct_questions; 
let progress_percent; 
let progress_bar; 
let quotes; 
let gif_container; 
let correct_amount;
let total_amount;

document.addEventListener('DOMContentLoaded', () => {
    collectResultElements();
    displayResults();
});

function collectResultElements(){
    total_questions = document.querySelector('.total');
    correct_questions = document.querySelector('.correct'); 
    progress_percent = document.querySelector('.progress__percent'); 
    progress_bar = document.querySelector('.progress__bar'); 
    quotes = document.querySelector('.result__quote'); 
    gif_container =  document.querySelector('.gif_generator');
    correct_amount = sessionStorage.getItem('answersCorrect');
    total_amount = sessionStorage.getItem('lengthOfQuiz'); 
}

function displayResults(){
    console.log(total_amount, correct_amount);
    total_questions.innerHTML = total_amount;
    correct_questions.innerHTML = correct_amount; 

    displayProgressBar(correct_amount,total_amount)
    const percentage = displayPercentage(correct_amount, total_amount); 
    displayQuote(percentage); 
}

function displayProgressBar(correctNum, totalNum){
    progress_bar.setAttribute('max', totalNum);
    progress_bar.setAttribute('value', correctNum);
}

function displayPercentage(correct, total){
    const percentage = Math.floor((correct/total) * 100);
    progress_percent.innerHTML = percentage + '%'; 
    return percentage; 
}

function displayQuote(percent){
    let result = getQuote(percent);
    quotes.innerHTML = result; 
}

function getQuote(percent){
    if(percent < 10) return 'You can do better we believe in you 😃'
    if(percent < 20) return 'Thats great keep on going you can do it 👏'
    if(percent < 30) return 'You can prove them wrong keep climbing 🧗'
    if(percent < 40) return 'keep on trying you will get there 🏃‍♀️'
    if(percent < 50) return 'You are almost half way there ⏳'
    if(percent < 60) return 'Even sometimes average is the best 🧑‍🤝‍🧑'
    if(percent < 70) return 'Can you really push yourself to do better⁉️'
    if(percent < 80) return 'Average aint all that bad but keep on pushing 🏊‍♀️'
    if(percent < 90) return 'You almost got to the big 💯'
    if(percent <= 100) return 'Thats excellent you pushed really hard heres some 🍬' 
}

