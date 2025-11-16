// #17 break, continue

console.log("video 29");

for (let i = 0; i < 10; i++) {
  console.log("i = " + i);
  if (i === 5) {
    break;
  }
}

console.log("\n");

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("i = " + i);
}
