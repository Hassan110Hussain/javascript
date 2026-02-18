// let myName = 'Hassan       '
// let myName2 = 'Cricket     '

// console.log(myName.trueLength);

let myHeroes = ["thor", "ironman", "superman"];

let heroPower = {
  thor: "hammer",
  ironman: "iron-body",
  superman: "super-natural",

  getThorPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
};

Object.prototype.hassan = function () {
  console.log(`hassan is in all objects`);
};

Array.prototype.heyHassan = function () {
  console.log(`Hassan says hello`);
};

// heroPower.hassan();
// myHeroes.hassan()
// heroPower.heyHassan();
myHeroes.heyHassan();

//  inheritance  //

const User = {
  name: "coffee",
  email: "hassan@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUser = "CricketnCoffee      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUser.trueLength();
"hassan".trueLength();
"worldcup   ".trueLength();
