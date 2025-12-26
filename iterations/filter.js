// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// forEach never return
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter( (num) => {
//     return num > 4
// } )

const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: "1st",
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "2nd",
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: "1st",
  },
  {
    title: "You Don't Know JS",
    genre: "JavaScript",
    publish: 2015,
    edition: "2nd",
  },
  {
    title: "Rich Dad Poor Dad",
    genre: "Finance",
    publish: 1997,
    edition: "1st",
  },
];

// const userBooks = books.filter( (bk) => bk.genre === 'Fiction' )

const userBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === 'JavaScript'
});
console.log(userBooks);
