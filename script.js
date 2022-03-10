function findMissingWord(arr) {
  let missingWord = ""

  arr.forEach((letter, i) => {
    //如果已經是最後一個字
    if (i === arr.length - 1) return
    let charcode1 = letter.charCodeAt(0)
    let charcode2 = letter[i + 1].charCodeAt(0)
    //判斷前後兩字的charcode是否連貫，連貫就return
    if (charcode1 + 1 === charcode2) return
    missingWord = String.fromCharCode(charcode1 + 1)
  })
  return missingWord
}
