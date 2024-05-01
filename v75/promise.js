console.log("This is promises")

// let prom1= new Promise((resolve,reject)=>{
//     let a=Math.random()
//     console.log(a)
//     if(a>0.5){
//         reject("Random number was greater than 0.5")
//     }
//     else{
//         setTimeout(()=>{
//             console.log("Yes I am done")
//             resolve("Working")
//         },2000)
//     }
// })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let pro1= new Promise((resolve,reject)=>{
    let a=Math.random()
    console.log(a)
    if(a>0.5){
        reject("Random number was greater than 0.5 1")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 1")
            resolve("Working 1")
        },5000)
    }
})
let pro2= new Promise((resolve,reject)=>{
    let a=Math.random()
    console.log(a)
    if(a>0.5){
        reject("Random number was greater than 0.5 2")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2")
            resolve("Working 2")
        },8000)
    }
})
let pro3= new Promise((resolve,reject)=>{
    let a=Math.random()
    console.log(a)
    if(a>0.5){
        reject("Random number was greater than 0.5 3")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 3")
            resolve("Working 3")
        },3000)
    }
})
let pro4= new Promise((resolve,reject)=>{
    let a=Math.random()
    console.log(a)
    if(a>0.5){
        reject("Random number was greater than 0.5 4")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 4 ")
            resolve("Working 4")
        },10000)
    }
})

// let p1=Promise.all([pro1, pro2, pro3, pro4])
// p1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p2=Promise.allSettled([pro1, pro2, pro3, pro4])
// p2.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// let p3=Promise.race([pro1, pro2, pro3, pro4])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p4=Promise.any([pro1, pro2, pro3, pro4])
p4.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})