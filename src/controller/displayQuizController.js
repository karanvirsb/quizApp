let questionAmount = '';
let questionRemaining = '';
let question = '';
let optionsDiv = '';
let letter = 97;  

document.addEventListener('DOMContentLoaded', () => {
    collectElements();
    displayQuiz(sessionStorage.getItem('quizJson'));
}, true);

function displayQuiz(quizArr){
    sessionStorage.clear(); 
    const arr = JSON.parse(quizArr);
    const quiz = new Quiz(arr); 
    const nthQuiz = quiz.nthQuizResult;
    console.log(nthQuiz); 
    console.log(quiz.question(nthQuiz)); 
    question.innerHTML = quiz.question(nthQuiz);
    const answer = quiz.getAnswer(nthQuiz); 
    const quizOptions = quiz.options(nthQuiz);
    console.log(quizOptions);
    quizOptions.forEach(element => {
    optionCreator(element); 
    });
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

    const span = createLetter(letter);
    const option_answer = createOptionInfo(question_option); 

    div.append(span); 
    div.append(option_answer);
}

function createOptionInfo(question_option) {
    let option_answer = document.createElement('p');
    option_answer.classList.add('options__answer');
    option_answer.innerHTML = question_option;
    return option_answer;
}

function createLetter(char) {
    let span = document.createElement('span');
    span.classList.add('letters');
    span.innerHTML = String.fromCharCode(char);
    char++;  
    return span;
}

function changeWindow(){
    location.replace("../HTML/displayQuiz.html");
}


