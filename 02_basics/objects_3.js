// destructuring objects

const course = {
  courseName: "JavaScript Basics",
  courseLessons: 20,
  isPublished: true,
  courseDetails: {},
  coursePrice: 199.99,
};

// console.log(course.courseLessons);

const { courseName: name } = course;
// console.log(courseName);
console.log(name);

// JSON format, API data in Object format
// {
//     'name': 'Hassan',
//     'full-name': 'Hassan Merchant',
//     'age': 23,
//     'location': 'Karachi',
// }

// API data in Array of Objects
// [
//     {},
//     {},
//     {}
// ]