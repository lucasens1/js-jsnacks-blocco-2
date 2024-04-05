/**
 * Funzione che popola l'array con un ciclo chiedendo all'utente, di inserire i dati
 * @param {array} arr
 * @returns {array}
 */
function populateArray(arr){
    let n = prompt("quanti elementi vuoi inserire nell'array?");

    for(let i = 0; i < n; i++){
        let userData = prompt("Inserisci un dato :");
        arr[i] = userData;
    }
    return arr;
}

/**
 * Funzione che prende in entrata l'array inserito dall'utente e ne conta gli elementi
 * @param {*} arr
 * @returns {number} c
 */
function contElem(arr){
    let c = 0;
    const len = arr.length;
    for(let i=0 ; i < len; i++){
        c = i + 1;
    }
    return c;
}
