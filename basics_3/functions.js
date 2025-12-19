function sayMyName() {
  console.log("H");
  console.log("A");
  console.log("S");
  console.log("S");
  console.log("A");
  console.log("N");
}

// sayMyName()

// Right now, I’m just creating the function without focusing on data type safety

// function addTwoNumbers(number1, number2) {
//   //  when u make definition of function so whatever input u take u call them parameters
//   sum = number1 + number2;
//   console.log(sum);
// }

function addTwoNumbers(number1, number2) {
//   let sum = number1 + number2;
//   return sum;  //  after return statement function will stop executing
    return number1 + number2;
}

const result = addTwoNumbers(3, 5); //  when u call the function and pass the values so those values are called arguments

// console.log(result);

// function loginUserMessage(username = "Hassan") {
//   return `Welcome back, ${username}!`;
// }
// console.log(loginUserMessage());

// function loginUserMessage2(username) {
//     return `Welcome back, ${username}!`;
// }
// console.log(loginUserMessage2('Hassan'));

function loginUserMessage2(username) {
    // if (username === undefined) {
    if (!username) {
        return "Username is required";
    }
    return `Welcome back, ${username}!`;
}
console.log(loginUserMessage2());
