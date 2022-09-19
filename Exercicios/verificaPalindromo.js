function verificaPalindromo(string) {
    let indiceCentral = string.length / 2
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i < indiceCentral; i++) {
        primeiraMetade += string[i]
    }
    for (i = string.length - 1; i >= indiceCentral - 0.5; i--) {
        segundaMetade += string[i]
    }
    
    console.log(primeiraMetade)
    console.log(segundaMetade)
    return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase()
}
console.log(verificaPalindromo("osso"))
console.log(verificaPalindromo("osto"))