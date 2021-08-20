const questionAmount = document.querySelector('.quiz__total');
const questionRemaining = document.querySelector('.quiz__remaining');
const question = document.querySelector('.quiz__body--question');
const optionsDiv = document.querySelector(',quiz__body--container');
let letter = 97; 

function displayQuiz(quizArr){
    const quiz = new Quiz(quizArr); 
}

function optionCreator(question_option){
    let div = document.createElement('div');
    div.classList.add('options');

    let span = "" 
    createLetter();

    let option_answer = document.createElement('p');
    option_answer.classList.add('options__answer');
    option_answer.innerHTML = question_option; 

    div.append(span); 
    div.append(option_answer);
}

function createLetter(char) {
    let span = document.createElement('span');
    span.classList.add('letters');
    return span;
}
