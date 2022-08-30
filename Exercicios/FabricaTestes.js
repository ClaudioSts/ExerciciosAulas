class FabricaDeTestes {
    #testes
        constructor(testes) {
            this.testes = testes
        }
    
        testar(funcao) {
            this.#testes.reduce((acc, elem) => {
                return funcao(...elem.args) === elem.resultadoEsperado ? acc + 1 : acc
            }, 0)
            funcao()            
        }
    }


    ////////////////////

    const testes = [
        {
            args: [3, 2],
            expected: 5
        },
        {
            args: [3, 3],
            expected: 6
        }
    ]
    
    function soma(a, b) {
        return a + b
    }
    function soma(a, b) {
        return a * b
    }
    
    Class.test(soma)