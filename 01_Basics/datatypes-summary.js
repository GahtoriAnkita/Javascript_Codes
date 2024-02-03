// # Premitive --> call by value 

// 7 types : String, Number, Null, Boolean, undefined, Symbol (kisi bhi value ko unique banne ke liye use krte h), BigInt

// Javascript is a Dynamic type Lanaguage
const score = 100;
const scoreValue = 100.3;

const isLogIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 5425425n;

// # Reference (Non-Primitive)

// ---> Array, Objects, Functions
const heros = ["ram", "reeta", "faran"];
let myObj = {
    name: "Ankita",
    age: 22,
}

const myFun = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);