//reduce

//mostly used in the shopping cart
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0) //here 0 is the initial value that we give to the accumulator and at the end of an iteration the output value is our new accumulator value

// console.log(myTotal);


// now lets try to do it with an arrow function
const myTotal2 = myNums.reduce((acc,curr)=> acc+curr, 0)
// console.log(myTotal2);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay= shoppingCart.reduce((acc,item)=> (acc+ item.price),0)
console.log(priceToPay);
