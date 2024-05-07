// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

let coffeeType="Latte"
brewCoffee(coffeeType).then((a)=>{
    console.log(a)
})

async function brewCoffee(type){
    let r=Math.floor(Math.random()*5 +1)
    console.log(r)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Your ${type} coffee is ready`)
        },1000*r)
    })
}
