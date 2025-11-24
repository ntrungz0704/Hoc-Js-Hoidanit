// #39 thay đổi css = js

console.log("video 53");

const myBtnElement = document.querySelector("#myBtn");
const backMyBtnElement = document.querySelector("#backMyBtn");
const myTextElement = document.querySelector("#myText"); // muốn đổi màu

// console.log(myBtnElement, backMyBtnElement, myTextElement);

myBtnElement.addEventListener("click", () => {
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "yellow";
  myTextElement.classList.add("myClass"); // sẽ thêm được class thẻ h1 khi ấn button
});

backMyBtnElement.addEventListener("click", () => {
  myTextElement.style.color = "blue";
  myTextElement.style.backgroundColor = "red";
  myTextElement.classList.remove("myClass"); // sẽ xóa được class thẻ h1 khi ấn button
});
