"use strict" // treat all JS code as newer version still in moderversions of js is by defaultrun in strict mode

//alert("hello") // we are using node js not browser in broser we can use this but not here

console.log(
    3
    +
    3
)//code readebility that sould be high
// console.log("ram")


let name = "rohit" //string
let age = 18
let isLoggedIn = false


// number => 
// bigint 
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof name)
// console.log(typeof age)


// Datatypes summary

// Primitive : 7 types = [Strings, Numbers, Boolean, null, undefined, Symbol, BigInt]
// Reference Type/ Non premitive = [Array, Objects, Functions]

let symb1 = Symbol('123')
let symb2 = Symbol('123')
console.log(symb1 === symb2)

let arr = [1,2,3,4,5]
console.log(arr)
console.log(typeof arr)

// let myobj = {
//     myName : 'Trixi',
//     age : 32,
//     setAge: ()=>{age = age + 1},
//     // printName : ()=>{console.log(myName)}

// }

// console.log(myobj.myName)
// console.log(myobj.age)
// myobj.setAge()
// // myobj.printName()
// console.log(myobj.age)

let myobj = {
    myName : 'Trixi',
    age : 32,
    setAge: function() { this.age = this.age + 1 }
}

let myfunction = (a,b) =>{
    console.log(a + b)
}

console.log(myobj.myName)
console.log(myobj.age)
myobj.setAge() // Call the function
console.log(myobj.age)
console.log(typeof myobj)

myfunction(5,10)
console.log(typeof myfunction)

let myobj2 = myobj

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non Primitive)