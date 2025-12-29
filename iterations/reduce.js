// reduce
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`${acc} & ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce((acc, curval) => {
  return acc + curval;
}, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 1999,
  },
  {
    itemName: "mobile dev course",
    price: 4999,
  },
  {
    itemName: "data course",
    price: 3999,
  },
];

const shoppingList = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(shoppingList);
