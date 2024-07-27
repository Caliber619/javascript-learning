// primitive values goes in stack and non primitives in heap

let myName = "kshitij";
let otherName = myName;
otherName = "caliber";

console.log(myName);

console.log(otherName)

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "user2@gmail.com";
userTwo.upi = "user2@yble";

console.log(userOne.email)
console.log(userTwo.email)


