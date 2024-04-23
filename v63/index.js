let arr = [1, 3, 5, 7, 9]

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

arr[0]=22
console.log(arr)

// methods in array

console.log(arr.toString())

console.log(arr.join(" and "))

arr.pop()
console.log(arr)

arr.push("Karan")
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift("Aayush")
console.log(arr)

delete arr[3]
console.log(arr)
console.log(arr.length)
console.log(arr[3])

let a=[22, 9, 2000]
console.log(arr.concat(a))
let b=["Kishangarh", "Rajasthan"]
console.log(arr.concat(a, b))

let c=[4, 8, 5, 9, 2, 1]
console.log(c.sort())

let d=[2, 4, 6, 8, 10, 12, 14]
console.log(d)
console.log(d.splice(2,3))
console.log(d)
console.log(d.splice(2, 1, 22, 33))
console.log(d)

let x=[1, 4, 7, 10, 13]
console.log(x)
console.log(x.slice(2))
console.log(x)
console.log(x.slice(1,3))

console.log(x.reverse())
console.log(x)