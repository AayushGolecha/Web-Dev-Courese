
// Q1
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let sc = document.createElement("script")
        sc.src = src
        sc.onload = () => {
            resolve(src + " Done ")
        }
        document.head.append(sc)
    })
}
let x = loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
x.then((value) => {
    console.log(value)
    alert("Script Is Loaded")
})

// Q2
const main = async () => {
    // console.log(new Date().getMilliseconds())
    let a = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
    console.log(a)
    alert("Script fully loaded")
    // console.log(new Date().getMilliseconds())
}
main()

// Q3
let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is not acceptable"))
        }, 3000)
    })
}

const run = async () => {
    try {
        let a = await p1()
        console.log(a)
    } catch (error) {
        console.log("This error is being handled")
    }
}
run()

// Q4
let pro1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pro1")
        }, 2000)
    })
}
let pro2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pro2")
        }, 1000)
    })
}
let pro3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pro3")
        }, 3000)
    })
}

const main2 = async ()=> {
    console.time("run")
    let a1 = await pro1()
    let a2 = await pro2()
    let a3 = await pro3()
    console.log(a1, a2, a3)

    // let a1 = pro1()
    // let a2 = pro2()
    // let a3 = pro3()
    // let All= await Promise.all([a1,a2,a3])
    // console.log(All)
    console.timeEnd("run")
}
main2()