class FabricaDeTestes {
    #testes
    #argumentos
    #resultadoEsperado
    #nome

    constructor(argumentos, resultadoEsperado, nome){
        this.#argumentos = argumentos
        this.#resultadoEsperado = resultadoEsperado
        this.#nome = nome
    }

    get argumentos() { return this.#argumentos}
    get resultadoEsperado() { return this.#resultadoEsperado}
    get nome() { return this.#nome}

    testar() {
        
    }
}