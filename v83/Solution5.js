// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(arr){
    let result=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            result += arr[i]
        }
        else{
            return result
        }
    }
    return result
}

let arr=[2,4,6,8,10]
console.log("Result is "+sum(arr))
let arr1=[2,4,-6,8,10]
console.log("Result is "+sum(arr1))
let arr2=[2,-4,6,8,-10]
console.log("Result is "+sum(arr2))