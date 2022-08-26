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
            return `=== Histórico da Calculadora ===\n${this.historico} \n=== Fim do Histórico ===\nFoi realizada 1 operação\nÚltimo Resultado: ${this.ultimoResultado}`
        } else {
            let output = "=== Histórico da Calculadora ===\n"

            for (let i = 0; i < this.historico.length; i++) {
                output += (i + 1) + ". " + this.toJSON().historico[i] + "\n"
            }
            output += "=== Fim do Histórico ===\nForam realizadas " + this.historico.length + " operações\nÚltimo Resultado: " + this.toJSON().ultimoResultado

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
        return `=== Histórico da Calculadora ===\n${this.historico} \n=== Fim do Histórico ===\nFoi realizada 1 operação\nÚltimo Resultado: ${this.ultimoResultado}`
    } else {
        let output = "=== Histórico da Calculadora ===\n"

        for (let i = 0; i < this.historico.length; i++) {
            output += (i + 1) + ". " + this.toJSON().historico[i] + "\n"
        }
        output += "=== Fim do Histórico ===\nForam realizadas " + this.historico.length + " operações\nÚltimo Resultado: " + this.toJSON().ultimoResultado

        return output
    }
}
}