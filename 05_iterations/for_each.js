const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// for each

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myCricket = [
  { name: "Imran Khan", country: "Pakistan" },
  { name: "Shahid Afridi", country: "Pakistan" },
  { name: "Mohammad Amir", country: "Pakistan" },
  { name: "Babar Azam", country: "Pakistan" },
];

myCricket.forEach((item) => {
  console.log(item.name, " - ", item.country);
});
