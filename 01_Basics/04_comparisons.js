console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log("Null comparison check :");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//The comparision and equality opertaor in js is diferent, the reason is that
//  an equality check == and comparision > < >= <= works differntly 
// comparison convert null to a number, treating it as 0.
console.log("undefined comparison check :");
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);
//avoid above comparisons

//**** strict check : === (check also datatype)
console.log("strick check :");
console.log("2"===2);