// dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23) // it count 0 as january
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString()) // looks more good

let myCreatedDateNTime = new Date(2023, 0, 23, 5, 3) // here more precisie about time also 
console.log(myCreatedDateNTime.toLocaleString())

let NewDate = new Date("2025-01-15") //in string january count as 1 and in number 0;
console.log(NewDate.toDateString())
//also 
let NewDateTwo = new Date("04-15-2007") //in string january count as 1 and in number 0;
console.log(NewDateTwo.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // it gives time in milliseconds of ths current time. so it count from anuary 1, 1970, 00:00:00 UTC this date

console.log(myCreatedDate.getTime())
console.log(Date.now()/1000) //converted time from millisecond to seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // +1 beacuse it count 0 as january
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getTimezoneOffset())

console.log(`${newDate.getDay()} is the today's date `)

newDate.toLocaleString('default', {
    weekday: "long",
})


// ----------------------x---------------------------------