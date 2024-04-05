function rimuoviDallaTesta(arr){
    let curItem = "";
    let j = 0;
    let arrDaRest = [];
    for(let i = 1; i < arr.length; i++){
        curItem = arr[i];
        arrDaRest[j] = curItem;
        j++;
    }
    return arrDaRest;
}