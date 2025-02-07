// const descrpitor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descrpitor);



// console.log(Math.PI);

const calObject = {
    name:"caliber",
    price:2500000,
    isAvailable:true,

    orderChai : function(){
        console.log("chai nahi bani")
    }
}
console.log(calObject)
//can we now set the descriptor values differently?  yes!
console.log(Object.getOwnPropertyDescriptor(calObject,"name"))

//----now we can define the properties too
Object.defineProperty(calObject,'name',{
    // writable: false,
    enumerable: true
})
// console.log(Object.getOwnPropertyDescriptor(calObject,"name"))
//----now it has changed


//------- ye run krega aacche se agar object me function na ho to and 
// for (let [key,value] of Object.entries(calObject)) {
//     console.log(`${key}:${value}`);
// }

//------- ab function ke hone ke baad bhi acche se run krega

for (let [key,value] of Object.entries(calObject)) {
    if(typeof value !== 'function' ){
        console.log(`${key}:${value}`);
    }
}