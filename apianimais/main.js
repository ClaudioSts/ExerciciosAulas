const express = require('express')
const app = express()
app.use(express.json())
const port = 3030

const animais = []


app.post('/api/animal', (req, res) => {
    const { name, birthday } = req.body
    const id = animais.length

    animais.push({ id, name, birthday })
    res.status(200).json({ id, name, birthday })
})

app.get('/api/animal', (req, res) => {
    res.status(200).json(
        {
            animais: animais
        }
    )
})

app.get('/api/animal/:id', (req, res) => {
    if (animais.some(ele => req.params.id == ele.id)) {
        res.status(200).json({
            animal: animais.find(ele => req.params.id == ele.id)
        })
    } else {
        res.sendStatus(404)
        return
    }
})


app.listen(port, () => {
    console.log(`Ã€ escuta em http://localhost:${port}`)
})