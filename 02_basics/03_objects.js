// object --> declared in two ways ---> 1. Literal (isme singleton nhi hota h)  2. Constructor
// singleton --> koi bhi constructor se banate h toh vo singleton hota h only single istances
// object.create  ---> singleton

//objects Literals

const mySym = Symbol("key1");

const Jsuser = {
    //key and value is defined
    name: "Ankita",
    "full name": "Ankita Gahtori",
    [mySym] : "myKey1",
    age: 21,
    location: "Delhi",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}
console.log(Jsuser.name);
console.log(Jsuser["name"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
console.log(typeof mySym);


Jsuser.email = "ankita@mail.com";
Object.freeze(Jsuser);

function g1(){
    return xy;
}
let x= g1;
console.log(x);  //it return whole function

