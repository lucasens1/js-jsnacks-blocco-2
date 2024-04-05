function stampa(arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[arr.length - 1]){
        str += arr[i] +",";
    }else {
        str += arr[i];
    } 
    } return str;
}