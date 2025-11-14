// #12 bài tập lab 01

const fullName = "Nguyễn Phạm Thành Trung";
const birthYear = 2006;
let isStudent = true;

// tính tuổi hiện tại
const today = new Date();
const currentYear = today.getFullYear();

const calculateAge = currentYear - birthYear;

// console.log(currentYear - birthYear);
console.log(`Năm nay tôi ${new Date().getFullYear() - birthYear} tuổi`);

console.log("\n");
console.log(`
Full name: ${fullName},
Age: ${calculateAge},
Is student: ${isStudent}
  `);
