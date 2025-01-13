const marvel_heros = ["thor","ironMan","spiderMan"];
const dc_heros = ["sperman","badman","flashLight"];

// marvel_heros.push(dc_heros)  //will push array2 into array1 as a data

// console.log(marvel_heros)

//instead this is how we should merge
const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);
console.log("hello")


//spread operator ...(why? because concat has a limitation of only one argument)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


//flat function (give depth in brackets)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

//from function (Ex. ek string se array bana do Array.from("kshitij"))
//to convert different formats into array
console.log(Array.isArray("KSHITIJ"))
console.log(Array.from("KSHITIJ"))
console.log(Array.from({name:"KSHITIJ"})) //interesting


// "of" function (Ex. kis kis ka array banana hai? Array.of(score1,score2))
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))