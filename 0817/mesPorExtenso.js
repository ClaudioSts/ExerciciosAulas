/*function mesPorExtenso(data){
    // escreve aqui a função

    const month = data.toLocaleString('pt-PT', {month: 'long'})

    return month
} 

console.log(mesPorExtenso(new Date(2022,03,04)))
*/

function dataPorExtenso(data){
    const weekday = data.toLocaleString('pt-PT', {weekday: 'long'})
    const day = data.toLocaleString('pt-PT', {day: 'numeric'})
    const month = data.toLocaleString('pt-PT', {month: 'long'})
    const year = data.toLocaleString('pt-PT', {year: 'numeric'})

    return weekday + ", " + day + " de " + month + " de " + year
}
console.log(dataPorExtenso(new Date(2022,03,04)))