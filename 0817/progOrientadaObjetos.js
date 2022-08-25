/* class Inteiro {
    static eInteiro(n) {
        return Number.isInteger(n)
    }
    static nulo = 0
}

console.log(Inteiro.eInteiro(3))

// !!Number.NaN && 
*/

let instanciasNum = 0

class ContadorDeInstancias {
    static instancias = 0
    contrutor (){
        ContadorDeInstancias.instancias += 1
        }
    }

