const score = 400;

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //used commonly used in e-commerce website

const anotherNumber = 23.8966;
// console.log(anotherNumber.toPrecision(4))   // exact value  = precised value

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // Absolute value
// console.log(Math.round(4.2));  // Rounding of value
// console.log(Math.ceil(4.2));  // Top of value
// console.log(Math.floor(4.9));  // Floor of value
// console.log(Math.min(4,6,8,3,2));  //  maximum value
// console.log(Math.max(4,6,8,3,2));  // minimum value

// console.log(Math.floor((Math.random() * 10) + 1));  // random value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*((max-min)+1))+min)  // Important
