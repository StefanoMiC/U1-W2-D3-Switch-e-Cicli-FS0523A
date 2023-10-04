// CICLI
// un ciclo nello sviluppo software rappresenta una struttura in grado di RIPETERE l'esecuzione di un blocco di codice un numero definito o indefinito di volte

// CICLO WHILE
// è una struttura che ci permette di ripetere un codice un numero potenzialmente INDEFINITO DI VOLTE
// possiamo quindi ripetere l'esecuzione di un codice fin tanto che una condizione non si avvera

// con i cicli, ma con il while in particolare bisogna fare MOLTA ATTENZIONE a creare condizioni che ad un certo punto si trasformino in false
let count = 0;

while (count < 300) {
  count++; // count = count + 1 // count += 1
  // stiamo aumentando count di +1 alla fine di ogni ciclo

  // arriveremo al punto che count sarà 300 e quindi 300 < 300 => false, il ciclo si interrompe
}

// il while è un'operazione BLOCCANTE, significa che finché non finisce, l'esecuzione di tutto quello che segue aspetterà.

console.log("COUNT ESTERNO", count);

// altro esempio con un numero indefinito di cicli
let myRandomNum = 0;

while (myRandomNum < 100) {
  myRandomNum += Math.floor(Math.random() * 60); // estrae un numero casuale e lo arrotonda per difetto
  console.log("il numero attuale di random è: ", myRandomNum);
}
