console.log("Random Business Name Generator")
let adj = {
    0:"Crazy",
    1:"Amazing",
    2:"Fire"
}
let r1=Math.floor(Math.random()*3)
console.log(r1)
let str1=""
if(r1==0){
    str1=adj[0]
}
else if(r1==1){
    str1=adj[1]
}
else{
    str1=adj[2]
}
console.log(str1)
let sn = {
    0:"Engine",
    1:"Foods",
    2:"Garments"
}
let r2=Math.floor(Math.random()*3)
console.log(r2)
let str2=""
if(r2==0){
    str2=sn[0]
}
else if(r2==1){
    str2=sn[1]
}
else{
    str2=sn[2]
}
console.log(str2)
let word = {
    0:"Bros",
    1:"Limited",
    2:"Hub"
}
let r3=Math.floor(Math.random()*3)
console.log(r3)
let str3=""
if(r3==0){
    str3=word[0]
}
else if(r3==1){
    str3=word[1]
}
else{
    str3=word[2]
}
console.log(str3)
console.log("Business Name is ",str1,str2,str3)