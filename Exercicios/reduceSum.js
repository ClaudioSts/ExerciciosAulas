function somatorio(array){
    // escreve aqui a função
    
    let soma = array.reduce((a, b) => a + b);

    return soma
}

console.log(somatorio([1,2,3,4,5]))