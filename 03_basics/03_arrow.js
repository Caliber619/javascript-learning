const user = {
    userName: "caliber",
    price: 999,

    //"this." is use to refer current context
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);   // to know the current context of this object
    }
}

// user.welcomeMessage()
// user.userName = "dev"    //here context is changed so we will get a different value
// user.welcomeMessage()

// console.log(this);      // context is an empty object
// but if we will do this in the browser we will get a "window object"!!


// ++++++++++++++++++++++++++++++++++++++++++ --------------------------

function chai(){
    let user = "caliber"
    console.log(this);   //here also "this" will not work with(this.user)(* it will give something if only "this" alone is used) function as it only works with object
     
}
// chai()


// arrow function 
const chai2 = () => {
    let user= "dev"
    console.log(this);   //still we can not use "this"//here also "this" will not work with(this.user)(* it will give {} if "this" alone is used) so basically this is not used with arrow function
}
// chai2()


// ----------------------------- arrow function main cheeze

const addTwo = (num1,num2) => {
    return num1+num2;
}
// console.log(addTwo(3,4));

//implicit declaration
const addTwo2 = (num1,num2) => (num1+num2);
// console.log(addTwo2(5,5));


//but what if we need to return an object?  -- we will have to use paranthesis()
const func = () => ({userName: "kshitij"});
// console.log(func);


// also used in loops

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=> ({}))


