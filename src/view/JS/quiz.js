class Quiz {
    constructor(arr){
        this.quizArr = arr;
        this.counter = 0; 
        this.quizLength = this.quizArr.length || 0; 
    }

    getAnswer(quizArr){
        return quizArr.correct_answer; 
    }

    question(quizArr){
        return quizArr.question;
    }

    get nthQuizResult(){
        if(this.counter < this.quizLength){
            const nextQuiz = this.quizArr[this.counter];
            this.counter++; 
            return nextQuiz;  
        }
        return; 
    }

    options(quizArr){
        const option1 = [quizArr.correct_answer]; 
        const options = [quizArr.incorrect_answers]; 
        return option1.concat(options); 
    }
}