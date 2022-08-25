function umOuOutro (a, b) {

    if ((a == true && b == true) || (a == false && b == false)){
        return false;
    }
    if (a == true || b == true){
        return true;
    }

    // return a !== b
    // return (a && !b) || (!a && b)

}

console.log(umOuOutro(true, true)) //false
console.log(umOuOutro(false, true)) //true
console.log(umOuOutro(true, false)) //true
console.log(umOuOutro(false, false)) //false