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