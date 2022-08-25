
function contaPares(array) {

    if (array.length === 0){
        return 0
    }
    if (array[0] % 2 === 0) {
        return 1 + contaPares(array.slice(1))
    } else {
        return 0 + contaPares(array.slice(1))
    }
}

console.log(contaPares([1,2,3,4,5,6])) // 3

////////////////////////////////////////////////////////

function inverteArray(array) {

    if (array.length === 1) {
        return array 
    } else {
        return inverteArray(array.slice(1)).concat(array[0])

    return array;
    }
    
}

console.log(inverteArray([1,3,4,2])) // [2,4,3,1]

///////////////////////////////////////////////////////

function soma(array) {
    if (array.length == 0){
        return 0
    }else if (array.length >= 1) {
        return array[0] + soma(array.slice(1))

    }


}

console.log(soma([2,3,8,1,1])) // 15


///////////////////////////////////////////////////////

function paresDoArray(array){
    // escreve aqui a função

    let arr = []
    let a = 0

    for (let i=0; i < array.length; i++){
        if(array[i] % 2 == 0){
            a = array[i]
            arr.push(a)
        }
    }
    return arr
}

console.log(paresDoArray([1,2,3,4]))
