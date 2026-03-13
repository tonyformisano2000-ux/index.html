/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  let result = l1 * l2;
  return result;
};
area(3, 4);
const totale = result;
console.log(
  " i lati del rettangolo sono ",
  l1,
  " e ",
  l2,
  " la sua area misura ",
  totale,
);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (l1, l2) {
  let result = l1 + l2;
  if (l1 != l2) {
    return result;
  } else {
    let result = result * 3;
    return result;
  }
};

crazySum(3, 3);
console.log(result);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num) {
  let cd = Math.abs(num - 19);
  if (cd < 19) {
    return cd;
  } else {
    return cd * 3;
  }
};
console.log(crazyDiff(3));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (num) {
  if (20 <= num <= 100) {
    return true;
  } else if (num === 400) {
    return false;
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa === EPICODE) {
    let result = stringa;
    return stringa;
  } else {
    let result = stringa + "EPICODE!";
    return result;
  }
};
epify("Epico! No, si dice ");
console.log(result);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  switch (num) {
    case num % 3 === 0:
      console.log(num, "è divisibile per 3 o 7");
      break;
    case num % 7 === 0:
      console.log(num, "è divisibile per 3 o 7");
      break;
  }
};
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (capovolgi) {
  console.log(capovolgi.reverseString());
};
reverseString("!HHSAAC A OREZ AD OTITRAPAPAPAPAP");
/* SCRIVI QUI LA TUA RISPOSTA */

upperFirst("II Lonfo non vaterca né gluisce e molto raramente barigatta");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (filastrocca) {
  console.log(filastrocca, slice(1, filastrocca.length - 1));
};
cutString("II Lonfo non vaterca né gluisce e molto raramente barigatta");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * 10));
  }
  console.log(arr);
};
giveMeRandom(5);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (filastrocca) {
  console.log(subString(indexStart(upperCase)));
};
