function subtraiHoras(data, horas) {
    // escreve aqui a função

    let hour = horas * 60 * 60 * 1000
    return new Date(data.valueOf() - hour)

}