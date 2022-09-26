function arrayInfinito(array, esq, dir) {

    let newArr = []
    let reduceArr = []
    let sum = 0
    
    
    newArr = Array(dir + 1).fill(array).reduce((a, b) => [...a, ...b], [])
    console.log(newArr)
    
    reduceArr = newArr.slice(esq, (dir + 1))
    
    sum = reduceArr.reduce((a, b) => a + b, 0)
    
    return sum
    }
    
    console.log(arrayInfinito([1,2,3,4], 0, 10))


    ////////////////////////////////////////////////////////////

    function arrayInfinito(array, esq, dir){
        if(array == undefined || array.length == 0) return 0
         
        let rep = Math.ceil(dir / array.length);
    
        let arrayB = array
        for(let i = 0; i < rep; i++){
            arrayB = arrayB.concat(array);
            }
    
            let soma = 0
    
        for(let i = esq; i <= dir; i++){
          soma = soma + arrayB[i];
        }
        return soma;
    
    }