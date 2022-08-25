function diaDoAno(date) {
    let oneDay= (1000*60*60*24)

    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / (oneDay);
}

console.log(diaDoAno(new Date(2021,04,04)))

