let score = "33" // as we write only = 33 like that then we will get type as number
// but as we write inside the that " " so it will show type as string...
console.log(typeof score)
// we can change that string to number by considering new variable = number as pass that score in it

let valueInVariable = Number(score)
console.log(typeof valueInVariable)
console.log(valueInVariable)

// but as soon we put some letters in that numbers and then we convert that string to number 
// we will get the printed result as NaN means not a number... 

let value = "33abccd"
let newVariable = Number(value)
console.log(typeof value)
console.log(newVariable)

let trial = null
let newTrial = Number(trial)
console.log(newTrial)

// as we put value as null and convet in into number we will get result as 0...
// if we put undefined then we get NaN , if we put true and false we will get it 1 & 0 respectively...
// and imagine we write "Utkarsh" , we know that this is not able to convert it into number so we will get it NaN

// lets try for boolean 

let IsLoggedIn = 1
let NewIsLoggedIn = Boolean(IsLoggedIn)
console.log(NewIsLoggedIn)

// so its successfully converted into true (boolean) from 1 like that also it can be into false from 0.

// 1 => true , 0 => false
// "" => false , "Utkarsh" => true.

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)
