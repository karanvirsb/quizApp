const amount = document.querySelector('#number_of_questions__input');
const category = document.querySelector('#cateogry__input');
const difficulty = document.querySelector('#difficulty__input');
const type = document.querySelector('#type__input');

function retrieveQuiz(amount, category, difficulty, type){
    return getData(amount, category, type, difficulty)
}