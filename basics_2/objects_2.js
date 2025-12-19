// const tinderUser = new Object();  //  singleton object through constructor
const tinderUser = {}; //  non-singleton object through literal

tinderUser.id = "123abc";
tinderUser.name = "Hassan";
tinderUser.age = 23;
tinderUser.isLoggedIn = false;
tinderUser.lastLoginDays = ["Monday", "Friday"];

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));  //  true


const regularUser = {
  id: "987xyz",
  fullname: {
    userfullname: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

// console.log(regularUser.fullname?.userfullname?.firstName);  //  ? = optional chaining

const obj1 = {1: "a", 2: "b"};  
const obj2 = {3: "a", 4: "b"};  
const obj3 = {5: "a", 6: "b"};  

// const newObj = {obj1, obj2};
// const newObj = Object.assign(obj1, obj2);  //  (target, source)

const newObj = {...obj1, ...obj2};  //  spread operator
// console.log(newObj);

const users = [
    {
        id: 1,
        name: 'Hassan',
    },
    {
        id: 2,
        name: 'Hussain',
    },
    {
        id: 3,
        name: 'Merchant',
    },
]

console.log(users[1]?.name);
