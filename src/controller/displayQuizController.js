let counter = 0; 
let letter = 97; 
let next_btn = '';  
let quit_btn = '';
let questionAmount = '';
let questionRemaining = '';
let question = '';
let optionsDiv = '';
let quizArray = sessionStorage.getItem('quizJson'); 
let quiz = '';

document.addEventListener('DOMContentLoaded', () => {
    collectElements();
    quizArray = JSON.parse(quizArray);
    displayQuiz(quizArray);
}, true);

function displayQuiz(quizArr){
    if(quizArr){
        quiz = new Quiz(quizArr); 
        const nthQuiz = quiz.nthQuizResult(counter);
        question.innerHTML = quiz.question(nthQuiz);
    
        const answer = quiz.getAnswer(nthQuiz); 

        const quizOptions = quiz.options(nthQuiz);
    
        quizOptions.forEach(element => {
        optionCreator(element); 
        });
        sessionStorage.clear(); 
    }
}

function nextQuestion(){
    counter++; 

    const nthQuiz = quiz.nthQuizResult(counter);
    question.innerHTML = quiz.question(nthQuiz);
    const answer = quiz.getAnswer(nthQuiz); 
    const quizOptions = quiz.options(nthQuiz);
    quizOptions.forEach(element => {
    optionCreator(element); 
    });

}

function collectElements(){
    questionAmount = document.querySelector('.quiz__total');
    questionRemaining = document.querySelector('.quiz__remaining');
    question = document.querySelector('.quiz__body--question');
    optionsDiv = document.querySelector('.quiz__body--container');
    next_btn = document.querySelector('#next_question_btn');
    quit_btn = document.querySelector('#quit_quiz_btn');
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
    span.classList.add('letter');
    span.innerHTML = String.fromCharCode(letter) + '.';
    letter++;  
    return span;
}

function addGlobalEventListener(selector,type,callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
            callback(e); 
        }
    });
}


