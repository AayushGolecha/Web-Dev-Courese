console.log("I am a hacker")
console.log("Aayush")

setTimeout(()=>{
    console.log("I am setTimeout 1")
},5000)
setTimeout(()=>{
    console.log("I am setTimeout 2")
},3000)

console.log("The End")

const fn=()=>{
    console.log("2 callbacks")
}
// const callback=(a)=>{
//     console.log(a)
//     fn()
// }
const loadScript=(src, callback)=>{
    let sc=document.createElement("script")
    sc.src=src
    sc.onload = callback("It Worked")
}


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (a)=>{
    console.log(a)
    fn()
})