/*function calculaCaminho (matriz, posInicial, posFinal) {

    let caminhos= [[], [], []]
    let visitados = new Set ()
    let rows = matriz.length
    let columns = matriz[0].length
    let distance = Array(rows).fill().map(() => Array(columns).fill(-1))
    distance[0][0] = 0
    let queue = []

    visitados.add([0,0].toString())

    let directionRow = [-1, 1, 0, 0]
    let directionColumn = [0, 0, -1, 1]

    while(queue.length > 0) {
        let currentPos = queue.shift();
        let row = currentPos[0]
        let col = currentPos[1];

        for (let i = 0; i < matriz.length; i++) {
            let newRow = row + directionRow[i]
            let newCol = col + directionColumn[i]

            if(!visitados.has([newRow, newCol].toString()) && newRow >= 0 && newCol >= 0 && newCol < rows && newCol < columns && matriz[newRow][newCol] !== matriz[row][col]) {
                visitados.add([newRow, newCol].toString())
                distance[newRow, newCol] = distance[row][col] + 1
                queue.push([newRow, newCol])
            }
        }
    }
    if (distance[rows - 1][columns - 1] === -1) {
        return "Caminho inválido"
    } else {
        return distance[rows - 1][columns - 1]
    }
}

console.log(calculaCaminho([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
], {
    line: 0,
    column: 2
}, {
    line: 0,
    column: 4
}))
*/
////////////////////////////////////////////
const m =
  [ [ 'i', 'p', '', '', '' ],
    [ '', 'p', '', '', '' ],
    [ '', 'p', '', 'f', '' ],
    [ '', '', '', '', '' ],
    [ '', '', '', '', '' ] ]


let successors = (root, m) => {
    let connectedCells = [
      [root[0] - 1, root[1]],
      [root[0], root[1] - 1],
      [root[0] + 1, root[1]],
      [root[0], root[1] + 1]
    ]
  
    const validCells = connectedCells.filter(
      (cell) => (
        cell[0] >= 0 && cell[0] < m.length 
        && cell[1] >= 0 && cell[1] < m[0].length)
    )
  
    const successors = validCells.filter(
      (cell) => (m[cell[0]][cell[1]] !== m[root[0]][root[1]])
    )
  
    return successors
  }
  
  const buildPath = (traversalTree, posFinal) => {
    let path = [posFinal]
    let parent = traversalTree[posFinal]
    while (parent) {
      path.push(parent)
      parent = traversalTree[parent]
    }
    return path.reverse()
  }
  
  const bfs = (posInicial, posFinal) => {
    let traversalTree = []
    let visited = new Set
    let queue = []
    queue.push(posInicial)
  
    while (queue.length) {
      let subtreeRoot = queue.shift()
      visited.add(subtreeRoot.toString())
  
      if (subtreeRoot.toString() == posFinal.toString()) return buildPath(traversalTree, posFinal)
  
      for (child of successors(subtreeRoot, m)) {
        if (!visited.has(child.toString())){
          traversalTree[child] = subtreeRoot
          queue.push(child)
        }
      }
    }
}
  console.log(bfs([0,0], [4,4]))
/*  console.log(calculaCaminho([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
], {
    line: 0,
    column: 2
}, {
    line: 0,
    column: 4
}))

*/

////////////////////////////////////////////

function calculaCaminho(matriz, inicio, final) {   
    let queue = [{...inicio, path: [inicio]}]
    // let i = 0;
    while(queue.length > 0) {
        const elemento = queue[0]
        queue = queue.slice(1)
        if (elemento.line === final.line && elemento.column === final.column) {
            return elemento.path
        }
        
        const dirs = [
            {line: 1, column: 0},
            {line: 0, column: 1},
            {line: -1, column: 0},
            {line: 0, column: -1},
        ]

        for(const {line, column} of dirs) {
            const l = elemento.line + line            
            const c = elemento.column + column
            
            if(matriz[l] !== undefined && matriz[l][c] !== undefined && matriz[l][c] !== "p") {
                queue.push({line: l, column: c, path: [...elemento.path, [{line: l, column: c}]]})
            }
        }
    }

    return "Casa não encontrada!"
}

const matriz = [
    ["i", "p", "f", "", ""],
    ["", "p", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];
const inicio = {
    line: 0,
    column: 0
}
const final = {
    line: 0,
    column: 2
}

console.log(
calculaCaminho(matriz, inicio, final) 
)

/* [
    {line: 0, column: 2},
    {line: 0, column: 3},
    {line: 0, column: 4},
]*/