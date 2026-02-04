// ... = rest operator

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

// const user = {
//     username: 'hassan',
//     price: 199
// }

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
// handleObject({
//     username: 'hassan',
//     price: 199
// })

const myNewArray = [200, 400, 600, 800];
// dont focus on myNewArray as its a generic name just focus on getArray as it is what u r getting as a parameter in ur function
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
