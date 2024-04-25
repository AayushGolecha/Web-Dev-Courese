let button=document.getElementById("btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML ="<b>Hoorah! I was Clicked</b>"
    // alert("Yes")
})
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML ="<b>Hoorah! I was double Clicked</b>"
})
button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML ="<b>Hoorah! I was right Clicked</b>"
})
button.addEventListener("keydown", (e)=>{
    console.log(e)
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})

// document.getElementsByClassName("cont").addEventListener("mousemove", changeColor)
// function changeColor(){
//     document.getElementsByClassName("cont").style.color="red"
// }
document.getElementById("red").addEventListener("mousemove", changeColor)
function changeColor(){
    document.getElementById("red").style.color="red"
}
function removeColor(){
    document.getElementById("red").removeEventListener("mousemove", changeColor)
}


document.getElementById("myDIV") 
.addEventListener("mousemove", myFunction); 

function myFunction() { 
document.getElementById("myDIV") 
            .style.color= "green"; 
} 

function removeHandler() { 
document.getElementById("myDIV") 
.removeEventListener("mousemove", myFunction); 
} 