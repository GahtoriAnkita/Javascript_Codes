
// kitne argumnets aane whle h uss hisb se parameter tayrr krne hote h ----> usually in E-cart or shopping cart in this user added products and we dont know the no of items and had to add price of all---> in this case use rest or spread operator

// function calaculateCartPrice(...num1){
//     return num1;
// }
// console.log(calaculateCartPrice(200,400,500));

function calaculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calaculateCartPrice(200, 400, 500));


//Objects=============================================

const user = {
    username: "Ankita",
    price: 499,
}

function handelObject(anyobejct) {
    console.log(`username is ${anyobejct.username} and price is ${anyobejct.price}`); // check price safety
}
// handelObject(user);

handelObject({
    username: "Ankita",
    price: 499,
})

// array ======================================================================>

const myNewArray = [200,400,600,100];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));