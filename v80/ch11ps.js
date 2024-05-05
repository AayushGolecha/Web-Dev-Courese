
// Q1 & Q2
class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}
let c=new Complex(2, "i5")
console.log(c)
let a=new Complex(2, 4)
let b=new Complex(4, 2)
a.add(b)
console.log(a)
console.log(a.real, a.imaginary)

// Q3
class Human{
    constructor(name){
        this.name=name
    }
    walks(){
        console.log(this.name + " Human is Walking")
    }
}
class Student extends Human{
    walks(){
        // super.walks()
        console.log(this.name + " Student is Walking")
    }
}

let h=new Human("Aayush")
console.log(h)
console.log(h.walks())
let s=new Student("Karan")
console.log(s)
console.log(s.walks())

// Q4
console.log(s instanceof Student)
console.log(s instanceof Human)
console.log(h instanceof Student)
console.log(h instanceof Human)

// Q5
class Comp {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set real(newReal){
        this._real = newReal
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }
}
let n=new Comp(5,10)
console.log(n)
console.log(n.real, n.imaginary)
n.real=50
n.imaginary=100
console.log(n)
console.log(n.real, n.imaginary)