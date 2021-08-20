const begin_btn = document.querySelector('#form_submit');
let quizJson = []; 

begin_btn.addEventListener('click', e => {
    e.preventDefault();
    const amount = document.querySelector('#number_of_questions__input').value;
    const category = document.querySelector('#category__input').value;
    const difficulty = document.querySelector('#difficulty__input').value;
    const type = document.querySelector('#type__input').value;

    quizJson = retrieveQuiz(amount, category, type, difficulty);
}); 

function retrieveQuiz(amount, category, type, difficulty) {
    getData(+amount, category, type, difficulty).then((data) => {
       return data.results;
    }).catch((err) => console.log(err));
}
