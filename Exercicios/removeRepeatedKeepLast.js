function removeRepeatedKeepLast(array) {

    let n = array.length
    let newArr = []
    let mp = new Map();
     
    // Store all the elements in the map
    // with their occurrence
    for(let i = 0; i < n; i++)
    {
        if (mp.has(array[i]))
            mp.set(array[i], 1 + mp.get(array[i]));
        else
            mp.set(array[i], 1);
    }
 
    // Traverse the map and print all the
    // elements with occurrence 1
    for(let [key, value] of mp.entries())
    {
        if (value == 1)
            newArr.push(key);
    }

    return newArr
}

///////////////////////////////////////////////////////

function removeRepeatedKeepLast2(array) {

    let counts = array.reduce(function (elem, b) {
        elem[b] = elem[b] ? elem[b] + 1 : 1;
        return elem;
    }, {});

    console.log(counts)

    return Object.keys(counts).filter(function (key) {
        return (counts[key] === 1);
    });
}


console.log(removeRepeatedKeepLast([1, 2, 1, 1, 2, 4, 2, 1]))
console.log(removeRepeatedKeepLast2([1, 2, 1, 1, 2, 4, 2, 1]))

///////////////////////////////////////////////////////////////////

const defaultCompare = (e1, e2) => e1 === e2
const defaultExtractKey = e => e

function keepFirstRepeatedOnly(arr, compare = defaultCompare, extractKey = defaultExtractKey) {
    const countMap = countOccurrences (arr, extractKey)
    return [...countMap.entries()].reduce((acc, [key, count]) => count > 1 ? acc.concat(arr.find(e => extractKey(e) === key)) : acc, [])

}

function countOccurrences(arr, extractKey) {
    return arr.reduce((acc, elem) => {
        const key = extractKey(elem)
        return new Map ([...acc, [key, (acc.get(key) ?? 0) + 1]
        ])
    }, new Map())
}