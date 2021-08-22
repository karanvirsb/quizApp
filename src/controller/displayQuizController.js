let counter = 0; 
let letter = 97;  
let questionAmount = '';
let questionRemaining = '';
let question = '';
let optionsDiv = '';
let quizJson = ''; 

document.addEventListener('DOMContentLoaded', () => {
    collectElements();
    displayQuiz(sessionStorage.getItem('quizJson'));
}, true);

function displayQuiz(quizArr){
    if(quizArr){
        sessionStorage.clear(); 
        quizJson = JSON.parse(quizArr);
        const quiz = new Quiz(quizJson); 
        const nthQuiz = quiz.nthQuizResult(counter);
        question.innerHTML = quiz.question(nthQuiz);
    
        const answer = quiz.getAnswer(nthQuiz); 
        const quizOptions = quiz.options(nthQuiz);
    
        quizOptions.forEach(element => {
        optionCreator(element); 
        });
    }
}

function collectElements(){
    questionAmount = document.querySelector('.quiz__total');
    questionRemaining = document.querySelector('.quiz__remaining');
    question = document.querySelector('.quiz__body--question');
    optionsDiv = document.querySelector('.quiz__body--container');
}

function optionCreator(question_option){
    let div = document.createElement('div');
    div.classList.add('options');

    const span = createLetter();
    const option_answer = createOptionInfo(question_option); 

    option_answer.prepend(span);
    div.append(option_answer);

    optionsDiv.append(div);
}

function createOptionInfo(question_option) {
    let option_answer = document.createElement('p');
    option_answer.classList.add('options__answer');
    option_answer.innerHTML = question_option;
    return option_answer;
}

function createLetter() {
    let span = document.createElement('span');
    span.classList.add('letters');
    span.innerHTML = String.fromCharCode(letter) + '.';
    letter++;  
    return span;
}



