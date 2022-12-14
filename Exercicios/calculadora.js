class Calculator {
    constructor() {
        this.historico = []
        this.ultimoResultado = 0n
    }

    somar(a, b) {
        if (BigInt(b) == undefined) {
            BigInt(b) = BigInt(a)
            BigInt(a) = this.ultimoResultado
            this.ultimoResultado = this.ultimoResultado + BigInt(a)
        }
        let obj = {
            operacao: '+',
            a: BingInt(a),
            b: BigInt(b),
            result: BigInt(a) + BigInt(b),
        }
        this.historico.push(obj)
        this.ultimoResultado = obj.result
        return this
    }

    subtrair(a, b) {
        if (BigInt(b) == undefined) {
            BigInt(b) = BigInt(a)
            BigInt(a) = this.ultimoResultado
            this.ultimoResultado = this.ultimoResultado - BigInt(a)
        }
        let obj = {
            operacao: '-',
            a: a,
            b: b,
            result: a - b,
        }
        this.historico.push(obj)
        this.ultimoResultado = obj.result
        return this
    }

    dividir(a, b) {
        if (BigInt(b) == undefined) {
            BigInt(b) = BigInt(a)
            BigInt(a) = this.ultimoResultado
            this.ultimoResultado = this.ultimoResultado / BigInt(a)
        }
        let obj = {
            operacao: '/',
            a: a,
            b: b,
            result: a / b,
        }
        this.historico.push(obj)
        this.ultimoResultado = obj.result
        return this

    }

    multiplicar(a, b) {
        if (BigInt(b) == undefined) {
            BigInt(b) = BigInt(a)
            BigInt(a) = this.ultimoResultado
            this.ultimoResultado = this.ultimoResultado * BigInt(a)
        }
        let obj = {
            operacao: '*',
            a: a,
            b: b,
            result: a * b,
        }
        this.historico.push(obj)
        this.ultimoResultado = obj.result
        return this
    }

    limparHistorico() {
        this.historico = []
        this.ultimoResultado = 0

        return this
    }

    obterResultado() {
        return BigInt(this.ultimoResultado)
    }

    toJSON() {
        return {
            historico: this.historico.map(elemento => `${elemento.a} ${elemento.operacao} ${elemento.b} = ${elemento.result}`),
            ultimoResultado: this.ultimoResultado
        }
    }

    toString() {
        if (this.historico == []) {
            return "Calculadora Limpa."
        } if (this.historico.length == 1) {
            return `=== Hist??rico da Calculadora ===\n${this.historico} \n=== Fim do Hist??rico ===\nFoi realizada 1 opera????o\n??ltimo Resultado: ${this.ultimoResultado}`
        } else {
            let output = "=== Hist??rico da Calculadora ===\n"

            for (let i = 0; i < this.historico.length; i++) {
                output += (i + 1) + ". " + this.toJSON().historico[i] + "\n"
            }
            output += "=== Fim do Hist??rico ===\nForam realizadas " + this.historico.length + " opera????es\n??ltimo Resultado: " + this.toJSON().ultimoResultado

            return output
        }
    }
}
let calc = new Calculator()
console.log(calc.somar(3,3))
console.log(toString(calc.somar(3,3)))


///////////////////////////////////////////////////////////////////////////////////////////

class Calculadora {
    constructor() {
        this.historico = []
        this.ultimoResultado = 0n
    }

    somar(a, b) {
        a = BigInt(a)
        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${ a } + ${ b } = ${ a+ b}`)
        this.ultimoResultado = a + b
        return this
    } else {
        this.historico.push(`${ this.ultimoResultado } + ${ a } = ${ this.ultimoResultado + a }`)
        this.ultimoResultado = this.ultimoResultado + a
        return this
    }
    }

    subtrair(a, b) {
        a = BigInt(a)
        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${ a } - ${ b } = ${ a - b}`)
        this.ultimoResultado = a - b
        return this
    } else {
        this.historico.push(`${ this.ultimoResultado } - ${ a } = ${ this.ultimoResultado - a }`)
        this.ultimoResultado = this.ultimoResultado - a
        return this
    }
}

dividir(a, b) {
    a = BigInt(a)   
    if (b != undefined) {
        b = BigInt(b)
        this.historico.push(`${ a } / ${ b } = ${ a / b}`)
    this.ultimoResultado = a / b
    return this
    } else {
        this.historico.push(`${ this.ultimoResultado } / ${ a } = ${ this.ultimoResultado / a }`)
        this.ultimoResultado = this.ultimoResultado / a
        return this
    }
}

