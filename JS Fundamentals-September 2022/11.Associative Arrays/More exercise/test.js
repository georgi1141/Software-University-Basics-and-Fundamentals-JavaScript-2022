// get element between specific chars in string


let someString = ' user name [25] is cool'

let index1 = someString.indexOf('[')
let index2 = someString.indexOf(']')

let trimmed = someString.slice(index1 + 1, index2)



console.log(index1, index2, cutted);