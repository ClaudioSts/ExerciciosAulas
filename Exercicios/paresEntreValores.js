function contaParesEntreDoisValores(valor1, valor2) {
    // escreve aqui a função
    let count = 0
    let valorMaior = 0
    let valorMenor = 0

    if (valor1 == valor2) {
        return "Por favor introduza dois valores diferentes."
    }

    if (valor1 > valor2) {
        valorMaior = valor1
        valorMenor = valor2
    } else {
        valorMaior = valor2
        valorMenor = valor1
    }

    for (i = valorMenor; i <= valorMaior; i++) {
        if (i % 2 == 0)
            count++
    }
    return count
}