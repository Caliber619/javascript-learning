// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// //ab create ke baad consume karni h promise ***
// promiseOne.then(function(){
//     console.log("promise consumed");
// })  // connection h 'resolve' ke sath

// ---------------------------------------------------------
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("promise 2 consumed");
    
// })

// ---------------------------------------------------------

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//----------------------------------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "kshitij", password: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

//----------------------------------------------------------


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()