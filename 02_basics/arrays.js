//  array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["thor", "ironman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

// array methods

myArr.push(6);
myArr.push(7);
myArr.pop(); // last value removed

myArr.unshift(3);
myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

console.log("A ", myArr);  //  original array

const matrix = myArr.slice(1, 3);
console.log("B ", myArr); //  slice gives value but doesnt change original array
console.log(matrix);

const matrix2 = myArr.splice(1, 3);
console.log("C ", myArr);  //  splice retrives values from original array
console.log(matrix2);
