/*function todasPossuemLetra(array, letra) {
    // escreve aqui a função

    return array.every((elemento) => elemento.includes(letra))
}

//console.log(todasPossuemLetra(["uva","manga","banana"],"a"))
*/
////////////////////////////////////

function palavraExisteEmSopaDeLetras(array, palavra) {

    //let stringArr = array.toString().replace(/,/g, "")
    /*
        let palavraSplit = palavra.split("")
    
        //
    
        // let width = 1
        //let arrayMap = array.reduce((rows, key, index) => 
        //  (index % width == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, [])
    
        let matrix = [], i, k;
        elementsPerSubArray = 1
    
        for (i = 0, k = -1; i < array.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }
    
            matrix[k].push(array[i]);
        }
        
        for (let i = 0; i < matrix.length; i++) {
            return palavraSplit.every(letras => matrix[i].includes(letras))
        }
    }   
       // if (matrixNormal == false){
    *//*
    let matrix = [], i, c;
    elementsPerSubArray = array[0].length

    for (i = 0, c = -1; i < stringArr.length; i++) {
        if (i % elementsPerSubArray === 0) {
            c++;
            matrix[c] = [];
        }

        matrix[c].push(stringArr[i]);
    }
    */
   const str = palavra
    const arr = array
    const containsWord = (arr = [], str = '') => {
        if (arr.length === 0){
           return false;
        };
        const height = arr.length;
        const width = arr[0].length;
        const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        const tryWord = (x, y, k) => {
           if (arr[x][y] !== str[k]) return false;
           if (k === str.length - 1) return true;
           
           for (const [dx, dy] of dirs) {
              const i = x + dx;
              const j = y + dy;
              if (i >= 0 && i < height && j >= 0 && j < width) {
                 if (tryWord(i, j, k + 1)) return true;
              }
           }
           arr[x][y] = str[k]; // reset
           return false;
        };
        for (let i = 0; i < height; i++) {
           for (let j = 0; j < width; j++) {
              if (tryWord(i, j, 0)) return true;
           }
        }
        return false;
     };
    
    return containsWord(arr, str)

}
console.log(palavraExisteEmSopaDeLetras([
    "OOA", //"OLA"  //"AOO" //"AOY"
    "ALO", //"OLY"  //"OLL" //"OLY"
    "YYA", //"AOY"  //"YYA" //"OLA"
], "OLA"))

console.log(palavraExisteEmSopaDeLetras([
    "OOO",
    "LLO",
    "AYY",
], "OLB"))

console.log(palavraExisteEmSopaDeLetras([
    "ASKJHD",
    "MNBIAS",
    "OIUSDU",
    "TIWQOI",
    "ROQMBN",
    "SABMNF"
], "SAI"))