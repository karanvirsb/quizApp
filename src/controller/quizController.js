const begin_btn = document.querySelector('#form_submit');
let quizJson = []; 

begin_btn.addEventListener('click', () => {
    const amount = document.querySelector('#number_of_questions__input').value;
    const category = document.querySelector('#category__input').value;
    const difficulty = document.querySelector('#difficulty__input').value;
    const type = document.querySelector('#type__input').value;

    quizJson = retrieveQuiz(amount, category, difficulty, type);
    console.log(quizJson);  
}); 

function retrieveQuiz(amount, category, difficulty, type){
    return getData(amount, category, type, difficulty);
}