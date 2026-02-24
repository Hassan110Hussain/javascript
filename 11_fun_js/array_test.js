// implemented differently on v8-debug
const myArr = [];
// %DebugPrint(myArr)

// continuous, Holey

// SMI (small integar)
// Packed element
// Double (float, string, function)

// Packed SMI Element
const arrTwo = [1, 2, 3, 4, 5, 6];

// Packed Double Element
arrTwo.push(6.0);

// Packed Element
arrTwo.push("7");

// Holey Element
arrTwo[10] = 11;

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// just four holes. HOLEY_SMI_ELEMENTS
const arrFour = new Array(4);
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS
arrFour[3] = "4"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];

arrSix.push(Infinity); // DOUBLE

// for, for-of, forEach
