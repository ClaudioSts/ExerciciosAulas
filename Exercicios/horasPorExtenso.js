function horaPorExtenso(data){


    let horas = data.getUTCHours()
    let valorHora
    let minutos = data.getMinutes()
    let valorMinuto
    let horaExtenso

    switch(horas){
        case 0:
            valorHora = "meia noite"
            break
        case 1:
            valorHora = "uma"
            break
        case 2:
            valorHora = "duas"
            break
        case 3:
            valorHora = "três"
            break
        case 4:
            valorHora = "quatro"
            break
        case 5:
            valorHora = "cinco"
            break
        case 6:
            valorHora = "seis"
            break
        case 7:
            valorHora = "sete"
            break
        case 8:
            valorHora = "oito"
            break
        case 9:
            valorHora = "nove"
            break
        case 10:
            valorHora = "dez"
            break
        case 11:
            valorHora = "onze"
            break
        case 12:
            valorHora = "doze"
            break
        case 13:
            valorHora = "treze"
            break
        case 14:
            valorHora = "catorze"
            break
        case 15:
            valorHora = "quinze"
            break
        case 16:
            valorHora = "dezasseis"
            break
        case 17:
            valorHora = "dezassete"
            break
        case 18:
            valorHora = "dezoito"
            break
        case 19:
            valorHora = "dezanove"
            break
        case 20:
            valorHora = "vinte"
            break
        case 21:
            valorHora = "vinte e uma"
            break
        case 22:
            valorHora = "vinte e duas"
            break
        case 23:
            valorHora = "vinte e três"
            break
    }

    switch(minutos){
        case 0:
            valorMinuto = " em ponto"
            break
        case 1:
            valorMinuto = "um"
            break
        case 2:
            valorMinuto = "dois"
            break
        case 3:
            valorMinuto = "três"
            break
        case 4:
            valorMinuto = "quatro"
            break
        case 5:
            valorMinuto = "cinco"
            break
        case 6:
            valorMinuto = "seis"
            break
        case 7:
            valorMinuto = "sete"
            break
        case 8:
            valorMinuto = "oito"
            break
        case 9:
            valorMinuto = "nove"
            break
        case 10:
            valorMinuto = "dez"
            break
        case 11:
            valorMinuto = "onze"
            break
        case 12:
            valorMinuto = "doze"
            break
        case 13:
            valorMinuto = "treze"
            break
        case 14:
            valorMinuto = "catorze"
            break
        case 15:
            valorMinuto = "um quarto"
            break
        case 16:
            valorMinuto = "dezasseis"
            break
        case 17:
            valorMinuto = "dezassete"
            break
        case 18:
            valorMinuto = "dezoito"
            break
        case 19:
            valorMinuto = "dezanove"
            break
        case 20:
            valorMinuto = "vinte"
            break
        case 21:
            valorMinuto = "vinte e um"
            break
        case 22:
            valorMinuto = "vinte e dois"
            break
        case 23:
            valorMinuto = "vinte e três"
            break
        case 24:
            valorMinuto = "vinte e quatro"
            break
        case 25:
            valorMinuto = "vinte e cinco"
            break
        case 26:
            valorMinuto = "vinte e seis"
            break
        case 27:
            valorMinuto = "vinte e sete"
            break
        case 28:
            valorMinuto = "vinte e oito"
            break
        case 29:
            valorMinuto = "vinte e nove"
            break
        case 30:
            valorMinuto = "trinta"
            break
        case 31:
            valorMinuto = "trinta e um"
            break
        case 32:
            valorMinuto = "trinta e dois"
            break
        case 33:
            valorMinuto = "trinta e três"
            break
        case 34:
            valorMinuto = "trinta e quatro"
            break
        case 35:
            valorMinuto = "trinta e cinco"
            break
        case 36:
            valorMinuto = "trinta e seis"
            break
        case 37:
            valorMinuto = "trinta e sete"
            break
        case 38:
            valorMinuto = "trinta e oito"
            break
        case 39:
            valorMinuto = "trinta e nove"
            break
        case 40:
            valorMinuto = "quarenta"
            break
        case 41:
            valorMinuto = "quarenta e um"
            break
        case 42:
            valorMinuto = "quarenta e dois"
            break
        case 43:
            valorMinuto = "quarenta e três"
            break
        case 44:
            valorMinuto = "quarenta e quatro"
            break
        case 45:
            valorMinuto = "trrês quartos"
            break
        case 46:
            valorMinuto = "quarenta e seis"
            break
        case 47:
            valorMinuto = "quarenta e sete"
            break
        case 48:
            valorMinuto = "quarenta e oito"
            break
        case 49:
            valorMinuto = "quarenta e nove"
            break
        case 50:
            valorMinuto = "cinquenta"
            break
        case 51:
            valorMinuto = "cinquenta e um"
            break
        case 52:
            valorMinuto = "cinquenta e dois"
            break
        case 53:
            valorMinuto = "cinquenta e três"
            break
        case 54:
            valorMinuto = "cinquenta e quatro"
            break
        case 55:
            valorMinuto = "cinquenta e cinco"
            break
        case 56:
            valorMinuto = "cinquenta e seis"
            break
        case 57:
            valorMinuto = "cinquenta e sete"
            break
        case 58:
            valorMinuto = "cinquenta e oito"
            break
        case 59:
            valorMinuto = "cinquenta e nove"
            break
    }

    if (minutos == 0){
        horaExtenso = horas + valorMinuto
    }else if (minutos > 0){
        horaExtenso = valorHora + " e " + valorMinuto
    }
    return horaExtenso
}
