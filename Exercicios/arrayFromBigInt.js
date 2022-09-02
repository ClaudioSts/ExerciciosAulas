function arrayFromBigInt (num) {

    return Array.from(num.toString()).map(Number)
}

console.log(arrayFromBigInt(71))