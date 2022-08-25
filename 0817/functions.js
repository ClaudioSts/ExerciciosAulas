function superDigito (n) {



    if (n.length == 1) {
        return n;
    }

    while (Number(n) > 9){
    let sum = 0;     
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
        
    }
    n = String(sum)
    
    }
    return Number(n)
}
console.log (superDigito("55"))


/* function superDigito(n) {

    let = 0;
    for(let i = 1; i < n.length; i++) {
        soma += Number(n[i])
    }
    return soma
}
console.log(
    superDigito("987"),
    superDigito("12"),
    superDigito("1")
)
*/