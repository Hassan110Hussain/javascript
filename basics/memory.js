// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Codevolution"; // stored in stack

let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "Codevolution - Updated";

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne = {
  email: "hassan@gmail.com",
  upi: "user@upi",
}; // stored in heap

let userTwo = userOne;

userTwo.email = "merchant@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// whenever u take some value in stack it gives u a copy of it
// whenever u take some value in heap it gives u the reference of it
