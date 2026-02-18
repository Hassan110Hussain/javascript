const user = {
  name: "Hassan",
  age: 23,
  email: "hassan@example.com",
  city: "Karachi",
  country: "Pakistan",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  login: function () {
    // console.log(`name: ${this.name}`);
    console.log(this);
  },
  logout: function () {
    console.log("User logged out");
  },
};
// console.log(user.name)
// console.log(user.login());
// console.log(this);

//  Constructor function  //
function User(name, age, email, city, country, skills) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.city = city;
  this.country = country;
  this.skills = skills;

  this.greeting = function () {
    console.log(`welcome ${this.name}`);
  };

  return this;
}

const user1 = new User("Hassan", 23, true);
const user2 = new User("Hussain", 24, "hussain@example.com", "Lahore", false);
console.log(user1.constructor);
// console.log(user2);
