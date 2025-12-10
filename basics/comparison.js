console.log('2' > 1);
console.log('02' > 1);

// avoid these types of conversions

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0); 

// ===  strict check (check data types too)

console.log("2" === 2);

