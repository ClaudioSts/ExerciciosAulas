const defaultCompare = (e1, e2) => e1 === e2
const defaultExtractKey = e => e

function removeRepeatedKeepNone(arr, compare = defaultCompare, extractKey = defaultExtractKey) { 
    const countMap = countOccurrences(arr, extractKey)
    return [...countMap.entries()].reduce(
        (acc, [key, count]) =>
        count == 1 ? acc.concat(arr.find((e) => extractKey(e) === key)) : acc, []
    )
}

function countOccurrences(arr, extractKey) {
    return arr.reduce((acc, elem) => {
        const key = extractKey(elem)
        return new Map ([...acc, [key, (acc.get(key) ?? 0) + 1]
        ])
    }, new Map())
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


console.log(removeRepeatedKeepNone([1, 2, 1, 1, 2, 4, 2, 1]))
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


////////////////////////////////////////////////////////////////////////

const defaultCompare = (e1, e2) => e1 === e2
const defaultExtractKey = e => e


function removeRepeatedKeepFirst(arr, compare = defaultCompare, extractKey = defaultExtractKey) {
    return arr
        .reduce((noDuplicatesArray, element) => {
            if (!noDuplicatesArray.some(e => compare(e, element))) {
                return noDuplicatesArray.concat(element)
            }
            return noDuplicatesArray
        }, [])
}

////////////////////////////////////////////////////////////////////////

