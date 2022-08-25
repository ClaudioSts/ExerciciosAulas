function garanteComprimentoDaString (a, b) {

    if (String(a).length == b) {
        return a;
    }
    if (String(a).length < b) {
        (b - (String(a).length)) ;
        return a.padEnd(b, "_");

    }
    if (String(a).length > b) {
        ((String(a).length) - b);
        return a.slice(0, b);
    }

}
console.log(garanteComprimentoDaString("abc", 6))
console.log(garanteComprimentoDaString("abcfghf", 6))

