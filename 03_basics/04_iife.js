// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB connected`)
})();
// global scope ke pollution ko hatane ke liye iife ka use kia ()()


//but we need to stop the context (iife need to stop the context by ;)
( function chaiAURcode() { //this is a named iife
    console.log(`db connected`);
})();

( (name)=> {
    console.log(`db connected ${name}`);
})("kshitij");  //()used to pass the arguments

