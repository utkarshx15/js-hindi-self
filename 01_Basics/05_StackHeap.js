// stack (primitvie) , Heap (non - Primitive),

let myYoutubename = "Utkarshsaharedotcom"
let anotherName = myYoutubename
anotherName = "kingofSpades"

console.log(myYoutubename)
console.log(anotherName)

// here both result will different
// now lets try it for non primitives

let userOne = {
    email: "Utkarsh@kgpian.iitkgp.ac.in",
    upi: "utkarsh@ybl"
}

let userTwo = userOne

userTwo.email = "utk@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// here both result will same