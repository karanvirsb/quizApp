const correct = 0; 

function isItCorrect(answer, userAnswer){
    if(answer === userAnswer){
        correct++; 
    }
}

function questions_correct(){
    return correct; 
}