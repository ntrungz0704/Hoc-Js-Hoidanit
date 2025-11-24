// #41 local storage lưu data

console.log("video 55");

const submitBtnElement = document.querySelector("#submitBtn");
const inputElement = document.querySelector("#name");
const prevElement = document.querySelector("#prev");

const prevName = localStorage.getItem("ntrungz07");
if (prevName) {
  prevElement.innerHTML = `
    <b>${prevName}</b>
  `;
}

submitBtnElement.addEventListener("click", () => {
  localStorage.setItem("ntrungz07", inputElement.value);
  document.querySelector("#message").innerHTML = `
    <b>${inputElement.value}</b>
  `;
});
