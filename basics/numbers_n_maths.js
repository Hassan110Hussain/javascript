// Numbers

const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());  // with toString u will have more properties
// console.log(balance.toFixed(2));

const number = 23.3842
// console.log(number.toPrecision(3));

const hundreds = 10000000000
// console.log(hundreds.toLocaleString());


// Maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4, 6, 8, 3, 0, 2));
// console.log(Math.max(4, 6, 8, 3, 0, 2));

console.log(Math.random()); // 0-0.999999
console.log((Math.random()*10) + 1); // 1-10.99999
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10-20
