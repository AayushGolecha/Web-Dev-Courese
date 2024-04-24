// let ran = Math.floor(Math.random() * 5)
// console.log(ran)

// if (ran == 0) {
//     document.querySelectorAll(".box").forEach(e => {
//         e.style.background = "yellow"
//         e.style.color="grey"
//     })
// }
// if (ran == 1) {
//     document.querySelectorAll(".box").forEach(e => {
//         e.style.background = "greenyellow"
//         e.style.color="blue"
//     })
// }
// if (ran == 2) {
//     document.querySelectorAll(".box").forEach(e => {
//         e.style.background = "aqua"
//         e.style.color="red"
//     })
// }
// if (ran == 3) {
//     document.querySelectorAll(".box").forEach(e => {
//         e.style.background = "pink"
//         e.style.color="purple"
//     })
// }
// if (ran == 4) {
//     document.querySelectorAll(".box").forEach(e => {
//         e.style.background = "beige"
//         e.style.color="brown"
//     })
// }

let boxes = document.getElementsByClassName("box")
let box = document.querySelector(".container").children
console.log(box)
function randomColor(){
    let val1=Math.floor(Math.random()*255)
    let val2=Math.floor(Math.random()*255)
    let val3=Math.floor(Math.random()*255)
    return `rgb(${val1} ${val2} ${val3})`
}
Array.from(box).forEach(e=>{
    e.style.color= randomColor()
    e.style.background= randomColor()
})
