function verificaPalindromo(string) {
    let indiceCentral = string.length / 2
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i < indiceCentral; i++) {
        primeiraMetade += string[i]
    }
    for (i = string.length - 1; i >= indiceCentral - 0.5; i--) {
        segundaMetade += string[i]
    }
    
    console.log(primeiraMetade)
    console.log(segundaMetade)
    return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase()
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function palindrome(str) {
  
  let newString = str.replace(/[^a-z0-9]/gi, '')

  let centralIndex = newString.length / 2
  let string = newString.toLowerCase()
  let firstHalf = ""
  let secondHalf = ""

  for (let i =0; i< centralIndex; i++) {
    firstHalf += string[i]
  }
  for (let i = string.length -1; i >= centralIndex - 0.5; i--) {
    secondHalf += string[i]
  }

  return firstHalf === secondHalf
  
}
