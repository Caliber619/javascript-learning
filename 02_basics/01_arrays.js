// arrays

const myArr = [0,1,2,3,4,5]
console.log(myArr[0])

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[2])

// array methods
myArr.push(6)
console.log(myArr)
myArr.pop()

console.log(myArr)

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr)


console.log(myArr.includes(9));
console.log(myArr.indexOf(3))


const newArr = myArr.join()
console.log(myArr); 