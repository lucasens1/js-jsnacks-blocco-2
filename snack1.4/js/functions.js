/**
 * Funzione che tramite un ciclo for, dato le grandezze ben definite scala e copia gli elementi dell'array in entrata fino alla penultima posizione
 * @param {Array} arr
 * @returns {Array} arrRet
 */
function rimuoviDallaCoda(arr){
    const arrRet = [];

    for(let i = 0; i < arr.length - 1; i++){
        curItem = arr[i];
        arrRet[i] = curItem;
    }
    return arrRet;
}