console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("assignment is now = ", assignment)
assignment -= 5 // same as assignment = assignment - 5
console.log("assignment is now = ", assignment)
assignment *= 5 // same as assignment = assignment * 5
console.log("assignment is now = ", assignment)
assignment /= 5 // same as assignment = assignment / 5
console.log("assignment is now = ", assignment)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

const prompt = require('prompt-sync')();


let a1 = prompt("Hey whats you age?")
a1 = Number.parseInt(a1); // Converting the string to a number
if (a1 < 0) {
    r = "This is an invalid"
}
else if (a1 < 9) {
    r = "You are a kid and you cannot even think of driving"
}
else if (a1 < 18 && a1 >= 9) {
    r = "You are a kid and you can think of driving after 18"
}
else {
    r = "You can now drive as you are above 18"
}
console.log(r)
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a < 18 ? "not drive" : "drive"))

// switch
let x1 = prompt("tell a number")
x1 = Number.parseInt(x)
switch (x1) {
    case 0:
        day = "sunday"
        break
    case 1:
        day = "monday"
        break
    case 2:
        day = "tuesday"
        break
    case 3:
        day = "wednesday"
        break
    case 4:
        day = "thrusday"
        break
    case 5:
        day = "friday"
        break
    case 6:
        day = "saturday"
        break
}
console.log(day)


let z = prompt("Which day it is choose a number")
z = Number.parseInt(z)
switch (z) {
    case 1:
        day = "Sunday"
        break
    case 2:
        day = "Monday"
        break
    case 3:
        day = "Tuesday"
        break
    case 4:
        day = "Wednesday"
        break
    case 5:
        day = "Thrusday"
        break
    case 6:
        day = "Friday"
        break
    case 7:
        day = "Saturday"
        break
    default:
        day ="Invalid Input!!"
}
console.log(day)
