//es6

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("caliber","cali@gmail.com","123")
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());


//behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}abc`
}
const user11 = new User("cali","cal@gmail.com","12345")
console.log(user11.encryptPassword());
console.log(user11.changeUserName()); 

