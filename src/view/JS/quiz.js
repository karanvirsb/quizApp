class Quiz {
    #quizAnswer; 
    constructor(arr){
        this.quizArr = arr || JSON.parse(localStorage.getItem('modified_quiz_json')) || [];
        this.quizLength = this.quizArr.length || 0; 
        this.newQuizJson =  JSON.parse(localStorage.getItem('modified_quiz_json')) || []; 
    }

    getAnswer(quizArr){
        this.#quizAnswer = quizArr.correct_answer; 
    }

    getCurrentAnswer(){
        return this.#quizAnswer; 
    }

    question(quizArr){
        return quizArr.question;
    }

    nthQuizResult(index){
        if(index < this.quizLength){
            return this.quizArr[index];
        }
        return; 
    }

    newNthQuizResult(index){
        if(index < this.quizLength){
            return this.newQuizJson[index];
        }
        return;
    }

    options(quizArr){
        const option1 = [quizArr.correct_answer]; 
        const options = quizArr.incorrect_answers; 
        return (options.concat(option1)); 
    }

    newJson(){
        let newJson = []; 
        let templateJson = '{"question":"","options":"", "picked":"", "done":""}';
        for(let i = 0; i < this.quizLength; i++){
            let tempArr = JSON.parse(templateJson);
            const tempQuiz = this.nthQuizResult(i);
            tempArr.question = this.question(tempQuiz);
            tempArr.options = this.options(tempQuiz);
            tempArr.picked = 0; 
            tempArr.done = false; 
            newJson.push(tempArr); 
        }
        localStorage.setItem('storing_done', 'false');  
        this.newQuizJson = newJson;
        return newJson;
    }

    addPickedAnswer(index, userAnswer){
        const localJson = JSON.parse(localStorage.getItem('modified_quiz_json')) || []; 
        const usersChoice = userAnswer(); 
        localJson[index].picked = usersChoice;
        localJson[index].done = true; 
        localStorage.setItem('modified_quiz_json', JSON.stringify(localJson))
    }
}