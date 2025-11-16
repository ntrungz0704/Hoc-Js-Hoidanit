// #16 vòng lặp for, while, do... while

console.log("video 28");

// for (khởi tạo biến; điều kiện ; cập nhật) {
//   thực thi câu lệnh
// }

for (let i = 0; i <= 5; i++) {
  console.log("i = " + i);
}

console.log("\n");

// while (conditional) {
//   thực thi câu lệnh
//}
let score = 10;

while (score > 5) {
  console.log("check score: " + score);
  score--;
}

console.log("\n");

// do {
//   thực thi câu lệnh
// } while (conditional);
// chạy tối thiểu 1 lần dù điều kiện đúng hay sai đó là do while
let score1 = 10;
do {
  console.log("check score: " + score1);
  score1--;
} while (score1 > 50);
