//koi bhi code ko package m bnd kr diya h
function sayMyName() {
    console.log("A");
}

// sayMyName   // ye hota h reference
sayMyName();  //ye execute ho gya

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNum(3,null);
function addTwoNum(num1, num2) {
    // let result = num1 + num2;
    // return result;
    // console.log("Ankita");
    return num1 + num2;
}
addTwoNum(3, 5);
const result = addTwoNum(3, 5);
console.log("Result is:", result); //value is not return

function loginUserMessage(username="Ankita"){
    return `${username} just logged in`;
}
// loginUserMessage("Ankita") //nothing will display
console.log(loginUserMessage("Ankita"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


