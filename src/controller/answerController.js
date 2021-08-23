const correct = 0; 

function isItCorrect(answer, userAnswer){
    if(answer === userAnswer()){
        correct++; 
    }
}

function questions_correct(){
    return correct; 
}

function getUserAnswer(){
    const radio_btns = document.querySelectorAll('.radio__btn');
    let sibling = ''; 
    radio_btns.forEach(elem => {
        if(elem.checked){
            sibling = elem.nextElementSibling; 
        }
    });

    return sibling.querySelector('.options_answer').innerHTML; 
}