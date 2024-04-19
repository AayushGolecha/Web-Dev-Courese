// Q1
let marks={
    aayush:78,
    priya:95,
    sonali:90
}
for (let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
}

// Q2
for (const key in marks) {
    const element=marks[key]
   console.log("Marks of "+key+" is "+element)
}

// Q3
let cn=22
let i
while(i!=cn){
    i=prompt("Enter a number")
    if(i!=cn){
        console.log("Wrong number try again")
    }
}
console.log("You have entered right number, congrats")