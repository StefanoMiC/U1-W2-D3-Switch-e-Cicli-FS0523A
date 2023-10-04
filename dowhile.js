// il ciclo DO/WHILE lo usiamo quando vogliamo che ALMENO UNA iterazione venga fatta, a prescindere dalla condizione

let count = 20;
console.log("COUNT PRIMA", count); // 20

// con il ciclo while non sarei MAI entrato nel blocco

// while (count < 10) {
//   console.log("dentro il WHILE");
//   count++;
// }

// con il DO/WHILE ho la certezza di entrarci ALMENO UNA volta
do {
  console.log("dentro il DO/WHILE");
  count++;
} while (count < 10);
console.log("COUNT DOPO", count); // 21

// esempio di ipotetica bilancia

const maxWeight = Math.floor(Math.random() * 100);
let weight = 0;

do {
  let userInput = prompt("quanti kg stai aggiungendo?"); // raccolgo l'input dell'utente
  weight += parseInt(userInput); // lo trasformo in un numero e lo assegno come nuovo valore di weight

  console.log("la bilancia segna: ", weight); // leggo il peso totale attuale
} while (weight < maxWeight);

console.log("il peso massimo era: ", maxWeight); // solo alla fine delle operazioni del do..while otterremo
// questo console log e scopriremo quanto era il valore maxWeight calcolato in maniera casuale ad ogni avvio del programma
