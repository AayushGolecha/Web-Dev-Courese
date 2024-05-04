async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(22)
        },1000)
    })
}

(async function main(){

    let a= await sleep()
    console.log(a)
    let b= await sleep()
    console.log(b)
})()

let [x,y]=[5,22]
console.log(x,y)

let [p,q, ...rest]=[1,2, 7, 9, 11]
console.log(p,q,rest)

const obj={
    a:111,
    b:222,
    c:333
}

let {a,b}=obj
console.log(a,b)

let arr=[2,4,6,8,10]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(arr[0],arr[1],arr[2],arr[3],arr[4]))
console.log(sum(...arr))

function sum(a,b,c,d,e){
    return a+b+c+d+e
}

const a1="the"
const b1="no"
const c={a1,b1}
console.log(c)