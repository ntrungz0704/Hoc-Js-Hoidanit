// #38 thay đổi nội dung của element HTML

console.log("video 52");

const myBtnElement = document.querySelector("#myBtn");
const backBtnElement = document.querySelector("#backBtn");
const myTextElement = document.querySelector("#myText");

myBtnElement.addEventListener("click", () => {
  myTextElement.innerHTML = "thay đổi nội dung";
});

backBtnElement.addEventListener("click", () => {
  myTextElement.innerHTML = "trở lại nội dung ban đầu";
});
