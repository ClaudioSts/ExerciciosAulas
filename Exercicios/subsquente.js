function validaSubsequente(array, subarray) {
    // Escreve aqui a função
    let index = 0

    for (let i = 0; i < array.length; i++) {
        if(subarray[index] == array[i]){
            index++
        }
    }

    return subarray.length === index
}


////////////////////////////////////
function validaSubsequente(array, subarray) {
    // Escreve aqui a função
   return subarray.every(element => array.includes(element))
   
}