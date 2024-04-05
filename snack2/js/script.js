const userW1 = prompt("inserisci una parola : ");
const userW2 = prompt("inserisci un'altra parola : ");

const result = whoseLonger(userW1, userW2);

if(result === 'equal'){
    console.log(`Queste due parole sono lunghe uguali :` + userW1, userW2);
} else if(result === 'first'){
    console.log(`La prima parola : ` + userW1 + ` è più lunga`);
} else{
    console.log(`La seconda parola : ` + userW2 + ` è più lunga`);
}