//Dates

let myDate = new Date()
console.log(myDate);     //not readable

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0,23);
console.log(myCreatedDate.toDateString());

let myDate2 = new Date("2023-01-14")
console.log(myDate2.toLocaleString());

//timestamps below
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate.getDate())
console.log(newDate.getDay())


console.log(`${newDate.getDay()} and the time`)//string Interpolation


newDate.toLocaleString('default',{
    weekday: "long",

})
console.log(newDate)