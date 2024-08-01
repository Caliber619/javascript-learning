const marvel_heros = ["thor","ironMan","spiderMan"];
const dc_heros = ["sperman","badman","flashLight"];

// marvel_heros.push(dc_heros)  //will push array2 into array1 as a data

// console.log(marvel_heros)

//instead this is how we should merge
const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);
console.log("hello")

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)