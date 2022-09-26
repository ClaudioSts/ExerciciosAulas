function calculaPerimetroDoTrapezio (comprimentoMaior, comprimentoMenor, altura) {

    return (Math.sqrt(altura**2 + ((comprimentoMaior - comprimentoMenor)/2))) + (comprimentoMaior + comprimentoMenor)

}

function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função

    let lateral = Math.hypot(diagonalMaior / 2, diagonalMenor / 2)

    return lateral * 4

}
