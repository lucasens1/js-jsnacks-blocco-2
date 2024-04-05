//utente inserisce n
const n = parseInt(prompt("Inserisci il numero di array che vuoi creare :"));

for(let a = 0; a < n; a++){
    let newArray = createArray();
    console.log(newArray);
    console.log(stampArray(newArray));
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

function stampArray(arrayToPrint){

    const resultEl = document.getElementById('listar');

    resultEl.innerHTML += `<li> ${arrayToPrint} </li>` ;
}