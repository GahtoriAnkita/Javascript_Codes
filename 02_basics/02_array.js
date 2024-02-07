const marvel_heros = ["thor",'Iroman',"spiderman"]
// marvel_heros[0]="blue";
// console.log(marvel_heros);
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//Spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[4,5]]];
console.log(anotherArray)
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Ankita"))
console.log(Array.from("Ankita"))
console.log(Array.from({name : "Ankita"}))  //Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
