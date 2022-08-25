/*function partesInteiras(array){
    // escreve aqui a função

    let inteiros = array => {
        let novoArr = []
        array.forEach((elemento, i) => {
            let numbString = String(elemento)
            novoArr[i] = parseInt(numbString)
        });
     return novoArr
    }
}
*/
function partesInteiras(array){
    // escreve aqui a função
    
    let transf = (i) => Math.floor(i)

    return array.map(transf)

/*  let newArray = []

    for (i = 0; i < array.length; i++) {
        let a = parseInt(array[i])
        newArray.push(a)
    }

    return newArray  */

}

console.log(partesInteiras([0,0.1,1.5,2.4,3.1,4.2]))

////////////////////////////////////////////////////////
function raizesCubicas(array){
    // escreve aqui a função

    let transf = (i) => Math.cbrt(i)

    return array.map(transf)

/* let newArray = []

    for (i = 0; i < array.length; i++) {
        let a = Math.cbrt(array[i])
        newArray.push(a)
    }

    return newArray */

}

console.log(raizesCubicas([1, 8, 27, 64]))