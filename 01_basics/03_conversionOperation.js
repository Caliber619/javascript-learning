let score = 33
let score2 = true

console.log(typeof score);
console.log(typeof (score2));

let valueInNumber = Number(score2);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc" => NaN
// true =>1; false =>0

let isLoggedIn = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
// "" => false
// "Kshitij" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)



// *************************** Operations ****************************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = "Kshitij"

let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+ "2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2")


let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100;
++gameCounter;

console.log(gameCounter);