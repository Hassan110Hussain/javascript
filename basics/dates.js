// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 4);
// console.log(myCreatedDate.toDateString());

let myNewDate = new Date(2025, 0, 4, 7, 30, 20);
// console.log(myNewDate.toLocaleString());

let myNextDate = new Date("1-22-2023");
// console.log(myNextDate.toLocaleString());
// console.log(myNextDate.getTime());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

let newDateStamp = new Date();
console.log(newDateStamp);
console.log(newDateStamp.getMonth() - 1);
console.log(newDateStamp.getDay());

// `the day is ${newDateStamp.getDay()} and the time is ${newDateStamp.getHours()}:${newDateStamp.getMinutes()}`;

newDateStamp.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
});
