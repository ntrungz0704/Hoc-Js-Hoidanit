// #10 câu lệnh trong js

console.log("video 21"); // dùng để in ra màn hình

console.log("info"); // hiển thị info
console.error("error"); // hiển thị lỗi (cần fix)
console.warn("warn"); // hiển thị cảnh báo

let name = "hoidanit";
let age = 20;
// Không nên: cộng chuỗi dễ sai
console.log("Name: " + name + ", Age: " + age);
console.log("Name", name, "age", age); // có thể dùng dấu , để nối chuỗi

console.log("%cCảnh báo!", "color: red; font-weight: bold; font-size: 12px;");
console.log("%cTrung là VUA", "color: red; font-weight: 900; font-size: 36px");
