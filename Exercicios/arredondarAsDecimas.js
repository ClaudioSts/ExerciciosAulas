function arredondarAsDecimas(d){
    // escreve aqui a função


    return Math.round((d + Number.EPSILON) * 10) / 10
}

console.log(arredondarAsDecimas(29.75251396795086))
