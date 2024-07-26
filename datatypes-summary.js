// #Primitive datatypes (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score= 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12332523415415155n

// #Non-Primitive datatypes (call by reference)

// Array, Objects, Functions

const heros = ["Shaktiman","Naagraj", "Doga"];
let myObj = {
    name: "kshitij",
    age: 20,

}
console.log(myObj);

const myFunction = function(){
    console.log("Hello Kshitij")
}
myFunction()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures