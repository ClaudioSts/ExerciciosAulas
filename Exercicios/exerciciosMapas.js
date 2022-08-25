function contaOcurrencias (array) {

    let mapaDeOcurrencias = new Map ()

    for (let i of array) {
        mapaDeOcurrencias[i] = mapaDeOcurrencias[i] ? mapaDeOcurrencias[i] + 1 : 1
    }

    return mapaDeOcurrencias

}

console.log(contaOcurrencias(['a',1,3,1,4,5,1,'a', 'b', 'a']))

