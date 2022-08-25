//////////////////EXERCICIO 1///////////////////////


function mapearArrays (array) {

    let size = array.map((elemento) => {
        return elemento.length
    })
    return size
}

console.log(mapearArrays(["aaa","a","aa"]))

//////////////////EXERCICIO 2///////////////////////

function filtraPares (array) {

    let pares = array.filter(a => a % 2 == 0)
        
    let quadrado = pares.map((elemento) => {
        return elemento ** 2;
    })
    console.log(quadrado)

    let soma = quadrado.reduce((a, b) => a + b)

    return soma
}
console.log(filtraPares([1,2,3,4,5,6]))

//////////////////EXERCICIO 3///////////////////////

function inverteStrings (array) {

    function stringInvertida(palavra){
        return palavra.split("").reverse().join("")
    }

    let inverteMap = array.map((elemento) => {
        return stringInvertida(elemento)
    })
    return inverteMap
    
}
console.log(inverteStrings(["abc","def","hij"]))

//////////////////EXERCICIO 4///////////////////////

function todosPares (array) {

    return array.every((elemento) => {
        return elemento % 2 == 0 })
}
console.log(todosPares([1,2,3,4]))
console.log(todosPares([6,2,2,4]))

//////////////////EXERCICIO 5///////////////////////

function peloMenosUmPares (array) {

    return array.filter((elemento) => {
        return elemento % 2 == 0 })
}
console.log(todosPares([1,7,3,5]))
console.log(todosPares([6,2,2,4]))

//////////////////EXERCICIO 6///////////////////////

function reduzArray (array) {

    let arrayReduzido = new Map ()

    for (let i of array) {
        arrayReduzido[i] = arrayReduzido[i] ? arrayReduzido[i] + 1 : 1
    }
    return arrayReduzido
}
console.log(reduzArray([1,2,3,4,1,2,3,5,6,7,1,1,2]))

//////////////////EXERCICIO 7///////////////////////

function pessoaArray (pessoaArr) {
    let newMap = pessoaArr.map((pessoaArr) => {
        return {...pessoaArr, age: Math.floor((new Date() - pessoaArr.birthday)/(3.1556926 * (10**10)))}
    })
    return newMap
}
console.log(pessoaArray([{name:"Claudio", birthday:new Date("2000-01-01")}]))
