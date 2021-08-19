const url = "https://opentdb.com/api.php?"; 

const getData = async (amount, category, type, difficulty) =>{
    try {
        const quiz = await getQuiz(amount); 
        return quiz;
    } catch (error) {
        console.log(error); 
    }
}

function getQuiz(amount, category, type, difficulty){
    const resp = fetch(url + 'amount=' + amount);
    return new Promise((resolve, reject) => {
        if(resp){
            return resolve(resp.json)
        } else {
            reject(`Sorry no quiz is available`); 
        }
    })
}