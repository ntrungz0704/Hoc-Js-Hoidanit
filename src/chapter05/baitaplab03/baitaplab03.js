// #32 bài tập lab03
console.log("bài tập lab03");

// const products = [
//   {
//     id: 1,
//     name: "laptop",
//     price: 100,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "phone",
//     price: 50,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "tablet",
//     price: 70,
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "mouse",
//     price: 20,
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "pc",
//     price: 150,
//     inStock: true,
//   },
// ];

const pro1 = {
  name: "laptop",
  price: 100,
  inStock: true,
};

const pro2 = {
  name: "phone",
  price: 50,
  inStock: true,
};

const pro3 = {
  name: "tablet",
  price: 70,
  inStock: false,
};

const pro4 = {
  name: "mouse",
  price: 20,
  inStock: true,
};

const pro5 = {
  name: "pc",
  price: 150,
  inStock: false,
};

const products = [pro1, pro2, pro3, pro4, pro5];

// 1. In ra tên của sản phẩm đầu tiên.
console.log(products[0].name);

/*
const pro2 = {
  name: "phone",
  price: 50,
  inStock: true,
};
*/
// 2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
console.log("\n");
products[1].price = 150;
console.log(products[1].price);

const products2 = [
  {
    name: pro2.name,
    price: 1000,
    inStock: pro2.inStock,
  },
];
console.log(products2);

console.log("\n");
// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
products.push({
  name: "new product",
  price: 150,
  inStock: true,
});
console.log("Before products", products);

console.log("\n");
// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();
console.log("After products", products);

console.log("\n");
// 5. Dùng forEach( ) để in ra tất cả tên sản phẩm.
products.forEach((item, index) => {
  console.log("index = ", index, "item = ", item);
});

console.log("\n");
// 6. Dùng map( ) để tạo mảng mới chỉ chúa giá sản phẩm.
const prices = products.map((value, index) => {
  return value.price;
});
console.log(prices);

console.log("\n");
// 7. Dùng filter( ) để lý cac san pham con hang (inStock = true).
const inStockProduct = products.filter((value, index) => {
  if (value.inStock) {
    return true;
  }
});
console.log(inStockProduct);

console.log("\n");
// 8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên console.log(inStock);
for (const key in pro1) {
  console.log(key, pro1[key]);
}
