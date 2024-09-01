
//code
// const tinderUser= new Object()     // singleton object
const tinderUser = {}                   // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "kshitij",
            lastName: "dev"
        }
    }
}

// ? is sign for one or zero, i.e. exists or don't exist 
// console.log(regularUser.fullName?.userFullName.firstName)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "first@gmail.com"
    },
    {
        id: 1,
        email: "second@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
    
]
console.log(users[0].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));  //ans- false

