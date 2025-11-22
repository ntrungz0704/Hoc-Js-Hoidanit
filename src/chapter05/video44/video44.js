// #31 lặp object for in | for of

console.log("video 44");

const sv1 = {
  name: "nguyễn",
  score: 3.6,
};

const sv2 = {
  name: "phạm",
  score: 6.6,
};

const sv3 = {
  name: "thành",
  score: 7.0,
};

const sv4 = {
  name: "trung",
  score: 9.9,
};

const sinhVien = [sv1, sv2, sv3, sv4];
console.log("check sinhVien", sinhVien);

// loop foreach
// sinhVien.forEach((item, index) => {
//   console.log("index = ", index, "name = ", item.name);
// });

const person = {
  email: "ntrungz07@gmai.com",
  age: 19,
  address: "hcm",
};

// loop for in lấy key trong object
// for (let key in person) {
//   console.log("key = ", key, person[key]);
// }

// loop for of lấy value trong object
// for (let value of Object.values(person)) {
//   console.log("value = ", value);
// }

// trả ra mảng [key, value]
for (let [key, value] of Object.entries(person)) {
  console.log("key = ", key, "value = ", value);
}
