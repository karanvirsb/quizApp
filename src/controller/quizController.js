const begin_btn = document.querySelector("#form_submit");
const random_btn = document.querySelector("#random__btn");
let quizJson = [];

begin_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = document.querySelector("#number_of_questions__input").value;
    const category = document.querySelector("#category__input").value;
    const difficulty = document.querySelector("#difficulty__input").value;
    const type = document.querySelector("#type__input").value;

    retrieveQuiz(amount, category, type, difficulty);
});

random_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = generateAmount();
    retrieveQuiz(amount, "", "", "");
});

document.addEventListener("click", (e) => {
    if (e.target.matches(".explore__item")) {
        const elem = e.target;
        retrieveQuiz(
            elem.dataset.amount,
            elem.dataset.category,
            elem.dataset.type,
            elem.dataset.difficulty
        );
    } else if (e.target.parentElement.matches(".explore__item")) {
        const elem = e.target.parentElement;
        retrieveQuiz(
            elem.dataset.amount,
            elem.dataset.category,
            elem.dataset.type,
            elem.dataset.difficulty
        );
    }
});

const retrieveQuiz = async (amount, category, type, difficulty) => {
    await getData(+amount, category, type, difficulty)
        .then((data) => {
            if (data !== -1) {
                sessionStorage.setItem(
                    "quizJson",
                    JSON.stringify(data.results)
                );
                changeWindow();
            }
        })
        .catch((err) => console.log(err));
};

function changeWindow() {
    location.replace("./view/HTML/displayQuiz.html");
}

function generateAmount() {
    return Math.floor(Math.random() * (25 - 1 + 1) + 1);
}

function addGlobalEventListener(selector, type, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    });
}
