function valorMinimoMaximo(array){
    // escreve aqui a função

    return array.reduce((accumulator, valor) => {
        accumulator[0] = ( accumulator[0] === undefined || valor < accumulator[0] ) ? valor : accumulator[0]
        accumulator[1] = ( accumulator[1] === undefined || valor > accumulator[1] ) ? valor : accumulator[1]
        return accumulator        
    }, [])
}

function maxValue(array) {
    const max= array.reduce((acc, val) => {
        return acc > val ? acc : val;
    });
    return max;
}


console.log(valorMinimoMaximo([1,2,3,4,5]))
console.log(maxValue([1,2,3,4,5]))