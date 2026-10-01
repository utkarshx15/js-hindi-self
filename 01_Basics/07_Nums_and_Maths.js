const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) // convert to string from number
console.log(balance.toString().length) // tell total length of string
console.log(balance.toFixed(2)) // to fixed decimal

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)) // it make it precise & do round off to numbers

const Hundreds = 1000000
console.log(Hundreds.toLocaleString()) // this is US notation
console.log(Hundreds.toLocaleString('en-IN')) // turns to indian notation from US 

// ++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++=+++++++++++

console.log(Math) // its type is object
console.log(Math.abs(-6)) // turns from negative to positive , & do nothing to positive number...
console.log(Math.round(4.6)) // round off the number to nearest integer
console.log(Math.ceil(3.1)) // it turns to bigger integer if x.1 is also there so it will turn the number to x+1
console.log(Math.floor(3.9)) // it turns to lowest integer , even if it is x.9 , it will turn it to x
console.log(Math.min(4, 5, 3, 8, 9))
console.log(Math.max(4, 5, 3, 8, 9))

console.log(Math.random())
console.log((Math.random() * 10) + 1 )
console.log(Math.floor(Math.random() * 10) + 1 )
console.log(Math.ceil(Math.random() * 10) + 1 )

const min = 10 
const max = 20

console.log((Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)