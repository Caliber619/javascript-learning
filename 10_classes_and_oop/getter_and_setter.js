class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    //getter h to setter bhi hona pdega
    // and benefit h ye ki database me kuch bhi set kro and get karte time kuch bhi modify krke deskte ho user will never know
    set password(value){
        this._password = value;
    }
    get password(){
        return this._password.toUpperCase();
    }  


    set email(value){
        this._email = value
    }
    get email(){
        return this._email.toUpperCase()
    }
}

const caliber = new User("cali@gmail.com","abc")
console.log(caliber.password)
console.log(caliber.email)