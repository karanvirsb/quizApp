class Quiz {
    constructor(arr){
        this.quizArr = arr || [];
        this.quizLength = this.quizArr.length || 0; 
    }

    getAnswer(quizArr){
        this.quizAnswer = quizArr.correct_answer; 
        return this.quizAnswer; 
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

    options(quizArr){
        const option1 = [quizArr.correct_answer]; 
        const options = quizArr.incorrect_answers; 
        return (options.concat(option1)); 
    }

    get newJson(){
        let newJson; 
        let templateJson = '{"question":,"options":, "picked":, "done":,}';
        for(let i = 0; i < this.quizLegnth; i++){
            let tempArr = JSON.parse(templateJson);
            console.log(tempArr); 
            const tempQuiz = this.nthQuizResult(i);
            tempArr.question = this.question(tempQuiz);
            tempArr.options = this.options(tempQuiz);
            tempArr.picked = 0; 
            tempArr.done = false; 
            newJson.push(tempArr); 
        }
        return newJson;
    }
}