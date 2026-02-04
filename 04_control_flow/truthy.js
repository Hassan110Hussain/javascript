const userEmail = 'hassan@gmail.com'

// if (userEmail) {
//     console.log(`You are logged in with email: ${userEmail}`)
// } else {
//     console.log('Please provide your email')
// }

// falsy values
// false, 0, -0, BigInt 0n, '', null, undefined, NaN

// truthy values
// true, '0', 'false', ' ', [], {}, function(){}

const userEmail2 = []

if (userEmail2.length === 0) {
    console.log('array is empty')
};

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log('object is empty')
}

false == 0 // true
false == '' // true
0 == '' // true

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

// Ternary Operator

// condition ? trueValue : falseValue

const iceAge = 100

iceAge < 50 ? console.log('You are in ice age') : console.log('You are not in ice age');