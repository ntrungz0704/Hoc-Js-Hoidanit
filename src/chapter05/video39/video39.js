// #26 duyệt mảng với vòng lặp và forEach

console.log("video 39");

const myClass = ["trung", "pong", "hoidanit"];
console.log(myClass, myClass.length);

// i = 0
for (let i = 0; i < myClass.length; i++) {
  console.log("i =", i, myClass[i]);
}
console.log("\n");
// i = 1 nhớ trong mảng i - 1
for (let i = 1; i <= myClass.length; i++) {
  console.log("i =", i, myClass[i - 1]);
}
console.log("\n");
// for-each
myClass.forEach(function (value, index) {
  console.log("value =", value, "index = ", index);
});
console.log("\n");
// arrow function
myClass.forEach((value, index) => {
  console.log("value =", value, "index = ", index);
});
