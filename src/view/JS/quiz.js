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
}