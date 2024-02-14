// scopes ---> Eet , var , const
// let a=10;
// const b=20;
// var c=30; 
// {} ===> it is a scope object m {} object declaretation ke liye hote h or agr if, else or function {} vha par y e scope hota h
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a);  //==> because it has local / block scope 
// console.log(b);  ==> because it has local / block scope 
console.log(c);     //==> because it has global scope 
