const marvel_heros = ["thor","ironMan","spiderMan"];
const dc_heros = ["sperman","badman","flashLight"];

marvel_heros.push(dc_heros)  //will push array2 into array1 as a data

// console.log(marvel_heros)

//instead this is how we should merge
marvel_heros.concat(dc_heros);
console.log(marvel_heros);
console.log("hello")
