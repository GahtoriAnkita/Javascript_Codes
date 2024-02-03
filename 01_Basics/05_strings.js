const name = "Ankita";
const repoCount = 10;

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)     //string interpolation ---> many things on a go

const gameName = new String('Ankita-Gahtori')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(6,4);
console.log(newString);

const anotherString = gameName.slice(0,3);
console.log(anotherString);


const newStringOne = "   Ankita    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());


