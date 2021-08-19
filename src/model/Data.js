const url = "https://opentdb.com/api.php?"; 

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