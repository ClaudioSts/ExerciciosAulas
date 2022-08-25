function arrayDeNAZero(n){
    // escreve aqui a função

    if (n < 1) {
        return "Por favor insira um número superior a 0."
    }

    let arr = [];
    for (let i = n; i >= 0; i--) {

        arr.push((i))
    }
    return arr
}console.log(arrayDeNAZero(13))