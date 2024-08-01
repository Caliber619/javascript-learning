//objects

//object.create
//singleton (apne tarh ka ek hi object hota hai)//koi bhi constructor se banate h to singleton object banta hai
//literals se banega to singleton nahi banega



//object literals


//objects me key:value pair se chalta hai kaam
const mySym = Symbol("key1")
const jsUser = {
    name: "Kshitij",
    [mySym]: "mykey1",              //important
    age: 20,
    location: "Orai",
    email: "kshitij@gmail.com",
    isLoggedIn: false
} //to ye singleton nahi hoga


console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])
// console.log(typeof jsUser.mySym)


// Object.freeze(jsUser)             //important
jsUser.email = "kshitij123@gmail.com"
console.log(jsUser.email)



//functions
jsUser.greeting = function(){
    console.log("hello world")

}
jsUser.greeting2 = function(){
    console.log(`hello world, ${this.name}`)

}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
