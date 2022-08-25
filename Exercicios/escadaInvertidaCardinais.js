function escadaComCardinais (a) {
    let escada = "";

    for (let linha = 1; linha <= a; linha++){
        escada += "".padEnd(a - linha, "")
        escada += "".padEnd(linha, "#")
        escada += "\n"
    }

}
