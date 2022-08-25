function formataData(data){
    // escreve aqui a função

    let year = data.getFullYear();
    let month = (1 + data.getMonth()).toString();
    month = month.length > 1 ? month: '0' + month;

    let day = data.getDate().toString();
    day = day.length > 1 ? day: '0' + day;

    return month + '-' + day + '-' + year;
} 

console.log(formataData(new Date(2022,03,04)))