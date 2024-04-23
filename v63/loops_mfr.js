let arr=[1,14, 6, 5, 11]
for (let i = 0; i < arr.length; i++) {
    const element = arr [i];
    console.log(element)
}

arr.forEach(element => {
    console.log(element)
});

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(key, element)
    }
}

for (const i of arr) {
    console.log(i)
}

let newArr = arr.map(e=>{
    return e**2
})
console.log(newArr)
let newArr1 = arr.map(e=>{
    return e
})
console.log(newArr1)

let a = arr.filter(e=>{
    if(e>5){
        return true
    }
    return false
})
console.log(a)

let b = arr.reduce((a,b)=>{
    return a+b
})
console.log(b)