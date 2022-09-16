function computeMostFrequent(numbers) {
    console.log(numbers)

    let menor = Math.min(...numbers)
    let count = 0

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == menor){
            count ++
        }
    }
    return {
        value: menor,
        frequency: count
    }
}