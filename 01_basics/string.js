const name = "hassan";
const count = 50;

// console.log(name + count + " value"); outdated

console.log(`Hello my name is ${name} and my count is ${count}`);

const gameName = new String("hassan-hussain-merchant");

console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newName = gameName.substring(0, 4);
console.log(newName);

const scoreName = gameName.slice(-7, 6);
console.log(scoreName);

const newString = '   Hassan   '
console.log(newString.trim());

const url = "https://hassan.com/hassan%20merchant"
console.log(url.replace('%20', '-'))
console.log(url.includes('hassan'))

console.log(gameName.split('-'));

