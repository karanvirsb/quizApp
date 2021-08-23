let correct = 0; 

function isItCorrect(answer, userAnswer){
    const userAns = userAnswer(); 
    switch(userAns){
        case '': 
            return -1; 
        default:
        if(answer === userAns){
            correct++; 
        }
    }
}

function questions_correct(){
    const temp = correct; 
    correct = 0; 
    return temp; 
}

function getUserAnswer(){
    const radio_btns = document.querySelectorAll('.radio__btn');
    let sibling = ''; 
    radio_btns.forEach(elem => {
        if(elem.checked){
            sibling = elem.nextElementSibling; 
        }
    });

    if(sibling === ''){
        return ''; 
    } else{
        return sibling.querySelector('.options__answer').lastChild.textContent; 
    }
}