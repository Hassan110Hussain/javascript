// Immediately Invoked Function Expression (IIFE)

// global scope se pollution ko hatanay ky liye hum iife use krty hain
(function chai() {
  // this is named iife
  console.log(`DB connected`);
})();
// ; is important after iife function as it doesnt when its ending.

(() => {
  console.log(`DB connected 2`);
})();

((name) => {
  console.log(`DB connected 2 ${name}`);
})("hassan");
