//2. scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

const arrayEx = ["ferrari", "ford", "opel", "hyundai"];
const index = prompt("dammi un numero,e ti dico se è presente nell'array e in quale posizione si trova : ");

const res = trovaIndice(arrayEx, index);
console.log(res)