const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


//-----------------

// const promise = new Promise()
// const date = new Date()

//-----------------

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`hello ${this.username}`);
    }
    return this;
}
const userOne = new User("hitesh",12,true)
const userTwo = new User("Kshitij",12,false)
console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);


