function somaDiagonalPrincipal(matrizquadrada) {
    // escreve aqui a função
    let sum = 0

    for (let i = 0; i < matrizquadrada.length; i++) {
       for (let j = 0; j < matrizquadrada.length; j++) {
           if (i == j) {
               sum += matrizquadrada[i][j]
           }
       } 
    }
    return sum
}

//////////////////////////////////////////////////

function somaDiagonalSecundaria(matrizquadrada) {
    // escreve aqui a função

    const length = matrizquadrada.length
    let sum = 0

    for (let i = 0; i < length; i++) {
        // primaryDiagonalSum += matrix[i][i];
        sum += matrizquadrada[i][length - i - 1]
    }

    return sum
}

console.log(somaDiagonalSecundaria([[1,2,3],[1,2,3],[1,2,3]]))

//////////////////////////////////////////////////

function diferencaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função
    let dia1 = matrizquadrada[0][0] + matrizquadrada[1][1] + matrizquadrada [2][2] + matrizquadrada[3][3]
    let dia2 = matrizquadrada[0][3] + matrizquadrada[1][2] + matrizquadrada [2][1] + matrizquadrada[3][0]

    return Math.abs(dia1-dia2)
}