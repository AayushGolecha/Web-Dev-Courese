// Q1
let box=document.querySelector(".navbar").children
box[0].style.color="Red"

// Q3
console.log(document.body.children[2].firstElementChild)
document.body.children[2].firstElementChild.style.color="green"
document.body.children[2].lastElementChild.style.color="green"

// Q4
let boxes=document.querySelectorAll(".list").forEach(e=>{
    e.style.backgroundColor="cyan"
})
