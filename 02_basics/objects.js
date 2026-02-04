// singleton - when we make an object through literal singleton wont be made but when we make an object through constructor singleton will be made

// object literal
const mySym2 = Symbol('key1');

const obj1 = {
    name: 'Hassan',
    'full-name': 'Hassan Merchant',
    age: 23,
    mySym: Symbol('key1'),  //  symbol key
    [mySym2]: 'key1',  //  symbol key through variable
    location: 'Karachi',
    email: 'hassan@example.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Friday'],

};

// console.log(obj1.age);  //  right way but cant access the key having apostrophes
// console.log(obj1['age']);
// console.log(obj1['full-name']);  //  right way to access key having apostrophes
// console.log(typeof(obj1['mySym']));  
// console.log(typeof(obj1['mySym2']));  

obj1.age = 21;  //  updating age
// Object.freeze(obj1);  //  now object cant be changed
obj1.age = 22; //  wont work
// console.log(obj1);

obj1.greeting = function(){
    console.log('How r u?');
}

obj1.greeting2 = function(){
    console.log(`How r u?, ${this.name}`);
} 

console.log(obj1.greeting());
console.log(obj1.greeting2());
