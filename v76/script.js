function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5000)
        }, 3500)
    })
}

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    // let data = await x.text()
     console.log(data)
   return data
}

async function main(){

    console.log("Script has started running")
    
    console.log("load data")
    
    let data = await getData()
    console.log(data)
    
    console.log("process data")
    
    console.log("task 2")
    
    console.log("Script runned successfully")
}
main()

// data.then((v) => {
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

//     console.log("Script runned successfully")
// })
