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

    next_btn.addEventListener('click', () => {
        const isItWorking = isItCorrect(quiz.quizAnswer, getUserAnswer);
        if(isItWorking !== -1){ 
            nextQuestion(); 
        } else{
            alert('Pick an answer even if you are unsure');
        }
    })

    quit_btn.addEventListener('click', () => {
        if(alert('Are you sure you want to quit?')){
            location.replace('../HTML/index.html');
        }
    })
}, true);

function displayQuiz(quizArr){
    if(quizArr){
        quiz = new Quiz(quizArr); 
        
        questionAmount.innerHTML = quizArr.length
        questionRemaining.innerHTML = (counter + 1);

        const nthQuiz = quiz.nthQuizResult(counter);
        question.innerHTML = quiz.question(nthQuiz);
        quiz.getAnswer(nthQuiz); 
        const quizOptions = quiz.options(nthQuiz);
       
        displayOptions(quizOptions);
        sessionStorage.clear(); 
    }
}

function collectElements(){
    questionAmount = document.querySelector('.quiz__total');
    questionRemaining = document.querySelector('.quiz__remaining');
    question = document.querySelector('.quiz__body--question');
    optionsDiv = document.querySelector('.quiz__body--container');
    next_btn = document.querySelector('#next_question_btn');
    quit_btn = document.querySelector('#quit_quiz_btn');
}

function displayOptions(quizOptions) {
    quizOptions.forEach(element => {
        optionCreator(element);
    });
}

function nextQuestion(){
    clearQuiz(); 
    counter++; 
    if(counter < quiz.quizLength){
        questionRemaining.innerHTML = (counter + 1);
        const nthQuiz = quiz.nthQuizResult(counter);
        question.innerHTML = quiz.question(nthQuiz);
    
        quiz.getAnswer(nthQuiz); 
        const quizOptions = quiz.options(nthQuiz);
        letter = 97; //todo reset letter func
        displayOptions(quizOptions)
    } else{
        sessionStorage.setItem('answersCorrect', questions_correct()); 
        sessionStorage.setItem('lengthOfQuiz', quiz.quizLength); 
        location.replace('../HTML/quizResults.html');
    }
}


function optionCreator(question_option){
    let div = document.createElement('div');
    div.classList.add('options');

    const label = createLabel(); 
    const radio_btn = createRadioBtn(); 

    const span = createLetter();
    const option_answer = createOptionInfo(question_option); 
    
    option_answer.prepend(span);

    label.append(radio_btn);
    div.append(option_answer);

    label.append(div);
    optionsDiv.append(label);
}

function createLabel(){
    const label = document.createElement('label');
    label.classList.add('options_label');
    return label; 
}

function createRadioBtn(){
    const btn = document.createElement('input');
    btn.type = 'radio';
    btn.name = 'options'
    btn.classList.add('radio__btn');
    return btn;
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

function clearQuiz(){
    question.innerHTML = '';
    while(optionsDiv.firstChild){
        optionsDiv.firstChild.remove(); 
    }
}

function addGlobalEventListener(selector,type,callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
            callback(e); 
        }
    });
}


