/*
function mapaDeOcorrencias(array){
    // escreve aqui a função

    let reducedMap = new Map ()

    reducedMap = array.reduce((occurrences, value) => {
        occurrences[value] = (occurrences[value] || 0) + 1;
        return occurrences;
    }, {});

    let result = Object.keys(reducedMap).map((value) => {
        return { key: value, value: reducedMap[value] };
    });

    return result
}

console.log (mapaDeOcorrencias([1,2,1,1,3]))

////////////////////////////////////////////////////

function mapaDeOcorrencias(array){
    // escreve aqui a função

    let mapaContagens = array.reduce(function (count, currentValue
    ) {
        count[currentValue] = (count[currentValue] || 0) + 1;
        return count;
        
    },
    {});

    return mapaContagens
}

console.log (mapaDeOcorrencias([1,2,1,1,3]))

////////////////////////////////////////////////////

function mapaDeOcorrencias(array){
    // escreve aqui a função

    let mapaContagens = array.reduce(function (count, currentValue
    ) {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    return mapaContagens
}

console.log (mapaDeOcorrencias([1,2,1,1,3]))

////////////////////////////////////////////////////

function mapaDeOcorrencias(array){
    // escreve aqui a função

    let mapaContagens = array.reduce(function (count, currentValue) {

        count.has(currentValue) ? count.set(currentValue, currentValue + 1) : count.set(currentValue)
     
      //  count[currentValue] = (count[currentValue] || 0) + 1;
      //  return count
    }, new Map());

    return mapaContagens
}


////////////////////////////////////////////////////
function mapaDeOcorrencias (array) {
 
array.reduce((count, currentValue) => {
    return (
        count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
        count);
    },)
        
}
        
console.log(mapaDeOcorrencias(array[1,2,1,1,3]))
*/
function mapear(array) {

const newMap = array.reduce((map, itemValue) => {
    
    if (!map.has(itemValue)){
        map.set(itemValue, 1)
    } 
    else map.set(itemValue, map.get(itemValue) + 1);
    return map;
  }, new Map());
 
    return newMap
}
console.log(mapear([1,2,3,4,5,1,1,1]));

