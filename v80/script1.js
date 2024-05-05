let ob={
    a:1,
    b:"aayush"
}
console.log(ob)

let animal = {
    eats:true
}
let rabbit = {
    jumps:true
}

rabbit.__proto__= animal

class Animal{
    constructor(name){
        this.name=name
        console.log("Object is created")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Jump kar raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Lion object created")
    }
    eats(){
        super.eats()
        console.log("I'm Eating")
    }
    roar(){
        console.log("Lion is roaring")
    }
}

let a = new Animal("bunny")
console.log(a)
let l = new Lion("Shera")
console.log(l)