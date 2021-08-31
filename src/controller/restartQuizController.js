export function backToDefault(arr){
    for(let i = 0; i < arr.length; i++){
        arr.picked =  0
        arr.done = false; 
        arr.was_it_correct = " ";  
    }
}