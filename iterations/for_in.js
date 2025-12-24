const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  cpp: "C++",
  java: "Java",
};

// for in

for (const key in myObject) {
  // console.log(`${key}: ${myObject[key]}`);
}

const myArray = ["virat", "babar", "stokes", "de Villiers", "fakhar"];

for (const i in myArray) {
  // console.log(`${i}: ${myArray[i]}`);
}

const map = new Map();
map.set("name", "Hassan");
map.set("name2", "Haider");
map.set("name3", "Hussain");

// for (const [key, value] in map) {
//     console.log(`${key}: ${value}`);
// }  //  maps isnt iterable like this
