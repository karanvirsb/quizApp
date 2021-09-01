const url = "https://opentdb.com/api.php?"; 

const getData = async (amount = '', category = '', type = "", difficulty = "") =>{
    // console.log(url + 'amount=' + amount + '&category=' + category + '&difficulty=' + difficulty +  '&type=' + type); 
    try {
        const resp = await fetch(url + 'amount=' + amount + '&category=' + category + '&difficulty=' + difficulty +  '&type=' + type); 
        if(!resp.ok){
            const msg = `There was an error \n Error: ${resp.status} ${resp.statusText}`; 
            throw new Error(msg); 
            return -1; 
        }
        const quizJson = await resp.json();
        if(quizJson.response_code !== 0){
            const msg = `Could not return results. The App doesn't have enough questions for the parameters given.`;
            alert(msg); 
            return -1;  
        }
        return quizJson; 
    } catch (error) {
        console.log(error); 
    }
}

// console.log(getData(10).then((data)=>{
//     console.log(data.results[3])
// }).catch((err) => console.log(err))); 