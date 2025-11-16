// #20 keyword return
// dùng return; để thoát ra khỏi function
console.log("video 32");

const sum = (a, b, c) => {
  console.log("run before");
  return a + b + c;
  console.log("run after");
};

console.log(sum(1, 2, 3));

(() => {
  console.log("hello");
})();
