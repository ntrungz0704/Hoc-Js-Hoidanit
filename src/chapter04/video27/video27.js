// #15 switch case

console.log("video 27");

// score giỏi, khá, trung bình, yếu
const score = 4;
console.log(`Điểm của bạn là: ${score}`);
switch (true) {
  case score >= 8 && score <= 10:
    console.log("giỏi");
    break;
  case score >= 7 && score < 8:
    console.log("khá");
    break;
  case score >= 6 && score < 7:
    console.log("trung bình");
    break;
  case score < 6 && score >= 0:
    console.log("yếu");
    break;
  default:
    console.log("không biết");
    break;
}

// có thể dùng toán tử đk trong case mà nhưng mà bạn phải so sánh vs true
