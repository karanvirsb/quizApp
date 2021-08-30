const begin_btn = document.querySelector('#form_submit');
const random_btn = document.querySelector('#random__btn');
let quizJson = []; 

begin_btn.addEventListener('click', e => {
    e.preventDefault();
    const amount = document.querySelector('#number_of_questions__input').value;
    const category = document.querySelector('#category__input').value;
    const difficulty = document.querySelector('#difficulty__input').value;
    const type = document.querySelector('#type__input').value;

    retrieveQuiz(amount, category, type, difficulty);
}); 

random_btn.addEventListener('click', () => {
    const amount = generateAmount();
    const category = generateCategory();
    const difficulty = generateDifficulty();
    const type = generateType();

    retrieveQuiz(amount, category, type, difficulty); 
})

const retrieveQuiz = async (amount, category, type, difficulty) => {
    await getData(+amount, category, type, difficulty).then((data) => { 
        sessionStorage.setItem('quizJson', JSON.stringify(data.results)); 
        changeWindow(); 
    }).catch((err) => console.log(err));
}

function changeWindow(){
    location.replace("../HTML/displayQuiz.html");
}

function generateAmount(){

}
