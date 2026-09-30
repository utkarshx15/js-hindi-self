const Name = "Utkarsh"
const repoCount = 50

console.log(Name + repoCount + " Value")

// but this is too old way to represent 
// new way we can represent :

console.log(`Hello My name is ${Name} and my repo count is ${repoCount}`);

// there is one new way to declare the string :

const NewGame = new String(`ClashOfClans`)

console.log(NewGame[11]) // access the letter at which position we gave it to.
console.log(__proto__) 
console.log(NewGame.length) // count the lenth of string 
console.log(NewGame.toUpperCase()) // convert that string to uppercase without changing the data
console.log(NewGame.charAt(3)) // tells which character at number 3...
console.log(NewGame.indexOf(`h`)) // tells the position of that character.

const NewString = NewGame.substring(0,4) // it prints the letter which comes under this range . & didn't include last letter.
// range do not obey negative number 
console.log(NewString)

const anotherString = NewGame.slice(-6, -1)
// it works in negative range also
console.log(anotherString)

const NewStringOne = "   Utkarsh    "
console.log(NewStringOne)
console.log(NewStringOne.trim()) // it removes blank spaces

const url = "http://utkarsh@google.com/utkarsh%20sahare"
console.log(url.replace('%20','-')) // it usually replace the term by another according to writte data

console.log(url.includes('utkarsh')) // it checks that it include in it or not 

const newStringTwo = "Utkarsh-Sahare-The-IITian"
console.log(newStringTwo.split('-'))

const Nameutk = "Utkarsh"
console.log(Nameutk.slice(-6,-1))

// help to take letters from backside...
