// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const doubleElements=(arr)=>{
    const result=[]
    for(let i=0;i<arr.length;i++){
        if(i<arr[i]-1 && arr[i]==arr[i+1]){
            result.push(arr[i])
        }
        else{
            result.push(arr[i]*2)
        }
    }
    return result
}

let arr=[2,4,4,6,8,8,10]
let newArr=doubleElements(arr)
console.log(newArr)