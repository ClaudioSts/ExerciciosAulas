function umOuOutro (a, b, c) {

    // if ((a == true && b == true) || (a == false && b == false)){
    //     return false;
    // }
    // if (a == true || b == true){
    //     return true;
    // }

    // return a !== b
    // return (a && !b) || (!a && b)

    return (a && !b && !c) || (!a && b && !c) || (!a && !b && c)

}

console.log(umOuOutro(true, true, true)) //false
console.log(umOuOutro(false, true, true)) //false
console.log(umOuOutro(true, false, true)) //false
console.log(umOuOutro(false, false, true)) //true
console.log(umOuOutro(true, true, false)) //false
console.log(umOuOutro(false, true, false)) //true
console.log(umOuOutro(true, false, false)) //true
console.log(umOuOutro(false, false, false)) //false