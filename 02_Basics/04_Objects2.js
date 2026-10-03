// const tinderUser = new Object()

const tinderUser = {} // this is multivariable

tinderUser.id = "123abc"
tinderUser.name = "Robin"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "Utkarsh@google.com",
    fullname: {
        userfullname: {
            firstName: "Utkarsh",
            lastName: "Sahare"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName) // by using dot we can access inside terms

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

const obj3 = {obj1 , obj2}
console.log(obj3) // this obj3 will not combine both

const obj3new = Object.assign( {}, obj1 , obj2)
console.log(obj3new) // this .assign will combine both obj 1 & 2.

//there is one more way to express that objects

const obj1new = {5: "u", 6: "x"}
const obj2new = {7: "v", 8: "y"}
const obj3Anothoer = {...obj1new, ...obj2new}
console.log(obj3Anothoer)

//now that tinderUser things...

console.log(Object.keys(tinderUser)) // here we gets key.
console.log(Object.values(tinderUser)) // here we will get the values.
console.log(Object.entries(tinderUser)) // here both keys & values will get.
 
// now that has own propery will give answer in boolean that does that element contain in that tinderUser or not...

console.log(tinderUser.hasOwnProperty('isLoggedIn')) 
console.log(tinderUser.hasOwnProperty('LoggedIn'))

const course = {
    couseName: "js in hinglish",
    price: "9999",
    courseInstructor: "Utkarsh"
}

// we can access through console.log(couse.courseInstructor)
// also there is one new way

const {courseInstructor: abc} = course // also by using .newname we can give another name to it
console.log(abc) // this abc also gives same result as courseInstructor

/*
{
"name": "utkarsh"
"cousename": "js in hindi"
"price": "free"
}
*/