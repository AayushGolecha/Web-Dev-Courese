function name(n){
    console.log("Hey this is "+n+" and I am fine.")
    console.log(n+" is a software engineer")
}
name("Aayush")
name("Priya")

function sum(a,b){
    console.log(a+b)
}

sum(4,5)
sum(22, 9)

function sum1(a,b){
    return a+ b
}
result=sum1(1,5)
console.log(result)

function sum2(a,b,c=3){
    console.log(a+b+c)
}
sum2(4,5)
sum2(4,5,6)

const func = (x)=>{
    console.log("Hi, I am ",x)
}
func(12)
func(20)
func(22)

// Quick Quiz
const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
res=mean(5,10,15,20,25)
console.log("Mean of the given 5 numbers is",res)
res1=mean(2,6,10,14,18)
console.log(res1)