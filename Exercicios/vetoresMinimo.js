function minimoSimples(array) {
    return array.reduce((min, value) => value < min ? value : min)

    }

function minimo(array, propridade) {
    return array.reduce((min, value) => value[propridade] < min[propridade] ? value : min)

}

function maximo(array, propridade) {
    return array.reduce((min, value) => value[propridade] > min[propridade] ? value : min)

}

function soma(array, propridade, valorInicial) {
    return array.reduce((resultado, value) => resultado + value[propridade], valorInicial)

}

function eQuadrada(matriz) {
    return matriz.every(a => a.length === matriz.length)
}

function obtemDiagonais(matriz) {
    
/*    let result = matriz.reduceRight((row, column, i) => {
        column.forEach((a, b) => {
          let position = b + (matriz.length - i - 1)
          if(!row[position]) row[position] = []
          row[position].unshift(a)
        })
      
        return row;
      }, []);

      return result             */

      let diagonais = []

      for (let i = matriz.length; i > 0; i--) {
        diagonais.push(obtemDiagonal(matriz, i, 0))
      }

      const MAIOR_LINHA = Math.max(...matriz.map(m => m.length))
      for (let i = 0; i < MAIOR_LINHA; i++) {
        diagonais.push(obtemDiagonal(matriz, 0, i))
      }
    return diagonais
 
      function obtemDiagonal (matriz, l, c) {
        let diagonal = []
        for (let i = 0; i< matriz.length; i++) {
            if(matriz[l + i] !== undefined)
            diagonal.push(matriz[l + i][c + i])
        }
      }
      
}
console.log (obtemDiagonais([[1,2,3],[1,2]]))