// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// My function

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns genera un numero compreso tra min e max
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


// Array con oggetti Squadre
const leagueTop = [
    {
        club: "Juventus",
        punti: 0,
        falli_subiti: 0
    },

    {
        club: "Inter",
        punti: 0,
        falli_subiti: 0
    },

    {
        club: "Napoli",
        punti: 0,
        falli_subiti: 0
    }
]

leagueTop[0].punti = getRndInteger(1, 50)
leagueTop[1].punti = getRndInteger(1, 50)
leagueTop[2].punti = getRndInteger(1, 50)

leagueTop[0].falli_subiti = getRndInteger(1, 70)
leagueTop[1].falli_subiti = getRndInteger(1, 70)
leagueTop[2].falli_subiti = getRndInteger(1, 70)

console.log(leagueTop)



const teamFouls = []

for(let i = 0; i < leagueTop.length; i++) {
    const team = leagueTop[i];
    teamFouls.push({
        club: team.club,
        falli_subiti: team.falli_subiti
    })
}

console.log(teamFouls)