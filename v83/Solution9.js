// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

let order1 = ["1kg orange", "5kg rice", "10kg sugar", "1litre milk"]
placeOrder(order1).then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})

let order2 = []
placeOrder(order2).then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})


async function placeOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (order.length == 0) {
                reject("Cart is empty")
            }
            else {
                resolve("Order Placed")
            }
        }, 5000)
    })
}
