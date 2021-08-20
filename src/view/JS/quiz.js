class quiz {
    constructor(arr, length){
        this.quizArr = arr;
        this.counter = 0; 
        this.quizLength = length; 
    }

    get getAnswer(quizArr){
        return quizArr.correct_answer; 
    }

    get question(quizArr){
        return quizArr.question;
    }

    get nthQuizResult(){
        if(this.counter < this.quizLength){
            nextQuiz = this.quizArr[this.counter];
            this.counter++; 
            return nextQuiz;  
        }
        return; 
    }

    get options(quizArr){
        option1 = quizArr.correct_answer; 
        options = quizArr.incorrect_answers; 
        return option1.concat(options); 
    }
}