console.log("This is loops tutorial")

let a=1
for (let i = 0; i < 6; i++) {
    console.log(a+i)
}

let obj={
    name: "Aayush",
    "Job Role":"Developer",
    Id:55
}
for (const key in obj) {
        const element = obj[key];
    console.log(key, element)
}

let b="Aayush"
for (const i of b) {
    console.log(i)
}

let i1=0
while(i1<5){
    console.log(i1)
    i1++
}

let x=0
do {
    console.log(x)
    x++
} while ( x<3);