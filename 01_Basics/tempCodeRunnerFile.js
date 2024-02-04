


let myCreateDate = new Date(2023, 0, 23);  //Month zero se start hota h 
let myCrDate = new Date("01-14-2023");  //Month zero se start hota h 
console.log(myCreateDate.toDateString());
console.log(myCrDate.toLocaleString());

//Time stamp uses in quizes, polls , kisne fastest diya h usko winner banna h
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCrDate.getTime());
console.log(Math.floor(Date.now() / 1000));



