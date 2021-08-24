let total_questions = '';
let correct_questions = ''; 
let progress_percent = ''; 
let progress_bar = ''; 
let quotes = ''; 
let gif_container = ''; 

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
}