const name = "kshitij"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Ksh-itij-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));


//String Methods
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   kshitij   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kshitij.com/kshitij%20dev";
//to remove this %20
url.replace('%20', '-');//this wont give output because of stack memory
console.log(url.replace('%20', '-'));//this will give you output by replacing %20
console.log(url.includes('kshitij'))

//converting string to array based on -," ",/ etc
console.log(gameName.split('-'))




