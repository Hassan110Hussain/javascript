const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);

const coffee = {
  name: "latte",
  price: "450",
  isAvailable: true,

  orderCoffee: function () {
    console.log("coffee ka off scene hai");
  },
};

// console.log(coffee);
// console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

Object.defineProperty(coffee, 'name', {
    // writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
