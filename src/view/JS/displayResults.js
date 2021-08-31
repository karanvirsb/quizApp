let total_questions;
let correct_questions; 
let progress_percent; 
let progress_bar; 
let quotes; 
let gif_container; 
let correct_amount;
let total_amount;
let restart_btn;
let view_results_btn;
let preview_section; 
let preview_wrapper;
let finishedLetters = 97; 

document.addEventListener('DOMContentLoaded', () => {
    collectResultElements();
    displayResults();

    if(restart_btn){
        restart_btn.addEventListener('click', ()=>{
            
        });
    }

    if(view_results_btn){
        view_results_btn.addEventListener('click', ()=>{
            preview_section.style.display = 'block';
        })
    }
});

function collectResultElements(){
    total_questions = document.querySelector('.total');
    correct_questions = document.querySelector('.correct'); 
    progress_percent = document.querySelector('.progress__percent'); 
    progress_bar = document.querySelector('.progress__bar'); 
    quotes = document.querySelector('.result__quote'); 
    gif_container =  document.querySelector('.gif_generator');
    correct_amount = sessionStorage.getItem('answersCorrect');
    total_amount = sessionStorage.getItem('lengthOfQuiz'); 
    restart_btn = document.querySelector('#restart_quiz_btn');
    view_results_btn = document.querySelector('#view_results_btn');
    preview_section = document.querySelector('.preview_results');
    preview_wrapper = document.querySelector('.preview__wrapper');
}

function displayResults(){
    console.log(total_amount, correct_amount);
    total_questions.innerHTML = total_amount;
    correct_questions.innerHTML = correct_amount; 

    displayProgressBar(correct_amount,total_amount)
    const percentage = displayPercentage(correct_amount, total_amount); 
    displayQuote(percentage); 
    displayGif(percentage); //todo 
}

function displayProgressBar(correctNum, totalNum){
    progress_bar.setAttribute('max', totalNum);
    progress_bar.setAttribute('value', correctNum);
}

function displayPercentage(correct, total){
    const percentage = Math.floor((correct/total) * 100);
    progress_percent.innerHTML = percentage + '%'; 
    return percentage; 
}

function displayQuote(percent){
    let result = getQuote(percent);
    quotes.innerHTML = result; 
}

function displayGif(percent){
    if(percent < 10){
        gif_container.setAttribute('src','https://media.giphy.com/media/gK2tnZtrkTxHusVLEO/giphy.gif?cid=ecf05e47n0nwnzxaxwz08ecdk6fdmq2qzfrs0obqdroy98ov&rid=giphy.gif&ct=g')
        return; 
    }

    if(percent < 20) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/l3mZcxZKIQemTeT9S/giphy.gif")
        gif_container.setAttribute('alt',"Keep going gif by CBC on giphy")
        return; 
    }
    if(percent < 30){
        gif_container.setAttribute('src',"https://media.giphy.com/media/gbgJ5rRrLXltK/giphy.gif")
        gif_container.setAttribute('alt',"Prove them wrong climbing cartoon by disney on giphy")
        return; 
    }
    if(percent < 40) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/JhOAQxvBafrIA/giphy.gif")
        gif_container.setAttribute('alt',"child running trying to keep up by liveleak on giphy")
        return; 
    }
    if(percent < 50) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/LMny8mw5VnvyKln1Jt/giphy.gif")
        gif_container.setAttribute('alt',"Squirrel reaching out almost to the food by memecandy on giphy")
        return; 
    }
    if(percent < 60) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/l0ExcS4a762Pofpio/giphy.gif")
        gif_container.setAttribute('alt',"person saying half way there by The Academy awards on giphy")
        return; 
    }
    if(percent < 70) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/0A477fjlRXL1n2LVgJ/giphy.gif")
        gif_container.setAttribute('alt',"Push Push Push by peloton on giphy")
        return; 
    }
    if(percent < 80) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/3o7TKJhGApeCNczefu/giphy.gif")
        gif_container.setAttribute('alt',"Monkey saying average human being like the rest by South Park on giphy")
        return; 
    }
    if(percent < 90) {
        gif_container.setAttribute('src',"https://media.giphy.com/media/5OlPNU1c8MhBZDhU7U/giphy.gif")
        gif_container.setAttribute('alt',"Person saying I am above average by HBO max on giphy")
        return; 
    }

    if(percent <= 100){
        gif_container.setAttribute('src',"https://media.giphy.com/media/aTuRYPaiIbrfskpXO9/giphy.gif")
        gif_container.setAttribute('alt',"built different by SportsManias on giphy")
        return; 
    }
}

function getQuote(percent){
    if(percent < 10) return 'You can do better we believe in you 😃'
    if(percent < 20) return 'Thats great keep on going you can do it 👏'
    if(percent < 30) return 'You can prove them wrong keep climbing 🧗'
    if(percent < 40) return 'keep on trying you will get there 🏃‍♀️'
    if(percent < 50) return 'You are almost half way there ⏳'
    if(percent < 60) return 'Even sometimes average is the best 🧑‍🤝‍🧑'
    if(percent < 70) return 'Can you really push yourself to do better⁉️'
    if(percent < 80) return 'Average aint all that bad but keep on pushing 🏊‍♀️'
    if(percent < 90) return 'You almost got to the big 💯'
    if(percent <= 100) return 'Thats excellent you pushed really hard heres some 🍬' 
}

function addQuizResults(arr){
    if(arr){
        for(let i = 0; i < arr.length; i++){
            let qAnswer; 
            const qArray = arr[i]; 

            const container = document.createElement('div');
            container.classList.add('preview__quiz'); 

            const pQuestion = document.createElement('p');
            pQuestion.innerHTML = 'Question: ' + qArray.question;

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options__container'); 

            for(let j = 0; j < qArray.options.length; j++){
                const finishedOptionDiv = document.createElement('div');
                finishedOptionDiv.classList.add('finished__option');
                if(qArray.was_it_correct === true){
                    finishedOptionDiv.classList.add('correct');
                }
                else{
                    finishedOptionDiv.classList.add('incorrect'); 
                    qAnswer = document.createElement('p');
                    qAnswer.classList.add('is__correct'); 
                    qAnswer.innerHTML = 'Answer: ' + qArray.correct_answer; 
                }
                finishedOptionDiv.append(createFinishedOption(qArray.options[j]))
                optionsContainer.append(finishedOptionDiv);

            }
            const answerContainer = document.createElement('div');
            answerContainer.classList.add('preview__correct');
            answerContainer.append(qAnswer);

            container.append(pQuestion);
            container.appened(optionsContainer); 

            if(qAnswer){
                container.append(answerContainer); 
            }

            preview_wrapper.append(container); 
        }
    }
}

function createFinishedOption(option){
    const pOption = document.createElement('p');
    pOption.classList.add('finished__answer'); 
    pOption.innerHTML = getLetter() + ". " + option; 
}

function getLetter(){
    const tempLetter = finishedLetters;
    finishedLetters++; 
    return String.fromCharCode(tempLetter);
}

// function clearStorage() {

//     let session = sessionStorage.getItem('ref');

//     if (session == null) {

//         localStorage.removeItem('remove');

//     }
//     sessionStorage.setItem('ref', 1);
// }
// window.addEventListener('load', clearStorage);