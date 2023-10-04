const myName = "Antonio";

let hoursOfIntenseCardio = 0;

// if (myName === "Mario") {
//   hoursOfIntenseCardio = 0.5;
// } else if (myName === "Antonio") {
//   hoursOfIntenseCardio = 1;
// } else if (myName === "Alessandro") {
//   hoursOfIntenseCardio = 2;
// } else if (myName === "Luca") {
//   hoursOfIntenseCardio = 3;
// } else if (myName === "Stefano") {
//   hoursOfIntenseCardio = 10;
// } else {
//   console.log("Torna a casa non ti vogliamo");
// }

// SWITCH CASE - cambiamo la sintassi per avere lo stesso effetto in maniera più organizzata in presenza di condizioni multiple

// switch (valore da valutare) {
//     case "valore1":
//     codice da eseguire;
//     break;
//     case "valore2":
//     codice da eseguire;
//     break;
//     case "valore3":
//     codice da eseguire;
//     break;
//     default: codice da eseguire
// }

switch (myName) {
  case "Mario":
    hoursOfIntenseCardio = 0.5;
    // console.log(myName + " oggi dovrai correre per " + "mezz'ora");
    break;
  case "Antonio":
    hoursOfIntenseCardio = 1;
    // console.log(myName + " oggi dovrai correre per " + "1 ora");
    break;
  case "Alessandro":
    hoursOfIntenseCardio = 2;
    // console.log(myName + " oggi dovrai correre per " + "2 ore");
    break;
  case "Luca":
    hoursOfIntenseCardio = 3;
    // console.log(myName + " oggi dovrai correre per " + "3 ore");
    break;
  case "Stefano":
    hoursOfIntenseCardio = 10;
    // console.log(myName + " oggi dovrai correre per " + "10 ore");
    break;

  default:
    console.log(myName + ", torna a casa non ti vogliamo!");
}

if (hoursOfIntenseCardio !== 0) {
  console.log(
    myName + " oggi dovrai correre per " + hoursOfIntenseCardio + (hoursOfIntenseCardio === 1 ? " ora" : " ore")
  );
}

const myFavouriteFruit = "Kiwi";

// essendo che apple non ha un break, eseguirà anche il codice nel case successivo, così come anche kiwi
switch (myFavouriteFruit) {
  case "Apple":
    console.log("Adoro le mele");
  case "Banana":
    console.log("Una al giorno mi fa bene");
    break;
  case "Ananas":
    console.log("Mi brucia la lingua se ne mangio troppa");
    break;
  case "Kiwi":
    console.log("Si può mangiare col cucchiaio");
  default:
    console.log("La frutta fa sempre bene");
}

// un metodo per usare lo switch anche non solo per uguaglianza stretta
// è quello di impostare il valore di controllo già a true, e creare delle comparazioni che qualora risultino in un true faranno eseguire il loro codice

switch (true) {
  case hoursOfIntenseCardio < 10:
    console.log("Ciao e bentornato");
    break;
  case hoursOfIntenseCardio === 10:
    console.log("Bentornato Stefano");
    break;

  default:
    console.log("Hai da lavorà");
}

// metodo da evitare, preferibile un ternario
const myBool = true;
switch (myBool) {
  case true:
    console.log("verificato");
    break;
  case false:
    console.log("non verificato");
    break;
}
