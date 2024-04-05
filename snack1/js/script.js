//utente inserisce n
const n = prompt("Inserisci il numero di array che vuoi creare :");

console.log(createArray(n));

function createArray(num) {
    const array = [];
    for(i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 100 - 1) + 1;
    }
    return array;
}