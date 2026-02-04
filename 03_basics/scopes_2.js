// function one cannot access variable age declared in function two but function two can access variable username declared in function one (like chotay, baray se icecream mang skty hain pr baray, chotay sy icecream nhi mang skty)
function one() {
  const username = "Hassan";

  function two() {
    const age = 21;
    console.log(username);
  }
//   console.log(age);

  two();
}
// one();

if (true) {
    const username = 'hussain'
    if (username === 'hussain') {
        const age = 22
        // console.log(username + ' ' + age);
    }
    // console.log(age);
}
// console.log(username);


// interesting concept
// function declaration
// console.log(addOne(5));  //  ok
function addOne(num) {
    return num + 1;
}
addOne(5) 

// function expression
// addTwo(5)  //  error
const addTwo = function(num) {
    return num + 2;
}
addTwo(5)
