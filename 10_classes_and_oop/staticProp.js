//in the file name prop = properties

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const user1 = new User("Kshitij")
console.log(user1.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}
const teacher1 = new Teacher("Jaggu","jags@gmail.com")
teacher1.logMe();
console.log(teacher1.createId())
