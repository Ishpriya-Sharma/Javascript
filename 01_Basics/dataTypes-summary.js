/*
// Primitive

const { useImperativeHandle } = require("react");

// 7 types : String, Number, Boolean, null, underfined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsdeTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 6258153751682665n

//Refrence (Non Perimitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "Ishpriya",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

console.log(typeof outsdeTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myname = "Ishpriya";
let anothername = myname;
anothername = "Pihu";

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
};

let userTwo = userOne;

userTwo.email = "hdsi@google.com";

console.log(userOne.email);
console.log(userTwo.email);