multiplicar(a, b) {
    a = BigInt(a)
    if (b != undefined) {
        b = BigInt(b)
        this.historico.push(`${ a } * ${ b } = ${ a * b}`)
        this.ultimoResultado = a * b
        return this
    } else {
        this.historico.push(`${ this.ultimoResultado } * ${ a } = ${ this.ultimoResultado * a }`)
        this.ultimoResultado = this.ultimoResultado * a
        return this
    }
}

limparHistorico() {
    this.historico = []
    this.ultimoResultado = 0n
    return this
}

obterResultado() {
    return this.ultimoResultado
}

toJSON() {
    let calculadoraJson = {
        "ultimoResultado": String(this.ultimoResultado),
        "historico": this.historico
    }
    return calculadoraJson
}

toString() {
    if (this.historico == []) {
        return "Calculadora Limpa."
    } if (this.historico.length == 1) {
        return `=== Hist??rico da Calculadora ===\n${this.historico} \n=== Fim do Hist??rico ===\nFoi realizada 1 opera????o\n??ltimo Resultado: ${this.ultimoResultado}`
    } else {
        let output = "=== Hist??rico da Calculadora ===\n"

        for (let i = 0; i < this.historico.length; i++) {
            output += (i + 1) + ". " + this.toJSON().historico[i] + "\n"
        }
        output += "=== Fim do Hist??rico ===\nForam realizadas " + this.historico.length + " opera????es\n??ltimo Resultado: " + this.toJSON().ultimoResultado

        return output
    }
}
}


///////////////////////////////////////////////////////////////////////////////////

class Calculadora {
    #historico
    #ultimoResultado

    static operacoes = new Map([
        ['+', (a, b) => a + b],
        ['-', (a, b) => a - b],
        ['/', (a, b) => a / b],
        ['*', (a, b) => a * b]
    ])
    constructor() {
        this.limparHistorico()
    }
    somar (a, b){
        this.#aplicaOperacao(a, b, '+')
        // Retornar inst??ncia da Calculadora
        return this
    }

    subtrair (a, b) {
        this.#aplicaOperacao(a, b, '+')
        // Retornar inst??ncia da Calculadora
        return this
    }

    multiplicar (a, b) {
        this.#aplicaOperacao(a, b, '*')
        // Retornar inst??ncia da Calculadora
        return this
    }

    dividir (a, b) {
        this.#aplicaOperacao(a, b, '/')
        // Retornar inst??ncia da Calculadora
        return this
    }

    #aplicaOperacao (a, b, op) { //op = +, -, *, /
        // #corrigeArgumentos
        const args = this.#corrigeArgumentos(a, b)
        // Calcular o resultado

        const resultado = opFunc(args.a, args.b)
        // Guardar resultado no hist??rico
        // Guardar resultado no ultimoResultado

    }

    #corrigeArgumentos (a, b) {
        // Corrigir ordem dos argumentos
        // Corrigir tipo dos argumentos
        if (b === undefined) {
            return {
                a: this.#ultimoResultado,
                b: BigInt(a)
            }
        }
        return {
            a: BigInt(a),
            b: BigInt(b)
        }
    }

    obterResultado () {
        return this.#ultimoResultado
    }

    limparHistorico() {
        this.#historico = []
        this.#ultimoResultado = 0n
        return this
    }

    toJSON() {
        return {
            historico: this.#historico,
            ultimoResultado: String(this.#ultimoResultado)
        }
    }

    toString () {
        return ''
    }
}

///////////////////////////////////////////////////////////////////

class Calculadora {
    constructor() {
        this.historico = []
    }
    somar(a,b){
        this.historico.push({
            operacao: "soma",
            a: a,
            b: b,
            resultado: a + b
        })
        return a + b
    }
    subtrair(a,b){
        this.historico.push({
            operacao: "subtra????o",
            a: a,
            b: b,
            resultado: a - b
        })
        return a - b
    }
    multiplicar(a,b){
        this.historico.push({
            operacao: "multiplica????o",
            a: a,
            b: b,
            resultado: a * b
        })
        return a * b
    }
    dividir(a,b){
        this.historico.push({
            operacao: "divis??o",
            a: a,
            b: b,
            resultado: a / b
        })
        return a / b
    }

    lerHistorico(operacao){
        return this.historico.filter( n => n.operacao == operacao)
    }
}