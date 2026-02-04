{} //  scope
// global scope ky ander jo aap values likhty ho woh block scope mai available hoti hain magr jo block scope ky ander values hoti hain woh global scope mai available nhi honi chahiye

// var c = 300  //  never use var
let a = 100;

if (true) {
  let a = 10;
  const b = 20;
  // var c = 30
  console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);
