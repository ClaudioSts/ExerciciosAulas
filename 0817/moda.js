function calculaModa(array){
    // escreve aqui a função
    
    let cont = 0;
    let num = -Infinity
    let newMap = {};
    array.forEach( number =>{
        if(!newMap[number]){
            newMap[number] = 1;
        }else{
            newMap[number] +=1;
        }
    })
    for(let i in newMap){
        const total = newMap[i];
        if(total > cont){
            cont = total;
            num = i;
        }
    }
    return Number(num)
    

}

console.log(calculaModa([4, 4, 1, 2, 3]))