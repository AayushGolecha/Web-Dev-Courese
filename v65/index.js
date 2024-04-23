console.log("Factorial Calculator")
let num=prompt("Enter a number for which you want to find factorial")
let arr=[]
for(let i=1;i<=num;i++){
    arr.push(i)
}
console.log(arr)
let fact=arr.reduce((x,y)=>{
    return x*y
})
console.log(`Factorial of ${num} is ${fact}`)