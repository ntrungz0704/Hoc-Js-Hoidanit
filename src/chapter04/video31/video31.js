// #19 arrow function nên sử dụng cách viết này phổ biến

console.log("video 31");

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 10));

(function () {
  console.log("hello");
})();
