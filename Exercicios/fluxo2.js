function calculaClassificacaoEtaria (anos) {

    if (anos <= 1) {
        return "Lactente"
    }
    if (anos >= 2 && anos <= 4) {
        return "Pré-Escolar"
    }
    if (anos >= 5 && anos <= 10) {
        return "Escolar"
    }
    if (anos >= 11 && anos <= 17) {
        return "Adolescente"
    }

}

console.log(calculaClassificacaoEtaria(0))
console.log(calculaClassificacaoEtaria(2))
console.log(calculaClassificacaoEtaria(3))
console.log(calculaClassificacaoEtaria(5))
console.log(calculaClassificacaoEtaria(8))
console.log(calculaClassificacaoEtaria(15))
console.log(calculaClassificacaoEtaria(20))