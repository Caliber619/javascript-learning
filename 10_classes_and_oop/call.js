function setUserName(username){
    // complex db calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    // setUserName(username)  //method use nahi hora or call nahi hora hai
    // setUserName.call(username) //isse call to hogya but reference hold nahi hua
    setUserName.call(this, username)
    this.email = email;
    this.password = password;

}

const newUser = new createUser("caliber","cali@gmail.com","123")
console.log(newUser);