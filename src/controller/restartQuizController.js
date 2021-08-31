function backToDefault(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].picked =  0
        arr[i].done = false; 
        arr[i].was_it_correct = " ";  
    }

    return arr; 
}