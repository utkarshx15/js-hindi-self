// singleton
// object.create
// object literal 

const mySym = Symbol("key1")

const JsUser = {
    name: "Utkarsh Sahare",
    "full name": "Utkarsh Dhananjay Sahare",
    [mySym]: "myKey1",
    age:19,
    location: "Maharashtra",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(JsUser.email) // normal way to access object
console.log(JsUser["email"]) // another way to access object
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "utkarsh@chatgpt.com"
// Object.freeze(JsUser) // with the help of freeze after making changes it will not apply on it...
JsUser.email = "Utk@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

