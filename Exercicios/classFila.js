class Fila {
    #primeiro
    #ultimo
    constructor(primeiro) {
        this.#primeiro = primeiro
        this.#ultimo = primeiro
    }

    adicionar(dados) {
        const ele = new ElementoDaFila(dados)
        if(!this.#ultimo){
            this.#ultimo = ele
            this.#primeiro = ele
            return
        }
        this.#ultimo.proximo = ele
        this.#ultimo = ele
    }
    remover () {
        if (!this.#primeiro) return "Fila vazia!"
        this.#primeiro = this.#primeiro.proximo
        if(!this.#primeiro) {
            this.#ultimo = undefined
        }
    }
    obterElemento () {
        if (!this.#primeiro) return "Fila vazia!"
        return this.#primeiro.dados
    }
}

class ElementoDaFila {
    #dados
    #proximo
    constructor(dados, proximo) {
        this.#dados = dados
        this.#proximo = proximo
    }
    get dados() {
        return this.#dados
    }
    get proximo() {
        return this.#proximo
    }
    set proximo(ele) {
        this.#proximo = ele
    }
    get eUltimo() {
        return !this.#proximo
    }
}