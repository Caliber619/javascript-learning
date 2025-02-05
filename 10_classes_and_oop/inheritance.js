class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const teacher1 = new Teacher("Jogendra","jaggu@gmail.com","123")
teacher1.addCourse();
const user1 = new User("Rajneesh");
user1.logMe()
teacher1.logMe()
console.log(user1 === teacher1);
