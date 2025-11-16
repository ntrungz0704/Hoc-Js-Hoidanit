// #18 function là gì
console.log("video 30");

function greeting() {
  console.log("Hello javascript");
}

greeting();

// sum a + b
function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    return "a & b must be number";
  }
}

console.log(sum("a", 10));
