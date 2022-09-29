const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT ?? 3000

function generateToken(email) {
    return email
        .split('')
        .map((e, i) => String.fromCharCode(e.charCodeAt(0) + (i % 4 + 1) * 2))
        .join('')
}

function validateEmail(email) {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return EMAIL_REGEX.test(email)
}

function checkPasswordStrength(password) {
    if (password.length < 8) return 0;
    const regexes = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[~!@#$%^&*)(+=._-]/
    ]
    return regexes
        .map(re => re.test(password))
        .reduce((score, t) => t ? score + 1 : score, 0)
}


const loginCredentials = [{}]
const tokens = []



function findErrors({ email, password, passwordConfirmation, acceptsTerms }) {
    const errors = {}
    if ( email == undefined || email == '') {
        errors.email = "Por favor introduza o seu endereço de email."
    } else if (!validateEmail(email)) {
        errors.email = "Por favor introduza um endereço de email válido."
    } else if (loginCredentials.some(loginCredential => loginCredential.email === email)) {
        errors.email = "O endereço introduzido já está registado."
    }

    if (password == undefined || password == '') {
        console.log(password)
        errors.password = "Por favor introduza a sua password."
    } else if (password.length < 8) {
        errors.password = "A sua password deve ter no mínimo 8 caracteres."
    } else if (checkPasswordStrength < 4) {
        errors.password = "A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo."
    } 
    
    if (passwordConfirmation == '' || passwordConfirmation == undefined) {
        errors.passwordConfirmation = "Por favor introduza novamente a sua password."
    } else if (password !== passwordConfirmation) {
        errors.passwordConfirmation = "As passwords não coincidem."
    }

    if (!acceptsTerms) {
        errors.acceptsTerms = "Tem de aceitar os termos e condições para criar a sua conta."
    }
    return errors
}

app.post('/signup', (req, res) => {
    const { email, password, passwordConfirmation, acceptsTerms, acceptsCommunications } = req.body
    const messageError = findErrors(req.body)

    console.log(Object.keys(messageError).length)
    if (Object.keys(messageError).length == 0) {
        loginCredentials.push(req.body)
        res.status(201).json({
            message: "Utilizador Criado com Sucesso!"
        })
    } else {
        res.status(400).json({
            message: "Os dados introduzidos não são válidos.",
            errors: messageError
        })
    }
})



app.get('/user', (req, res) => {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({ message: "Não foi enviado o token de autenticação!" })
    }
    const sessao = tokens.find(t => t.token === token)
    if (sessao) {
        const user = loginCredentials.find(u => u.email === sessao.email)
        res.status(200).json({
            email: user.email,
            acceptsTerms: user.acceptsTerms,
            acceptsCommunications: user.acceptsCommunications
        })
    } else {
        return res.status(403).json({ message: "Não existe nenhuma sessão com o token indicado!" })
    }
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    if (loginCredentials.some(loginCredential => loginCredential.email === email && loginCredential.password === password)) {

        tokens.push({ token: generateToken(email), email });

        res.status(200).json({ token: `${generateToken(email)}` });
        console.log(tokens)

    } else if (loginCredentials.some(loginCredential => loginCredential.email === email)) {
        res.status(401).json({
            message: "A password introduzida é inválida!"
        })
    } else {
        res.status(404).json({
            message: "O utilizador não foi encontrado!"
        })
    }
})





app.listen(port, () => {
    console.log(`Ãƒâ‚¬ escuta em http://localhost:${port}`)
})