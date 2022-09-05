function encontraPrimo (array) {

    let ePrimo = array.find(num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1
    })
    return ePrimo
}

console.log (encontraPrimo([1,2,3,4]))