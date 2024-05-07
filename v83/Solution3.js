// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

const mirror=(str)=>{
    let result=""
    for(let i=str.length;i>0;i--){
        x=str[i-1]
        // console.log(x)
        result += x
        // console.log(result)
    }
    return result
}

let str="Aayush"
let res=mirror(str)
console.log(str.concat(res))
