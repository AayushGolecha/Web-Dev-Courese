console.log("Its Working")

let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.background="yellow"
boxes[3].style.background="aqua"
boxes[0].style.color="red"

document.getElementById("greenbox").style.backgroundColor="Greenyellow"

document.querySelector(".box").style.backgroundColor="azure"

console.log(document.querySelectorAll(".box1"))
document.querySelectorAll(".box1").forEach(e => {
    e.style.background="orange"
});

let e=document.getElementsByTagName("div")
console.log(e)

console.log(e[3].matches("#greenbox"))
console.log(e[2].matches("#greenbox"))
console.log(e[3].closest("#greenbox"))
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))