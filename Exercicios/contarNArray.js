function contarNsNoArray(n, array){
    // escreve aqui a função

    let count = 0

    array.filter(elem => {
        if (elem == n){
            count ++
        }
    })
    return count
}