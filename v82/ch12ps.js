console.log("Script Started")

// Q1
async function print(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}
(async function main() {
    let text = await print("Hello")
    console.log(text)
    text = await print("World")
    console.log(text)
})()

// Q2
let arr = [1, 3, 5, 7, 9]
console.log(avg(...arr))
function avg(a, b, c, d, e) {
    return a + b + c + d + e
}

// Q3
function pro(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved in " + n + " seconds")
        }, n * 1000)
    })
}
(async function main1() {
    let n=prompt("Enter the delay")
    let x = await pro(n)
    console.log(x)
})()

// Q4
function SI(p,r,t){
    return (p*r*t)/100
}
let p=prompt("Enter the principal amount")
let r=prompt("Enter the rate of interest")
let t=prompt("Enter the time")
console.log("Simple Interest is "+SI(p,r,t))
console.log("Simple Interest is "+SI(10,10,10))
