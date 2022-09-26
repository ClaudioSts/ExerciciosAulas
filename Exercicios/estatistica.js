function obtemEstatisticas(array) {
    const mapaDeOcurrencias =
        array.reduce((acc, curr) => {
            if (!acc.has(curr)) acc.set(curr, 1)
            else acc.set(curr, acc.get(curr) + 1)

            return acc
        }, new Map())

    return {
        media: obtemMedia(array),
        moda: obtemModa(mapaDeOcurrencias), mediana: obtemMediana(array)
    }
}

function obtemModa(mapa) {
    const highestFrequency = Math.max(...mapa.values())
    const hey = Array.from(mapa).filter(cv => cv[1] === highestFrequency).reduce(
        (acc, curr) => {
        if (curr[1] > acc[1] || curr[1] === acc[1] && curr[0] > acc[0])
            return curr
        return acc
    }, [null, 0] )
    return hey[0]
}
function obtemMediana(array) {
    array = array.sort((a,b) => a- b)
    if (array.length % 2 === 0) {
        return Math.round(
            (array[Math.floor(array.length / 2)] + array[Math.ceil(array.length / 2) -1]) / 2
        )
    } else {
        return array[Math.floor(array.length / 2)]
    }
}

function obtemMedia (array) {
    const soma = array.reduce((acc, curr) => acc + curr, 0)
    return Math.round(soma / array.length)
}