// const tinderUser= new Object();  //it is a singleton object

const tinderUser = {};   //it is non-singleton object
tinderUser.id = '123abc';
tinderUser.name = "Ankita";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        usersFullName: {
            firstName: "Ankita",
            lastName: "Gahtori",
        }
    }
}

console.log(regularUser.fullName.usersFullName.firstName);   // ?. ==> Optional chaning

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3 = {obj1,obj2};  //nested obj formed
const obj3 = Object.assign({}, obj1, obj2);  //empty dene se optional hota h ye pr hum jitni bhi value dte h result ye hi aayga {} it is as target
const obj4 = { ...obj1, ...obj2 }; //best method
console.log(obj3);
console.log(obj4);

//syntax used when values are come from database
const users = [
    {
        id: 1,
        email: "ankita@gmail.com"
    },
    {
        id: 1,
        email: "ankita@gmail.com"
    },
    {
        id: 1,
        email: "ankita@gmail.com"
    },
    {
        id: 1,
        email: "ankita@gmail.com"
    },
    {
        id: 1,
        email: "ankita@gmail.com"
    },
]
// console.log(users);
// console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // !important --> Datatype of output is Array 
console.log(Object.values(tinderUser)); // !important --> Datatype of output is Array 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //to check the value if it exist


