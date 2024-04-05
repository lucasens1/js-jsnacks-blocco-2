//utente inserisce n
const n = parseInt(prompt("Inserisci il numero di array che vuoi creare :"));


for(let a = 0; a < n; a++){
    console.log(createArray());
}

/**
 * Description : funzione che crea array 
 * @returns {array[]};
 */
function createArray() {
    //creo array
    let array = [];

    //popolo array con dieci numeri casuali
    for(i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 100 - 1) + 1;
    }
    return array;
}