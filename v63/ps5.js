// Q1
let a=[2,4,6,8,10]
console.log(a)
let n=prompt("Enter a number to add in array")
a.push(n)
console.log(a)

// Q2
let b=[1,3,5,7,9]
let num
while(num!=0){
    num=prompt("Enter a number to add in array")
    if(num>0){b.push(num)}
}
console.log(b)

// Q3
let c=[5, 20, 15, 7, 50, 70]
console.log(c)
let fil=c.filter(e=>{
    if(e%10==0){
        return true
    }
    return false
})
console.log(fil)

// Q4
let newArr=a.map(e=>{
    return e**2
})
console.log(newArr)

// Q5
let number=prompt("Enter a number for factorial")
let d=[]
for(i=0;i<number;i++){
    d.push(i+1)
}
console.log(d)
let fact=d.reduce((a,b)=>{
    return a*b
})
console.log(`Factorial of ${number} is `,fact)