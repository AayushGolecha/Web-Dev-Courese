console.log("Aayush")
console.log(document.body.childNodes)
console.log(document.body.children)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.firstChild)
console.log(document.body.firstElementChild.firstElementChild)
document.body.childNodes[1].style.color="red"
document.body.firstElementChild.childNodes[1].style.background="yellow"
console.log(document.body.firstElementChild.children[2].previousElementSibling)
console.log(document.body.firstElementChild.children[2].nextElementSibling)
document.body.firstElementChild.children[2].nextElementSibling.style.background="aqua"

console.log(document.body.children[1].rows)

let a=document
let b=window
console.log(typeof a)
console.log(typeof b)
