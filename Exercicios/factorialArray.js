function fatoriaisDoArray(array){
    // escreve aqui a função

    let newArr = []

    for (let i = 0; i < array.length; i++) {
        newArr.push(factorial(array[i]))
    }
    return newArr
}

function factorial (n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}


