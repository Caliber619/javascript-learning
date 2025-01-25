const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//if i want to add 10 saare numbers me

// let newNums = myNumers.map((item)=> item+10)
// console.log(newNums);

// newNums = myNumers.filter((item)=> item<10)
// console.log(newNums)


//chaining(and next function me uper wale ke returned value pe operation hoga)
const newNums = myNumers
    .map((item)=> item*10)
    .map((item)=> item+1)
    .filter((item)=> item<15)
    
console.log(newNums);


