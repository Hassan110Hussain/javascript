// for of

// ['', '', '']
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//   console.log(i);
// }

const greetings = "hello boy";

for (const greet of greetings) {
  // console.log(greet);
}

// maps

const map = new Map();
map.set("name", "Hassan");
map.set("name2", "Haider");
map.set("name3", "Hussain");

// console.log(map);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

const myObject = {
  name: "Hassan",
  age: 25,
  city: "Karachi",
};

// for (const [key, value] of myObject) {
//   console.log(`${key}: ${value}`);
// }  //  objects isnt iterable like this
