const accountId = 144553
let accountEmail = "ankita@goggle.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountstate;
/*Perefer not to use of var because of issue in block and functional scope*/

// accountId = 2 // not allowed
accountEmail = "fgh@google.com"
accountPassword = "54654"
accountCity = "haryana"

// console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])