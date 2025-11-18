//#25 truy cập, chỉnh sửa, thêm và xỏa phẩn tử trong mảng

console.log("video 38");

// lấy được giá trị của từng phân từ trong array
// bắt đầu index 0

let colors = ["red", "green", "blue"];

const names = ["trung", "ntrungz07", "cún", "pong_dep_gai"];
//arr[index: value];
console.log("0 = " + name[0]);

// cách chỉnh sửa value bên trong mảng
names[0] = "hoidanit";

// 3 thêm, xóa và có thể thêm xóa nhiều phần tử 1 lúc
// thêm cuối mảng
names.push("thêm cuối mảng");

// thêm đầu mảng
names.unshift("thêm đầu mảng");

// xóa cuối mảng
names.pop(); // đã xóa giá trị cuối mảng

// xóa đầu mảng
names.shift(); // đã xóa giá trị đầu mảng
console.log(names);
