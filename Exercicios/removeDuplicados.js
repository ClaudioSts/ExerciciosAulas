function stringSuperReduzida(str) {
    // Escreve aqui o teu código
    const values = [...str].reduce((target, item) => {
        if (target.slice(-1)[0] !== item) {
            return [...target, item];
        }

        target.pop(item);

        return target;
    }, []);

    return values.length > 0 ? values.join('') : 'Empty String';
}


console.log(stringSuperReduzida("abbcd"))
console.log(stringSuperReduzida("abba"))
console.log(stringSuperReduzida("abbcbbca"))
console.log(stringSuperReduzida("abbcbbcaa"))