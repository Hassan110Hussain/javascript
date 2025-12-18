const marvel_heroes = ['thor', 'ironman', 'spiderman'];
const dc_heroes = ['batman', 'superman', 'flash'];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);  //  u can do like this but not a good practice

const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);  //  works fine but not best

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);  //  best way in merging arrays cause we can add more values also

const deep_array = [1, 2, [3, 4, 5], 6, [7, [8, 9], 10]];
const shallow_array = deep_array.flat(Infinity);  //  infinity means all array will be flattened but usually we give exact numbers
// console.log(shallow_array);
 
console.log(Array.isArray('Hassan'))
console.log(Array.from('Hassan'))
console.log(Array.from({name: 'Hassan', age: 23}))  //  have to tell that make an array from the object keys


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
