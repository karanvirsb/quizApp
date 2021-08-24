let total_questions = '';
let correct_questions = ''; 
let progress_percent = ''; 
let progress_bar = ''; 
let quotes = ''; 
let gif_container = ''; 
let correct_amount = '';
let total_amount = '';

document.addEventListener('DOMContentLoaded', () => {
    collectResultElements();
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