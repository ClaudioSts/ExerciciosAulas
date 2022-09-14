function contarNsNoArray(n, array) {
    // escreve aqui a função

    let count = 0

    array.filter(elem => {
        if (elem == n) {
            count++
        }
    })
    return count
}

///////////////////////////////////////////////////////////////////

function contaInteirosDoArray(array) {
    // escreve aqui a função

    let count = 0
    array.filter(elem => {
        if (elem == Math.floor(elem)) {
            count++
        }
    })
    return count
}