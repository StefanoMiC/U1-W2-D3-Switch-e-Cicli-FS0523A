// CICLO FOR

// è quello più utilizzato
// Permette di eseguire un blocco di codice per un numero PREDETERMINATO di volte

// SINTASSI:
// for (definizione di un contatore; condizione da controllare; incremento del contatore) {

//      dentro al suo contesto avremo le istruzioni da eseguire

// }

// 1) creazione del contatore
// 2) il contatore viene valutato per una data condizione
// 3) se la condizione è valida entriamo nel contesto del for loop
// 4) si esegue il codice nel contesto
// 5) al termine dell'esecuzione il for loop chiama i++
// 6) parte una nuova valutazione della condizione alla luce del valore di i cambiato
// 7) se il valore è valido ricomincia un altro ciclo
// 8) vedi dal punto 4.. ecc

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// anche il for loop è una struttura BLOCCANTE
// il for loop va molto d'accordo con gli array

const arrayOfStudents = ["Alan", "Francesco", "Gianni", "Caterina", "Chiara", "Abderrahmane", "Alessandro"];

// "Alan" ==> 0
// "Francesco" ==> 1
// "Gianni" ==> 2

// console.log(arrayOfStudents[0]);
// console.log(arrayOfStudents[1]);
// console.log(arrayOfStudents[2]);
// console.log(arrayOfStudents[3]);
// console.log(arrayOfStudents[4]);
// console.log(arrayOfStudents[5]);
// console.log(arrayOfStudents[6]);

// anche se il nostro array cambia...
arrayOfStudents.pop();
arrayOfStudents.pop();

// con arrayOfStudents.length riusciamo a conoscere il numero AGGIORNATO (per la riga 48) di elementi contenuti nell'array
// e di conseguenza il for loop farà un numero esatto di iterazioni che sarà uguale al numero di elementi che l'array contiene in questo momento

for (let i = 0; i < arrayOfStudents.length; i++) {
  const element = arrayOfStudents[i];
  console.log(element + "!");
}

const arrOfNum = [10, 0, 200, 50, 32, 48];

let total = 0;

for (let i = 0; i < arrOfNum.length; i++) {
  total += arrOfNum[i];
}
console.log("TOTAL", total);

const myString = "EPICODE is awesome!";

let newString = "";

for (let i = 0; i < myString.length; i++) {
  const char = myString[i];
  //   console.log("Carattere: ", char);

  if (char === " ") {
    continue; // saltare da questo punto tutto il resto del codice, e andare direttamente ad incrementare i (i++)
  }
  if (char === "!") {
    break; // questo break, quando avviene termina l'intero for loop, l'ultimo ciclo non verrà eseguito.
  }
  newString += char.toLowerCase(); // manipoliamo le lettere per renderle tutte minuscole PRIMA che vengano inserite in newString
}

console.log("newString: ", newString);
