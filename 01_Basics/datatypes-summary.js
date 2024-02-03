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

// # Reference (Non-Primitive)  --> (call by reference)

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


// +++++++++++++++++++++++++++++++++-- Stack and Heap --+++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Premitive)

let myName = "Ankita";
let anotherName = myName;
anotherName = "Anku";

console.log(myName);
console.log(anotherName);

let userone = {
    name : "aarti",
    rollno : 1,
}

let userTwo = userone;
userTwo.name = "Aastha";
userTwo.rollno=4;

console.log(userTwo);
console.log(userone);


