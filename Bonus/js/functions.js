/**
 * Funzione che aggiunge in testa, restituendo semplicemente un array diverso che servendosi di un indicatore incremento dell'indice basilare mette immediatamente al primo posto l'elemento che passiamo
 * @date 4/5/2024 - 9:36:59 PM
 *
 * @param {*} arr
 * @param {*} el
 * @returns {{B, array}}
 */
function inserisciInTesta(arr, el){
    let B = [];
    B[0] = el;

    for(let i = 0; i < arr.length; i++){
        B[i+1] = arr[i];
    }
    return B;
}