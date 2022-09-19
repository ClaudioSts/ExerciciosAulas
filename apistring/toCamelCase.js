function toCamelCase(arr) {
    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        ans += (arr[i][0]).toUpperCase();
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] == '') {
                ans += ' ';
                ans += (arr[i][j + 1]).toUpperCase();
                j++;
            }
            else {
                ans += (arr[i][j]).toLowerCase();
            }
        }
    }
    return ans
}