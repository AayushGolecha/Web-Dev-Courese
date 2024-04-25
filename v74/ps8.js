// Q1
document.querySelector(".a1").addEventListener("click", (e) => {
    alert("It is Alert 1")
})
document.querySelector(".a2").addEventListener("click", (e) => {
    alert("It is Alert 2")
})
document.querySelector(".a3").addEventListener("click", (e) => {
    alert("It is Alert 3")
})

// Q3
document.getElementById("insta").addEventListener("click", ()=>{
    // window.location="https://instagram.com"
    window.open("https://instagram.com","_blank")
})
document.getElementById("twit").addEventListener("click", ()=>{
    // window.location="https://twitter.com"
    window.open("https://twitter.com","_blank")
})
function add() {
    let x = prompt("Enter website name")
    let y = prompt("Enter website url")
    // let btn=document.createElement("a")
    // let b=btn.createElement("button")
    // btn.innerHTML = btn.innerHTML + x
    // btn.href.innerHTML = y
    let btn = `<a href="${y}">
                    <button class="a">${x}</button>
               </a>`
    document.querySelector(".cont").innerHTML = document.querySelector(".cont").innerHTML +  btn
}

// Q4
let a=setInterval(()=>{
    let c=document.body
    console.log(c)
},5000)
clearInterval(a)

// Q5
console.log(document.querySelector(".box").classList)
function glow(){
    document.querySelector(".box").classList.toggle("glow")
}
