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

// ********** operations ***********

let proValue = 3 
let negValue = -proValue
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)

let str1 = "Hello"
let str2 = " Utkarsh"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
// we will get answer as 1 but without use of + we will get ans as true
// but if we write true+ then code will not run.

console.log(+"")
// as we already know that the answer of " " in boolean we get it as 0 so that + directly converted into 0

// we can also consider some variables like that 
let Num1 , Num2 , Num3
Num1 = Num2 = Num3 = 2 + 2

let GameCounter = 100
GameCounter++;
console.log(GameCounter);
// as we know about prefix and postfix , if we write ++ before it so it will increase but if we write it later we will get it as orginal...
