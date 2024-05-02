let a = prompt("Enter first number")
let b = prompt("Enter second number")

let sum = parseInt(a) + parseInt(b)
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("The entered value is not numbers")
}

// let x=2
function main() {

    try {
        console.log("The sum is ", sum * x)
        return true
    } catch (error) {
        // console.log("Error found")
        alert(error.name)
        alert(error.message)
        alert(error.stack)
        return false
    }
    finally{
        console.log("All files are being closed and connection to DB is closed")
    }
    
}
main()
