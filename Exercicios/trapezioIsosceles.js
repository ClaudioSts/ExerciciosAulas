function calculaPerimetroDoTrapezio (comprimentoMaior, comprimentoMenor, altura) {

    return (Math.hypot(altura**2 + ((comprimentoMaior - comprimentoMenor)/2))) + (comprimentoMaior + comprimentoMenor)

}