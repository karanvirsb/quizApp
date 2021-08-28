let counter = 0; 
let letter = 97; 
let next_btn;  
let quit_btn;
let questionAmount;
let questionRemaining;
let question;
let optionsDiv;
let quizArray = sessionStorage.getItem('quizJson'); 
let quiz;
let quizArr; 

document.addEventListener('DOMContentLoaded', () => {
    if(document.URL.includes('displayQuiz.html')){
        collectElements();
        quizArray = JSON.parse(quizArray);
        quiz = new Quiz(quizArray);
        toLocalStorage();
        displayQuiz();
    }

    if(next_btn){
        next_btn.addEventListener('click', () => {
            const isItWorking = isItCorrect(quizArr[counter].correct_answer, getUserAnswer);
            if(isItWorking !== -1){
                quiz.addPickedAnswer(counter, getUserAnswer);
                nextQuestion(); 
            } else{
                alert('Pick an answer even if you are unsure');
            }
        })
    }

    if(quit_btn){
        quit_btn.addEventListener('click', () => {
            if(alert('Are you sure you want to quit?')){
                location.replace('../HTML/index.html');
            }
        })
    }
}, true);

function toLocalStorage() {
    let done = JSON.parse(localStorage.getItem('storing_done'));
    if(!done){
        localStorage.setItem('modified_quiz_json', JSON.stringify(quiz.newJson()));
        localStorage.setItem('storing_done', 'true');  
    }
}

function displayQuiz(){
    quizArr = JSON.parse(localStorage.getItem('modified_quiz_json')) || [];
    if(quizArr !== []){ 
        counter = checkWhichQuestionsDone(quizArr); 
        questionAmount.innerHTML = quizArr.length
        questionRemaining.innerHTML = (counter + 1);

        const nthQuiz = quiz.nthQuizResult(counter);
        const newNthQuiz  = quiz.newNthQuizResult(counter);

        question.innerHTML = quiz.question(newNthQuiz);

        displayOptions(newNthQuiz.options);
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
    counter++; 
    if(counter < quiz.quizLength){
        clearQuiz(); 
        questionRemaining.innerHTML = (counter + 1);
        const nthQuiz= quiz.nthQuizResult(counter);
        const newNthQuiz  = quiz.newNthQuizResult(counter);

        question.innerHTML = quiz.question(newNthQuiz);

        letter = 97; //todo reset letter func
        displayOptions(newNthQuiz.options)
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

function checkWhichQuestionsDone(quizArr){
    let doneCounter = 0; 
    const quizLength = quizArr.length; 
    for(let i = 0; i < quizLength; i++){
        if(quizArr[i].done === true){
            doneCounter++;
        }
    }
    return doneCounter; 
}

function addGlobalEventListener(selector,type,callback){
    document.addEventListener(type, e => {
        if(e.target.matches(selector)){
            callback(e); 
        }
    });
}


