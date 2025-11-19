// #28 lọc phần tử mảng với filter()
// cũng sẽ tạo ra mảng mới ko ảnh hưởng đến mảng gốc
console.log("video 41");

const ages = [10, 20, 30, 25, 12, 19];

const agesX2 = ages.map((item, index) => {
  return item * 2;
});

console.log(ages);
console.log(agesX2);

// function filter loại bỏ bớt phần tử trong

const agesGreatThan18 = ages.filter((item, index) => {
  return item > 18; // true = lớt bỏ, false = lớt bớt
});

console.log(agesGreatThan18);
