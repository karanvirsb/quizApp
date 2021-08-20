const url = "https://opentdb.com/api.php?"; 

const getData = async (amount = '', category = '', type = "", difficulty = "") =>{
    try {
        // console.log(url + 'amount=' + amount + '&category=' + category + '&difficulty=' + difficulty +  '&type=' + type);
        const resp = await fetch(url + 'amount=' + amount + '&category=' + category + '&difficulty=' + difficulty +  '&type=' + type); 
        const quizJson = await resp.json();
        return quizJson; 
    } catch (error) {
        console.log(error); 
    }
}

// console.log(getData(10).then((data)=>{
//     console.log(data.results[3])
// }).catch((err) => console.log(err))); 