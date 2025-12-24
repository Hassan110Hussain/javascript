//  if
const temp = 27;

// if (temp < 20) {
//   console.log("century drought");
// } else {
//   console.log("century done");
// }

// <, >, <=, >=, ==, !=, ===, !==
if (2 !== "2") {
  // console.log('executed');
}

const score = 200;

if (score > 100) {
  const power = "fly";
  // console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`);

const balance = 1000;

// if (balance > 500) console.log('test'), console.log('test2');  //  not professional, use scope {}

// if (balance < 500) {
//   console.log('yes its a two');
// } else if (balance < 750) {
//   console.log('yes its a two');
// } else if (balance < 1000) {
//   console.log('yes its a two');
// } else {
//   console.log('ye agya range mai');
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInGoogle = false;
const LoggedInEmail = false;

// && all the statements must be true, if only one statment is false then it wont go in if condition
if (userLoggedIn && debitCard && LoggedInGoogle) {
  console.log("allow to buy course");
}

// || used for checking multiple conditions, only one have to be true 
if (LoggedInGoogle || LoggedInEmail || debitCard) {
  console.log("login allowed");
}
