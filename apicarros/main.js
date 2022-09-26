const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3030




app.get('/api/carros/:marca', (req, res) => {
    debugger;
    if (req.params.marca == "audi" || req.params.marca == "mercedes") {
        res.status(200).json({
            existe: true
        })
    } else {
        res.status(404).json({
            existe: false
        })
    }
})

app.listen(port, () => {
    console.log(`Ãƒâ‚¬ escuta em http://localhost:${port}`)
})