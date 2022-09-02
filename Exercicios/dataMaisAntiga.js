function dataMaisAntiga(datas) {
    // escreve aqui a função

    let datasOrdenadas = datas.reduce (function (pre, current) {
        return Date.parse(pre) > Date.parse(current) ? current : pre
    });
    return datasOrdenadas
}