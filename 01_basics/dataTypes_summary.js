// Primitive Data Types in JavaScript

// 7 types : String, Number, BigInt, Boolean, Undefined, Null, Symbol

const name = 'Hassan'
const score = 100
const scoreValue = 100.54

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('1234')
const id2 = Symbol('1234')

console.log(id === id2);

const bigNumber = 214235484694644039743n // BigInt

// Reference Data Types in JavaScript (Non-primitive)

// Array, Objects, Functions

const heroesArray = ['superman', 'batman', 'ironman']

let myObject = {
    name: 'Hassan',
    age: '23'
}

const myFunction = function(){
    console.log('Hello World');
}

console.log(typeof outsideTemp);  // object
console.log(typeof heroesArray);  // object
console.log(typeof myObject);  // object
console.log(typeof myFunction);  // function
