const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);

const coffee  = {
    name: 'latte',
    price: '450',
    isAvailable: true
}

console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

Object.defineProperty(coffee, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));