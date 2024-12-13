// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

/**
 * 
 * @param {array} array 
 * @param {number} a 
 * @param {number} b 
 * @returns array.slice(a, b)
 */

function arrayIndice  (array, a, b) {
    
    const arrayElem = []

    for(let i = a; i <=b; i++) {
        arrayElem.push(array[i])
    }

    return arrayElem
}




const arrayNumb = [20, 30, 40, 50, 60, 70];


let isArray = arrayIndice(arrayNumb, 2, 4)
console.log(isArray)