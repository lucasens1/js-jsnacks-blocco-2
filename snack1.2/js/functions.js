function trovaIndice(arr, a){
    let nope = -1;
    let flag = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === a){
            return i;
            flag = true;
        }
    }
    if ( flag === false ){
        return nope;
    }
}