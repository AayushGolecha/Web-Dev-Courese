let a=prompt("Enter a number")
a=Number.parseInt(a)
console.log(a)
let b=prompt("Enter a number")
b=Number.parseInt(b)
console.log(b)
let cal=prompt("Enter the operation")
console.log(cal)
// let a=5
// let b=6
// let cal="add"
let x=Math.floor(Math.random()*100)+1
console.log(x)

// Right functions
const add=(p,q)=>{
    return p+q
}
const sub=(p,q)=>{
    return p-q
}
const mul=(p,q)=>{
    return p*q
}
const div=(p,q)=>{
    return p/q
}
const expo=(p,q)=>{
    return p**q
}

// Wrong funtions
const add1=(p,q)=>{
    return p-q
}
const sub1=(p,q)=>{
    return p/q
}
const mul1=(p,q)=>{
    return p+q
}
const div1=(p,q)=>{
    return p**q
}
const expo1=(p,q)=>{
    return p+q
}

if(x>10){
    if(cal=="add"){
        result=add(a,b)
    }
    else if(cal=="sub"){
        result=sub(a,b)
    }
    else if(cal=="mul"){
        result=mul(a,b)
    }
    else if(cal=="div"){
        result=div(a,b)
    }
    else if(cal=="expo"){
        result=expo(a,b)
    }
    else{
        console.log("Invalid")
    }
}
else{
    if(cal=="add"){
        result=add1(a,b)
    }
    else if(cal=="sub"){
        result=sub1(a,b)
    }
    else if(cal=="mul"){
        result=mul1(a,b)
    }
    else if(cal=="div"){
        result=div1(a,b)
    }
    else if(cal=="expo"){
        result=expo1(a,b)
    }
    else{
        console.log("Invalid")
    }
}
console.log("The result is",result)