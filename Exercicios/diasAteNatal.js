function calculaDiasAteAoNatal(dia, mes){
    console.log(dia, mes)
    // escreve aqui a função

    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }
    if (mes == 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28."
    }
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if (dia == 25 && mes == 12) {
        return "Hoje é Natal!"
    }

    const one_Day = (1000 * 60 * 60 * 24);
    let christmasYear = 0;
    let diasRestantes = 0;

    if (mes == 12 && dia > 25) {
        christmasYear = christmasYear + 1;
    } 

    let dateValue=new Date(0, mes - 1, dia);
    let christmasDay=new Date(christmasYear, 11, 25);

    diasRestantes = Math.floor((christmasDay.valueOf() - dateValue.valueOf()) / (one_Day));

    return "Faltam " + diasRestantes + " dias até ao Natal."

}

console.log(calculaDiasAteAoNatal(27, 6))

/*
6 - 30
7 - 31
8 - 31
9 - 30
10 - 31
11 - 30   183   208    252 ou 253
12 - */