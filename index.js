const fs = require("fs")

const filePath = "./list-of-words"

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  let dictionary = {}
  const arrayOfWords = data.split("\n")

  arrayOfWords.forEach((word) => {
    let numberKey = ""
    for (const char of word) {
      if ("abc".includes(char)) {
        numberKey += "2"
      } else if ("def".includes(char)) {
        numberKey += "3"
      } else if ("ghi".includes(char)) {
        numberKey += "4"
      } else if ("jkl".includes(char)) {
        numberKey += "5"
      } else if ("mno".includes(char)) {
        numberKey += "6"
      } else if ("pqrs".includes(char)) {
        numberKey += "7"
      } else if ("tuv".includes(char)) {
        numberKey += "8"
      } else if ("wxyz".includes(char)) {
        numberKey += "9"
      }
    }
    if (dictionary[numberKey]) {
      dictionary[numberKey].push(word)
    } else {
      dictionary[numberKey] = [word]
    }
  })

  const content = JSON.stringify(dictionary)

  fs.writeFile("./output", content, (err) => {
    if (err) {
      console.error(err)
    } else {
      // file written successfully
      console.log("file written successfully")
    }
  })
})
