// while loops
let i = 0;

while (i < 10) {
  // console.log(`${i}`);
  i = i + 2;
}

let myArray = ["a", "b", "c", "d"];

let j = 0;
while (j < myArray.length) {
  // console.log(`${myArray[j]}`);
  j++;
}

// do while loops
let score = 1;
// let score = 11 // will run once and then stops as condition is in end

do {
  console.log(`score= ${score}`);
  score++;
} while (score < 5);
