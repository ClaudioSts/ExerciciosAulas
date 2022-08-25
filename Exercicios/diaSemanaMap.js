function diaDaSemana(dia){
    // escreve aqui a função

    const DIASEMANA = new Map ([
        [ 1, "Domingo"],
        [ 2, "Segunda-Feira"],
        [ 3, "Terça-Feira"],
        [ 4, "Quarta-Feira"],
        [ 5, "Quinta-Feira"],
        [ 6, "Sexta-Feira"],
        [ 7, "Sábado"]
    ])

    let nomeDia = DIASEMANA.get(dia)

    return nomeDia
}

console.log(diaDaSemana(2))