function cubosDoArray(array) {
    // escreve aqui a função
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        newArr.push(cubico(array[i]))
    }
    return newArr
}

function cubico(n) {
    if (n === 0) {
        return 1
    }
    return n * n * n
}