const coding  = ["js","ruby","java"]

//------andar call back function use hota hai for each loop me
// coding.forEach( function (item) {console.log(item)} )


//------now using arrow function (udhar bhi name nahi liya tha so idhar bhi name nahi lenge)
// coding.forEach( (item) => {console.log(item)})


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })


//array ke andar objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//now how to iterate

myCoding.forEach((item)=> {

    console.log(item.languageFileName);
    
})