function combineSortedArrays (array1, array2) {
    let i = 0

    while (array2.length > 0 && array1[i]) {
        if (array1[i] > array2[0]) {
            array1.splice(i, 0, array2.shift())
        }
        i++
    }
    return [...array1, ...array2]
}

///////////////////////////////////

function combineArrays (array1, array2) {

    let newArr = []

    for (let i = 0; i < array1.length || i < array2.length; i++) {
        if (i < array1.length) {
            newArr.push(array1[i])
        }
        if(i < array2.length) {
            newArr.push(array2[i])
        }
    }
    return newArr
}

console.log(combineArrays["a", "b","c"], [1,2,3])
console.log(combineArrays["a", "b","c"], [1])
console.log(combineArrays["a", "b","c"], [])