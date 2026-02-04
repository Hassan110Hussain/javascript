const user = {
  name: "Virat",
  price: 1000,

  brandName: function () {
    console.log(`${this.name} , welcome to my world`);
    // console.log(this);
  },
};

// user.brandName();
// user.name = 'Kohli';
// user.brandName();

// In browser this keyword points to window object
// In nodejs this keyword points to empty object {}
console.log(this);

// cant declare this in function like below
// function coffee() {
//     let name = "Latte";
//   console.log("Enjoy your coffee", this.name);
// }
// coffee();

// const coffee = function() {
//     let name = "Latte";
//   console.log("Enjoy your coffee", this.name);
// }
// coffee();

const coffee = () => {
  let name = "Latte";
  console.log("Enjoy your coffee", this.name);
};
// coffee();

// explicit return
// const plusTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
// const plusTwo = (num1, num2) => num1 + num2;

const plusTwo = (num1, num2) => num1 + num2;
console.log(plusTwo(3, 4));

const zeeraPlus = (num1, num2) => ({ name: "hassan" });
console.log(zeeraPlus());
