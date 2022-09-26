function somaQuadradosDoArray (array) {
let newArr = []

for (let i = 0; i < array.length; i++) {
    newArr.push(quadrados(array[i]))
 
} 
return newArr.reduce((a,b) => a + b, 0)
}

function quadrados(n) {
    return n ** 2
}    


//////////////////////////////////////////////////
function somaDosQuadradosDoArray(array) {
    // escreve aqui a função

    let sum = 0

    i = array.length

    while (i--) {
        sum += Math.pow(array[i], 2)
    }
    return sum 
}
