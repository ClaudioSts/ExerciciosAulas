function rot13(str) {
  
  let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"]

  let cipher = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"]

  let newStr = []

  for (let i =0; i<str.length;i++) {
    for(let j =0; j<letters.length;j++) {
      if(str[i] === letters[j]){
        newStr.push(cipher[j])
      }
    }
  }
  
  return newStr.join('')
}
