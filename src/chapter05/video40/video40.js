// #27 biến đổi mảng với map()

console.log("video 40");

// map() sử dụng nhieu nhat trong js và ko làm thay đổi arr[] gốc và tạo ra arr[] mới

const scores = [10, 8, 3, 7, 5];
// foreach : read data
// scores.forEach((value, index) => {
//   console.log(index, value);
// });

// dùng map sẽ thường để tạo mới + modify
const newScores = scores.map((value, index) => {
  return value * 2;
});

console.log(newScores);
