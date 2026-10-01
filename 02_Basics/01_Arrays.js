// Array

const myArr = [0, 1, 2, 3, 4, 5] // way to define an array...
const myHeros = ["Spiderman" , "Batman"] // another way to declare an string in array
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[2])

// shallow copy means object is provided a real data & that changes show in real one array (heap)
// deep copy menas it actually make an another copy of orignal one. & that change don't change that real one data.

// Array Methods:

myArr.push(6)
myArr.push(7)
myArr.pop()
// you can write console.log() & can check that output for all of it...
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9))
console.log(myArr.includes(3))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(2))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
 
// now concept of slice and splice in arrays:-

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C ", myArr)
const myn3 = myArr.splice(1,3)
console.log(myn3)
console.log(myn2) // it changes and cut that orignal terms
