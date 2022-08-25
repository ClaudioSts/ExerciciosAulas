/*
function minMax (array, n) {

    //not working!!

    let arrMin = array.sort((a, b) => b > a)

    let arrMax = array.sort((a, b) => a > b)

    let sumMin = 0
    let sumMax = 0

 //   sumMax = arrayMax.reduceRight(function(a,b) { return a + b}, - (array.length - n))

 // minimo
    arrMin.length = n;
    sumMin = arrMin.reduce(function(a, b) { 
        return a + b}, 0)
        
        arrMax.length = n;
   sumMax = arrMin.reduce(function(a, b) {
    return a + b}, 0)

    return [sumMin, sumMax]

}

// console.log(minMax([3,5,1,4,2], 4))
console.log(minMax([3,5,1,4,2], 2))

*/

function minMax (array, n) {

    //not working!!

    let arrMin = [...array].sort((a, b) => a - b)

    let arrMax = [...array].sort((a, b) => b - a)

    console.log([arrMin, arrMax])

    let sumMin = 0
    let sumMax = 0

 //   sumMax = arrayMax.reduceRight(function(a,b) { return a + b}, - (array.length - n))

 // minimo
    arrMin.length = n;
    sumMin = arrMin.reduce(function(a, b) { 
        return a + b}, 0)
        
        arrMax.length = n;
   sumMax = arrMax.reduce(function(a, b) {
    return a + b}, 0)

    return 'Resultado ' + '[' + sumMin + ', ' + sumMax + ']'

}

console.log(minMax([3,5,1,4,2], 4))
console.log(minMax([3,5,1,4,2], 2))
