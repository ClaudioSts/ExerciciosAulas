function verificaPangrama(string) {
    const todas = "abcdefghijlmnopqrstuvxz"
    const minusculas = string.toLowerCase()

    return todas.split('').every(l => minusculas.includes(l))
}