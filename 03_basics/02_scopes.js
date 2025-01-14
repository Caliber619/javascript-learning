// a fight between: "let" "var" "const"
let a = 400
if(true){
    let a = 10
    const b = 20
    var c = 30    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "kshitij"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}
// one()

if(true){
    const username = "kshitij"
    if(username==="kshitij"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)


// ++++++++++++ interesting +++++++++++++ //

//is case me declaration se phle use krskte h function ko
console.log(addOne(5))   //no error
function addOne(num){
    return num + 1;
}

// declaring a function as an expression and if we will log this function before the actual declaration it will show error 
// addTwo(5);  // error
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5))   //no error