// #22 bài tập lab 02

console.log("bài tập lab 02");

// output
const toan = 9;
const van = 8;
const anh = 7;
const a = 9;
const b = 8;
const c = 7;

// bài 1
console.log(<h1>"Basic Function"</h1>);
function calculateAverage(toan, van, anh) {
  if (
    typeof toan !== "number" ||
    typeof van !== "number" ||
    typeof anh !== "number"
  ) {
    console.log("Bạn vui lòng nhập đúng giá trị");
  } else {
    return parseFloat(toan + van + anh) / 3;
  }
}

let result = calculateAverage(toan, van, anh);

// bài 2
function rating(result) {
  if (typeof result !== "number") {
    console.log("Vui lòng nhập điểm hợp lệ");
  } else {
    if (result >= 9) {
      return "Xuất sắc";
    } else if (result >= 8 && result < 9) {
      return "Giỏi";
    } else if (result >= 6.5 && result < 8) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  }
}

console.log(
  `Điểm trung bình : ${result}
Xếp loại : ${rating(result)}
  `
);

// Cách viết arrow function
const tinhTrungBinh = (a, b, c) => {
  return (a + b + c) / 3;
};

const xepLoai = (diemTb) => {
  if (diemTb >= 9) {
    return "Xuất sắc";
  } else if (diemTb >= 8 && diemTb < 9) {
    return "Giỏi";
  } else if (diemTb >= 6.5 && diemTb < 8) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};

console.log("\nArrow function");

console.log(
  `Điểm trung bình: ${tinhTrungBinh(a, b, c)}
Xếp loại: ${xepLoai(tinhTrungBinh(a, b, c))}`
);
