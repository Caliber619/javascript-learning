const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));


//**********************MATHS************************* */

console.log(Math);   //shows it's an object
console.log(Math.abs(-4));
console.log(Math.round(12.2));
console.log(Math.ceil(12.2));
console.log(Math.floor(12.2));

console.log(Math.random()); //humesha value 0 and 1 
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) + 1); // zero aane se rokne ke liye 1 add kia

const min = 10
const max = 20//indono ke beech ka chahiye

console.log(Math.floor(Math.random() * (max-min +1)) + min)//max and min ke beech me aaye but min se zada to aae hi aae
