// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


// Array con oggetti
const bikesType = [
    {
        type: "Specialized",
        peso: 2000
    },

    {
        type: "Kona",
        peso: 2800
    },

    {
        type: "Scott",
        peso: 3200
    },

    {
        type: "Santa Cruz",
        peso: 1900
    }
]

let pesoMinore = bikesType[0];



for( let i = 1; i < bikesType.length; i++) {
    const objects = bikesType[i]; 
   
    if(objects.peso < pesoMinore.peso) {
        pesoMinore = objects

    }
}

console.log(pesoMinore)