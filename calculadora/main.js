const express = require('express')
const fetch = require('isomorphic-unfetch');
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
const { Calculadora } = require("./calculadora")

const calculadora = new Calculadora

/* app.get('/', (req, res) => {
  res.send('Hello World!')
})  */

app.get('/', (req, res) => {
    res.json({
        calculadora: calculadora.toJSON(),
    })
})

app.delete('/', (req, res) => {
    res.status(200)
        .json({
            calculadora: calculadora.limparHistorico().toJSON()
        })
})

app.post('/repetir', (req, res) => {
    const { num } = req.body
    res.status(200)
        .json({ 
            calculadora: calculadora.repetir(num).toJSON() 
        })
})

app.get('/ultimo-resultado', (req, res) => {
    res.status(200)
        .json({ 
            ultimoResultado: calculadora.obterResultado().toString()
        })
})

app.post('/op/somar', (req, res) => {
    const { a, b } = req.body

    if (isNaN(Number(a)) || (b !== undefined && isNaN(Number(b)))) {
        res.status(400).json({ erro: "Argumentos Inválidos" })
        return
    }
    res.status(200)
        .json({ calculadora: calculadora.somar(a, b).toJSON() })
})
app.post('/op/subtrair', (req, res) => {
    const { a, b } = req.body


    if (isNaN(Number(a)) || (b !== undefined && isNaN(Number(b)))) {
        res.status(400).json({ erro: "Argumentos Inválidos" })
        return
    }
    res.status(200)
        .json({ calculadora: calculadora.subtrair(a, b).toJSON() })
})
app.post('/op/dividir', (req, res) => {
    const { a, b } = req.body


    if (isNaN(Number(a)) || (b !== undefined && isNaN(Number(b)))) {
        res.status(400).json({ erro: "Argumentos Inválidos" })
        return
    }
    res.status(200)
        .json({ calculadora: calculadora.dividir(a, b).toJSON() })
})
app.post('/op/multiplicar', (req, res) => {
    const { a, b } = req.body


    if (isNaN(Number(a)) || (b !== undefined && isNaN(Number(b)))) {
        res.status(400).json({ erro: "Argumentos Inválidos" })
        return
    }
    res.status(200)
        .json({ calculadora: calculadora.multiplicar(a, b).toJSON() })
})
app.post('/op/potencia', (req, res) => {
    const { a, b } = req.body


    if (isNaN(Number(a)) || (b !== undefined && isNaN(Number(b)))) {
        res.status(400).json({ erro: "Argumentos Inválidos" })
        return
    }
    res.status(200)
        .json({ calculadora: calculadora.potencia(a, b).toJSON() })
})








app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})