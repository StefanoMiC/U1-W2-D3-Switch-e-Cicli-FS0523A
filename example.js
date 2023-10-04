const animalArr = [
  {
    name: "Goldy",
    species: "goldfish",
    age: 1,
    colors: ["orange", "white", "striped", "black"]
  },
  {
    name: "Fuffy",
    species: "dog",
    age: 10,
    colors: ["brown", "white", "black"]
  },
  {
    name: "Furia",
    species: "horse",
    age: 3,
    colors: ["brown", "black"]
  },
  {
    name: "Bam Bam",
    species: "rabbit",
    age: 0.5,
    colors: ["white", "red"]
  }
];

// TRASFROMAZIONE 1
// trasformiamo l'array originale in un altro dato: un array contenente stringhe con le sole specie degli animali

// l'array parte inizialmente vuoto
const arrOfAnimalsSpecies = [];

// ci sarà un ciclo che ci darà accesso ai singoli elementi dell'array animalArr
for (let i = 0; i < animalArr.length; i++) {
  // ottenuto l'accesso, avremo a disposizione l'elemento interno, cioè un oggetto, in questo caso chiamato singleAnimal
  const singleAnimal = animalArr[i];
  // avendo a disposizione l'oggetto di ogni animale, uno dopo l'altro, possiamo andare a inserirlo nell'array creato a linea 32

  //   console.log(animalArr[i]);
  console.log(singleAnimal.species);
  // facendo .species stiamo entrando nell'oggetto, e avremo a disposizione quindi una stringa, non staremo più operando con un oggetto

  // con questo push stiamo inserendo una nuova stringa
  arrOfAnimalsSpecies.push(singleAnimal.species);
}

// fuori dal loop ci troviamo "a cose fatte" un arrOfAnimalsSpecies già completo di tutti gli elementi inseriti col push
// leggere la variabile dopo l'esecuzione delle operazioni del for loop è fondamentale per capirne il risultato finale
// se volessimo invece vedere il dato comporsi (e non solo il dato finale) dovremmo console loggare dentro il for loop
console.log(arrOfAnimalsSpecies);
console.log(arrOfAnimalsSpecies.join(" - "));

// TRASFROMAZIONE 2
// nuovo array nameAndAge con oggetti degli stessi animali, ma semplificati e con meno proprietà

const nameAndAge = []; // creo array vuoto in attesa di nuovi elementi

for (let i = 0; i < animalArr.length; i++) {
  // creo nuovo oggetto dentro variabile newObj
  const newObj = {
    designatedName: animalArr[i].name, // i valori di questo nuovo oggetto vengono presi dall'oggetto animale .name
    age: animalArr[i].age // i valori di questo nuovo oggetto vengono presi dall'oggetto animale .age
  };

  // l'oggetto finisce alla fine di nameAndAge
  nameAndAge.push(newObj);
}

// nameAndAge a questo punto sarà completo di tutti gli oggetti inseriti
console.log(nameAndAge);

// TRASFROMAZIONE 3 - manipoliamo gli oggetti originali (procedura distruttiva, che non preserva quindi le caratteristiche originali degli elementi)
for (let i = 0; i < animalArr.length; i++) {
  // 1) applichiamo una nuova proprietà agli oggetti dentro animalArr

  //   if (animalArr[i].name === "Furia") {
  //     animalArr[i].wild = true; // furia diventerà un animale selvatico
  //   } else {
  //     animalArr[i].wild = false;  // tutti gli altri non saranno selvatici
  //   }

  // 2) si può scrivere anche con un ternario:

  // animalArr[i].wild = animalArr[i].name === "Furia" ? true : false

  // 3) o più semplicemente ancora come:

  animalArr[i].wild = animalArr[i].name === "Furia"; // dato che l'operatore di uguaglianza restituisce già true / false,
  // logicamente se avessimo dovuto usare valori diversi da booleani, il ternario e l'if erano le uniche altre strade

  animalArr[i].colors.pop(); // elimina l'ultima proprietà dell'array colors PER OGNI oggetto / animale
}

console.log(animalArr);
