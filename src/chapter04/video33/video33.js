// #21 phạm vi biến
console.log("video 33");

/*
  3 level
  global scope
  function scope
  block scope
*/

// global scope - có thể truy cập được bất kì vị trí nào - hạn chế dùng global

let globalScope = "tôi là biến toàn cục";
function testGlobal() {
  console.log(globalScope);
}

testGlobal();

// function scope - chỉ dùng được bên trong function đó thôi
function functionScope() {
  let name = "tôi là biến cục bộ function";
  console.log(name);
}

functionScope();
console.log(name); // lỗi ko dùng được vì ko xác định biến này

// block scope - dùng trong block nây {}
function functionScope() {
  let name = "tôi là biến cục bộ function";
  console.log(name);

  if (true) {
    let x = 10;
    let y = 20;
    console.log(x + y);
  }
}

console.log(x);

{
  let x = 10;
  let y = 20;
  console.log(x + y);
}

console.log(y);
