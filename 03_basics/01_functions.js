// console.log("K");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T");
// console.log("I");
// console.log("J");

function sayMyName(){
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("J");    
}

// sayMyName()

function addTwoNumbers(num1,num2){ //num1 and num2 are parameters
    console.log(num1+num2);
}
// addTwoNumbers(3,4)               // 3 and 4 are arguments
// addTwoNumbers("3",4)
// addTwoNumbers(3,null)

// const result = addTwoNumbers(3,5)
// console.log(result)               //will give undefined

function addTwoNumbersNew(num1,num2){ //num1 and num2 are parameters
    let result = num1+num2;
    return result;
    console.log("Kshitij")        // won't print because result is already returned

}
console.log(addTwoNumbersNew(5,5))
const ans = addTwoNumbersNew(5,4)
console.log(ans)


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Kshitij"))


function loginUserMessageNew(username){
    if(username === undefined){             //can be written as if(!username){--}
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}