function arraySemN(n, array){
    // escreve aqui a função

    let newArr = []

    array.filter(elem => {
        if (elem !== n) {
            newArr.push(elem)
        }
    })

    return newArr
}