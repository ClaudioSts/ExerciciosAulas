const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3000



function checkPasswordStrength(password) {
    // if (password.length < 8) return 1;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}

app.patch('/api/auth/password', (req, res) => {
    const { password, confirmacaoPassword } = req.body
    let validade = false

    //  validade = checkPasswordStrength(password) + 2 >= 4 ? !validade : validade
    let forca = checkPasswordStrength(password) + 1
    if (password.length >= 8) forca++
    if (password !== confirmacaoPassword) {
        forca = 0
    }
    return res.status(200).json({
        forca: forca,
        valida: forca >= 4
    })


    // if (password !== confirmacaoPassword) {
    //     return res.status(200).json({
    //         forca: 0,
    //         valida: validade
    //     })
    // } else if (password.length < 8) {
    //     return res.status(200).json({
    //         forca: checkPasswordStrength(password) + 2,
    //         valida: validade
    //     })
    // } else {
    //     return res.status(200).json({
    //         forca: checkPasswordStrength(password) + 2,
    //         valida: validade
    //     })
    // }
})


app.listen(port, () => {
    console.log(`À escuta em http://localhost:${port}`)
})