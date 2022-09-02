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