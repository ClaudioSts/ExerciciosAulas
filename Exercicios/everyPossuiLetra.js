function todasPossuemLetra(array, letra){
    // escreve aqui a função

   return array.every((elemento) => elemento.includes(letra))
}

console.log(todasPossuemLetra(["uva","manga","banana"],"n"))