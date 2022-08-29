function mapear(array) {

    const newMap = array.reduce((map, itemValue) => {
        
        if (!map.has(itemValue)){
            map.set(itemValue, 1)
        } 
        else map.set(itemValue, map.get(itemValue) + 1);
        return map;
      }, new Map());
     
        return newMap
    }
    console.log(mapear([1,2,4,2,1]));