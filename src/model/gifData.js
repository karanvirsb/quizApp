const {GIF_API_KEY} = process.env; 
const limit = 5; 
const rating = 'g'
let q = ''; 
const gif_url =  `api.giphy.com/v1/gifs/search?api_key=${GIF_API_KEY}&q=${q}&limit=${limit}&rating=${rating}`;

const getGif = async (gifInfo) => {
    q = gifInfo;
    try{
        const gifs = await fetch(gif_url); 
        const gifsJson = await gifs.json();
        return gifsJson;  
    } catch(err){
        console.log(err); 
    }
    
}
